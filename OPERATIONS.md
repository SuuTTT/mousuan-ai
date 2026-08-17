# Mousuan.net 生产运维手册

本文档只记录公开基础设施信息、操作流程和恢复命令。不得在仓库中写入密码、私钥、AccessKey、GitHub Token、备案数据码或联系人信息。

## 1. 生产环境

| 项目 | 当前值 |
| --- | --- |
| 正式地址 | `https://mousuan.net` |
| 兼容地址 | `https://www.mousuan.net`，永久跳转到根域 |
| ECS 地域 | `cn-beijing` |
| ECS 实例 | `i-2ze9t48edu0hpoxctrf3` |
| 公网地址 | `39.107.157.134` |
| Web 服务 | Nginx，开放 `80/443` |
| 发布目录 | `/opt/mousuan-site/releases/<release>/site` |
| 当前版本 | `/opt/mousuan-site/current` 符号链接 |
| TLS | Let's Encrypt / Certbot |

源码与静态发布产物以 Git commit 和 Git tag 为准；服务器目录不是源码编辑环境。

## 2. 发布前检查

每次正式发布必须完成以下步骤：

1. 工作区干净，目标 commit 已推送并通过测试。
2. 在阿里云 ECS 控制台为系统盘创建手动快照，名称使用 `predeploy-YYYYMMDD-<short-sha>`。
3. 等待快照状态变为“成功”，记录快照 ID。
4. 在本地生成静态发布目录：

   ```bash
   npm ci
   npm run release:check
   ```

5. 确认 `.release/site` 不含内部审阅材料、凭据或私钥。
6. 记录当前版本，确保可以回滚：

   ```bash
   ssh <production-host> 'readlink -f /opt/mousuan-site/current'
   ```

快照可能产生云盘快照费用。快照是服务器灾难恢复手段，Git tag 和不可变发布目录仍是网站版本回滚的首选。

## 3. 部署

发布名统一为 `<YYYYMMDD>-<description>-<short-sha>`，例如：

```text
20260817-machine-intelligence-title-4c3c78a
```

将经过验证的 `.release/site` 上传到新的不可变目录，不覆盖既有版本：

```bash
release='<release-name>'
ssh <production-host> "install -d -m 0755 /opt/mousuan-site/releases/$release/site"
rsync -az --delete .release/site/ "<production-host>:/opt/mousuan-site/releases/$release/site/"
```

在服务器上验证并切换：

```bash
test -f "/opt/mousuan-site/releases/$release/site/index.html"
test -f "/opt/mousuan-site/releases/$release/site/team/index.html"
test -f "/opt/mousuan-site/releases/$release/site/theorems/index.html"
ln -sfn "/opt/mousuan-site/releases/$release/site" /opt/mousuan-site/current
nginx -t
systemctl reload nginx
/usr/local/sbin/mousuan-prune-releases
```

公网验收：

```bash
curl -fsS https://mousuan.net/ >/dev/null
curl -fsS https://mousuan.net/team/ >/dev/null
curl -fsS https://mousuan.net/theorems/ >/dev/null
test "$(curl -sS -o /dev/null -w '%{http_code}' https://mousuan.net/audit/)" = 404
test "$(curl -sS -o /dev/null -w '%{http_code}' https://www.mousuan.net/)" = 301
```

服务器只保留最近 3 个发布目录。清理脚本始终保护 `current` 指向的版本；超过 3 个版本时才删除更旧目录。

## 4. 回滚

列出版本并确认当前目标：

```bash
readlink -f /opt/mousuan-site/current
ls -1dt /opt/mousuan-site/releases/*
```

切回上一已验证版本：

```bash
previous='/opt/mousuan-site/releases/<previous-release>/site'
test -f "$previous/index.html"
ln -sfn "$previous" /opt/mousuan-site/current
nginx -t
systemctl reload nginx
curl -fsS https://mousuan.net/ >/dev/null
```

