"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";
type Bi = readonly [zh: string, en: string];
const t = (value: Bi, lang: Lang) => value[lang === "zh" ? 0 : 1];

const themes = [
  {
    no: "01",
    question: ["信息的数学基础", "Mathematical foundation of information"] as Bi,
    title: ["信息与信息的数学原理", "Information and its mathematical principles"] as Bi,
    answer: ["层谱抽象 · 信息演算 · 信息解码 · 信息生成", "Hierarchical abstraction · information calculus · decoding · generation"] as Bi,
    statement: ["建立信息的公理化科学原理，为研究智能提供数学基础。", "Establish axiomatized scientific principles of information as the mathematical foundation of intelligence."] as Bi,
    dimension: ["数学基础", "MATHEMATICAL FOUNDATION"] as Bi,
    href: "/themes/information",
  },
  {
    no: "02",
    question: ["智能的实质", "The essence of intelligence"] as Bi,
    title: ["智能论题", "Intelligence Thesis"] as Bi,
    answer: ["智能 = 信息", "Intelligence = Information"] as Bi,
    statement: ["一个主体的智能就是该主体的信息，揭示智能的数学实质。", "The intelligence of a subject is that subject’s information, revealing the mathematical essence of intelligence."] as Bi,
    dimension: ["数学实质", "MATHEMATICAL ESSENCE"] as Bi,
    href: "/themes/intelligence-thesis",
  },
  {
    no: "03",
    question: ["智能的策略", "The strategy of intelligence"] as Bi,
    title: ["智能的策略原理", "Strategy Principle of Intelligence"] as Bi,
    answer: ["智能的策略就是谋和算", "The strategies of intelligence are Mou and Suan"] as Bi,
    statement: ["谋进行全局的层谱抽象以及跨越抽象层谱的演算与推理；算进行局部的逻辑推理。", "Mou performs global hierarchical abstraction and reasoning across hierarchies; Suan performs local logical reasoning."] as Bi,
    dimension: ["机器原理", "MACHINE PRINCIPLE"] as Bi,
    href: "/themes/strategy-principle",
  },
  {
    no: "04",
    question: ["智能的模型", "The model of intelligence"] as Bi,
    title: ["孙子模型", "Sun Tzu Model"] as Bi,
    answer: ["智：科学原理　能：工程原理", "Zhi: scientific principles · Neng: engineering principles"] as Bi,
    statement: ["学习、自我意识与博弈／谋算构成“智”；决策、行动与系统验证构成“能”。", "Learning, self-awareness, and contest/MouSuan form Zhi; decision, action, and system verification form Neng."] as Bi,
    dimension: ["实现模型", "REALISATION MODEL"] as Bi,
    href: "/themes/sun-tzu-model",
  },
] as const;

const homeModules = [
  [["公理原理", "Axiomatic principles"], ["信息世界的公理化科学原理", "Axiomatized science of the information world"], "/modules/principles"],
  [["应用成果", "Applications"], ["原理进入学习、决策与机器", "Principles in learning, decisions, and machines"], "/modules/applications"],
  [["孙子模型", "Sun Tzu model"], ["物质与信息结合的谋算模型", "A MouSuan model combining matter and information"], "/modules/sun-tzu"],
  [["知识与研究", "Knowledge & research"], ["图书馆、年鉴与实验室", "Library, Annals, and Laboratory"], "/modules/knowledge"],
  [["谋算机器智能", "MouSuan Machine Intelligence"], ["从科学原理到产业与工程", "From scientific principles to industry and engineering"], "/modules/mousuan-mi"],
] as const;

