export default function SiteFiling() {
  return <div className="site-filing" role="contentinfo" aria-label="网站备案信息">
    <div className="site-filing-inner">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2026052219号</a>
      <span className="site-filing-divider" aria-hidden="true">·</span>
      <a className="site-filing-police" href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802049850" target="_blank" rel="noreferrer">
        <img src="/beian-police.jpg" width="18" height="20" alt="公安备案图标" />
        <span>京公网安备11010802049850号</span>
      </a>
    </div>
  </div>;
}
