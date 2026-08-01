"use client";

import { useState, type MouseEvent } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: ["首页", "公理原理", "应用成果", "孙子模型", "研究者", "文库"],
    ids: ["discover", "principles", "applications", "suntzu", "people", "library"],
    kicker: "结构信息 · 人工智能 · 谋算智能",
    hero: "发现智能\n结构的原理。",
    intro: "谋算智能科学技术：让人工智能有原理、可解释、高效、可信、自主、可控，并形成从技术路线到智能机器与智能机器人的完整体系。",
    explore: "探索四大板块",
    watch: "认识研究者",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "智能不是一个黑箱。它可以被观察、解码、组织，并被赋予可检验的原理。一个自我意识体的智能就是它的信息：智能 = 信息。",
    foundationKicker: "第一板块 · 公理化科学原理",
    foundationTitle: "从信息世界，到人工智能科学。",
    foundationLead: "以层谱抽象为总方法，建立信息演算、信息解码、信息生成三大支柱，并发展观察学习、自我意识与谋算博弈的信息科学原理。",
    breakthroughs: [
      ["2016", "结构信息", "编码树与结构熵：度量嵌入复杂系统结构中的信息，建立信息世界的层谱抽象范式。", "https://arxiv.org/abs/2001.09637"],
      ["2024", "信息的数学原理", "信息演算理论、信息解码原理、信息生成原理：面向离散系统的信息世界数学语言。", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["2024", "谋算智能的信息科学原理", "以观察学习、自我意识、谋算博弈为三大支柱，从计算智能走向有原理的谋算智能。", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["AI", "人工智能原理", "智能的数学原理、谋算决策、自主控制与自主验证，共同构成可解释的人工智能科学技术路线。", "https://suuttt.github.io/"],
    ],
    applicationsKicker: "第二板块 · 应用成果",
    applicationsTitle: "让原理进入学习、决策与机器。",
    applicationsLead: "应用成果按研究主题组织；应用总结表可继续扩展为论文、代码、数据集、演示与工程项目。",
    applications: [
      ["01", "谋算学习", "基于信息科学原理的学习：从计算智能的黑箱路线，走向结构可见、过程可解释的白盒路线。", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["02", "具生智能", "以自我意识的信息理论为核心，探索自主、可信、可验证的智能体与智能机器。", "https://suuttt.github.io/"],
      ["03", "结构化决策", "用结构信息解释层级决策、多智能体协同、强化学习探索与动态环境中的策略选择。", "https://dblp.org/pid/165/5653.html"],
      ["04", "结构化 AI", "从编码树到大模型与智能体，沉淀可解释的知识编辑、推理和行动能力。", "https://github.com/weiyifan1023"],
    ],
    suntzuKicker: "第三板块 · 孙子兵法的人工智能原理",
    suntzuTitle: "谋与算，构成智能的策略。",
    suntzuLead: "《孙子兵法》以战争现象为对象，把物质与信息结合为动态演化的体系对抗博弈；孙子模型把它转化为可研究、可设计、可验证的人工智能框架。",
    bookTitle: "孙子兵法的人工智能原理",
    bookSub: "物质与信息结合的公理化科学原理 · 1,115 pages",
    bookAction: "阅读 PDF",
    lawsTitle: "孙子五大定律 · 物质与信息结合",
    laws: ["战争是物质与信息结合的体系对抗", "战争结局由物质与信息的结合决定", "战争现象具有可度量、可推演的规律", "谋与算是信息解码与策略生成", "知彼、知己、知天、知地形成胜利条件"],
    modelTitle: "孙子模型 / 孙子机",
    modelLead: "一个自我意识主体的智能闭环：",
    model: ["自主学习 · 知彼", "自我意识 · 知己", "谋算博弈 · 设计策略", "自主决策", "自主行动", "系统验证 · 判断胜负与获利"],
    peopleKicker: "研究者与成果",
    peopleTitle: "理论在共同研究与应用中生长。",
    peopleLead: "核心研究者、代表论文与外部研究成果入口。",
    people: [
      ["Angsheng Li", "结构信息、信息世界数学原理与智能科学", [["代表论文", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]]],
      ["Xianghua Zeng", "层级决策、多智能体协同与结构信息原则", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
      ["Yifan Wei", "大语言模型、知识编辑、智能体与 AI safety", [["个人主页", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]]],
      ["Dingli Su", "结构信息决策、结构熵与智能系统工程", [["个人主页", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
    ],
    libraryKicker: "第四板块 · 其它重要应用成果",
    libraryTitle: "把重要成果与解释文章放进同一座知识库。",
    libraryLead: "精选原理文章、研究解读与外部成果入口，后续可按主题继续扩充。",
    library: [
      ["幂律、全息律与黑洞", "自然演化网络的结构信息", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484862&idx=1&sn=04aad29e2970569eac3e2c16e3de4b7e"],
      ["二分性与相变", "结构信息在经典图上的精确度量", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484854&idx=1&sn=0ae2c9e93b39178d4c2e22e298c8b490"],
      ["获得信息，不等于获得利", "自我意识的数学定义", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["学习到底是什么", "从编码树到知识树", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
      ["谋算《孙子兵法》", "孙子兵法的信息科学原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53e92d3a2cc7c6b7fd"],
      ["信息是怎么生成的", "从熵极大到信息隐藏", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484572&idx=1&sn=1e5601b8c96a83ef6ccaf928167e28f3"],
      ["控制论没做完的事", "推理就是编码", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484666&idx=1&sn=bfc4d43ed0037707c404b3e92255c03a"],
      ["什么值得注意", "从编码树到 Transformer 的注意力原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["打破香农的墙", "从香农熵到编码树，结构信息的诞生", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["为什么整体不等于部分之和", "复杂系统的信息科学原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484602&idx=1&sn=42a9b188affc0f472981d0e6c2c3351f"],
    ],
    footer: "结构信息与人工智能研究资料库 · 谋算智能科学技术",
  },
  en: {
    nav: ["Discover", "Principles", "Applications", "Sun Tzu model", "People", "Library"],
    ids: ["discover", "principles", "applications", "suntzu", "people", "library"],
    kicker: "Structural information · AI · Strategic-computational intelligence",
    hero: "Discover the principles\nof intelligent structure.",
    intro: "Strategic-computational intelligence: an AI technology route that is principled, explainable, efficient, trustworthy, autonomous, and controllable—from methods to intelligent machines and robots.",
    explore: "Explore four pillars",
    watch: "Meet the researchers",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "Intelligence need not remain a black box. It can be observed, decoded, organised, and grounded in testable principles. The intelligence of a self-aware subject is its information: intelligence = information.",
    foundationKicker: "PILLAR 01 · AXIOMATIC SCIENTIFIC PRINCIPLES",
    foundationTitle: "From the information world to a science of AI.",
    foundationLead: "Using spectrum-of-hierarchies abstraction as the general method, we build information calculus, decoding, and generation—and the information-science principles of learning, self-awareness, and strategic games.",
    breakthroughs: [
      ["2016", "Structural information", "Encoding trees and structural entropy measure information embedded in complex system structure and establish a spectrum-of-hierarchies abstraction.", "https://arxiv.org/abs/2001.09637"],
      ["2024", "Mathematical principles of information", "Information calculus, information decoding, and information generation: a mathematical language for discrete information-world systems.", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["2024", "Information science of strategic intelligence", "Observation-based learning, self-awareness, and strategic games form the three pillars of a principled intelligence science.", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["AI", "Principles of Artificial Intelligence", "Mathematical intelligence principles, strategic decisions, autonomous control, and autonomous verification form a white-box AI route.", "https://suuttt.github.io/"],
    ],
    applicationsKicker: "PILLAR 02 · APPLIED RESEARCH OUTCOMES",
    applicationsTitle: "Put principles to work in learning, decisions, and machines.",
    applicationsLead: "Outcomes are grouped by theme and can grow into a portfolio of papers, code, datasets, demonstrations, and engineering projects.",
    applications: [
      ["01", "Strategic-computational learning", "Learning from information-science principles: moving from black-box computational intelligence toward structured, explainable white-box systems.", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["02", "Embodied intelligence", "An information theory of self-awareness for autonomous, trustworthy, and verifiable agents and intelligent machines.", "https://suuttt.github.io/"],
      ["03", "Structured decision-making", "Structural information for hierarchical decisions, multi-agent coordination, reinforcement-learning exploration, and dynamic environments.", "https://dblp.org/pid/165/5653.html"],
      ["04", "Structured AI", "From encoding trees to foundation models and agents: interpretable knowledge editing, reasoning, and action.", "https://github.com/weiyifan1023"],
    ],
    suntzuKicker: "PILLAR 03 · AI PRINCIPLES OF SUN TZU’S THE ART OF WAR",
    suntzuTitle: "Strategy is the intelligence of planning and computation.",
    suntzuLead: "Treating warfare as a system-level, dynamically evolving contest of matter and information, the Sun Tzu model turns the Art of War into a researchable, designable, and verifiable AI framework.",
    bookTitle: "AI Principles of Sun Tzu’s The Art of War",
    bookSub: "Axiomatic scientific principles combining matter and information · 1,115 pages",
    bookAction: "Read the PDF",
    lawsTitle: "The five Sun Tzu laws · matter and information",
    laws: ["War is a system-level contest combining matter and information", "Outcomes are determined by the combination of matter and information", "War phenomena have measurable, inferable regularities", "Planning and computation decode information and generate strategy", "Knowing the adversary, self, time, and terrain creates the conditions for victory"],
    modelTitle: "The Sun Tzu model / Sun Tzu machine",
    modelLead: "The intelligence loop of a self-aware subject:",
    model: ["Autonomous learning · know the adversary", "Self-awareness · know the self", "Strategic game design", "Autonomous decision", "Autonomous action", "System verification · test victory and gain"],
    peopleKicker: "PEOPLE & OUTCOMES",
    peopleTitle: "Theory grows through shared inquiry and application.",
    peopleLead: "Core researchers, representative publications, and routes to other significant outcomes.",
    people: [
      ["Angsheng Li", "Structural information, information-world mathematics, and intelligence science", [["Key paper", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]]],
      ["Xianghua Zeng", "Hierarchical decision-making, multi-agent coordination, and structural principles", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
      ["Yifan Wei", "Large language models, knowledge editing, agents, and AI safety", [["Homepage", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]]],
      ["Dingli Su", "Structural-information decision-making, structural entropy, and intelligent systems", [["Homepage", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
    ],
    libraryKicker: "PILLAR 04 · OTHER SIGNIFICANT APPLIED OUTCOMES",
    libraryTitle: "Keep important results and explanatory work in one library.",
    libraryLead: "Selected principles, research explainers, and external outcomes—with room for the next application summary.",
    library: [
      ["Power laws, holographic laws, and black holes", "Structural information in naturally evolving networks", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484862&idx=1&sn=04aad29e2970569eac3e2c16e3de4b7e"],
      ["Bipartiteness and phase transitions", "Exact structural-information measures on classical graphs", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484854&idx=1&sn=0ae2c9e93b39178d4c2e22e298c8b490"],
      ["Information is not utility", "A mathematical definition of self-awareness", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["What is learning?", "From encoding trees to knowledge trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
      ["Strategic computation: The Art of War", "Information-science principles of Sun Tzu’s classic", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53e92d3a2cc7c6b7fd"],
      ["How is information generated?", "From maximum entropy to hidden information", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484572&idx=1&sn=1e5601b8c96a83ef6ccaf928167e28f3"],
      ["What cybernetics left unfinished", "Inference is coding", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484666&idx=1&sn=bfc4d43ed0037707c404b3e92255c03a"],
      ["What deserves attention?", "From encoding trees to Transformer attention", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["Beyond Shannon’s wall", "From Shannon entropy to encoding trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["Why the whole is not the sum of its parts", "Information science of complex systems", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484602&idx=1&sn=42a9b188affc0f472981d0e6c2c3351f"],
    ],
    footer: "Structural Information & Artificial Intelligence research library · Strategic-computational intelligence",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = content[lang];
  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main>
    <nav className="nav"><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="nav-links">{c.nav.map((label, i) => <a key={label} href={`#${c.ids[i]}`} onClick={goTo(c.ids[i])}>{label}</a>)}</div><div className="lang"><button className={lang === "zh" ? "is-on" : ""} onClick={() => setLang("zh")}>中</button><i>/</i><button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button></div></nav>

    <section id="discover" className="hero"><div className="hero-copy"><p className="overline">{c.kicker}</p><h1>{c.hero.split("\n").map(line => <span key={line}>{line}</span>)}</h1><p className="intro">{c.intro}</p><div className="hero-actions"><a className="button light" href="#principles" onClick={goTo("principles")}>{c.explore} <b>↘</b></a><a className="text-link" href="#people" onClick={goTo("people")}>{c.watch} <b>→</b></a></div></div><div className="hero-visual" aria-hidden="true"><div className="visual-label"><span>∞</span> {c.signal}</div></div></section>

    <section className="manifesto"><p>“{c.manifesto}”</p></section>

    <section id="principles" className="section shell"><header className="section-head"><div><p className="overline">{c.foundationKicker}</p><h2>{c.foundationTitle}</h2></div><p>{c.foundationLead}</p></header><div className="breakthroughs">{c.breakthroughs.map(([num, title, text, href]) => <a href={href} target="_blank" rel="noreferrer" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></section>

    <section id="applications" className="research"><div className="shell"><header className="section-head"><div><p className="overline">{c.applicationsKicker}</p><h2>{c.applicationsTitle}</h2></div><p>{c.applicationsLead}</p></header><div className="research-list">{c.applications.map(([num, title, text, href]) => <a href={href} target="_blank" rel="noreferrer" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></a>)}</div></div></section>

    <section id="suntzu" className="suntzu section"><div className="shell"><header className="section-head"><div><p className="overline">{c.suntzuKicker}</p><h2>{c.suntzuTitle}</h2></div><p>{c.suntzuLead}</p></header><div className="suntzu-grid"><a className="book-card" href="/sun-tzu-ai-principles.pdf" target="_blank" rel="noreferrer"><span className="book-mark">PDF</span><h3>{c.bookTitle}</h3><p>{c.bookSub}</p><strong>{c.bookAction} ↗</strong></a><div className="laws-card"><p className="overline">{c.lawsTitle}</p><ol>{c.laws.map((law, i) => <li key={law}><span>0{i + 1}</span>{law}</li>)}</ol></div></div><div className="model-block"><div><p className="overline">{c.modelTitle}</p><p className="model-lead">{c.modelLead}</p></div><div className="model-steps">{c.model.map((step, i) => <div key={step}><span>0{i + 1}</span><p>{step}</p></div>)}</div></div></div></section>

    <section id="people" className="section shell people"><header className="section-head"><div><p className="overline">{c.peopleKicker}</p><h2>{c.peopleTitle}</h2></div><p>{c.peopleLead}</p></header><div className="people-grid">{c.people.map(([name, focus, links], i) => <article key={name}><span className="portrait">{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{focus}</p><div className="profile-links">{links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <b>↗</b></a>)}</div></article>)}</div></section>

    <section id="library" className="library"><div className="shell"><header className="section-head"><div><p className="overline">{c.libraryKicker}</p><h2>{c.libraryTitle}</h2></div><p>{c.libraryLead}</p></header><div className="library-grid">{c.library.map(([title, text, href], i) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>0{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></div></section>

    <footer><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><p>{c.footer}</p><a href="#discover" onClick={goTo("discover")}>↑</a></footer>
  </main>;
}