const ui = {
  zh: {
    nav: [["四个主题", "#themes"], ["五大模块", "#modules"], ["理论索引", "/framework"], ["定义定理", "/theorems"], ["三部专著", "/books"], ["团队", "/team"]],
    kicker: "信息世界科学原理 · 人工智能科学",
    title: "信息与智能的\n四个基本问题",
    lead: "从信息的数学原理出发，回答智能的实质、智能的策略和智能的模型。",
    explore: "查看四个主题",
    reference: "查看关键原理",
    guide: "四个回答",
    sectionLabel: "FOUR FUNDAMENTAL QUESTIONS",
    sectionTitle: "信息基础与智能体系",
    enter: "进入主题",
    completeLabel: "COMPLETELY MODELING",
    completeTitle: "现实世界的完备建模",
    completeText: "一个对象的物理性质和信息性质合起来，构成了该对象的完备知识。",
    physical: "物理性质",
    information: "信息性质",
    knowledge: "完备知识",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "五大研究模块",
    modulesText: "四个主题回答基本科学问题；五大模块承接具体研究、应用与工程工作。",
    footer: "结构信息与机器智能 · 信息的数学原理与智能科学",
  },
  en: {
    nav: [["Four themes", "#themes"], ["Five modules", "#modules"], ["Principle index", "/framework"], ["Statements", "/theorems"], ["Books", "/books"], ["Team", "/team"]],
    kicker: "Science of the information world · artificial intelligence science",
    title: "Four fundamental questions\nof information and intelligence",
    lead: "Beginning with the mathematical principles of information, the system presents the essence, strategy, and model of intelligence.",
    explore: "Explore the four themes",
    reference: "Open key principles",
    guide: "Four answers",
    sectionLabel: "FOUR FUNDAMENTAL QUESTIONS",
    sectionTitle: "Information Foundations & Intelligence",
    enter: "Open theme",
    completeLabel: "COMPLETELY MODELING",
    completeTitle: "Completely modeling the real world",
    completeText: "The physical and informational properties of an object together constitute complete knowledge of that object.",
    physical: "Physical properties",
    information: "Informational properties",
    knowledge: "Complete knowledge",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "Five research modules",
    modulesText: "The four themes answer foundational questions; the five modules organise research, applications, and engineering work.",
    footer: "Structural Information & Machine Intelligence · Mathematical principles of information and intelligence science",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  useEffect(() => { if (new URLSearchParams(window.location.search).get("lang") === "en") setLang("en"); }, []);
  const changeLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    next === "en" ? url.searchParams.set("lang", "en") : url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const c = ui[lang];

  return <main className="questions-home">
    <nav className="questions-nav"><a className="questions-brand" href="#top"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="questions-nav-links">{c.nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div className="questions-lang"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div></nav>

    <section id="top" className="questions-hero"><div className="questions-shell questions-hero-grid"><div><p className="questions-kicker">{c.kicker}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="questions-lead">{c.lead}</p><div className="questions-actions"><a href="#themes">{c.explore}<b>↓</b></a><a href="/framework">{c.reference}<b>↗</b></a></div></div><aside><p>{c.guide}</p>{themes.map((theme) => <a href={theme.href} key={theme.no}><span>{theme.no}</span><strong>{t(theme.question, lang)}</strong></a>)}</aside></div></section>

    <section id="themes" className="questions-themes questions-shell"><span id="hierarchy" className="questions-anchor" /><header style={{ gridTemplateColumns: "1fr" }}><p>{c.sectionLabel}</p><h2>{c.sectionTitle}</h2></header><div className="questions-theme-list">{themes.map((theme) => <a href={theme.href} key={theme.no}><div className="questions-theme-meta"><span>{theme.no}</span><small>{t(theme.dimension, lang)}</small></div><div className="questions-theme-question"><p>{t(theme.question, lang)}</p><h3>{t(theme.title, lang)}</h3></div><div className="questions-theme-answer"><strong>{t(theme.answer, lang)}</strong><p>{t(theme.statement, lang)}</p></div><b>{c.enter} ↗</b></a>)}</div></section>

    <section className="complete-model"><span id="layer-01" className="questions-anchor" /><span id="layer-02" className="questions-anchor" /><span id="layer-03" className="questions-anchor" /><div className="questions-shell"><header><p>{c.completeLabel}</p><h2>{c.completeTitle}</h2><span>{c.completeText}</span></header><div className="complete-equation"><a href="/concepts/physical-world">{c.physical}</a><b>+</b><a href="/concepts/information-world">{c.information}</a><b>=</b><a href="/concepts/complete-knowledge">{c.knowledge}</a></div></div></section>

    <section id="modules" className="questions-modules"><div className="questions-shell"><header><p>{c.modulesLabel}</p><h2>{c.modulesTitle}</h2><span>{c.modulesText}</span></header><div>{homeModules.map(([title, text, href], index) => <a href={href} key={href}><span>0{index + 1}</span><strong>{t(title, lang)}</strong><p>{t(text, lang)}</p><b>↗</b></a>)}</div><a className="questions-team" href="/team"><span>{lang === "zh" ? "研究主体" : "RESEARCH TEAM"}</span><strong>{lang === "zh" ? "李昂生教授团队" : "Professor Angsheng Li’s team"}</strong><b>→</b></a></div></section>

    <footer className="questions-footer"><div className="questions-shell"><span>{c.footer}</span><a href="#top">↑</a></div></footer>
  </main>;
}
