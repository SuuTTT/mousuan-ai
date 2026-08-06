import { notFound } from "next/navigation";
import { conceptGroups, concepts, getConcept } from "../concepts";

export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ slug }));
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const index = concepts.findIndex((item) => item.slug === slug);
  const previous = concepts[index - 1];
  const next = concepts[index + 1];

  return <main className={`concept-page concept-layer-${concept.layer}`}>
    <nav className="concept-nav">
      <a className="concept-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a>
      <div><a href="/">体系首页</a><a href="/framework">理论总图</a><a href="/books">专著与编号</a></div>
    </nav>

    <header className="concept-hero">
      <div className="concept-hero-copy">
        <p><a href="/#hierarchy">体系首页</a><b>›</b><a href={`/#layer-${concept.layer}`}>{concept.layerName}</a><b>›</b><span>{concept.title}</span></p>
        <span className="concept-tag">{concept.layer} · {concept.layerEnglish}</span>
        <h1>{concept.title}</h1>
        <em>{concept.englishTitle}</em>
        <div className="concept-lead">{concept.lead}</div>
      </div>
      <aside>
        <span>核心命题</span>
        <blockquote>{concept.proposition}</blockquote>
        <small>{concept.tag}</small>
      </aside>
    </header>

    <section className="concept-position">
      <div className="concept-shell">
        <header><span>SYSTEM POSITION</span><h2>在理论体系中的位置</h2><a href="/framework">查看完整理论总图 ↗</a></header>
        <div className="concept-groups">{conceptGroups.map((group) => <div key={group.layer} className={group.layer === concept.layer ? "active-layer" : ""}><p><b>{group.layer}</b>{group.name}</p><div>{group.concepts.map((item) => <a key={item.slug} href={`/concepts/${item.slug}`} aria-current={item.slug === concept.slug ? "page" : undefined}>{item.title}</a>)}</div></div>)}</div>
      </div>
    </section>

    <section className="concept-explanation concept-shell">
      <header><p>CONCEPT MODEL</p><h2>{concept.tag}</h2><span>本页只解释当前概念，并标明它如何连接到上一层与下一层。</span></header>
      <div className="concept-relation" aria-label={`${concept.title}的概念关系`}>
        {concept.relation.map((item, relationIndex) => <div key={item}><span>0{relationIndex + 1}</span><strong>{item}</strong>{relationIndex < concept.relation.length - 1 && <b>→</b>}</div>)}
      </div>
      <div className="concept-sections">{concept.sections.map((section, sectionIndex) => <article key={section.title}><span>0{sectionIndex + 1} · {section.label}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</div>
    </section>

    <section className="concept-formal">
      <div className="concept-shell">
        <header><p>FORMAL BASIS</p><h2>定义、定律与推导位置</h2></header>
        <div>{concept.formal.map((item) => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div>
    </section>

    <section className="concept-sources concept-shell">
      <header><p>REFERENCES</p><h2>主要引文与正式来源</h2><span>网站建立阅读路径；正式定义、定理与编号以专著和原始论文为准。</span></header>
      <div>{concept.sources.map((source, sourceIndex) => <a key={`${source.label}-${sourceIndex}`} href={source.href} target={source.href.startsWith("/") ? undefined : "_blank"} rel={source.href.startsWith("/") ? undefined : "noreferrer"}><span>[{sourceIndex + 1}]</span><div><strong>{source.label}</strong><small>{source.detail}</small></div><b>↗</b></a>)}</div>
    </section>

    <footer className="concept-footer">
      <div className="concept-shell"><a className={!previous ? "disabled" : ""} href={previous ? `/concepts/${previous.slug}` : "/#layer-01"}><span>← 上一个概念</span><strong>{previous?.title ?? "体系起点"}</strong></a><a href="/#hierarchy"><span>返回</span><strong>三层理论体系</strong></a><a className={!next ? "disabled" : ""} href={next ? `/concepts/${next.slug}` : "/framework"}><span>下一个概念 →</span><strong>{next?.title ?? "理论总图"}</strong></a></div>
    </footer>
  </main>;
}
