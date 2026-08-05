# MouSuanAI 阿里云上线、`mousuan.ai` 与 ICP 备案运行手册

> 目标：把本仓库的网站作为中国大陆公开站点上线到 `https://mousuan.ai`，并保留现有海外站点作为上线前的审阅与回滚入口。

## 1. 范围、责任人与上线原则

本手册覆盖域名购买、阿里云中国大陆服务器、ICP 备案、HTTPS、部署、验收和回滚；不包含域名付款、实名认证、备案提交或任何以学校/团队名义作出的外部承诺。

| 角色 | 应由谁确认 | 关键责任 |
| --- | --- | --- |
| 域名注册人 / ICP 主办者 | 北航相关单位或获授权的团队主体 | 域名实名信息、备案主体、网站名称与联系人信息一致 |
| 阿里云账号管理员 | 团队指定管理员 | 账号实名认证、资源购买、账单及发票保管 |
| 技术管理员 | 网站维护人员 | 部署、DNS、TLS、备份、更新和回滚 |
| 经费负责人 | 课题负责人 | 云资源、域名及后续续费审批 |

**原则**

1. 不用个人临时身份作为长期域名注册人或 ICP 主办者；后续变更主体会增加手续。
2. 不把应用端口（如 `3000`、`8888`）暴露给公网。公网仅开放 `80` 与 `443`，由反向代理转发至本机服务。
3. 备案获批前，不以中国大陆服务器对外正式提供该网站；现有海外站点可继续用于内部审阅。
4. 域名、服务器和备案主体的名称、证件、联系人应真实且相互一致。

## 2. 推荐目标架构

```text
浏览器
  └─ https://mousuan.ai / https://www.mousuan.ai
       └─ 阿里云 DNS
            └─ 阿里云 ECS（中国大陆 + EIP）
                 └─ Caddy :443 / :80
                      └─ MouSuanAI 服务 127.0.0.1:3000
```

- **域名**：首选 `mousuan.ai`；`mou-suan.com` 可作为过渡或品牌保护域名，并 301 跳转至主域名。
- **服务器**：阿里云中国大陆地域的 ECS（例如华北地区），Ubuntu LTS，公网 EIP。
- **运行方式**：Node.js 22、`npm run build`、`npm run start`、systemd 常驻服务，以及 Caddy 提供 HTTPS 反向代理。
- **外部访问**：主域名和 `www` 使用 HTTPS；不再使用 IP 地址加端口作为公开链接。

## 3. 购买前确认清单

1. 确定最终主办者：建议为学校授权的单位或项目团队，而不是个人临时账户。
2. 准备主办者材料：单位证件/个人身份证件、联系人手机号、邮箱和地址；以阿里云备案页面实际要求为准。
3. 购买或确认阿里云中国大陆 ECS。只有中国大陆接入服务才可用于相应的 ICP 备案流程。
4. 在阿里云域名控制台搜索 `mousuan.ai`；可售后再付款。`.ai` 是否可售、年限和价格以购买页实时显示为准。
5. 如需财务报销，购买前确认阿里云账号抬头和经费主体，保存订单、合同、电子发票和付款记录。

