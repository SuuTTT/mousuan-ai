import { notFound } from "next/navigation";
import { getTheme, themes } from "../themes";

export function generateStaticParams() {
  return themes.map(({ slug }) => ({ slug }));
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();
  const index = themes.findIndex((item) => item.slug === slug);
  const previous = themes[index - 1];
  const next = themes[index + 1];

  return <main className="theme-page">
    <nav className="theme-nav"><a className="theme-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="/#themes">四个主题</a><a href="/framework">理论索引</a><a href="/theorems">定义定理</a><a href="/books">三部专著</a><a href="/team">团队</a></div></nav>

    <header className="theme-hero"><div className="theme-shell"><p><span>{theme.no}</span>{theme.dimension}</p><h1>{theme.question}</h1><em>{theme.englishTitle}</em><div className="theme-formula">{theme.formula}</div><p className="theme-lead">{theme.lead}</p></div></header>

    <section className="theme-interpretation"><div className="theme-shell"><span>核心解释</span><p>{theme.interpretation}</p></div></section>

    <section className="theme-structure theme-shell"><header><p>CORE STRUCTURE</p><h2>{theme.title}</h2></header><div>{theme.parts.map((part, partIndex) => <article key={part.title}><span>0{partIndex + 1} · {part.label}</span><h3>{part.title}</h3><p>{part.text}</p></article>)}</div></section>

    {theme.sunLaws && <section className="theme-sun-laws"><div className="theme-shell"><header><p>SUN TZU’S FIVE LAWS</p><h2>物质与信息结合的孙子五大定律</h2><span>这五大定律奠定了同时存在物质与信息的战争之科学原理。</span></header><ol>{theme.sunLaws.map((law) => <li key={law.no}><span>{law.no}</span><div><h3>{law.title}</h3><p>{law.text}</p></div><a href={law.href}>原文 ↗</a></li>)}</ol></div></section>}

    <section className="theme-basis"><div className="theme-shell"><header><p>KEY BASIS</p><h2>关键依据</h2></header><div>{theme.basis.map((source, sourceIndex) => <article key={`${source.label}-${sourceIndex}`}><span>[{sourceIndex + 1}]</span><div><strong>{source.label}</strong>{source.references ? <ol>{source.references.map((reference) => <li key={reference.number}><a href={reference.href}><span>{reference.number}</span><h3>{reference.title}</h3><p>{reference.content}</p></a></li>)}</ol> : <small>{source.detail}</small>}</div><a href={source.href} aria-label={`查看${source.label}`}>↗</a></article>)}</div></div></section>

    <section className="theme-deeper theme-shell"><header><p>DEEPER READING</p><h2>继续深入</h2></header><div>{theme.deeper.map((item) => <a href={item.href} key={item.title}><span>{item.title}</span><p>{item.text}</p><b>↗</b></a>)}</div></section>

    <footer className="theme-footer"><div className="theme-shell"><a href={previous ? `/themes/${previous.slug}` : "/#themes"}><span>← 上一主题</span><strong>{previous?.title ?? "四个基本问题"}</strong></a><a href="/"><span>返回</span><strong>首页</strong></a><a href={next ? `/themes/${next.slug}` : "/framework"}><span>下一主题 →</span><strong>{next?.title ?? "理论索引"}</strong></a></div></footer>
  </main>;
}
