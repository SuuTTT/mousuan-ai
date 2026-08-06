import { notFound } from "next/navigation";
import { conceptGroups, concepts, getConcept } from "../concepts";

function KeepTail({ text, count = 6 }: { text: string; count?: number }) {
  if (text.length <= count) return <>{text}</>;
  return <>{text.slice(0, -count)}<span className="keep-tail">{text.slice(-count)}</span></>;
}

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

    <header className="concept-hero" data-layer={concept.layer}>
      <div className="concept-hero-copy">
        <p><a href="/#themes">体系首页</a><b>›</b><a href="/#themes">{concept.layerName}</a><b>›</b><span>{concept.title}</span></p>
        <span className="concept-tag">{concept.layer} · {concept.layerEnglish}</span>
        <h1>{concept.title}</h1>
        <em>{concept.englishTitle}</em>
        <div className="concept-lead"><KeepTail text={concept.lead} /></div>
      </div>
      <aside>
        <span>核心命题</span>
        <blockquote><KeepTail text={concept.proposition} /></blockquote>
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
      <header><p>CONCEPT MODEL</p><h2>{concept.tag}</h2><span>概念的对象、关系与数学位置</span></header>
      <div className="concept-relation" aria-label={`${concept.title}的概念关系`}>
        {concept.relation.map((item, relationIndex) => <div key={item}><span>0{relationIndex + 1}</span><strong>{item}</strong>{relationIndex < concept.relation.length - 1 && <b>→</b>}</div>)}
      </div>
      <div className="concept-sections">{concept.sections.map((section, sectionIndex) => <article key={section.title}><span>0{sectionIndex + 1} · {section.label}</span><h3>{section.title}</h3><p><KeepTail text={section.text} /></p></article>)}</div>
    </section>

    <section className="concept-formal">
      <div className="concept-shell">
        <header><p>KEY FOUNDATIONS</p><h2>关键依据</h2><span>仅列出理解本主题所需的关键定义、定律或定理；完整论证请进入原始文献。</span></header>
        <div>{concept.formal.map((item) => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p><KeepTail text={item.text} /></p></article>)}</div>
      </div>
    </section>

    <section className="concept-sources concept-shell">
      <header><p>REFERENCES</p><h2>原始文献</h2><span>原始文献按出版时间列示：先列早期理论来源，再列后续系统定义与展开。</span></header>
      <div>{concept.sources.map((source, sourceIndex) => <a key={`${source.label}-${sourceIndex}`} href={source.href} target={source.href.startsWith("/") ? undefined : "_blank"} rel={source.href.startsWith("/") ? undefined : "noreferrer"}><span>[{sourceIndex + 1}]</span><div><strong>{source.label}</strong><small><KeepTail text={source.detail} /></small></div><b>↗</b></a>)}</div>
    </section>

    <footer className="concept-footer">
      <div className="concept-shell"><a className={!previous ? "disabled" : ""} href={previous ? `/concepts/${previous.slug}` : "/#themes"}><span>← 上一个概念</span><strong>{previous?.title ?? "体系起点"}</strong></a><a href="/#themes"><span>返回</span><strong>四个基本问题</strong></a><a className={!next ? "disabled" : ""} href={next ? `/concepts/${next.slug}` : "/framework"}><span>下一个概念 →</span><strong>{next?.title ?? "理论总图"}</strong></a></div>
    </footer>
  </main>;
}
