"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";
type Bi = readonly [zh: string, en: string];
const t = (value: Bi, lang: Lang) => value[lang === "zh" ? 0 : 1];

const levels = [
  {
    no: "01",
    stage: ["认识基础", "FOUNDATION"] as Bi,
    title: ["现实世界完整建模", "Complete modelling of reality"] as Bi,
    summary: ["从对象的物理性质与信息性质出发，建立对现实世界的完备认识。", "Begin with physical and informational properties to form complete knowledge of reality."] as Bi,
    nodes: [
      [["物理世界", "Physical world"], ["对象自身决定其物理性质；以分而治之分析，以经典数学和微积分为支撑。", "An object determines its physical properties; divide-and-conquer, classical mathematics, and calculus provide the analytical basis."], ["物理性质", "PHYSICAL PROPERTY"], "/concepts/physical-world"],
      [["信息世界", "Information world"], ["存在性、作用、运动性，以及主体的需求和愿望，构成对象的信息性质。", "Existence, role, movement, and a subject's needs and desires form informational properties."], ["信息性质", "INFORMATIONAL PROPERTY"], "/concepts/information-world"],
      [["信息系统", "Information system"], ["信息性质嵌入对象之间的关系系统，不能只通过拆分单个对象获得。", "Informational properties are embedded in systems of relations and cannot be recovered by decomposing one object alone."], ["系统关系", "SYSTEM RELATIONS"], "/concepts/information-system"],
      [["完备知识", "Complete knowledge"], ["物理性质与信息性质联合，形成现实世界对象的完备知识。", "Physical and informational properties together form complete knowledge of an object."], ["物质 + 信息", "MATTER + INFORMATION"], "/concepts/complete-knowledge"],
    ] as const,
    modules: [] as const,
  },
  {
    no: "02",
    stage: ["数学原理", "MATHEMATICAL PRINCIPLES"] as Bi,
    title: ["信息世界的公理体系", "Axiomatic system of the information world"] as Bi,
    summary: ["以层谱抽象组织复杂系统，用结构熵度量结构，以解码信息连接结构、知识与推理。", "Organise complex systems by hierarchical abstraction, measure structure with structural entropy, and connect structure, knowledge, and reasoning through decoding information."] as Bi,
    nodes: [
      [["科学范式定律", "Scientific paradigm law"], ["物理世界以分而治之分析；信息世界以层谱抽象进行全局认知。", "The physical world uses divide-and-conquer analysis; the information world uses hierarchical abstraction for global recognition."], ["定律", "LAW"], "/concepts/scientific-paradigm"],
      [["结构信息", "Structural information"], ["编码树表示层谱抽象；结构熵度量嵌入复杂系统结构中的信息。", "Encoding trees represent hierarchical abstraction; structural entropy measures information embedded in complex-system structure."], ["数学模型", "MATHEMATICAL MODEL"], "/concepts/structural-information"],
      [["解码原理", "Decoding principles"], ["通过结构熵极小化与解码信息极大化，从信息系统中发现知识与规律。", "Discover knowledge and regularities through structural-entropy minimisation and decoding-information maximisation."], ["定理链", "THEOREM CHAIN"], "/concepts/decoding-principles"],
    ] as const,
    modules: [
      [["公理原理", "Scientific principles"], ["进入结构信息、信息的数学原理与机器智能原理。", "Explore structural information, mathematical principles of information, and machine-intelligence principles."], "/modules/principles"],
    ] as const,
  },
  {
    no: "03",
    stage: ["智能体系", "INTELLIGENCE SYSTEM"] as Bi,
    title: ["机器智能科学与工程", "Science and engineering of machine intelligence"] as Bi,
    summary: ["以“智能 = 信息”为论题，以谋与算为策略，将学习、自我意识、博弈连接到决策、行动与验证。", "Take intelligence = information as the thesis, combine Mou and Suan as strategies, and connect learning, self-awareness, and contest to decision, action, and verification."] as Bi,
    nodes: [
      [["智能论题", "Intelligence thesis"], ["一个自我意识主体的智能就是该主体的信息。", "The intelligence of a self-aware subject is its information."], ["本原要素", "FOUNDATIONAL ELEMENT"], "/concepts/intelligence-thesis"],
      [["谋算策略", "MouSuan strategy"], ["谋面向全局的层谱抽象与认知；算面向局部的分而治之与逻辑推理。", "Mou performs global hierarchical abstraction and recognition; Suan performs local divide-and-conquer and logical reasoning."], ["全局 ↔ 局部", "GLOBAL ↔ LOCAL"], "/concepts/mousuan-strategy"],
      [["科学原理", "Scientific principles"], ["学习、自我意识与博弈／谋算构成智能科学的三根支柱。", "Learning, self-awareness, and contest/MouSuan form the three pillars of intelligent science."], ["认知与设计", "RECOGNITION & DESIGN"], "/concepts/scientific-principles"],
      [["工程原理", "Engineering principles"], ["决策、行动与验证把科学原理落实为可运行的智能机器。", "Decision, action, and verification turn scientific principles into operating intelligent machines."], ["行动与验证", "ACTION & VERIFICATION"], "/concepts/engineering-principles"],
    ] as const,
    modules: [
      [["应用成果", "Applications"], ["让原理进入学习、决策、智能体与机器。", "Bring principles into learning, decision making, agents, and machines."], "/modules/applications"],
      [["孙子模型", "Sun Tzu model"], ["把谋算策略转化为可研究、可设计、可验证的智能模型。", "Turn MouSuan strategy into an intelligent model that can be studied, designed, and verified."], "/modules/sun-tzu"],
    ] as const,
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
    nav: [["五大模块", "#modules"], ["理论总图", "/framework"], ["三部专著", "/books"], ["团队介绍", "/team"]],
    kicker: "信息世界科学原理 · 谋算智能",
    title: "从现实世界完整建模\n到机器智能体系",
    lead: "一个由定义、定律、定理与模型逐层构成的科学体系：认识现实，解码信息，建立智能。",
    explore: "浏览理论体系",
    axioms: "进入公理与定理",
    guide: "体系结构",
    guideText: "三个层次由基础概念逐步导向机器智能，每个节点均可深入阅读。",
    enter: "进入",
    modulesLabel: "研究组织",
    modulesTitle: "五大研究模块",
    modulesText: "三层理论解释知识如何形成；五大模块组织研究、应用、模型、知识平台与成果转化。先进入模块总览，再选择具体分支。",
    moduleOpen: "进入模块",
    supportLabel: "贯穿整个体系的研究基础",
    supportTitle: "知识与研究",
    supportText: "术语、论文、代码、专著与研究记录共同支撑定义、定律、定理及其应用。",
    supportLinks: [["术语 Wiki", "/wiki/terminology"], ["结构熵综述", "https://www.ijcai.org/proceedings/2025/1183"], ["研究仓库", "https://github.com/SuuTTT/structural-entropy-survey"], ["专著与阅读", "/books"]],
    evidence: "主要观点与原始来源",
    sources: [["[1]", "李昂生《人工智能科学——智能的数学原理》", "/books#artificial-intelligence-science"], ["[2]", "李昂生等《人工智能原理——从计算到谋算的模型、原理与方法》", "/books#artificial-intelligence-principles"], ["[3]", "李昂生等《孙子兵法的人工智能原理》", "/books#sun-tzu-ai-principles"]],
    footer: "结构信息与机器智能 · 从完整建模到谋算智能",
  },
  en: {
    nav: [["Five modules", "#modules"], ["Theory map", "/framework"], ["Three books", "/books"], ["Team", "/team"]],
    kicker: "Science of the information world · MouSuan Intelligence",
    title: "From complete modelling of reality\nto machine intelligence",
    lead: "A scientific system built layer by layer from definitions, laws, theorems, and models: recognise reality, decode information, establish intelligence.",
    explore: "Explore the system",
    axioms: "Open axioms & theorems",
    guide: "System structure",
    guideText: "Three layers move from foundational concepts to machine intelligence; each node opens deeper reading.",
    enter: "Open",
    modulesLabel: "RESEARCH ORGANISATION",
    modulesTitle: "Five research modules",
    modulesText: "The three-layer theory explains how knowledge is formed; the five modules organise principles, applications, models, the knowledge platform, and research translation. Open a module overview before choosing a branch.",
    moduleOpen: "Open module",
    supportLabel: "Research foundations across the system",
    supportTitle: "Knowledge & research",
    supportText: "Terminology, papers, code, monographs, and research records support the definitions, laws, theorems, and applications.",
    supportLinks: [["Terminology Wiki", "/wiki/terminology"], ["Structural entropy survey", "https://www.ijcai.org/proceedings/2025/1183"], ["Research repository", "https://github.com/SuuTTT/structural-entropy-survey"], ["Books & reading", "/books"]],
    evidence: "Key ideas & primary sources",
    sources: [["[1]", "Angsheng Li · Artificial Intelligence Science — Mathematical Principles of Intelligence", "/books#artificial-intelligence-science"], ["[2]", "Angsheng Li et al. · Principles of Artificial Intelligence — From Computation to MouSuan", "/books#artificial-intelligence-principles"], ["[3]", "Angsheng Li et al. · AI Principles of Sun Tzu’s The Art of War", "/books#sun-tzu-ai-principles"]],
    footer: "Structural Information & Machine Intelligence · From complete modelling to MouSuan Intelligence",
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

  return <main className="hierarchy-home">
    <nav className="hierarchy-nav"><a className="hierarchy-brand" href="#top"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="hierarchy-nav-links">{c.nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div><div className="hierarchy-lang"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div></nav>
    <section id="top" className="hierarchy-hero"><div className="hierarchy-shell hierarchy-hero-grid"><div><p className="hierarchy-kicker">{c.kicker}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hierarchy-lead">{c.lead}</p><div className="hierarchy-actions"><a href="#hierarchy">{c.explore}<b>↓</b></a><a href="/framework">{c.axioms}<b>↗</b></a></div></div><aside><p>{c.guide}</p><span>{c.guideText}</span><ol>{levels.map((level) => <li key={level.no}><a href={`#layer-${level.no}`}><b>{level.no}</b><span>{t(level.title, lang)}</span></a></li>)}</ol></aside></div></section>
    <section id="hierarchy" className="hierarchy-map hierarchy-shell">{levels.map((level, index) => <section id={`layer-${level.no}`} className="hierarchy-layer" key={level.no}><header><div className="hierarchy-layer-no"><span>{level.no}</span><small>{t(level.stage, lang)}</small></div><div><h2>{t(level.title, lang)}</h2><p>{t(level.summary, lang)}</p></div></header><div className="hierarchy-node-grid">{level.nodes.map(([title, text, tag, href]) => <a href={href} className="hierarchy-node" key={t(title, lang)}><span>{t(tag, lang)}</span><h3>{t(title, lang)}</h3><p>{t(text, lang)}</p><b>{c.enter} ↗</b></a>)}</div>{level.modules.length > 0 && <div className="hierarchy-modules">{level.modules.map(([title, text, href]) => <a href={href} key={t(title, lang)}><span>{t(level.stage, lang)}</span><div><h3>{t(title, lang)}</h3><p>{t(text, lang)}</p></div><b>→</b></a>)}</div>}{index < levels.length - 1 && <div className="hierarchy-flow" aria-hidden="true"><span>↓</span></div>}</section>)}</section>
    <section id="modules" className="home-modules"><div className="hierarchy-shell"><header><p>{c.modulesLabel}</p><h2>{c.modulesTitle}</h2><span>{c.modulesText}</span></header><div>{homeModules.map(([title, text, href], index) => <a href={href} key={href}><span>0{index + 1}</span><div><h3>{t(title, lang)}</h3><p>{t(text, lang)}</p></div><b>{c.moduleOpen} ↗</b></a>)}</div><a className="home-team-link" href="/team"><span>{lang === "zh" ? "研究主体" : "RESEARCH TEAM"}</span><strong>{lang === "zh" ? "李昂生教授团队" : "Professor Angsheng Li’s team"}</strong><b>→</b></a></div></section>
    <section className="hierarchy-support"><div className="hierarchy-shell"><header><p>{c.supportLabel}</p><h2>{c.supportTitle}</h2><span>{c.supportText}</span></header><div>{c.supportLinks.map(([label, href]) => <a href={href} key={label} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"}>{label}<b>↗</b></a>)}</div></div></section>
    <section className="hierarchy-evidence"><div className="hierarchy-shell"><p>{c.evidence}</p><div>{c.sources.map(([no, title, href]) => <a href={href} key={no}><span>{no}</span>{title}<b>↗</b></a>)}</div></div></section>
    <footer className="hierarchy-footer"><div className="hierarchy-shell"><span>{c.footer}</span><a href="#top">↑</a></div></footer>
  </main>;
}
