import type { Metadata } from "next";
import { chronicleCategories, forumRecord } from "./records";

export const metadata: Metadata = {
  title: "机器智能科学技术体系建设历程",
  description: "记录谋算智能相关活动、获奖、人才项目与文章，呈现机器智能科学技术体系的创建过程。",
  alternates: { canonical: "/activities" },
};

export default function ActivitiesPage() {
  return <main className="activities-page">
    <nav className="activities-nav">
      <a className="activities-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>MACHINE<br />INTELLIGENCE</b></a>
      <div><a href="/">研究主页</a><a href="/#center">信息中心</a><a href="/#definitions">三个定义</a><a href="/#model">孙子模型</a></div>
    </nav>

    <header className="activities-hero">
      <div className="activities-shell">
        <p>SYSTEM CHRONICLE</p>
        <h1>机器智能科学技术体系建设历程</h1>
        <span>记录谋算智能相关活动、获奖、人才项目与文章，呈现机器智能科学技术体系的创建过程。</span>
      </div>
    </header>

    <section className="activities-categories activities-shell" aria-label="建设历程收录类别">
      {chronicleCategories.map((category, index) => <div key={category.zh}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{category.zh}</strong>
        <small>{category.en}</small>
      </div>)}
    </section>

    <section className="activities-event activities-shell">
      <header>
        <div>
          <p>{forumRecord.edition} · {forumRecord.type}</p>
          <h2>{forumRecord.title}</h2>
          <a className="activities-source" href={forumRecord.source.href} target="_blank" rel="noreferrer">{forumRecord.source.label}</a>
        </div>
        <dl><div><dt>日期</dt><dd>{forumRecord.date}</dd></div><div><dt>时间</dt><dd>{forumRecord.time}</dd></div><div><dt>主持人</dt><dd>{forumRecord.chair}</dd></div></dl>
      </header>

      <ol className="activities-talks">
        {forumRecord.talks.map((talk, index) => <li key={talk.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{talk.title}</h3>
          <p><strong>{talk.speaker}</strong><small>{talk.role} · {talk.affiliation}</small></p>
        </li>)}
      </ol>
    </section>

    <section className="activities-archive"><div className="activities-shell"><p>ARCHIVE</p><h2>活动 · 获奖 · 人才项目 · 文章</h2></div></section>
    <footer className="activities-footer"><div className="activities-shell"><span>机器智能原理：信息模型，机器原理，智能工程</span><a href="/">返回研究主页 ↑</a></div></footer>
  </main>;
}
