"use client";

import { useEffect, useState } from "react";
import { MathText } from "./MathText";

type Lang = "zh" | "en";
type Bi = readonly [zh: string, en: string];
const t = (value: Bi, lang: Lang) => value[lang === "zh" ? 0 : 1];

const questions = [
  {
    no: "01",
    question: ["支撑人工智能科学技术的新数学是什么？", "What new mathematics underpins artificial intelligence science and technology?"] as Bi,
    answer: ["信息的数学原理，也称信息世界的数学原理", "Mathematical principles of information, also called mathematical principles of the information world"] as Bi,
    href: "/themes/information",
  },
  {
    no: "02",
    question: ["智能是什么？", "What is intelligence?"] as Bi,
    answer: ["智能 = 信息", "Intelligence = Information"] as Bi,
    href: "/themes/intelligence-thesis",
  },
  {
    no: "03",
    question: ["智能从哪里来？", "Where does intelligence come from?"] as Bi,
    answer: ["智能 = 谋算", "Intelligence = MouSuan"] as Bi,
    href: "/themes/strategy-principle",
  },
  {
    no: "04",
    question: ["怎样实现智能？", "How can intelligence be realized?"] as Bi,
    answer: ["智能 = 智 + 能", "Intelligence = Zhi + Neng"] as Bi,
    href: "/themes/zhi-neng-definition",
  },
  {
    no: "05",
    question: ["智能的模型是什么？", "What is the model of intelligence?"] as Bi,
    answer: ["孙子模型", "The Sun Tzu Model"] as Bi,
    href: "/themes/sun-tzu-model",
  },
] as const;

const definitions = [
  {
    no: "01",
    dimension: ["数学实质", "MATHEMATICAL ESSENCE"] as Bi,
    title: ["智能论题", "Intelligence Thesis"] as Bi,
    formula: ["智能 = 信息", "Intelligence = Information"] as Bi,
    statement: ["一个主体的智能就是该主体的信息；信息揭示智能的数学实质。", "The intelligence of a subject is that subject’s information; information reveals the mathematical essence of intelligence."] as Bi,
    href: "/themes/intelligence-thesis",
  },
  {
    no: "02",
    dimension: ["机器原理", "MACHINE PRINCIPLE"] as Bi,
    title: ["智能的策略原理", "Strategy Principle of Intelligence"] as Bi,
    formula: ["智能 = 谋算", "Intelligence = MouSuan"] as Bi,
    statement: ["智能的策略就是谋和算。“智能 = 谋算”揭示两个层面：智能来源于谋和算，一系列谋策略与算策略构成完整智能策略；同时，它给出智能机器的机器原理——建立谋的机器与算的机器，并使谋算机器协同工作。", "The strategies of intelligence are Mou and Suan. “Intelligence = MouSuan” reveals two levels: intelligence arises from Mou and Suan, and a complete intelligent strategy is composed of a series of Mou and Suan strategies; it also gives the machine principle of intelligent machines—to build Mou machines and Suan machines and coordinate them as one system."] as Bi,
    href: "/themes/strategy-principle",
  },
  {
    no: "03",
    dimension: ["实现结构", "REALISATION STRUCTURE"] as Bi,
    title: ["智能的科学—工程定义", "Scientific–Engineering Definition of Intelligence"] as Bi,
    formula: ["智能 = 智 + 能", "Intelligence = Zhi + Neng"] as Bi,
    statement: ["“智”是学习、自我意识与博弈／谋算的科学原理；“能”是决策、行动与系统验证的工程原理。“+”表示二者在同一智能系统中的统一。", "Zhi comprises the scientific principles of learning, self-awareness, and contest/MouSuan; Neng comprises the engineering principles of decision, action, and system verification. The plus sign denotes their unity in one intelligent system."] as Bi,
    href: "/themes/zhi-neng-definition",
  },
] as const;

