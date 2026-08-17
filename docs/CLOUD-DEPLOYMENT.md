# AWS／阿里云部署与未来域名方案

本文说明如何把经过验证的 MouSuanAI 静态发布目录部署到 AWS 或阿里云，并最终使用统一正式地址。所有域名均为规划值；只有 DNS、证书和备案完成后才能视为正式上线。

## 1. URL 规划

| 环境 | 规划 URL | 用途 | 访问策略 |
| --- | --- | --- | --- |
| Production | `https://mousuan.net` | 唯一正式主站 | 公开、HTTPS、可被索引 |
| WWW | `https://www.mousuan.net` | 兼容入口 | 301 跳转至 `https://mousuan.net` |
| Staging | `https://staging.mousuan.net` | 甲方与团队上线前验收 | 身份验证或 IP 白名单；禁止索引 |
| Current review | `http://54.179.195.54:8888/` | 现有海外审阅与临时回滚 | 不作为正式外链 |

网站正文、Open Graph、邮件和正式材料统一使用已上线的 `https://mousuan.net`。

## 2. 共同发布基线

AWS 与阿里云必须使用同一 Git tag 生成的静态产物：

```bash
npm ci
npm run release:check
```

公开文件位于 `.release/site`。发布前至少确认：

```bash
test -f .release/site/index.html
test -f .release/site/team/index.html
test -f .release/site/theorems/index.html
```

发布包不得包含 `.env`、token、私钥、`internal-audit`、`audit-redesign` 或手稿页图片。云平台凭据只存放在平台 Secrets、IAM／RAM 角色或管理员凭据库中。

## 3. 推荐架构选择

| 场景 | AWS | 阿里云 | 推荐 |
| --- | --- | --- | --- |
| 全球／海外正式站 | S3 + CloudFront + ACM + Route 53 | OSS + 全球 CDN | AWS 路径优先 |
| 中国大陆正式站 | 中国区资源需要单独合规评估 | 中国大陆 OSS／ECS + CDN + ICP | 阿里云路径优先 |
| 延续当前服务器方式 | EC2 + Caddy | ECS + Caddy | 仅在需要服务器控制时采用 |

本站已经输出完整静态 HTML，因此对象存储加 CDN 是默认方案；没有动态后端时不必长期维护 Node.js 应用服务器。

## 4. AWS：S3 + CloudFront

### 4.1 资源

1. 建立专用 S3 bucket，例如 `<mousuan-production-bucket>`，开启版本控制并保持 Block Public Access。
2. 建立 CloudFront distribution，以 S3 REST endpoint 为 origin，并使用 Origin Access Control（OAC），避免用户绕过 CDN 直接访问 bucket。
3. 默认根对象设为 `index.html`。
4. 增加 CloudFront Function（viewer request），将目录 URL 改写到对应的 `index.html`：

```javascript
function handler(event) {
  var request = event.request;
  if (request.uri.endsWith("/")) request.uri += "index.html";
  else if (!request.uri.split("/").pop().includes(".")) request.uri += "/index.html";
  return request;
}
```

没有这一步，`/team/`、`/theorems/` 等多页面目录在私有 S3 REST origin 上可能无法找到 `index.html`。

### 4.2 域名与证书

1. 在 AWS Certificate Manager 申请覆盖 `mousuan.net`、`www.mousuan.net` 和 `staging.mousuan.net` 的证书；CloudFront 使用的 ACM 证书放在 `us-east-1`。
2. 将 `mousuan.net` 和需要的子域加入 CloudFront alternate domain names。
3. 在 Route 53 建立指向 CloudFront 的 A／AAAA Alias 记录；根域可以使用 Alias，不需要普通 CNAME。
4. 在边缘函数或独立 distribution 中把 `www` 永久跳转到根域。
5. Staging 使用单独 distribution，并通过 WAF/IP allowlist 或身份验证限制访问。

### 4.3 上传与缓存刷新

以受限 IAM role 执行：

```bash
aws s3 sync .release/site/ s3://<mousuan-production-bucket>/ --delete
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths '/*'
```

S3 bucket versioning、GitHub Release artifact 和上一 Git tag 共同承担回滚保障。`--delete` 只允许对已确认的站点专用 bucket 根目录执行。

## 5. 阿里云：OSS + CDN