阿里云要求域名注册时关联已核验的注册人信息模板；购买后域名状态显示为 `Normal` 才代表注册完成。详见[阿里云域名注册说明](https://www.alibabacloud.com/help/en/dws/user-guide/how-to-register-a-domain-name)。

## 4. 域名注册与 DNS

### 4.1 注册 `mousuan.ai`

1. 在阿里云/万网域名控制台搜索 `mousuan.ai`。
2. 使用与未来备案主办者一致的实名信息模板下单。
3. 完成付款后，核对注册人、管理员邮箱和域名锁定状态；开启两步验证并把续费提醒交给团队邮箱。
4. 不要在此阶段把主域名直接指向当前海外审阅服务器，避免后续切换时的内容与备案信息不一致。

### 4.2 备案获批、ECS 部署完成后添加 DNS

在阿里云 DNS 添加以下记录（将 `<EIP>` 替换为 ECS 的固定公网 EIP）：

```text
主机记录     记录类型    记录值
@            A          <EIP>
www          CNAME      @
```

可选：将 `mou-suan.com` 的根域与 `www` 也指向同一入口，并由 Caddy 301 跳转到 `https://mousuan.ai`。

## 5. ICP 备案流程

在中华人民共和国境内提供非经营性互联网信息服务，需要履行 ICP 备案手续；备案由网站接入服务商协助提交。经营性服务或新闻、出版、教育、医疗等特定内容，可能另有许可或前置审批要求。参见[工信部《非经营性互联网信息服务备案管理办法》](https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html)。

建议在阿里云的 ICP 备案入口按以下顺序办理：

1. 使用已购买的中国大陆 ECS 创建备案服务号/备案订单。
2. 选择“首次备案”或“新增网站”（根据主办者既有备案状态选择）。
3. 填写主办者、网站负责人、域名 `mousuan.ai`、网站名称和服务内容；内容应真实描述为“结构信息与谋算智能研究展示网站”。
4. 按页面要求完成身份核验、真实性核验、手机核验及可能的材料补正。
5. 等待阿里云初审和所在地通信管理局审核；期间不把网站作为中国大陆正式公开服务上线。
6. 获得备案号后，在网站首页底部居中展示备案号，并链接至 `https://beian.miit.gov.cn/`。工信部规则要求非经营性网站在开通时展示备案编号并提供查询链接。
7. 根据部署地公安机关和接入商的要求，完成后续网络安全相关登记；上线前由主办者确认适用要求。

> 备案以主办者所在地、接入服务器所在地和接入商要求为准。本手册不是法律意见；提交前应以阿里云备案专员和学校主管部门的最新要求为准。

## 6. 阿里云服务器初始化

### 6.1 资源与安全组

- 创建中国大陆 ECS 并绑定固定 EIP。
- 安全组：对公网开放 TCP `80`、`443`；TCP `22` 仅允许技术管理员的固定 IP 或通过堡垒机访问。
- 禁止公网开放应用内部端口 `3000`、`8888`。
- 启用自动快照/备份、监控告警和资源到期提醒。

### 6.2 安装运行环境

以下命令以 Ubuntu LTS 为例；技术管理员应先替换 `<GITHUB_OWNER>` 和 `<REPOSITORY>`。

```bash
sudo apt update
sudo apt install -y git curl caddy

# 安装 Node.js 22 LTS 后确认版本
node --version
npm --version

sudo mkdir -p /opt/mousuan-site
sudo chown "$USER":"$USER" /opt/mousuan-site
git clone https://github.com/<GITHUB_OWNER>/<REPOSITORY>.git /opt/mousuan-site
cd /opt/mousuan-site
npm ci
npm run build
```

创建 `/etc/systemd/system/mousuan-site.service`：

```ini
[Unit]
Description=MouSuanAI website
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/mousuan-site
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm run start -- --host 127.0.0.1 --port 3000
Restart=always
RestartSec=5
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```

使服务生效：

```bash
sudo chown -R www-data:www-data /opt/mousuan-site
sudo systemctl daemon-reload
sudo systemctl enable --now mousuan-site
sudo systemctl status mousuan-site
```

> 在首次正式部署前，技术管理员应在部署环境运行 `npm run build` 并实际检查首页、中文/英文切换、Wiki、书籍、研究方向和人物图片。不要把 `npm run dev` 用作生产服务。

## 7. HTTPS 与反向代理

在域名已解析到 ECS、备案允许开通且安全组已开放 `80/443` 后，配置 `/etc/caddy/Caddyfile`：

```caddy
mousuan.ai, www.mousuan.ai {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3000
}

mou-suan.com, www.mou-suan.com {
    redir https://mousuan.ai{uri} permanent
}
```

检查并重载：

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy 在有效域名、DNS 解析与 `80/443` 可达时可自动申请和续期 TLS 证书；不要手工复制私钥到仓库。

## 8. 上线验收

| 检查项 | 通过标准 |
| --- | --- |
| 域名 | `https://mousuan.ai` 正常打开，`www` 正常打开或跳转 |
| TLS | 浏览器无证书警告，HTTP 自动跳转 HTTPS |
| 路由 | 首页、四大板块、研究方向、关于我们、图书、术语 Wiki、应用页面均可访问 |
| 双语 | 首页和 Wiki 的中/EN 切换正确；英文状态返回英文首页 |
| 资源 | 人物头像、PDF、书籍页面、外部链接可打开 |
| 移动端 | Android Chrome、iOS Safari 不出现白屏、锁死滚动或 emoji 箭头 |
| 备案 | 已获备案时，页脚显示正确备案号和工信部链接 |
| 安全 | `3000`、`8888` 不可由公网直接访问；SSH 未向全网开放 |

建议记录上线时间、Git commit ID、ECS 实例 ID、EIP、域名注册到期日、证书状态和管理员联系方式。

## 9. 日常更新、备份与回滚

### 更新

```bash
cd /opt/mousuan-site
git pull --ff-only origin main
npm ci
npm run build
sudo systemctl restart mousuan-site
```

上线前在 GitHub PR 或本地预览中审阅页面和术语表；不要直接在生产服务器手工修改网站源文件。

### 备份

- 每次发布前保留上一版 Git commit ID。
- 对 ECS 启用系统盘快照；保存域名 DNS 记录导出。
- 只在受控位置保存 SSH 私钥、阿里云账号恢复信息和 GitHub 管理员权限；这些信息不得写入仓库。

### 回滚

1. 停止继续发布，记录问题。
2. 在服务器执行 `git checkout <previous-commit>`，重新 `npm ci && npm run build`，再重启 `mousuan-site`。
3. 如服务器不可用，暂时把 DNS A 记录切回已验证的海外审阅服务器，或显示维护页；此操作须由域名管理员批准。
4. 修复后重新走验收表，并记录原因和修复内容。

## 10. 上线前必须补齐的外部信息

- [ ] 备案主体（个人/单位）和网站负责人
- [ ] 阿里云账号管理员、付款方式及发票抬头
- [ ] `mousuan.ai` 是否可注册及注册年限
- [ ] 目标 ECS 地域、规格、EIP 和安全组责任人
- [ ] GitHub 仓库 URL 与技术管理员 SSH 公钥
- [ ] ICP 备案号（审批后）及是否需要额外内容许可/网络安全登记
- [ ] 公开联系方式、隐私政策和必要的网站底部信息
