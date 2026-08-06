"use client";

import { useState } from "react";
import { MathText } from "../MathText";

type Lang = "zh" | "en";

type PrincipleCopy = {
  back: string;
  toggle: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: [string, string][];
  sourcesLabel: string;
  sources: [string, string][];
  closing: string;
};

export function PrinciplePage({ zh, en, variant }: { zh: PrincipleCopy; en: PrincipleCopy; variant?: "application" }) {
  const [lang, setLang] = useState<Lang>("zh");
  const c = lang === "zh" ? zh : en;
  return <main className={`principle-page${variant ? ` ${variant}-page` : ""}`}>
    <header className="principle-nav"><a className="brand" href="/"><span className="brand-symbol"><img src="/logo-encoding-tree.svg" alt="" /></span><b>STRUCTURAL<br />INTELLIGENCE</b></a><a className="principle-back" href="/">{c.back}</a><button onClick={() => setLang(lang === "zh" ? "en" : "zh")}>{c.toggle}</button></header>
    <section className="principle-hero"><div className="principle-hero-inner"><p className="overline">{c.eyebrow}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p>{c.lead}</p></div></section>
    <section className="principle-body shell"><div className="principle-sections">{c.sections.map(([heading, text], i) => <article key={heading}><span>0{i + 1}</span><div><h2>{heading}</h2><p><MathText text={text} /></p></div></article>)}</div><aside className="principle-sources"><p className="overline">{c.sourcesLabel}</p>{c.sources.map(([label, href]) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={label}>{label}<b>↗︎</b></a>)}</aside><p className="principle-closing"><MathText text={c.closing} /></p></section>
  </main>;
}
