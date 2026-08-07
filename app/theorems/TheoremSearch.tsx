"use client";

import { useEffect, useMemo, useState } from "react";
import { AcademicMathText } from "../MathText";
import bookIndex from "./book-index.json";

type Entry = {
  id: string;
  book: "ai-science" | "sun-tzu";
  bookTitle: string;
  type: string;
  number: string;
  title: string;
  content: string;
  printedPage: string | null;
  pdfPage: number;
  href: string;
};

const entries = bookIndex as Entry[];
const typeOptions = ["全部", "定义", "定理", "定律", "命题", "引理", "推论", "原理", "定律相关"];

function matchesQuery(entry: Entry, query: string) {
  if (!query.trim()) return true;
  const needle = query.trim().toLocaleLowerCase("zh-CN");
  const compactNeedle = needle.replace(/\s+/g, "");
  const haystack = `${entry.type} ${entry.number} ${entry.title} ${entry.content} ${entry.bookTitle}`.toLocaleLowerCase("zh-CN");
  return haystack.includes(needle) || haystack.replace(/\s+/g, "").includes(compactNeedle);
}

export default function TheoremSearch() {
  const [query, setQuery] = useState("");
  const [book, setBook] = useState("all");
  const [type, setType] = useState("全部");
  const [limit, setLimit] = useState(30);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setBook(params.get("book") ?? "all");
    setType(params.get("type") ?? "全部");
  }, []);

  const filtered = useMemo(() => entries.filter((entry) => {
    if (book !== "all" && entry.book !== book) return false;
    if (type === "定律相关" && !`${entry.title}${entry.content}`.includes("定律")) return false;
    if (type !== "全部" && type !== "定律相关" && entry.type !== type) return false;
    return matchesQuery(entry, query);
  }), [book, query, type]);

  function updateQuery(value: string) {
    setQuery(value);
    setLimit(30);
  }

  return <main className="theorem-index">
    <nav className="theorem-nav"><a href="/" className="theorem-brand"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="/">研究主页</a><a href="/#questions">四个问题</a><a href="/#definitions">三个定义</a><a href="/framework">理论索引</a><a href="/books">三部专著</a><a href="/team">团队</a></div></nav>

    <header className="theorem-hero"><div className="theorem-shell"><p>ACADEMIC STATEMENT INDEX</p><h1>定义·定理·定律索引</h1><span>两部原著 · {entries.length} 条学术陈述</span></div></header>

    <section className="theorem-search theorem-shell" aria-label="检索条件">
      <label><span>关键词或编号</span><input type="search" value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="例如：编码树、定理 10.9、战争能力" autoComplete="off" /></label>
      <label><span>原著</span><select value={book} onChange={(event) => { setBook(event.target.value); setLimit(30); }}><option value="all">两部原著</option><option value="ai-science">人工智能科学</option><option value="sun-tzu">孙子兵法的人工智能原理</option></select></label>
      <label><span>条目类型</span><select value={type} onChange={(event) => { setType(event.target.value); setLimit(30); }}>{typeOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>
    </section>

    <section className="theorem-results theorem-shell">
      <header><p><strong>{filtered.length}</strong> 条结果</p>{query && <button type="button" onClick={() => updateQuery("")}>清除关键词</button>}</header>
      <ol>{filtered.slice(0, limit).map((entry) => <li key={entry.id}>
        <div className="theorem-entry-id"><span>{entry.type}</span><strong>{entry.number}</strong></div>
        <article><p>{entry.bookTitle}</p><h2>{entry.title}</h2><div><AcademicMathText text={entry.content} /></div><footer><span>{entry.printedPage ? `原书第 ${entry.printedPage} 页` : `PDF 第 ${entry.pdfPage} 页`}</span><a href={entry.href}>查看出处 ↗︎</a></footer></article>
      </li>)}</ol>
      {filtered.length === 0 && <div className="theorem-empty"><strong>未找到相关条目</strong><p>可以尝试编号、概念名称或正文关键词。</p></div>}
      {limit < filtered.length && <button className="theorem-more" type="button" onClick={() => setLimit((current) => current + 30)}>继续显示 {Math.min(30, filtered.length - limit)} 条</button>}
    </section>

    <footer className="theorem-site-footer"><div className="theorem-shell"><span>《人工智能科学——智能的数学原理》</span><span>《孙子兵法的人工智能原理》</span><a href="/">返回研究主页</a></div></footer>
  </main>;
}
