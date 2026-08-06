const sections = [
  {
    id: "information",
    no: "01",
    question: "信息是什么？信息的数学原理是什么？",
    title: "信息的公理化科学原理",
    statement: "信息科学研究确定性、不确定性及其相互转化；信息的数学原理以层谱抽象为总方法。",
    points: [
      ["科学范式", "层谱抽象", "《人工智能科学——智能的数学原理》定义 6.2"],
      ["数学模型", "编码树", "《人工智能科学——智能的数学原理》定义 8.2"],
      ["基本度量", "结构熵与解码信息", "《人工智能科学——智能的数学原理》第9–10章"],
      ["核心定理", "压缩信息就是解码信息", "《人工智能科学——智能的数学原理》定理 10.9"],
    ],
    href: "/books#artificial-intelligence-science",
  },
  {
    id: "intelligence",
    no: "02",
    question: "智能是什么？",
    title: "智能论题：智能 = 信息",
    statement: "一个主体的智能就是该主体的信息；信息是任何智能体和人工智能系统的数学基础。",
    points: [
      ["数学实质", "智能 =（狭义）信息", "《人工智能科学——智能的数学原理》定义 34.5"],
      ["策略性质", "智能策略是信息生成策略或信息解码策略", "《人工智能科学——智能的数学原理》定义 34.5"],
      ["基本模型", "生成信息与解码信息", "《人工智能科学——智能的数学原理》定义 34.6"],
    ],
    href: "/books#artificial-intelligence-science",
  },
  {
    id: "strategy",
    no: "03",
    question: "智能从哪里来？",
    title: "智能的策略原理：智能 = 谋算",
    statement: "谋和算是两类基本智能策略；任何一个智能策略由一系列谋策略和算策略构成。",
    points: [
      ["谋", "层谱抽象的全局认知与跨层推理", "《人工智能科学——智能的数学原理》定义 28.5"],
      ["算", "分而治之的局部逻辑推理", "《人工智能科学——智能的数学原理》定义 28.5"],
      ["策略形式", "智能策略 = 谋 + 算", "《孙子兵法的人工智能原理》公式 (23.3)"],
      ["机器原理", "谋体系结构与算体系结构协同", "《孙子兵法的人工智能原理》§15.11"],
    ],
    href: "/themes/strategy-principle",
  },
  {
    id: "model",
    no: "04",
    question: "怎样实现智能？",
    title: "孙子模型：智与能",
    statement: "“智”给出人工智能科学原理，“能”给出人工智能工程原理；二者共同构成机器智能的实现模型。",
    points: [
      ["智", "学习 · 自我意识 · 博弈／谋算", "《人工智能科学——智能的数学原理》定义 34.3–34.4"],
      ["能", "决策 · 行动 · 系统验证", "《人工智能科学——智能的数学原理》定义 34.4"],
      ["完备策略", "学习、自我意识学习和博弈／谋算", "《人工智能科学——智能的数学原理》命题 34.2"],
      ["策略贯穿", "模型每一步以谋和算为基本策略", "《孙子兵法的人工智能原理》"],
    ],
    href: "/themes/sun-tzu-model",
  },
] as const;

const sunLaws = [
  ["I", "利益定律", "战争定义对象与自我意识主体的利益。", "/sun-tzu-ai-principles.pdf#page=567"],
  ["II", "物质与信息定律", "决定战争胜败结局的本原要素是物质和信息。", "/sun-tzu-ai-principles.pdf#page=577"],
  ["III", "力量生成定律", "运动的物质生成能量，能量释放生成力。", "/sun-tzu-ai-principles.pdf#page=578"],
  ["IV", "战争能力度量定律", "战争能力 = 物质 × 信息²。", "/sun-tzu-ai-principles.pdf#page=583"],
  ["V", "战争不可逆定律", "亡国不可以复存，死者不可以复生。", "/sun-tzu-ai-principles.pdf#page=596"],
] as const;

export default function FrameworkPage() {
  return <main className="principle-index">
    <nav className="index-nav"><a className="index-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="/#themes">四个主题</a><a href="#information">信息</a><a href="#intelligence">智能</a><a href="#strategy">谋算</a><a href="#sun">孙子五大定律</a></div><a href="/">返回首页</a></nav>

    <header className="index-hero"><div className="index-shell"><p>KEY PRINCIPLES & SOURCES</p><h1>关键原理索引</h1><span>只点出理解信息与智能体系所需的重要观点；定义、证明与完整论述均回到原始专著。</span><div><a href="#information">信息的数学原理</a><b>→</b><a href="#intelligence">智能论题</a><b>→</b><a href="#strategy">策略原理</a><b>→</b><a href="#model">孙子模型</a></div></div></header>

    <section className="index-sections index-shell">{sections.map((section) => <article id={section.id} key={section.id}><header><span>{section.no}</span><div><p>{section.question}</p><h2>{section.title}</h2><strong>{section.statement}</strong></div></header><ol>{section.points.map(([kind, point, source]) => <li key={point}><small>{kind}</small><b>{point}</b><span>{source}</span></li>)}</ol><a className="index-source" href={section.href}>进入主题与原著链接 ↗</a></article>)}</section>

    <section id="sun" className="index-sun"><div className="index-shell"><header><p>SUN TZU’S FIVE LAWS</p><h2>物质与信息结合的孙子五大定律</h2><span>《孙子兵法的人工智能原理》以这五条定律奠定同时存在物质与信息的战争之科学原理。</span></header><ol>{sunLaws.map(([no, title, text, href]) => <li key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div><a href={href}>查看原文 ↗</a></li>)}</ol></div></section>

    <section className="index-books"><div className="index-shell"><p>PRIMARY SOURCES</p><h2>引用顺序</h2><span>基础概念、信息的数学原理、智能论题和孙子模型优先引用先出版的《人工智能科学——智能的数学原理》；谋算策略的后续展开及孙子五大定律引用《孙子兵法的人工智能原理》。</span><div><a href="/books#artificial-intelligence-science"><b>01</b>《人工智能科学——智能的数学原理》<em>基础原理 ↗</em></a><a href="/books#sun-tzu-ai-principles"><b>02</b>《孙子兵法的人工智能原理》<em>孙子五大定律 ↗</em></a></div></div></section>
  </main>;
}
