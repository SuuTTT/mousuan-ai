"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";
type Bi = readonly [zh: string, en: string];
const t = (value: Bi, lang: Lang) => value[lang === "zh" ? 0 : 1];

const levels = [
  {
    no: "01",
    stage: ["认识基础", "FOUNDATION"] as Bi,
    title: ["现实世界的完整建模", "Complete modelling of reality"] as Bi,
    summary: ["现实世界的每一个对象都有物理性质和信息性质；两者联合起来构成该对象的完备知识。", "Every object in reality has physical and informational properties; together they form complete knowledge of that object."] as Bi,
    nodes: [
      [["物理世界", "Physical world"], ["一个对象的物理性质由该对象自己完全决定；物理世界的科学范式是分而治之。", "An object's physical properties are completely determined by the object itself; divide-and-conquer is the scientific paradigm of the physical world."], ["定义 15.1", "DEFINITION 15.1"], "/concepts/physical-world"],
      [["信息世界", "Information world"], ["对象的信息性质包括存在性、作用和运动性；自我意识主体还包括需求和愿望。", "Informational properties include existence, function and movement; for a self-aware subject they also include needs and desires."], ["定义 15.4", "DEFINITION 15.4"], "/concepts/information-world"],
      [["信息系统", "Information system"], ["一个信息系统由多个对象、对象的运动以及对象之间的相互作用构成。", "An information system consists of multiple objects, their movements, and their interactions."], ["定义 17.10", "DEFINITION 17.10"], "/concepts/information-system"],
      [["完备知识", "Complete knowledge"], ["对象的物理性质与信息性质联合起来，构成该对象的完备知识。", "The physical and informational properties of an object together form its complete knowledge."], ["物理性质 + 信息性质", "PHYSICAL + INFORMATIONAL"], "/concepts/complete-knowledge"],
    ] as const,
    modules: [] as const,
  },
  {
    no: "02",
    stage: ["数学原理", "MATHEMATICAL PRINCIPLES"] as Bi,
    title: ["信息世界的公理化数学原理", "Axiomatized mathematical principles of the information world"] as Bi,
    summary: ["以层谱抽象为科学范式，以信息演算理论、信息解码原理和信息生成原理为三大支柱。", "Its scientific paradigm is hierarchical abstraction, with information calculus, information decoding, and information generation as three pillars."] as Bi,
    nodes: [
      [["科学范式定律", "Scientific paradigm law"], ["信息世界的科学范式，即总方法，就是层谱抽象。", "The scientific paradigm, or general method, of the information world is hierarchical abstraction."], ["命题 15.6", "PROPOSITION 15.6"], "/concepts/scientific-paradigm"],
      [["结构信息", "Structural information"], ["编码树给出层谱抽象；结构熵度量在编码树下嵌入信息系统中的不确定性。", "Encoding trees define hierarchical abstraction; structural entropy measures uncertainty embedded in an information system under an encoding tree."], ["定义 19.14、19.20–19.21", "DEFINITIONS 19.14, 19.20–19.21"], "/concepts/structural-information"],
      [["压缩／解码原理", "Compression/decoding principle"], ["同一编码树上的压缩信息等于一维结构熵与结构熵之差，也等于解码信息。", "Under the same encoding tree, compression information equals the difference between one-dimensional and structural entropy, and equals decoding information."], ["定理 19.44", "THEOREM 19.44"], "/concepts/decoding-principles"],
    ] as const,
    modules: [
      [["公理原理", "Scientific principles"], ["进入结构信息、信息的数学原理与机器智能原理。", "Explore structural information, mathematical principles of information, and machine-intelligence principles."], "/modules/principles"],
    ] as const,
  },
  {
    no: "03",
    stage: ["智能体系", "INTELLIGENCE SYSTEM"] as Bi,
    title: ["信息世界科学体系下的机器智能体系", "Machine intelligence under the science of the information world"] as Bi,
    summary: ["以信息的数学原理为数学基础，以谋和算为智能策略，以孙子谋算智能模型统一科学原理与工程原理。", "It takes the mathematical principles of information as its foundation, Mou and Suan as intelligent strategies, and the Sun Tzu MouSuan model as the unifying scientific and engineering model."] as Bi,
    nodes: [
      [["智能论题", "Intelligence thesis"], ["一个智能体的智能就是它的信息，即：智能 = 信息。", "The intelligence of an intelligent agent is its information: intelligence = information."], ["§20.10", "SECTION 20.10"], "/concepts/intelligence-thesis"],
      [["谋算策略", "MouSuan strategy"], ["一个谋策略就是一个层谱抽象策略；一个算策略就是一个分而治之策略。", "A Mou strategy is a hierarchical-abstraction strategy; a Suan strategy is a divide-and-conquer strategy."], ["定义 15.12", "DEFINITION 15.12"], "/concepts/mousuan-strategy"],
      [["科学原理", "Scientific principles"], ["观察学习、自我意识与谋算博弈设计构成孙子谋算智能模型中“智”的三个步骤。", "Learning from observing, self-awareness, and MouSuan contest design form the three Zhi steps of the model."], ["定义 20.8(1)–(3)", "DEFINITION 20.8(1)–(3)"], "/concepts/scientific-principles"],
      [["工程原理", "Engineering principles"], ["自主决策、自主控制与行动、自主系统验证构成“能”的三个工程步骤。", "Autonomous decision, control and action, and system verification form the three Neng engineering steps."], ["定义 20.8(4)–(6)", "DEFINITION 20.8(4)–(6)"], "/concepts/engineering-principles"],
    ] as const,
    modules: [
      [["应用成果", "Applications"], ["让原理进入学习、决策、智能体与机器。", "Bring principles into learning, decision making, agents, and machines."], "/modules/applications"],
      [["孙子模型", "Sun Tzu model"], ["以观察学习、自我意识、谋算博弈设计、决策、行动和系统验证构成六步智能模型。", "A six-step intelligent model of learning from observing, self-awareness, MouSuan contest design, decision, action, and system verification."], "/modules/sun-tzu"],
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
    title: "从现实世界的完整建模\n到机器智能体系",
    lead: "从物理性质与信息性质出发，经由信息世界的定义、定律和数学原理，建立机器智能的科学原理与工程原理。",
    explore: "浏览理论体系",
    axioms: "进入公理与定理",
    guide: "体系结构",
    guideText: "三个层次由基础概念逐步导向机器智能，每个节点均可深入阅读。",
    enter: "进入",
    modulesLabel: "研究组织",
    modulesTitle: "五大研究模块",
    modulesText: "三层理论解释知识如何形成；五大模块分别组织科学原理、应用成果、孙子模型、知识与研究平台，以及谋算机器智能。",
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
    lead: "Starting from physical and informational properties, the system proceeds through definitions, laws, and mathematical principles of the information world to the scientific and engineering principles of machine intelligence.",
    explore: "Explore the system",
    axioms: "Open axioms & theorems",
    guide: "System structure",
    guideText: "Three layers move from foundational concepts to machine intelligence; each node opens deeper reading.",
    enter: "Open",
    modulesLabel: "RESEARCH ORGANISATION",
    modulesTitle: "Five research modules",
    modulesText: "The three-layer theory explains how knowledge is formed; the five modules organise scientific principles, applications, the Sun Tzu model, the knowledge and research platform, and MouSuan Machine Intelligence.",
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