如果服务器本身损坏，在 ECS 控制台使用最近的部署前快照恢复系统盘。快照回滚会覆盖快照之后的服务器变化，执行前应再次确认目标实例、磁盘和快照时间。

## 5. 服务与日志

```bash
systemctl status nginx --no-pager
nginx -t
journalctl -u nginx --since '1 hour ago' --no-pager
tail -n 100 /var/log/nginx/error.log
tail -n 100 /var/log/nginx/access.log
df -h /
free -h
ss -lntp
```

定时任务：

```bash
systemctl list-timers --all | grep -E 'certbot|mousuan'
journalctl -u certbot-renew.service --no-pager
journalctl -u mousuan-cert-check.service --no-pager
journalctl -u mousuan-security-update.service --no-pager
systemctl status cloudmonitor loongcollectord --no-pager
ps aux | grep -E 'argusagent|loongcollector' | grep -v grep
```

## 6. 故障恢复

### 网站无法访问

```bash
systemctl is-active nginx
nginx -t
systemctl restart nginx
curl -I http://127.0.0.1/
curl -I https://mousuan.net/
```

同时检查阿里云 ECS 实例状态、安全组 `80/443`、DNS A 记录和云监控告警。

### HTTPS 异常

```bash
certbot certificates
systemctl status certbot-renew.timer --no-pager
certbot renew --dry-run
nginx -t && systemctl reload nginx
```

不要手工修改 `/etc/letsencrypt/renewal/` 下的续期配置。

### 磁盘超过 80%

```bash
df -h /
du -xhd1 /var /opt 2>/dev/null | sort -h
journalctl --disk-usage
```

先定位来源。不要直接删除当前发布、证书或系统日志；旧发布只通过 `mousuan-prune-releases` 清理。

## 7. 监控基线

云监控告警建议采用连续 5 分钟阈值，避免瞬时波动误报：

- 网站可用性：HTTPS 状态码不是 `200`，连续 2 次。
- CPU：平均使用率 `>= 80%`，连续 5 分钟。
- 内存：使用率 `>= 80%`，连续 5 分钟。
- 根分区磁盘：使用率 `>= 80%`，连续 5 分钟。
- ECS 状态：实例停机、宕机迁移和系统事件立即通知。

操作系统指标由服务器上的 Alibaba CloudMonitor Agent `4.0.0` 和 LoongCollector 上报。若内存或磁盘指标消失，先检查 `cloudmonitor.service` 与 `loongcollectord.service`。

站点监控至少选择一个中国境内探测点和一个境外探测点，监控 `https://mousuan.net/`，并断言 HTTP `200` 和页面包含“机器智能原理”。

## 8. 自动维护计划

| 周期 | 任务 | 实现 |
| --- | --- | --- |
| 每天 | 境内、境外 HTTPS 可用性探测 | 阿里云站点监控 |
| 每天两次 | 尝试续期临近到期的证书 | `certbot-renew.timer` |
| 每月 | 安装安全更新，不自动重启服务器 | `mousuan-security-update.timer` |
| 每季度 | 证书链、有效期、自动续期演练与 HTTPS 检查 | `mousuan-cert-check.timer` |
| 每次发布前 | ECS 系统盘手动快照 | ECS 控制台 |
| 每次发布后 | 仅保留最近 3 个不可变版本 | `mousuan-prune-releases` |
| 每月 | 检查域名、ECS、快照费用和到期时间 | 阿里云费用与成本 / 续费管理 |

## 9. 凭据与权限

- GitHub Token 使用最小权限并定期轮换。
- 生产服务器使用专用部署用户和 SSH 密钥，确认密钥可用后禁用 root 密码登录。
- 阿里云自动化优先使用 RAM 用户或实例角色，不使用主账号 AccessKey。
- 所有密钥只放在密码管理器、受限 CI Secret 或本地权限为 `0600` 的文件中。
