"use client";

import { useState } from "react";

type Lang = "zh" | "en";
type BookLink = [string, string];

const copy = {
  zh: {
    back: "← 返回研究主页", toggle: "EN", eyebrow: "李昂生教授 · 研究专著", title: "把原理读成体系",
    lead: "李昂生教授的三部专著构成人工智能科学与孙子模型的阅读入口。前两本已正式出版，页面提供合法购书链接；《孙子兵法的人工智能原理》保留团队提供的 PDF 阅读入口。",
    books: [
      { year: "2024", kind: "购书", title: "人工智能科学\n智能的数学原理", enTitle: "Artificial Intelligence Science — Mathematical Principles of Intelligence", meta: "李昂生著 · 科学出版社 · ISBN 9787030796493 · 548 pages", summary: "从信息基本定律、编码树与结构熵，到观察学习、自我意识、博弈/谋算与孙子模型，建立人工智能科学的基本原理。", parts: ["人工智能总论", "信息基本定律", "信息的数学原理", "智能的信息科学原理"], links: [["当当网", "https://product.dangdang.com/9787030796493.html"], ["三民网络书店", "https://www.sanmin.com.tw/product/index/013643102"], ["天珑网络书店", "https://www.tenlong.com.tw/products/9787030796493"]] as BookLink[] },
      { year: "2024", kind: "购书", title: "人工智能原理\n从计算到谋算的模型、原理与方法", enTitle: "Principles of Artificial Intelligence — Models, Principles, and Methods from Computation to MouSuan", meta: "李昂生 等 著 · 已出版", summary: "从计算原理、神经网络与机器学习，到博弈（体系对抗、策略互动与战争语境）/谋算和人工智能的信息科学原理，讨论如何实现“有算有谋”的人工智能。", parts: ["计算原理", "神经网络", "机器学习", "博弈 / 谋算"], links: [["三民网络书店", "https://www.sanmin.com.tw/product/index/013828865"]] as BookLink[] },
      { year: "2026", kind: "PDF", title: "孙子兵法的\n人工智能原理", enTitle: "AI Principles of Sun Tzu’s The Art of War", meta: "李昂生、潘祎诚、李永瑾、曾祥华、许可、许京奕等著 · 1,115 pages", summary: "以战争现象为对象，提出物质与信息结合的公理化科学原理、孙子五大定律、信息军事科学与孙子模型。孙子模型是谋算智能的模型——一个面向层谱设计和高效行动的有原理模型。", parts: ["物质与信息结合", "孙子五大定律", "信息军事科学", "孙子模型 / 孙子机"], links: [["打开团队提供的原始 PDF", "/sun-tzu-ai-principles.pdf"]] as BookLink[] },
    ],
    note: "版权说明：前两本只提供出版商或书店的购书入口，不在本站托管 PDF；《孙子兵法的人工智能原理》PDF 由团队明确提供阅读入口。",
  },
  en: {
    back: "← Back to research hub", toggle: "中", eyebrow: "PROFESSOR ANGSHENG LI · BOOKS", title: "Read the principles as a system",
    lead: "Professor Angsheng Li’s three monographs form the reading entrance to AI science and the Sun Tzu model. The first two are published books with legitimate purchase links; the Sun Tzu volume remains available as a team-provided PDF.",
    books: [
      { year: "2024", kind: "BUY", title: "Artificial Intelligence Science\nMathematical Principles of Intelligence", enTitle: "人工智能科学 — 智能的数学原理", meta: "By Angsheng Li · Science Press · ISBN 9787030796493 · 548 pages", summary: "From information laws, encoding trees, and structural entropy to learning from observing, self-awareness, contest and strategic interaction, and the Sun Tzu Model.", parts: ["General AI science", "Fundamental information laws", "Mathematical principles of information", "Information science of intelligence"], links: [["Dangdang", "https://product.dangdang.com/9787030796493.html"], ["Sanmin Bookstore", "https://www.sanmin.com.tw/product/index/013643102"], ["Tenlong Bookstore", "https://www.tenlong.com.tw/products/9787030796493"]] as BookLink[] },
      { year: "2024", kind: "BUY", title: "Principles of Artificial Intelligence\nModels, Principles, and Methods from Computation to MouSuan", enTitle: "人工智能原理 — 从计算到谋算的模型、原理与方法", meta: "By Angsheng Li et al. · Published book", summary: "From computational principles, neural networks, and machine learning to contest, strategic interaction, war-specific models, and information-science principles of intelligence: a route combining Mou recognition with Suan computing and logical reasoning.", parts: ["Computational principles", "Neural networks", "Machine learning", "Contest / strategic interaction / MouSuan"], links: [["Sanmin Bookstore", "https://www.sanmin.com.tw/product/index/013828865"]] as BookLink[] },
      { year: "2026", kind: "PDF", title: "AI Principles of\nSun Tzu’s The Art of War", enTitle: "孙子兵法的人工智能原理", meta: "By Angsheng Li, Yicheng Pan, Yongjin Li, Xianghua Zeng, Ke Xu, Jingyi Xu et al. · 1,115 pages", summary: "A system of Axiomatized Science Principles combining matter and information, including the five Sun Tzu laws and information military science. The Sun Tzu Model is a model of MouSuan Intelligence—a principled model for hierarchical design and efficient action.", parts: ["Matter and information", "Five Sun Tzu laws", "Information military science", "Sun Tzu model / machine"], links: [["Open team-provided original PDF", "/sun-tzu-ai-principles.pdf"]] as BookLink[] },
    ],
    note: "Copyright note: the first two books link to publishers or bookstores only; their PDFs are not hosted here. The Sun Tzu PDF is available because the team has explicitly provided it for reading.",
  },
};

export default function BooksPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = copy[lang];
  return <main className="books-page">
    <header className="books-nav"><a className="brand" href="/"><span className="brand-symbol"><img src="/logo-encoding-tree.svg" alt="" /></span><b>STRUCTURAL<br />INTELLIGENCE</b></a><a className="back-link" href="/">{c.back}</a><button onClick={() => setLang(lang === "zh" ? "en" : "zh")}>{c.toggle}</button></header>
    <section className="books-hero"><p className="overline">{c.eyebrow}</p><h1>{c.title}</h1><p>{c.lead}</p></section>
    <section className="book-index shell">{c.books.map((book) => <article className="book-index-card" key={book.title}><div className="book-index-top"><span>{book.year}</span><span>{book.kind}</span></div><h2>{book.title.split("\n").map(line => <span key={line}>{line}</span>)}</h2><p className="book-index-en">{book.enTitle}</p><p className="book-index-meta">{book.meta}</p><p className="book-index-summary">{book.summary}</p><div className="book-parts">{book.parts.map((part) => <span key={part}>{part}</span>)}</div><div className="book-links">{book.links.map(([label, href]) => <a className="button light book-download" href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={label}>{label} ↗</a>)}</div></article>)}</section>
    <p className="books-note shell">{c.note}</p>
  </main>;
}
