"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";

type Link = [label: string, href: string];

const content = {
  zh: {
    nav: ["四个入口", "引文依据"],
    kicker: "结构信息 · 谋算方法 · 机器智能",
    hero: "从现实建模，\n到机器智能",
    lead: "以层谱抽象组织复杂世界：先认识整体，再处理局部；让科学原理、策略方法、机器系统与研究依据各归其位。",
    primaryAction: "进入四个入口",
    citation: "[1]",
    mapLabel: "总纲",
    map: [
      ["01", "现实世界完整建模", "从对象、关系与系统整体开始。"],
      ["02", "信息世界", "把可观察的组织转化为可解码的信息结构。"],
      ["03", "机器智能体系", "将认知、决策、行动与验证连成闭环。"],
    ],
    sectionKicker: "四个主入口",
    sectionTitle: "简单进入，逐层展开",
    sectionLead: "首页只说明结构；每个入口保留原有内容、资料和继续阅读路径。",
    pillars: [
      {
        no: "01",
        title: "科学原理",
        summary: "从结构信息到信息的数学原理，说明信息世界如何被定义、组织和解码。",
        question: "信息如何承载结构，并成为可推演的知识？",
        href: "/principles/structural-information",
        action: "进入科学原理",
        links: [["结构信息", "/principles/structural-information"], ["信息的数学原理", "/principles/information-mathematics"], ["机器智能原理", "/principles/ai-principles"]] as Link[],
        cite: "[1]",
      },
      {
        no: "02",
        title: "谋算方法",
        summary: "“谋”负责全局的层谱组织，“算”负责局部的计算与推理；二者共同把整体目标落到可执行的策略。",
        question: "如何在整体认知与局部求解之间往返？",
        href: "/principles/strategic-intelligence",
        action: "进入谋算方法",
        links: [["谋算智能", "/principles/strategic-intelligence"], ["孙子模型与书籍", "/books"], ["层级决策论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]] as Link[],
        cite: "[2]",
      },
      {
        no: "03",
        title: "机器智能与应用",
        summary: "把原理和方法落实为学习、决策、具身系统与可验证的智能机器。",
        question: "如何让系统理解整体、计算局部，并有效行动？",
        href: "/applications/structured-ai",
        action: "进入机器智能与应用",
        links: [["结构化机器智能", "/applications/structured-ai"], ["谋算学习", "/applications/strategic-learning"], ["结构化决策", "/applications/structured-decision-making"], ["具身智能", "/applications/embodied-intelligence"]] as Link[],
        cite: "[2]",
      },
      {
        no: "04",
        title: "知识与研究",
        summary: "在这里查阅术语、论文、代码和研究记录；主要观点均回到可追溯的原始来源。",
        question: "每一项主张可由什么资料继续核对？",
        href: "/wiki/terminology",
        action: "进入知识与研究",
        links: [["术语 Wiki", "/wiki/terminology"], ["结构熵综述", "https://www.ijcai.org/proceedings/2025/1183"], ["研究仓库", "https://github.com/SuuTTT/structural-entropy-survey"], ["审核记录", "/audit-redesign/"]] as Link[],
        cite: "[1][2][3]",
      },
    ],
    sourcesKicker: "主要观点的依据",
    sourcesTitle: "引文与研究来源",
    sourcesLead: "首页使用简短说明；定义、定理与具体结果以原始论文、专著或项目研究资料为准。",
    sources: [
      ["[1]", "Li, A. & Pan, Y. (2016). Structural Information and Dynamical Complexity of Networks.", "IEEE Transactions on Information Theory.", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"],
      ["[2]", "Zeng, X. et al. (2025). Hierarchical Decision Making Based on Structural Information Principles.", "Journal of Machine Learning Research, 26.", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["[3]", "Shannon, C. E. (1948). A Mathematical Theory of Communication.", "Bell System Technical Journal, 27.", "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"],
    ] as [string, string, string, string][],
    note: "“谋算”“层谱抽象”等项目方法论的正式表述，以相关专著、论文和项目工作笔记为准。",
    footer: "结构信息与机器智能 · 用清晰的层次组织复杂问题",
  },
  en: {
    nav: ["Four entries", "Sources"],
    kicker: "Structural information · MouSuan strategy · machine intelligence",
    hero: "From modelling reality\nto machine intelligence",
    lead: "Organise a complex world through hierarchical abstraction: recognise the whole before working on the local, and give principles, strategy, systems, and evidence their proper place.",
    primaryAction: "Explore the four entries",
    citation: "[1]",
    mapLabel: "Framework",
    map: [
      ["01", "Model reality as a whole", "Begin with objects, relations, and systems."],
      ["02", "Information world", "Turn observable organisation into decodable information structures."],
      ["03", "Machine intelligence", "Connect recognition, decision, action, and verification."],
    ],
    sectionKicker: "Four primary entries",
    sectionTitle: "Enter simply, unfold in layers",
    sectionLead: "The home page explains only the structure. Each entry preserves the original material, references, and paths for deeper reading.",
    pillars: [
      { no: "01", title: "Scientific principles", summary: "From structural information to mathematical principles of information: how the information world is defined, organised, and decoded.", question: "How can structure carry information and become inferable knowledge?", href: "/principles/structural-information", action: "Explore principles", links: [["Structural information", "/principles/structural-information"], ["Mathematical principles of information", "/principles/information-mathematics"], ["Machine-intelligence principles", "/principles/ai-principles"]] as Link[], cite: "[1]" },
      { no: "02", title: "MouSuan strategy", summary: "Mou organises the whole through hierarchies; Suan computes and reasons locally. Together they bring whole-system goals into executable strategy.", question: "How can whole-system recognition and local problem solving inform each other?", href: "/principles/strategic-intelligence", action: "Explore MouSuan", links: [["MouSuan Intelligence", "/principles/strategic-intelligence"], ["Sun Tzu model & books", "/books"], ["Hierarchical decision paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]] as Link[], cite: "[2]" },
      { no: "03", title: "Machine intelligence & applications", summary: "Put principles and strategy into learning, decision making, embodied systems, and verifiable intelligent machines.", question: "How can a system understand the whole, calculate the local, and act effectively?", href: "/applications/structured-ai", action: "Explore applications", links: [["Structured AI", "/applications/structured-ai"], ["Strategic learning", "/applications/strategic-learning"], ["Structured decision making", "/applications/structured-decision-making"], ["Embodied intelligence", "/applications/embodied-intelligence"]] as Link[], cite: "[2]" },
      { no: "04", title: "Knowledge & research", summary: "Find terms, papers, code, and research records here. Each key proposition returns to traceable primary sources.", question: "Which sources let each claim be checked further?", href: "/wiki/terminology", action: "Explore research", links: [["Terminology Wiki", "/wiki/terminology"], ["Structural entropy survey", "https://www.ijcai.org/proceedings/2025/1183"], ["Research repository", "https://github.com/SuuTTT/structural-entropy-survey"], ["Audit record", "/audit-redesign/"]] as Link[], cite: "[1][2][3]" },
    ],
    sourcesKicker: "Evidence for key ideas",
    sourcesTitle: "Citations & research sources",
    sourcesLead: "The home page is deliberately concise. Original papers, books, and project research materials remain the source for definitions, theorems, and concrete results.",
    sources: [
      ["[1]", "Li, A. & Pan, Y. (2016). Structural Information and Dynamical Complexity of Networks.", "IEEE Transactions on Information Theory.", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"],
      ["[2]", "Zeng, X. et al. (2025). Hierarchical Decision Making Based on Structural Information Principles.", "Journal of Machine Learning Research, 26.", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["[3]", "Shannon, C. E. (1948). A Mathematical Theory of Communication.", "Bell System Technical Journal, 27.", "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"],
    ] as [string, string, string, string][],
    note: "Formal definitions of the project’s MouSuan and hierarchical-abstraction methodology remain in the related monographs, papers, and project working notes.",
    footer: "Structural Information & Machine Intelligence · Organising complex questions with clear hierarchy",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  useEffect(() => {
    const saved = new URLSearchParams(window.location.search).get("lang");
    if (saved === "en") setLang("en");
  }, []);
  const changeLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    next === "en" ? url.searchParams.set("lang", "en") : url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const c = content[lang];

  return <main className="architecture-home">
    <nav className="architecture-nav" aria-label={lang === "zh" ? "主导航" : "Primary navigation"}>
      <a className="architecture-brand" href="#top"><img src="/logo-encoding-tree.svg" alt="" /><span>STRUCTURAL<br />INTELLIGENCE</span></a>
      <div className="architecture-nav-links"><a href="#entries">{c.nav[0]}</a><a href="#sources">{c.nav[1]}</a></div>
      <div className="architecture-lang" aria-label="Language"><button className={lang === "zh" ? "active" : ""} onClick={() => changeLang("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button></div>
    </nav>

    <section id="top" className="architecture-hero">
      <div className="architecture-shell architecture-hero-grid">
        <div className="architecture-hero-copy"><p className="architecture-kicker">{c.kicker}</p><h1>{c.hero.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p>{c.lead}<a className="inline-citation" href="#sources">{c.citation}</a></p><a className="architecture-cta" href="#entries">{c.primaryAction}<b>↓</b></a></div>
        <div className="architecture-map" aria-label={c.mapLabel}><p>{c.mapLabel}</p>{c.map.map(([no, title, detail]) => <div className="architecture-map-step" key={no}><span>{no}</span><div><strong>{title}</strong><small>{detail}</small></div></div>)}</div>
      </div>
    </section>

    <section id="entries" className="architecture-entries architecture-shell">
      <header className="architecture-section-head"><p>{c.sectionKicker}</p><h2>{c.sectionTitle}</h2><span>{c.sectionLead}</span></header>
      <div className="architecture-card-grid">{c.pillars.map((pillar) => <article className="architecture-card" key={pillar.no}><div className="architecture-card-top"><span>{pillar.no}</span><a href={`#sources`} className="inline-citation">{pillar.cite}</a></div><h3>{pillar.title}</h3><p>{pillar.summary}</p><blockquote>{pillar.question}</blockquote><div className="architecture-card-links">{pillar.links.map(([label, href]) => <a href={href} key={label} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"}>{label}<b>↗</b></a>)}</div><a className="architecture-card-action" href={pillar.href}>{pillar.action}<b>→</b></a></article>)}</div>
    </section>

    <section id="sources" className="architecture-sources"><div className="architecture-shell"><header className="architecture-section-head"><p>{c.sourcesKicker}</p><h2>{c.sourcesTitle}</h2><span>{c.sourcesLead}</span></header><ol>{c.sources.map(([key, title, venue, href]) => <li key={key}><span>{key}</span><div><a href={href} target="_blank" rel="noreferrer">{title}</a><p>{venue}</p></div><b>↗</b></li>)}</ol><p className="architecture-note">{c.note}</p></div></section>

    <footer className="architecture-footer"><div className="architecture-shell"><span>{c.footer}</span><a href="#top">↑</a></div></footer>
  </main>;
}
