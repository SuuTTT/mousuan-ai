# 部署与回滚说明

## 1. 当前环境

当前 `v0.9.0` 之前的版本部署在海外审阅服务器：

- 审阅地址：`http://54.179.195.54:8888/`
- SSH 别名：`research-os-4g`
- 服务：`structural-information-8888.service`
- 发布根目录：`/home/ubuntu/structural-information-ai-audit/releases`
- 当前版本链接：`/home/ubuntu/structural-information-ai-audit/current`

该地址是审阅入口，不是最终正式域名。正式上线应使用 HTTPS、80/443 端口和完成备案的域名。

## 2. 生成发布目录

在 Node.js 22 环境中执行：

```bash
npm ci
npm run release:check
```

通过后，公开静态站点位于 `.release/site`。发布前确认：

```bash
test -f .release/site/index.html
test -f .release/site/team/index.html
test -f .release/site/theorems/index.html
```

发布包中不得出现 `audit-redesign` 或内部手稿图片。

## 3. 不可变版本目录

每次部署创建新目录，不覆盖旧版本：

```text
releases/
  20260807-team-books-v37/site
  v0.9.0/site
current -> releases/v0.9.0/site
```

切换版本后重启服务，并确认服务状态与公开页面均正常。版本目录名称、Git tag 和 commit SHA 应记录在发布说明中。

## 4. 回滚

出现页面错误时：

1. 停止继续发布并记录问题页面。
2. 将 `current` 重新指向上一个已验证的 release 目录。
3. 重启 `structural-information-8888.service`。
4. 检查首页、问题页面、团队页、定理索引和移动端滚动。
5. 修复后重新执行完整发布检查，不在服务器目录中直接编辑 HTML。

回滚只切换不可变版本目录，不删除当前或历史版本。

## 5. Sites 与正式域名

`.openai/hosting.json` 保存 Sites 项目标识及逻辑资源绑定。Sites 发布和海外审阅服务器发布必须使用同一个已经验证的提交；未明确授权时，不将完整源码复制到新的公共托管位置。

中国大陆正式部署、HTTPS、DNS 和 ICP 流程见 `docs/aliyun-mousuan-ai-icp-runbook.zh-CN.md`。

AWS、阿里云静态托管／云服务器两种方案以及未来正式 URL 规划见 `docs/CLOUD-DEPLOYMENT.md`。