const informationPillars = [
  [["信息世界十大定律", "Ten Laws of the Information World"], ["科学范式、个体、信息、运动、竞争、感知与认知、观察、知识、自我意识与系统", "Scientific paradigm, individual, information, motion, competition, perception and cognition, observation, knowledge, self-awareness, and system"], "/themes/information#information-world-laws"],
  [["信息演算", "Information calculus"], ["跨越抽象层谱的演算与推理", "Calculus and reasoning across hierarchies of abstraction"], "/principles/information-mathematics"],
  [["信息解码", "Information decoding"], ["由不确定性获得确定性", "Obtaining certainty from uncertainty"], "/concepts/decoding-principles"],
  [["信息生成", "Information generation"], ["由确定性生成新的可能性", "Generating new possibilities from certainty"], "/themes/information"],
] as const;

const modelGroups = [
  {
    label: ["智 · 人工智能科学原理", "ZHI · SCIENTIFIC PRINCIPLES OF AI"] as Bi,
    steps: [["01", "学习", "Learning"], ["02", "自我意识", "Self-awareness"], ["03", "博弈／谋算", "Contest / MouSuan"]] as const,
  },
  {
    label: ["能 · 人工智能工程原理", "NENG · ENGINEERING PRINCIPLES OF AI"] as Bi,
    steps: [["04", "决策", "Decision"], ["05", "行动", "Action"], ["06", "系统验证", "System verification"]] as const,
  },
] as const;

const homeModules = [
  [["数学原理", "Mathematical principles"], ["信息世界数学原理", "Mathematical principles of the information world"], "/modules/principles"],
  [["应用成果", "Applications"], ["原理进入学习、决策与机器", "Principles in learning, decisions, and machines"], "/modules/applications"],
  [["孙子模型", "Sun Tzu model"], ["物质与信息结合的谋算模型", "A MouSuan model combining matter and information"], "/modules/sun-tzu"],
  [["知识与研究", "Knowledge & research"], ["图书馆、年鉴与实验室", "Library, Annals, and Laboratory"], "/modules/knowledge"],
  [["谋算机器智能", "MouSuan Machine Intelligence"], ["从科学原理到产业与工程", "From scientific principles to industry and engineering"], "/modules/mousuan-mi"],
] as const;

