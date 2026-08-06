"use client";

import { useEffect, useState } from "react";
import { MathText } from "./MathText";

type Lang = "zh" | "en";
type Bi = readonly [zh: string, en: string];
const t = (value: Bi, lang: Lang) => value[lang === "zh" ? 0 : 1];

const themes = [
  {
    no: "01",
    indexLabel: ["信息的数学原理", "Mathematical principles of information"] as Bi,
    question: ["信息是什么？信息的数学原理是什么？", "What is information, and what are its mathematical principles?"] as Bi,
    title: ["信息的数学原理", "Mathematical principles of information"] as Bi,
    answer: ["层谱抽象 · 信息演算 · 信息解码 · 信息生成", "Hierarchical abstraction · information calculus · decoding · generation"] as Bi,
    statement: ["建立信息的公理化科学原理，为人工智能科学建立数学基础。", "Establish axiomatized scientific principles of information as the mathematical foundation of artificial intelligence science."] as Bi,
    dimension: ["信息原理", "INFORMATION PRINCIPLES"] as Bi,
    href: "/themes/information",
  },
  {
    no: "02",
    indexLabel: ["智能的实质", "Essence of intelligence"] as Bi,
    question: ["智能是什么？", "What is intelligence?"] as Bi,
    title: ["智能的实质", "The essence of intelligence"] as Bi,
    answer: ["智能 = 信息", "Intelligence = Information"] as Bi,
    statement: ["智能论题揭示智能的数学实质：一个主体的智能就是该主体的信息。", "The Intelligence Thesis reveals the mathematical essence of intelligence: the intelligence of a subject is that subject’s information."] as Bi,
    dimension: ["数学实质", "MATHEMATICAL ESSENCE"] as Bi,
    href: "/themes/intelligence-thesis",
  },
  {
    no: "03",
    indexLabel: ["智能的策略", "Strategy of intelligence"] as Bi,
    question: ["智能从哪里来？", "Where does intelligence come from?"] as Bi,
    title: ["智能的策略", "The strategy of intelligence"] as Bi,
    answer: ["智能 = 谋算", "Intelligence = MouSuan"] as Bi,
    statement: ["智能策略原理：智能的策略就是谋和算。任一基本智能策略可归为谋或算；由若干谋策略与算策略构成完整智能策略。智能体系由谋体系结构与算体系结构共同构成，由此揭示智能机构建的机器原理。", "Strategy Principle: the strategies of intelligence are Mou and Suan. Every elementary intelligent strategy is classified as either Mou or Suan; a complete intelligent strategy is composed of Mou and Suan strategies. An intelligent system consists of a Mou architecture and a Suan architecture, revealing the machine principle for constructing intelligent agents."] as Bi,
    dimension: ["机器原理", "MACHINE PRINCIPLE"] as Bi,
    href: "/themes/strategy-principle",
  },
  {
    no: "04",
    indexLabel: ["智能的模型", "Model of intelligence"] as Bi,
    question: ["怎样实现智能？", "How can intelligence be realized?"] as Bi,
    title: ["智能的模型", "The model of intelligence"] as Bi,
    answer: ["孙子模型：智能的科学—工程统一模型\n智：人工智能科学原理\n能：人工智能工程原理", "Sun Tzu Model: a unified scientific–engineering model of intelligence\nZhi: scientific principles of AI\nNeng: engineering principles of AI"] as Bi,
    statement: ["“智”由学习、自我意识与博弈／谋算构成；“能”由决策、行动与系统验证构成。二者共同给出智能的实现模型。", "Zhi consists of learning, self-awareness, and contest/MouSuan; Neng consists of decision, action, and system verification. Together they constitute a realization model of intelligence."] as Bi,
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
    nav: [["四个问题", "#themes"], ["五大模块", "#modules"], ["理论索引", "/framework"], ["定义定理", "/theorems"], ["三部专著", "/books"], ["团队", "/team"]],
    kicker: "人工智能科学的终极目标",
    title: "人工智能的\n四个科学问题",
    lead: "建立信息的公理化科学原理，并从数学实质、机器原理和实现模型三个维度回答智能的科学问题。孙子模型统一人工智能的科学原理与工程原理：智是科学原理，能是工程原理。",
    explore: "查看四个问题",
    reference: "查看关键原理",
    guide: "四个问题 · 四个回答",
    sectionLabel: "ULTIMATE GOALS OF AI SCIENCE",
    sectionTitle: "四个问题及其回答",
    sectionSummary: "信息的公理化科学原理构成数学基础；其后三项从数学实质、机器原理和实现模型三个维度回答智能的科学问题。",
    enter: "进入主题",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "五大研究模块",
    modulesText: "四个主题回答科学问题；五大模块承接具体研究、应用与工程工作。",
    footer: "结构信息与机器智能 · 信息的数学原理与智能科学",
  },
  en: {
    nav: [["Fundamental questions", "#themes"], ["Five modules", "#modules"], ["Principle index", "/framework"], ["Statements", "/theorems"], ["Books", "/books"], ["Team", "/team"]],
    kicker: "Mathematical principles of the information world",
    title: "Four scientific questions\nof artificial intelligence",
    lead: "The theory establishes axiomatized scientific principles of information, then answers intelligence through its mathematical essence, machine principle, and realization model. The Sun Tzu Model unifies the scientific and engineering principles of AI: Zhi is science; Neng is engineering.",
    explore: "Explore the four questions",
    reference: "Open key principles",
    guide: "Four questions · Four answers",
    sectionLabel: "ULTIMATE GOALS OF AI SCIENCE",
    sectionTitle: "Four Questions and Their Answers",
    sectionSummary: "Axiomatized scientific principles of information provide the mathematical foundation; the following three answers address intelligence through its mathematical essence, machine principle, and realization model.",
    enter: "Open theme",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "Five research modules",
    modulesText: "The four themes answer scientific questions; the five modules organise research, applications, and engineering work.",
    footer: "Structural Information & Machine Intelligence · Mathematical principles of information and intelligence science",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { if (new URLSearchParams(window.location.search).get("lang") === "en") setLang("en"); }, []);
  const changeLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    next === "en" ? url.searchParams.set("lang", "en") : url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const c = ui[lang];

  return <main className="questions-home">
    <nav className="questions-nav" aria-label={lang === "zh" ? "研究主页导航" : "Research hub navigation"}>
      <a className="questions-brand" href="#top" aria-label={lang === "zh" ? "返回研究主页顶部" : "Back to the research hub top"}><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a>
      <div id="questions-mobile-menu" className={`questions-nav-links${menuOpen ? " is-open" : ""}`}>{c.nav.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
      <div className="questions-lang"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div>
      <button className="questions-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="questions-mobile-menu" aria-label={menuOpen ? (lang === "zh" ? "关闭导航" : "Close navigation") : (lang === "zh" ? "打开导航" : "Open navigation")} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
    </nav>

    <section id="top" className="questions-hero"><div className="questions-shell questions-hero-grid"><div><p className="questions-kicker">{c.kicker}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="questions-lead">{c.lead}</p><div className="questions-actions"><a href="#themes">{c.explore}<b>↓</b></a><a href="/framework">{c.reference}<b>↗︎</b></a></div></div><aside><p>{c.guide}</p>{themes.map((theme) => <a href={theme.href} key={theme.no}><span>{theme.no}</span><div><strong>{t(theme.question, lang)}</strong><small>{t(theme.indexLabel, lang)}</small></div></a>)}</aside></div></section>

    <section id="themes" className="questions-themes questions-shell"><span id="hierarchy" className="questions-anchor" /><header><p>{c.sectionLabel}</p><h2>{c.sectionTitle}</h2><span>{c.sectionSummary}</span></header><div className="questions-theme-list">{themes.map((theme) => <a href={theme.href} key={theme.no}><div className="questions-theme-meta"><span>{theme.no}</span><small>{t(theme.dimension, lang)}</small></div><div className="questions-theme-question"><p>{t(theme.question, lang)}</p><h3>{t(theme.title, lang)}</h3></div><div className="questions-theme-answer"><strong>{t(theme.answer, lang).split("\n").map((line) => <span key={line} style={{ display: "block" }}><MathText text={line} /></span>)}</strong><p><MathText text={t(theme.statement, lang)} /></p></div><b>{c.enter} ↗︎</b></a>)}</div></section>

    <section id="modules" className="questions-modules"><div className="questions-shell"><header><p>{c.modulesLabel}</p><h2>{c.modulesTitle}</h2><span>{c.modulesText}</span></header><div>{homeModules.map(([title, text, href], index) => <a href={href} key={href}><span>0{index + 1}</span><strong>{t(title, lang)}</strong><p>{t(text, lang)}</p><b>↗︎</b></a>)}</div><a className="questions-team" href="/team"><span>{lang === "zh" ? "研究主体" : "RESEARCH TEAM"}</span><strong>{lang === "zh" ? "李昂生教授团队" : "Professor Angsheng Li’s team"}</strong><b>→</b></a></div></section>

    <footer className="questions-footer"><div className="questions-shell"><span>{c.footer}</span><a href="#top">↑</a></div></footer>
  </main>;
}