### 5.1 资源

1. 建立站点专用 OSS bucket，开启版本控制。
2. 配置静态网站首页为 `index.html`，错误页保持真实 404；本站每个公开路由已有自己的目录 `index.html`。
3. bucket 只存放公开站点文件，不混入内部资料。若使用 OSS 静态网站公开读模式，任何对象都可被下载。
4. 建立 Alibaba Cloud CDN 加速域名，以 OSS 为 origin，开启 HTTPS 和 HTTP 到 HTTPS 强制跳转。
5. 为 staging 使用单独 bucket／CDN 域名，并启用访问控制和 `X-Robots-Tag: noindex`。

### 5.2 域名、HTTPS 与 ICP

1. CDN 控制台添加 `mousuan.net` 或 `www.mousuan.net`，按控制台返回值配置 CNAME／域名验证。
2. 上传或申请覆盖正式域名的证书，开启 HTTPS、HTTP/2 和强制 HTTPS。
3. `www` 通过 CDN 边缘规则或独立入口 301 跳转至根域。
4. 如果 OSS、ECS 或 CDN 加速区域包含中国大陆，正式开放前必须完成适用的 ICP 备案；备案主体、域名实名和接入主体应一致。

### 5.3 上传与缓存刷新

使用 ossutil 2.0／Alibaba Cloud CLI 的当前语法：

```bash
aliyun ossutil sync .release/site/ oss://<mousuan-production-bucket>/ --delete
```

RAM role 至少需要列出、上传对象的权限；使用 `--delete` 时还需要删除对象权限。上传后在 CDN 控制台刷新主 HTML 路径或执行对应的 CDN 刷新任务。

## 6. AWS EC2／阿里云 ECS 备用方案

需要完全控制服务器或暂不使用对象存储时，AWS EC2 和阿里云 ECS 可采用同一不可变目录结构：

```text
/opt/mousuan-site/
  releases/
    v0.9.0/site/
    v0.9.1/site/
  current -> releases/v0.9.1/site
```

Caddy 示例：

```caddy
www.mousuan.net {
    redir https://mousuan.net{uri} permanent
}

mousuan.net {
    encode zstd gzip
    root * /opt/mousuan-site/current
    try_files {path} {path}/index.html
    file_server
}
```

只开放公网 `80/443`；SSH 仅允许管理员固定 IP、VPN 或堡垒机。应用调试端口和当前 `8888` 审阅端口不作为正式入口。

## 7. 上线切换

1. 冻结并标记发布版本，记录 tag、commit SHA、artifact checksum 和回滚版本。
2. 将 DNS TTL 提前降低到 300 秒左右。
3. 先部署 staging，完成桌面、Android Chrome、iOS Safari、公式、搜索、图片和锚点测试。
4. 部署 production origin，但暂不切换公开 DNS。
5. 通过 CloudFront／CDN 临时域名或本地 hosts 验证 production。
6. 切换 `mousuan.net` DNS，确认 HTTPS、根域、`www` 跳转和所有关键路由。
7. 稳定观察后再提高 TTL；现有审阅服务器至少保留一个发布周期。

## 8. 回滚

### 对象存储

1. 从上一 Git tag 重新生成或取回已校验 artifact。
2. 同步上一版本到生产 bucket。
3. 刷新 CloudFront／CDN 缓存。
4. 验证首页、团队页和定理索引后记录事故与恢复时间。

### EC2／ECS

1. 将 `current` 符号链接切回上一不可变 release。
2. 重新加载 Caddy；静态站点不需要重启 Node.js。
3. 不删除故障版本，保留用于调查。

## 9. 官方参考

- AWS：[CloudFront 使用 S3 与 OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.SimpleDistribution.html)
- AWS：[Route 53 将根域 Alias 到 CloudFront](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html)
- AWS：[S3 静态网站托管](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- 阿里云：[OSS 静态网站托管](https://www.alibabacloud.com/help/en/oss/user-guide/hosting-static-websites)
- 阿里云：[OSS + CDN 加速与 HTTPS／ICP](https://www.alibabacloud.com/help/en/oss/user-guide/cdn-acceleration)
- 阿里云：[ossutil sync](https://www.alibabacloud.com/help/en/oss/developer-reference/synchronize-local-files-to-oss)