const ui = {
  zh: {
    nav: [["五个问题", "#questions"], ["信息中心", "#center"], ["三个定义", "#definitions"], ["孙子模型", "#model"], ["五大模块", "#modules"], ["活动与文章", "/activities"], ["团队", "/team"]],
    objective: "目标：有原理、可解释的机器智能科学技术，智能机器，智能机器人。",
    kicker: "信息世界的数学原理 · 机器智能科学技术",
    title: "机器智能原理：\n信息模型，机器原理，智能工程",
    lead: "信息是人工智能的数学基础，渗透在人工智能的每一个步骤与过程。五个问题由此展开为一个中心、三个定义和一个模型。",
    explore: "从信息中心开始",
    reference: "查看关键原理",
    guide: "五个问题 · 五个回答",
    summaryLabel: "总结",
    summaryFormula: "一个中心 · 三个定义 · 一个模型",
    summaryText: "构成了机器智能科学技术体系",
    centerLabel: "THE MATHEMATICAL FOUNDATION",
    centerTitle: "信息",
    centerFormula: "信息是人工智能的数学基础",
    centerText: "信息渗透在人工智能的每一个步骤与过程。信息的数学原理，也称信息世界的数学原理，为学习、认知、谋算、决策、行动与验证建立统一基础。",
    centerEnter: "进入信息世界数学原理",
    definitionsLabel: "THREE DEFINITIONS OF INTELLIGENCE",
    definitionsTitle: "三个定义",
    definitionsText: "分别从数学实质、机器原理与科学—工程结构三个维度定义智能。",
    enter: "进入定义",
    modelLabel: "THE UNIFIED MODEL",
    modelTitle: "孙子模型",
    modelText: "孙子模型以信息为数学基础，以谋和算为每一步的基本策略，把“智”的科学原理与“能”的工程原理统一为连续、可执行、可验证的智能过程。",
    modelFoundation: "信息 · 数学基础",
    modelFoundationText: "贯穿六个步骤与全部过程",
    modelStrategy: "谋和算 · 每一步的基本策略",
    modelEnter: "进入孙子模型",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "五大研究模块",
    modulesText: "在信息中心、三个定义与孙子模型之下，五大模块承接具体研究、应用与工程工作。",
    activitiesLabel: "ACTIVITIES & ARTICLES",
    activitiesTitle: "主要活动与文章",
    activitiesText: "谋算智能论坛的报告人与报告题目，以及后续主要活动和文章。",
    activitiesItem: "2026 年会 · 谋算智能论坛",
    activitiesMeta: "2026 年 8 月 22 日 · 5 场论坛报告",
    activitiesEnter: "查看活动与报告",
    footer: "机器智能原理：信息模型，机器原理，智能工程",
  },
  en: {
    nav: [["Five questions", "#questions"], ["Information", "#center"], ["Three definitions", "#definitions"], ["Sun Tzu Model", "#model"], ["Five modules", "#modules"], ["Activities", "/activities"], ["Team", "/team"]],
    objective: "Objective: Principled and explainable machine intelligence science and technology, intelligent machines, and intelligent robots.",
    kicker: "Mathematical principles of the information world · Machine intelligence science and technology",
    title: "Principles of Machine Intelligence:\nInformation model, Principles of Intelligent Machines,\nIntelligence Engineering",
    lead: "Information is the mathematical foundation of artificial intelligence and permeates every step and process. The five questions unfold into one centre, three definitions, and one model.",
    explore: "Begin with information",
    reference: "Open key principles",
    guide: "Five questions · Five answers",
    summaryLabel: "SUMMARY",
    summaryFormula: "One centre · Three definitions · One model",
    summaryText: "Together they constitute a system of machine intelligence science and technology.",
    centerLabel: "THE MATHEMATICAL FOUNDATION",
    centerTitle: "Information",
    centerFormula: "Information is the mathematical foundation of artificial intelligence",
    centerText: "Information permeates every step and process of artificial intelligence. The mathematical principles of information—also called the mathematical principles of the information world—provide a common foundation for learning, cognition, MouSuan, decision, action, and verification.",
    centerEnter: "Open the mathematical principles of the information world",
    definitionsLabel: "THREE DEFINITIONS OF INTELLIGENCE",
    definitionsTitle: "Three Definitions",
    definitionsText: "Intelligence is defined along three dimensions: mathematical essence, machine principle, and scientific–engineering structure.",
    enter: "Open definition",
    modelLabel: "THE UNIFIED MODEL",
    modelTitle: "Sun Tzu Model",
    modelText: "The Sun Tzu Model takes information as its mathematical foundation and Mou and Suan as the basic strategies at every step, unifying the scientific principles of Zhi and the engineering principles of Neng into a continuous, executable, and verifiable intelligent process.",
    modelFoundation: "INFORMATION · MATHEMATICAL FOUNDATION",
    modelFoundationText: "Permeates all six steps and the entire process",
    modelStrategy: "MOU AND SUAN · BASIC STRATEGIES AT EVERY STEP",
    modelEnter: "Open the Sun Tzu Model",
    modulesLabel: "RESEARCH PROGRAMMES",
    modulesTitle: "Five research modules",
    modulesText: "Beneath the information centre, three definitions, and the Sun Tzu Model, five modules organise research, applications, and engineering work.",
    activitiesLabel: "ACTIVITIES & ARTICLES",
    activitiesTitle: "Major Activities and Articles",
    activitiesText: "Speakers and talk titles from the MouSuan Intelligence Forum, followed by major activities and articles.",
    activitiesItem: "2026 Annual Meeting · MouSuan Intelligence Forum",
    activitiesMeta: "22 August 2026 · Five forum talks",
    activitiesEnter: "View activities and talks",
    footer: "Principles of Machine Intelligence: Information model, Principles of Intelligent Machines, Intelligence Engineering",
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

  return <main className="questions-home" data-lang={lang}>
    <nav className="questions-nav" aria-label={lang === "zh" ? "研究主页导航" : "Research hub navigation"}>
      <a className="questions-brand" href="#top" aria-label={lang === "zh" ? "返回研究主页顶部" : "Back to the research hub top"}><img src="/logo-encoding-tree.svg" alt="" /><b>MACHINE<br />INTELLIGENCE</b></a>
      <div id="questions-mobile-menu" className={`questions-nav-links${menuOpen ? " is-open" : ""}`}>{c.nav.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
      <div className="questions-lang"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div>
      <button className="questions-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="questions-mobile-menu" aria-label={menuOpen ? (lang === "zh" ? "关闭导航" : "Close navigation") : (lang === "zh" ? "打开导航" : "Open navigation")} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
    </nav>

    <section id="top" className="questions-hero"><div className="questions-shell questions-hero-grid"><div><p className="questions-objective">{c.objective}</p><p className="questions-kicker">{c.kicker}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="questions-lead">{c.lead}</p><div className="questions-actions"><a href="#center">{c.explore}<b>↓</b></a><a href="/framework">{c.reference}<b>↗︎</b></a></div></div><aside id="questions"><p>{c.guide}</p>{questions.map((item) => <a href={item.href} key={item.no}><span>{item.no}</span><div><strong>{t(item.question, lang)}</strong><small><MathText text={t(item.answer, lang)} /></small></div></a>)}<div className="questions-system-summary"><span>{c.summaryLabel}</span><div><strong>{c.summaryFormula}</strong><small>{c.summaryText}</small></div></div></aside></div></section>

    <section id="center" className="questions-center"><div className="questions-shell"><header><p>{c.centerLabel}</p><h2>{c.centerTitle}</h2></header><div className="questions-center-thesis"><span>01 · CENTRE</span><strong>{c.centerFormula}</strong><p>{c.centerText}</p><a href="/themes/information">{c.centerEnter} ↗︎</a></div><ol>{informationPillars.map(([title, text, href], index) => <li key={title[0]}><span>0{index + 1}</span><a href={href}><strong>{t(title, lang)}</strong><p>{t(text, lang)}</p></a></li>)}</ol></div></section>

    <section id="definitions" className="questions-definitions questions-shell"><header><p>{c.definitionsLabel}</p><h2>{c.definitionsTitle}</h2><span>{c.definitionsText}</span></header><div className="questions-definition-list">{definitions.map((definition) => <a href={definition.href} key={definition.no}><div className="questions-definition-meta"><span>{definition.no}</span><small>{t(definition.dimension, lang)}</small></div><div><p>{t(definition.title, lang)}</p><strong><MathText text={t(definition.formula, lang)} /></strong></div><p><MathText text={t(definition.statement, lang)} /></p><b>{c.enter} ↗︎</b></a>)}</div></section>

    <section id="model" className="questions-model"><div className="questions-shell"><header><p>{c.modelLabel}</p><h2>{c.modelTitle}</h2><span>{c.modelText}</span></header><div className="questions-model-foundation"><strong>{c.modelFoundation}</strong><span>{c.modelFoundationText}</span></div><div className="questions-model-groups">{modelGroups.map((group) => <article key={group.label[0]}><p>{t(group.label, lang)}</p><ol>{group.steps.map(([no, zh, en]) => <li key={no}><span>{no}</span><strong>{lang === "zh" ? zh : en}</strong></li>)}</ol></article>)}</div><div className="questions-model-footer"><strong>{c.modelStrategy}</strong><a href="/themes/sun-tzu-model">{c.modelEnter} ↗︎</a></div></div></section>

    <section id="modules" className="questions-modules"><div className="questions-shell"><header><p>{c.modulesLabel}</p><h2>{c.modulesTitle}</h2><span>{c.modulesText}</span></header><div>{homeModules.map(([title, text, href], index) => <a href={href} key={href}><span>0{index + 1}</span><strong>{t(title, lang)}</strong><p>{t(text, lang)}</p><b>↗︎</b></a>)}</div><a className="questions-team" href="/team"><span>{lang === "zh" ? "研究主体" : "RESEARCH TEAM"}</span><strong>{lang === "zh" ? "李昂生团队" : "Angsheng Li’s team"}</strong><b>→</b></a></div></section>

    <section className="questions-updates"><div className="questions-shell"><header><p>{c.activitiesLabel}</p><h2>{c.activitiesTitle}</h2><span>{c.activitiesText}</span></header><a href="/activities"><small>{c.activitiesMeta}</small><strong>{c.activitiesItem}</strong><b>{c.activitiesEnter} →</b></a></div></section>

    <footer className="questions-footer"><div className="questions-shell"><span>{c.footer}</span><a className="questions-back-to-top" href="#top" aria-label={lang === "zh" ? "返回顶部" : "Back to top"}>↑</a></div></footer>
  </main>;
}
