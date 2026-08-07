import { notFound } from "next/navigation";
import { getResearchModule, researchModules } from "../modules";

export function generateStaticParams() {
  return researchModules.map(({ slug }) => ({ slug }));
}

export default async function ResearchModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = getResearchModule(slug);
  if (!module) notFound();
  const index = researchModules.findIndex((item) => item.slug === slug);
  const previous = researchModules[index - 1];
  const next = researchModules[index + 1];

  return <main className={`module-page module-${module.no}`}>
    <nav className="module-nav"><a className="module-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="/">研究主页</a><a href="/#questions">四个问题</a><a href="/#definitions">三个定义</a><a href="/#modules">五大模块</a><a href="/team">团队介绍</a></div></nav>
    <header className="module-hero"><div><p><a href="/">首页</a><b>›</b><a href="/#modules">五大模块</a><b>›</b><span>{module.shortTitle}</span></p><span>MODULE {module.no}</span><h1>{module.title}</h1><em>{module.englishTitle}</em><div>{module.lead}</div></div><aside><small>模块任务</small><p>{module.thesis}</p></aside></header>

    <section className="module-map"><div className="module-shell"><span>FIVE RESEARCH MODULES</span><nav>{researchModules.map((item) => <a aria-current={item.slug === module.slug ? "page" : undefined} href={`/modules/${item.slug}`} key={item.slug}><b>{item.no}</b>{item.shortTitle}</a>)}</nav></div></section>

    <section className="module-content module-shell"><header><p>MODULE STRUCTURE</p><h2>研究分支</h2><span>各研究分支共同构成模块的概念结构、方法体系与研究对象。</span></header><div className="module-list">{module.items.map((item) => <article id={item.id} key={item.id}><div><span>{item.no}</span><small>{item.english}</small></div><section><h3>{item.title}</h3><p>{item.text}</p></section><a href={item.href}>深入阅读 <b>↗︎</b></a></article>)}</div></section>

    <section className="module-return"><div className="module-shell"><p>科学问题与研究模块是两种互补入口</p><div><a href="/#questions"><span>FOUR QUESTIONS</span><strong>返回四个问题</strong><b>→</b></a><a href="/framework"><span>PRINCIPLE INDEX</span><strong>查看关键原理索引</strong><b>→</b></a></div></div></section>

    <footer className="module-footer"><div className="module-shell"><a href={previous ? `/modules/${previous.slug}` : "/#modules"}><span>← 上一模块</span><strong>{previous?.shortTitle ?? "五大模块"}</strong></a><a href="/team"><span>研究主体</span><strong>李昂生团队</strong></a><a href={next ? `/modules/${next.slug}` : "/team"}><span>下一模块 →</span><strong>{next?.shortTitle ?? "团队介绍"}</strong></a></div></footer>
  </main>;
}
