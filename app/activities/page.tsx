import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活动与文章",
  description: "谋算智能主要活动、论坛报告与文章。",
  alternates: { canonical: "/activities" },
};

const forumTalks = [
  {
    title: "基于结构信息论的图分析技术",
    speaker: "段亮",
    role: "副教授",
    affiliation: "云南大学",
  },
  {
    title: "深度学习解析单细胞染色质结构",
    speaker: "张治华",
    role: "研究员",
    affiliation: "国家生物信息中心",
  },
  {
    title: "Hierarchical Overlapping Clustering on Graphs – From Theory to Applications",
    speaker: "潘祎诚",
    role: "副研究员",
    affiliation: "北京航空航天大学",
  },
  {
    title: "谋算协同：多任务大模型微调的低秩融合之路",
    speaker: "殷荣",
    role: "副教授",
    affiliation: "北京航空航天大学",
  },
  {
    title: "结构信息驱动的大语言模型信息组织与智能检索",
    speaker: "卫一帆",
    role: "博士",
    affiliation: "北京航空航天大学",
  },
] as const;

export default function ActivitiesPage() {
  return <main className="activities-page">
    <nav className="activities-nav">
      <a className="activities-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>MACHINE<br />INTELLIGENCE</b></a>
      <div><a href="/">研究主页</a><a href="/#paradigm">一个范式</a><a href="/#center">信息中心</a><a href="/#definitions">三个定义</a><a href="/#model">孙子模型</a></div>
    </nav>

    <header className="activities-hero">
      <div className="activities-shell">
        <p>ACTIVITIES & ARTICLES</p>
        <h1>主要活动与文章</h1>
        <span>谋算智能论坛的报告人与报告题目，以及后续主要活动和文章。</span>
      </div>
    </header>

    <section className="activities-event activities-shell">
      <header>
        <div><p>2026 ANNUAL MEETING</p><h2>谋算智能论坛</h2></div>
        <dl><div><dt>日期</dt><dd>2026 年 8 月 22 日</dd></div><div><dt>时间</dt><dd>14:00–16:00</dd></div><div><dt>主持人</dt><dd>李昂生 · 北京航空航天大学</dd></div></dl>
      </header>

      <ol className="activities-talks">
        {forumTalks.map((talk, index) => <li key={talk.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{talk.title}</h3>
          <p><strong>{talk.speaker}</strong><small>{talk.role} · {talk.affiliation}</small></p>
        </li>)}
      </ol>
    </section>

    <section className="activities-archive"><div className="activities-shell"><p>ARCHIVE</p><h2>活动与文章将持续收录于此。</h2></div></section>
    <footer className="activities-footer"><div className="activities-shell"><span>机器智能原理：信息模型，机器原理，智能工程</span><a href="/">返回研究主页 ↑</a></div></footer>
  </main>;
}
