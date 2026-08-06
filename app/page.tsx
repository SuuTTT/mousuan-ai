"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";

const copy = {
  zh: {
    nav: [
      ["公理原理", "/principles/structural-information"],
      ["应用成果", "/applications/structured-ai"],
      ["孙子模型", "/books"],
      ["知识与研究", "/wiki/terminology"],
    ],
    kicker: "18 页研究手稿 · 三层内容结构",
    title: "从现实世界完整建模\n到机器智能体系",
    lead: "以层谱抽象组织内容：从对象的完备知识出发，进入信息世界的科学原理，最终形成可学习、可决策、可行动、可验证的机器智能体系。",
    explore: "沿三层结构进入",
    source: "查看 18 页原始手稿",
    guide: "阅读路径",
    guideText: "从上到下是理论形成过程；每个节点都可点入对应手稿内容。",
    layers: [
      {
        no: "01",
        pages: "手稿 01–07",
        title: "现实世界完整建模",
        summary: "现实世界包含物理世界与信息世界。对象的物理性质和信息性质联合起来，构成该对象的完备知识。",
        nodes: [
          ["物理世界", "对象本身决定其物理性质；以分而治之分析，以经典数学和微积分为支撑。", "02", "/framework#page-02"],
          ["信息世界", "存在性、作用、运动性，以及主体的需求和愿望，构成对象的信息性质。", "03", "/framework#page-03"],
          ["信息系统", "信息性质嵌入对象之间的关系系统，不能只通过拆分单个对象获得。", "05", "/framework#page-05"],
          ["完备知识", "物理性质与信息性质合起来，形成现实世界对象的完备知识。", "01 · 04 · 07", "/framework#page-07"],
        ],
        modules: [],
      },
      {
        no: "02",
        pages: "手稿 08–10",
        title: "信息世界的科学原理",
        summary: "分而治之不能直接处理信息系统。信息世界需要层谱抽象的全局认知，以及信息演算、解码与生成的数学原理。",
        nodes: [
          ["科学中的空档", "从通信中的不确定性度量，追问现实世界的信息如何定义和度量。", "08", "/framework#page-08"],
          ["结构信息", "以结构信息理论回答“信息的数学理论是什么”。", "09", "/framework#page-09"],
          ["公理化数学原理", "以信息演算、信息解码和信息生成为信息世界建立科学原理。", "10", "/framework#page-10"],
        ],
        modules: [
          ["原有模块 01", "公理原理", "结构信息、信息的数学原理与机器智能原理。", "/principles/structural-information"],
        ],
      },
      {
        no: "03",
        pages: "手稿 11–17",
        title: "机器智能体系",
        summary: "以信息为智能的本原要素，以谋与算为互补策略，再以科学原理和工程原理构成机器智能模型。",
        nodes: [
          ["三个基本问题", "智能的实质是什么？智能从哪里来？怎样实现智能？", "11", "/framework#page-11"],
          ["智能 = 信息", "一个自我意识体的智能由其信息性质定义。", "13", "/framework#page-13"],
          ["谋算策略", "谋全局：层谱抽象、全局认知；算局部：分而治之、逻辑推理。", "14 · 15", "/framework#page-14"],
          ["机器智能模型", "科学原理：学习、自我意识、博弈；工程原理：决策、行动、验证。", "12 · 16 · 17", "/framework#page-16"],
        ],
        modules: [
          ["原有模块 02", "应用成果", "让原理进入学习、决策、智能体与机器。", "/applications/structured-ai"],
          ["原有模块 03", "孙子模型", "把谋算策略转化为可研究、可设计、可验证的模型。", "/books"],
        ],
      },
    ],
    supportLabel: "贯穿三层的研究支持",
    supportTitle: "知识与研究",
    supportText: "原有模块 04 不属于某一个单独层级，它为完整建模、科学原理和机器体系共同提供术语、论文、代码与研究记录。",
    supportLinks: [
      ["术语 Wiki", "/wiki/terminology"],
      ["结构熵综述", "https://www.ijcai.org/proceedings/2025/1183"],
      ["研究仓库", "https://github.com/SuuTTT/structural-entropy-survey"],
      ["18 页核验记录", "/audit-redesign/"],
    ],
    evidence: "主要观点与原始来源",
    sources: [
      ["[1]", "Shannon (1948) · A Mathematical Theory of Communication", "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"],
      ["[2]", "Li & Pan (2016) · Structural Information and Dynamical Complexity of Networks", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"],
      ["[3]", "Zeng et al. (2025) · Hierarchical Decision Making Based on Structural Information Principles", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
    ],
    footer: "结构信息与机器智能 · 从完整建模到谋算智能",
  },
  en: {
    nav: [
      ["Principles", "/principles/structural-information"],
      ["Applications", "/applications/structured-ai"],
      ["Sun Tzu model", "/books"],
      ["Knowledge", "/wiki/terminology"],
    ],
    kicker: "18 research pages · three-layer content hierarchy",
    title: "From complete modelling of reality\nto machine intelligence",
    lead: "Organise the argument through hierarchical abstraction: begin with complete knowledge of objects, move into scientific principles of the information world, and form machine intelligence that can learn, decide, act, and verify.",
    explore: "Enter the three layers",
    source: "View the 18 original pages",
    guide: "Reading path",
    guideText: "Read top to bottom as the formation of the theory; every node opens its corresponding manuscript content.",
    layers: [
      { no: "01", pages: "Pages 01–07", title: "Complete modelling of reality", summary: "Reality contains a physical world and an information world. The physical and informational properties of an object together form complete knowledge of it.", nodes: [["Physical world", "An object's physical properties are determined by itself; divide-and-conquer, classical mathematics, and calculus provide the method and foundation.", "02", "/framework#page-02"], ["Information world", "Existence, role, movement—and a subject's needs and desires—form informational properties.", "03", "/framework#page-03"], ["Information systems", "Informational properties are embedded in systems of relations and cannot be recovered by decomposing one object alone.", "05", "/framework#page-05"], ["Complete knowledge", "Physical and informational properties together form complete knowledge of an object.", "01 · 04 · 07", "/framework#page-07"]], modules: [] },
      { no: "02", pages: "Pages 08–10", title: "Scientific principles of the information world", summary: "Divide-and-conquer cannot directly handle information systems. The information world needs global recognition through hierarchical abstraction and principles of information calculation, decoding, and generation.", nodes: [["A gap in science", "Move from uncertainty in communication to the definition and measurement of information in reality.", "08", "/framework#page-08"], ["Structural information", "Use structural information theory to address the mathematical theory of information.", "09", "/framework#page-09"], ["Axiomatic principles", "Establish information-world science through information calculation, decoding, and generation.", "10", "/framework#page-10"]], modules: [["Original module 01", "Scientific principles", "Structural information, mathematical principles of information, and machine-intelligence principles.", "/principles/structural-information"]] },
      { no: "03", pages: "Pages 11–17", title: "Machine-intelligence system", summary: "Take information as the fundamental element of intelligence, combine Mou and Suan as complementary strategies, and form a machine model from scientific and engineering principles.", nodes: [["Three basic questions", "What is intelligence? Where does it come from? How can it be realised?", "11", "/framework#page-11"], ["Intelligence = information", "The intelligence of a self-aware subject is defined by its informational properties.", "13", "/framework#page-13"], ["MouSuan strategy", "Mou addresses the whole through hierarchical abstraction; Suan addresses the local through divide-and-conquer reasoning.", "14 · 15", "/framework#page-14"], ["Machine model", "Scientific principles: learning, self-awareness, contest. Engineering principles: decision, action, verification.", "12 · 16 · 17", "/framework#page-16"]], modules: [["Original module 02", "Applications", "Bring principles into learning, decision making, agents, and machines.", "/applications/structured-ai"], ["Original module 03", "Sun Tzu model", "Turn MouSuan strategy into a model that can be studied, designed, and verified.", "/books"]] },
    ],
    supportLabel: "Research support across all three layers",
    supportTitle: "Knowledge & research",
    supportText: "Original module 04 does not belong to one layer alone. It supplies terminology, papers, code, and research records to complete modelling, scientific principles, and machine systems.",
    supportLinks: [["Terminology Wiki", "/wiki/terminology"], ["Structural entropy survey", "https://www.ijcai.org/proceedings/2025/1183"], ["Research repository", "https://github.com/SuuTTT/structural-entropy-survey"], ["18-page audit", "/audit-redesign/"]],
    evidence: "Key ideas & primary sources",
    sources: [["[1]", "Shannon (1948) · A Mathematical Theory of Communication", "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"], ["[2]", "Li & Pan (2016) · Structural Information and Dynamical Complexity of Networks", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"], ["[3]", "Zeng et al. (2025) · Hierarchical Decision Making Based on Structural Information Principles", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]],
    footer: "Structural Information & Machine Intelligence · From complete modelling to MouSuan Intelligence",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "en") setLang("en");
  }, []);
  const changeLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    next === "en" ? url.searchParams.set("lang", "en") : url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const c = copy[lang];

  return <main className="hierarchy-home">
    <nav className="hierarchy-nav">
      <a className="hierarchy-brand" href="#top"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a>
      <div className="hierarchy-nav-links">{c.nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
      <div className="hierarchy-lang"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div>
    </nav>

    <section id="top" className="hierarchy-hero"><div className="hierarchy-shell hierarchy-hero-grid"><div><p className="hierarchy-kicker">{c.kicker}</p><h1>{c.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hierarchy-lead">{c.lead}</p><div className="hierarchy-actions"><a href="#hierarchy">{c.explore}<b>↓</b></a><a href="/audit-redesign/">{c.source}<b>↗</b></a></div></div><aside><p>{c.guide}</p><span>{c.guideText}</span><ol>{c.layers.map((layer) => <li key={layer.no}><a href={`#layer-${layer.no}`}><b>{layer.no}</b><span>{layer.title}</span></a></li>)}</ol></aside></div></section>

    <section id="hierarchy" className="hierarchy-map hierarchy-shell">{c.layers.map((layer, layerIndex) => <section id={`layer-${layer.no}`} className="hierarchy-layer" key={layer.no}><header><div className="hierarchy-layer-no"><span>{layer.no}</span><small>{layer.pages}</small></div><div><h2>{layer.title}</h2><p>{layer.summary}</p></div></header><div className="hierarchy-node-grid">{layer.nodes.map(([title, text, pages, href]) => <a href={href} className="hierarchy-node" key={title}><span>{pages}</span><h3>{title}</h3><p>{text}</p><b>{lang === "zh" ? "进入" : "Open"} ↗</b></a>)}</div>{layer.modules.length > 0 && <div className="hierarchy-modules">{layer.modules.map(([eyebrow, title, text, href]) => <a href={href} key={title}><span>{eyebrow}</span><div><h3>{title}</h3><p>{text}</p></div><b>→</b></a>)}</div>}{layerIndex < c.layers.length - 1 && <div className="hierarchy-flow" aria-hidden="true"><span>↓</span></div>}</section>)}</section>

    <section className="hierarchy-support"><div className="hierarchy-shell"><header><p>{c.supportLabel}</p><h2>{c.supportTitle}</h2><span>{c.supportText}</span></header><div>{c.supportLinks.map(([label, href]) => <a href={href} key={label} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"}>{label}<b>↗</b></a>)}</div></div></section>

    <section className="hierarchy-evidence"><div className="hierarchy-shell"><p>{c.evidence}</p><div>{c.sources.map(([no, title, href]) => <a href={href} target="_blank" rel="noreferrer" key={no}><span>{no}</span>{title}<b>↗</b></a>)}</div></div></section>
    <footer className="hierarchy-footer"><div className="hierarchy-shell"><span>{c.footer}</span><a href="#top">↑</a></div></footer>
  </main>;
}
