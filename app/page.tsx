"use client";

import { useState, type MouseEvent } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: ["发现", "基础原理", "研究方向", "研究者", "文库"],
    kicker: "结构信息 · 人工智能 · 谋算智能",
    hero: "发现智能\n结构的原理。",
    intro: "我们探索一个可解释、可信且可控的人工智能新方向：让学习、推理、博弈与行动建立在信息世界的结构性原理之上。",
    explore: "探索研究",
    watch: "认识团队",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "智能不是一个黑箱。它可以被观察、解码、组织，并被赋予可检验的原理。",
    foundationKicker: "基础原理",
    foundationTitle: "从结构信息，到智能科学。",
    foundationLead: "把复杂世界理解为可组织、可解码的信息结构，建立关于学习、意识与人工智能的数学语言。",
    breakthroughs: [
      ["01", "结构信息", "信息世界的层谱抽象与基本定律，为复杂系统提供结构性的度量与描述。"],
      ["02", "信息的数学原理", "信息演算、解码与生成：让从数据到知识的过程成为可分析的问题。"],
      ["03", "谋算智能", "以观察、学习、自我意识和博弈为核心，探索人工智能的新科学原则。"],
    ],
    researchKicker: "研究方向",
    researchTitle: "下一代智能，来自更好的结构。",
    research: [
      ["01", "谋算学习", "从计算智能到谋算智能：用结构信息解释学习、抽象与决策。"],
      ["02", "孙子模型", "将观察、推演和行动连接为一个基于信息科学原理的世界模型。"],
      ["03", "具生智能", "从自我意识的信息理论出发，发展自主、可控、可验证的智能系统。"],
      ["04", "结构化 AI", "从编码树到大模型与智能体，探索可解释的结构化能力。"],
    ],
    peopleKicker: "核心研究者",
    peopleTitle: "理论在共同研究中生长。",
    peopleLead: "直接查看已核验的个人主页或代表论文。",
    people: [
      ["Angsheng Li", "结构信息与智能科学", "代表论文", "https://arxiv.org/abs/2001.09637"],
      ["Xianghua Zeng", "层级决策与多智能体协同", "代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["Yifan Wei", "大语言模型、知识编辑与智能体", "个人主页", "https://weiyifan1023.github.io/"],
      ["Dingli Su", "结构信息决策与智能系统", "代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
    ],
    libraryKicker: "精选文库",
    libraryTitle: "阅读原理如何成为洞见。",
    library: [
      ["打破香农的墙", "从香农熵到编码树，结构信息的诞生", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["什么值得注意", "从编码树到 Transformer 的注意力原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["学习到底是什么", "从编码树到知识树", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
    ],
    footer: "结构信息与人工智能研究资料库",
  },
  en: {
    nav: ["Discover", "Principles", "Research", "People", "Library"],
    kicker: "Structural information · AI · Strategic-computational intelligence",
    hero: "Discover the principles\nof intelligent structure.",
    intro: "We explore an explainable, trustworthy, and controllable direction for artificial intelligence—grounding learning, reasoning, games, and action in structural principles of the information world.",
    explore: "Explore research",
    watch: "Meet the researchers",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "Intelligence need not remain a black box. It can be observed, decoded, organised, and grounded in testable principles.",
    foundationKicker: "FOUNDATIONAL PRINCIPLES",
    foundationTitle: "From structural information to a science of intelligence.",
    foundationLead: "We understand complex worlds as information structures that can be organised and decoded—forming a mathematical language for learning, consciousness, and AI.",
    breakthroughs: [
      ["01", "Structural information", "A spectrum-of-hierarchies abstraction and foundational laws for measuring and describing complex systems."],
      ["02", "Mathematics of information", "Information calculus, decoding, and generation: making the path from data to knowledge analytically tractable."],
      ["03", "Strategic-computational intelligence", "A scientific program centred on observation, learning, self-awareness, and games."],
    ],
    researchKicker: "RESEARCH DIRECTIONS",
    researchTitle: "The next generation of intelligence starts with better structure.",
    research: [
      ["01", "Strategic learning", "From computational to strategic-computational intelligence: using structure to explain learning, abstraction, and choice."],
      ["02", "Sun Tzu model", "A world model grounded in information science, joining observation, deliberation, and action."],
      ["03", "Embodied intelligence", "From an information theory of self-awareness toward autonomous, controllable, and testable systems."],
      ["04", "Structured AI", "From encoding trees to foundation models and agents: interpretable structured capability."],
    ],
    peopleKicker: "CORE RESEARCHERS",
    peopleTitle: "Theory grows through shared inquiry.",
    peopleLead: "Visit verified personal homepages and representative publications.",
    people: [
      ["Angsheng Li", "Structural information and the science of intelligence", "Key paper", "https://arxiv.org/abs/2001.09637"],
      ["Xianghua Zeng", "Hierarchical decision-making and multi-agent coordination", "Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["Yifan Wei", "LLMs, knowledge editing, and agents", "Homepage", "https://weiyifan1023.github.io/"],
      ["Dingli Su", "Structural-information decision-making and intelligent systems", "Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
    ],
    libraryKicker: "SELECTED LIBRARY",
    libraryTitle: "Read how principles become insight.",
    library: [
      ["Beyond Shannon’s wall", "From Shannon entropy to encoding trees: the birth of structural information", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["What is worth attention?", "From encoding trees to the attention principle of Transformers", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["What is learning?", "From encoding trees to knowledge trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
    ],
    footer: "Structural Information & Artificial Intelligence research library",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = content[lang];
  const ids = ["discover", "principles", "research", "people", "library"];
  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main>
    <nav className="nav"><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="nav-links">{c.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} onClick={goTo(ids[i])}>{label}</a>)}</div><div className="lang"><button className={lang === "zh" ? "is-on" : ""} onClick={() => setLang("zh")}>中</button><i>/</i><button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button></div></nav>

    <section id="discover" className="hero"><div className="hero-copy"><p className="overline">{c.kicker}</p><h1>{c.hero.split("\n").map(line => <span key={line}>{line}</span>)}</h1><p className="intro">{c.intro}</p><div className="hero-actions"><a className="button light" href="#principles" onClick={goTo("principles")}>{c.explore} <b>↘</b></a><a className="text-link" href="#people" onClick={goTo("people")}>{c.watch} <b>→</b></a></div></div><div className="hero-visual" aria-hidden="true"><div className="visual-label"><span>∞</span> {c.signal}</div></div></section>

    <section className="manifesto"><p>“{c.manifesto}”</p></section>

    <section id="principles" className="section shell"><header className="section-head"><div><p className="overline">{c.foundationKicker}</p><h2>{c.foundationTitle}</h2></div><p>{c.foundationLead}</p></header><div className="breakthroughs">{c.breakthroughs.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>

    <section id="research" className="research"><div className="shell"><header className="section-head"><div><p className="overline">{c.researchKicker}</p><h2>{c.researchTitle}</h2></div></header><div className="research-list">{c.research.map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div></div></section>

    <section id="people" className="section shell people"><header className="section-head"><div><p className="overline">{c.peopleKicker}</p><h2>{c.peopleTitle}</h2></div><p>{c.peopleLead}</p></header><div className="people-grid">{c.people.map(([name, focus, linkLabel, href], i) => <article key={name}><span className="portrait">{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{focus}</p><a href={href} target="_blank" rel="noreferrer">{linkLabel} <b>↗</b></a></article>)}</div></section>

    <section id="library" className="library"><div className="shell"><header className="section-head"><div><p className="overline">{c.libraryKicker}</p><h2>{c.libraryTitle}</h2></div></header><div className="library-grid">{c.library.map(([title, text, href], i) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></div></section>

    <footer><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><p>{c.footer}</p><a href="#discover" onClick={goTo("discover")}>↑</a></footer>
  </main>;
}
