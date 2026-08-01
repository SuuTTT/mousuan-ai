"use client";

import { useState } from "react";

type Lang = "zh" | "en";

const t = {
  zh: {
    nav: ["原理", "研究与应用", "孙子模型", "文库"],
    eyebrow: "谋算智能科学技术",
    heroTitle: "让智能\n看见结构。",
    heroText: "从信息世界的公理化原理出发，探索可解释、高效、可信、自主、可控的人工智能技术路线。",
    heroCta: "探索成果",
    heroCta2: "阅读导言",
    sideLabel: "核心命题",
    sideText: "智能 = 信息。\n智能的策略是谋与算。",
    signal: "STRUCTURAL / INFORMATIC / INTELLIGENT",
    principlesEyebrow: "01 — 基础原理",
    principlesTitle: "信息世界的公理化科学原理",
    principlesLead: "以结构信息为起点，建立关于学习、推理、意识与智能的可检验科学语言。",
    principles: [
      ["01", "结构信息", "2016", "层谱抽象范式与信息世界基本定律；从编码树出发描述结构。"],
      ["02", "人工智能科学", "2024", "智能的数学原理：信息演算、信息解码与信息生成。"],
      ["03", "人工智能原理", "2024", "谋算智能的信息科学原理：观察、学习、自我意识与博弈。"],
    ],
    directionsEyebrow: "02 — 研究与应用",
    directionsTitle: "从原理到可用的智能技术",
    directionsLead: "围绕“有原理、可解释、高效、可信、自主、可控”的宗旨，构建新一代智能机器与机器人。",
    directions: [
      ["谋算学习", "基于信息科学原理的学习：从计算智能走向谋算智能，从黑箱走向白盒。"],
      ["具生智能", "将自我意识视为信息问题，探索可解释的具生智能与自主系统。"],
      ["孙子模型", "以信息科学原理构造世界模型，连接观察、推演、决策与行动。"],
      ["结构信息 + AI", "从编码树、注意力到复杂系统，为学习、推理与多模态应用提供结构化视角。"],
    ],
    sunEyebrow: "03 — 《孙子兵法》的人工智能原理",
    sunTitle: "谋算博弈智能",
    sunLead: "以战争现象为研究对象，探索物质与信息相结合的公理化科学原理，以及中国原始创新的人工智能路线。",
    sunPoints: ["《孙子兵法》的信息军事科学", "孙子五大定律", "人工智能的孙子模型", "谋算博弈智能：一个新的 AI 方向"],
    sunAction: "即将收录新书与相关资料",
    libraryEyebrow: "04 — 精选文库",
    libraryTitle: "从结构信息理解智能世界",
    libraryLead: "研究论文、导读文章与重要应用成果持续更新中。",
    reads: [
      ["打破香农的墙", "从香农熵到编码树，结构信息的诞生", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["什么值得注意", "从编码树到 Transformer 的注意力原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["学习到底是什么", "从编码树到知识树", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
      ["谋算", "《孙子兵法》的信息科学原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53e92d3a2cc7c6b7fd"],
    ],
    footer: "结构信息与人工智能 · 研究资料库",
  },
  en: {
    nav: ["Principles", "Research", "Sun Tzu Model", "Library"],
    eyebrow: "Science & Technology of Strategic-Computational Intelligence",
    heroTitle: "Make intelligence\nsee structure.",
    heroText: "Starting from axiomatic principles of the information world, we explore an explainable, efficient, trustworthy, autonomous, and controllable path for artificial intelligence.",
    heroCta: "Explore the work",
    heroCta2: "Read the introduction",
    sideLabel: "Core proposition",
    sideText: "Intelligence = information.\nIts strategy is planning and computation.",
    signal: "STRUCTURAL / INFORMATIC / INTELLIGENT",
    principlesEyebrow: "01 — FOUNDATIONS",
    principlesTitle: "Axiomatic science principles of the information world",
    principlesLead: "Structural information offers a testable scientific language for learning, reasoning, consciousness, and intelligence.",
    principles: [
      ["01", "Structural Information", "2016", "A spectrum-of-hierarchies abstraction paradigm and the fundamental laws of the information world."],
      ["02", "Science of Artificial Intelligence", "2024", "Mathematical principles of intelligence: information calculus, decoding, and generation."],
      ["03", "Principles of Artificial Intelligence", "2024", "Informatic principles of strategic-computational intelligence: observation, learning, self-awareness, and games."],
    ],
    directionsEyebrow: "02 — RESEARCH & APPLICATIONS",
    directionsTitle: "From principle to usable intelligence",
    directionsLead: "We pursue a new technical system for intelligent machines and robots: principled, explainable, efficient, trustworthy, autonomous, and controllable.",
    directions: [
      ["Strategic learning", "Learning grounded in information science: a shift from computational intelligence to strategic-computational intelligence, from black boxes to white boxes."],
      ["Embodied intelligence", "Treating self-awareness as an information problem, toward interpretable embodied intelligence and autonomous systems."],
      ["Sun Tzu model", "A world model built from information science principles, connecting observation, deliberation, decision, and action."],
      ["Structural information + AI", "From encoding trees and attention to complex systems: a structural perspective on learning, reasoning, and multimodal applications."],
    ],
    sunEyebrow: "03 — AI PRINCIPLES OF SUN TZU’S ART OF WAR",
    sunTitle: "Strategic-computational game intelligence",
    sunLead: "Taking war phenomena as its object, this program explores axiomatic principles that unite matter and information—and an original Chinese route to artificial intelligence.",
    sunPoints: ["Information military science in Sun Tzu’s Art of War", "Five laws of Sun Tzu", "The Sun Tzu model of artificial intelligence", "Strategic-computational game intelligence: a new direction for AI"],
    sunAction: "New book and source materials coming soon",
    libraryEyebrow: "04 — SELECTED LIBRARY",
    libraryTitle: "Understanding an intelligent world through structure",
    libraryLead: "Research papers, explanatory essays, and important application outcomes are being added continuously.",
    reads: [
      ["Beyond Shannon’s wall", "From Shannon entropy to encoding trees: the birth of structural information", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["What is worth attention?", "From encoding trees to the attention principle of Transformers", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["What is learning?", "From encoding trees to knowledge trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
      ["Planning and computation", "The information science principles of Sun Tzu’s Art of War", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53ed92d3a2cc7c6b7fd"],
    ],
    footer: "Structural Information & Artificial Intelligence · Research Library",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = t[lang];
  const navIds = ["principles", "directions", "sun-tzu", "library"];

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Structural Information and Artificial Intelligence home">
          <span className="wordmark-mark">S·I</span><span>Structural Information<br />&amp; AI</span>
        </a>
        <div className="nav-links">
          {c.nav.map((item, i) => <a href={`#${navIds[i]}`} key={item}>{item}</a>)}
        </div>
        <div className="language" aria-label="Language switcher">
          <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")} aria-pressed={lang === "zh"}>中</button>
          <span>/</span>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> {c.eyebrow}</p>
          <h1>{c.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-text">{c.heroText}</p>
          <div className="hero-actions">
            <a className="button primary" href="#principles">{c.heroCta} <span>↘</span></a>
            <a className="button quiet" href="#library">{c.heroCta2}</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="tree">
            <span className="trunk" />
            {[...Array(13)].map((_, i) => <i className={`branch branch-${i + 1}`} key={i} />)}
            {[...Array(15)].map((_, i) => <b className={`node node-${i + 1}`} key={i} />)}
          </div>
          <div className="art-caption"><span>{c.sideLabel}</span><strong>{c.sideText}</strong></div>
        </div>
        <p className="signal">{c.signal}</p>
      </section>

      <section id="principles" className="section principles shell">
        <div className="section-head"><div><p className="eyebrow">{c.principlesEyebrow}</p><h2>{c.principlesTitle}</h2></div><p>{c.principlesLead}</p></div>
        <div className="principle-grid">{c.principles.map(([number, title, year, text]) => <article className="principle-card" key={number}><div className="card-meta"><span>{number}</span><span>{year}</span></div><h3>{title}</h3><p>{text}</p><span className="arrow">↗</span></article>)}</div>
      </section>

      <section id="directions" className="section directions"><div className="shell"><div className="section-head"><div><p className="eyebrow">{c.directionsEyebrow}</p><h2>{c.directionsTitle}</h2></div><p>{c.directionsLead}</p></div><div className="direction-grid">{c.directions.map(([title, text], index) => <article key={title} className="direction-card"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="sun-tzu" className="section sun"><div className="shell sun-grid"><div className="sun-orbit" aria-hidden="true"><div className="ring ring-a" /><div className="ring ring-b" /><div className="ring ring-c" /><span>谋</span><span>算</span></div><div className="sun-copy"><p className="eyebrow">{c.sunEyebrow}</p><h2>{c.sunTitle}</h2><p className="sun-lead">{c.sunLead}</p><ul>{c.sunPoints.map((point) => <li key={point}><span>✦</span>{point}</li>)}</ul><p className="coming">{c.sunAction}</p></div></div></section>

      <section id="library" className="section library shell"><div className="section-head"><div><p className="eyebrow">{c.libraryEyebrow}</p><h2>{c.libraryTitle}</h2></div><p>{c.libraryLead}</p></div><div className="read-grid">{c.reads.map(([title, subtitle, href], index) => <a className="read-card" href={href} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{subtitle}</p><b>↗</b></a>)}</div></section>

      <footer><div className="shell footer-inner"><span className="wordmark-mark">S·I</span><p>{c.footer}</p><a href="#top">↑ {lang === "zh" ? "返回顶部" : "Back to top"}</a></div></footer>
    </main>
  );
}
