"use client";

import { useState } from "react";

type Lang = "zh" | "en";

const copy = {
  zh: {
    back: "← 返回研究主页",
    toggle: "EN",
    eyebrow: "研究专著 · BOOKS",
    title: "把原理读成体系。",
    lead: "两部专著构成信息世界科学与人工智能科学的核心阅读入口。每本书都保留原始 PDF，便于审阅、引用与进一步研究。",
    books: [
      {
        year: "2024",
        title: "人工智能科学\n智能的数学原理",
        enTitle: "Artificial Intelligence Science — Mathematical Principles of Intelligence",
        meta: "李昂生著 · 275 pages",
        summary: "从信息基本定律、编码树与结构熵，到观察学习、自我意识、博弈/谋算与孙子模型，建立人工智能科学的基本原理。",
        parts: ["人工智能总论", "信息基本定律", "信息的数学原理", "智能的信息科学原理"],
        href: "/ai-science-mathematical-principles.pdf",
      },
      {
        year: "2026",
        title: "孙子兵法的\n人工智能原理",
        enTitle: "AI Principles of Sun Tzu’s The Art of War",
        meta: "李昂生、潘祎诚、李永瑾、曾祥华、许可、许京奕等著 · 1,115 pages",
        summary: "以战争现象为对象，提出物质与信息结合的公理化科学原理、孙子五大定律、信息军事科学与孙子模型。",
        parts: ["物质与信息结合", "孙子五大定律", "信息军事科学", "孙子模型 / 孙子机"],
        href: "/sun-tzu-ai-principles.pdf",
      },
    ],
    download: "打开原始 PDF",
    note: "PDF files are preserved as supplied. The site page is an index and reading guide; the books remain the authoritative source texts.",
  },
  en: {
    back: "← Back to research hub",
    toggle: "中",
    eyebrow: "RESEARCH MONOGRAPHS · BOOKS",
    title: "Read the principles as a system.",
    lead: "These two monographs form the core reading entrance to the information-world and AI-science programme. The original PDFs remain available for review, citation, and further research.",
    books: [
      {
        year: "2024",
        title: "Artificial Intelligence Science\nMathematical Principles of Intelligence",
        enTitle: "人工智能科学 — 智能的数学原理",
        meta: "By Angsheng Li · 275 pages",
        summary: "From information laws, encoding trees, and structural entropy to observation-based learning, self-awareness, strategic games, and the Sun Tzu model.",
        parts: ["General AI science", "Fundamental information laws", "Mathematical principles of information", "Information science of intelligence"],
        href: "/ai-science-mathematical-principles.pdf",
      },
      {
        year: "2026",
        title: "AI Principles of\nSun Tzu’s The Art of War",
        enTitle: "孙子兵法的人工智能原理",
        meta: "By Angsheng Li, Yicheng Pan, Yongjin Li, Xianghua Zeng, Ke Xu, Jingyi Xu et al. · 1,115 pages",
        summary: "A system of axiomatic principles combining matter and information, including the five Sun Tzu laws, information military science, and the Sun Tzu model.",
        parts: ["Matter and information", "Five Sun Tzu laws", "Information military science", "Sun Tzu model / machine"],
        href: "/sun-tzu-ai-principles.pdf",
      },
    ],
    download: "Open original PDF",
    note: "The PDFs are preserved as supplied. This page is an index and reading guide; the books remain the authoritative source texts.",
  },
};

export default function BooksPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = copy[lang];
  return <main className="books-page">
    <header className="books-nav"><a className="brand" href="/"><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><a className="back-link" href="/">{c.back}</a><button onClick={() => setLang(lang === "zh" ? "en" : "zh")}>{c.toggle}</button></header>
    <section className="books-hero"><p className="overline">{c.eyebrow}</p><h1>{c.title}</h1><p>{c.lead}</p></section>
    <section className="book-index shell">{c.books.map((book) => <article className="book-index-card" key={book.href}><div className="book-index-top"><span>{book.year}</span><span>PDF</span></div><h2>{book.title.split("\n").map(line => <span key={line}>{line}</span>)}</h2><p className="book-index-en">{book.enTitle}</p><p className="book-index-meta">{book.meta}</p><p className="book-index-summary">{book.summary}</p><div className="book-parts">{book.parts.map((part) => <span key={part}>{part}</span>)}</div><a className="button light book-download" href={book.href} target="_blank" rel="noreferrer">{c.download} ↗</a></article>)}</section>
    <p className="books-note shell">{c.note}</p>
  </main>;
}
