const definitions = [
  ["定义 15.1", "物理性质", "一个对象的物理性质由该对象自己完全决定。", "《孙子兵法的人工智能原理》 §15.1"],
  ["定义 15.4", "信息性质", "对象的信息性质由存在性、作用和运动性构成；自我意识主体还包括需求和愿望。", "《孙子兵法的人工智能原理》 §15.4"],
  ["定义 17.10", "信息系统", "信息系统由多个对象、对象的运动以及对象之间的相互作用构成。", "《孙子兵法的人工智能原理》 §17.10"],
  ["定义 15.12", "谋与算", "谋是层谱抽象策略；算是分而治之策略。二者共同构成智能策略。", "《孙子兵法的人工智能原理》 §15.12"],
] as const;

const laws = [
  ["信息定律 I", "信息性质的普遍性", "现实世界的每一个对象、每一个自我意识主体都有信息性质。", "《孙子兵法的人工智能原理》 §15.5"],
  ["信息定律 II", "信息的系统嵌入", "一个对象的信息性质嵌入该对象与其他对象相互作用的关系中。", "《孙子兵法的人工智能原理》 §15.6"],
  ["科学范式定律", "层谱抽象", "物理世界以分而治之为分析方法；信息世界以层谱抽象为全局认知方法。", "《人工智能科学》 §6.1"],
  ["系统定律 III", "信息解码策略", "解码嵌入系统中的信息，需要谋策略与算策略协同。", "《孙子兵法的人工智能原理》 §17.10"],
] as const;

const theorems = [
  ["THM 7.6", "范式信息系统基本定理", "从范式信息系统建立稳定的数学表示。", "《人工智能科学》 §7.6"],
  ["THM 7.7", "信息系统基本定理", "把信息系统的图模型与代数模型纳入统一理论。", "《人工智能科学》 §7.7"],
  ["THM 8.9", "层谱抽象可定义性定理", "编码树为复杂对象提供跨层谱的数学定义与数据结构。", "《人工智能科学》 §8.9"],
  ["PRINCIPLE 10.4", "压缩／解码原理", "结构压缩对应信息解码，为知识发现与规律揭示提供数学通道。", "《人工智能科学》 §10.4"],
] as const;

const sunLaws = [
  ["I", "利益定律", "现实世界的博弈决定对象的信息性质；每个主体都追求自己的利益。", "§1.1"],
  ["II", "物质与信息定律", "战争结局由物质和信息的结合决定；战争是有规律的。", "§1.2"],
  ["III", "力量生成定律", "运动的物质生成能量，能量释放生成力量。", "§4.5"],
  ["IV", "能力度量定律", "战争能力由物质与信息共同决定并可建立度量模型。", "§5.2"],
  ["V", "不可逆性定律", "生与死、存与亡的转化具有不可逆性。", "§21.13"],
] as const;

const Source = ({ children }: { children: React.ReactNode }) => <a className="theory-source" href="/books">{children}<b>↗</b></a>;

export default function FrameworkPage() {
  return <main className="theory-page">
    <nav className="theory-nav"><a className="theory-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="#definitions">定义</a><a href="#laws">定律</a><a href="#theorems">定理</a><a href="#intelligence">智能体系</a><a href="#sun">孙子定律</a></div><a className="theory-home" href="/">返回首页</a></nav>
    <section className="theory-hero"><div><p>AXIOMATIZED SCIENCE OF INFORMATION</p><h1>信息世界的<br />公理化科学体系</h1><span>从对象与系统的定义出发，经由信息定律和数学定理，建立学习、自我意识、谋算与机器智能模型。</span></div><aside><strong>体系路径</strong><div><span>定义</span><b>→</b><span>定律</span><b>→</b><span>定理</span><b>→</b><span>模型</span></div></aside></section>

    <section id="definitions" className="theory-section"><header><p>01 · DEFINITIONS</p><h2>基本定义</h2><span>先确定对象、性质、系统和策略，公理体系才有清晰的研究对象。</span></header><div className="definition-orbit"><div className="definition-core"><span>现实世界</span><strong>物质 + 信息</strong></div>{definitions.map(([no, title, text, source]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p><Source>{source}</Source></article>)}</div></section>

    <section id="laws" className="theory-section law-section"><header><p>02 · LAWS</p><h2>信息世界基本定律</h2><span>定律把对象的性质、关系系统和认知策略连接成因果结构。</span></header><div className="law-axis"><div className="law-spine" aria-hidden="true"><span>对象</span><b>↓</b><span>系统</span><b>↓</b><span>认知</span></div>{laws.map(([no, title, text, source], index) => <article className={index % 2 ? "right" : "left"} key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p><Source>{source}</Source></article>)}</div></section>

    <section id="theorems" className="theory-section theorem-section"><header><p>03 · THEOREMS</p><h2>从系统到解码的定理链</h2><span>数学结构沿着“信息系统 → 编码树 → 结构熵 → 解码信息”逐级推进。</span></header><div className="theorem-chain">{theorems.map(([no, title, text, source], index) => <article key={no}><div><span>{no}</span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p><Source>{source}</Source>{index < theorems.length - 1 && <b className="chain-arrow">→</b>}</article>)}</div><div className="theorem-result"><span>数学结果</span><strong>信息系统</strong><b>→</b><strong>编码树</strong><b>→</b><strong>结构熵</strong><b>→</b><strong>解码信息</strong></div></section>

    <section id="intelligence" className="intelligence-section"><div className="theory-section"><header><p>04 · INTELLIGENCE SYSTEM</p><h2>机器智能科学与工程</h2><span>智能的本原、策略、科学原理和工程原理形成一个完整体系。</span></header><div className="intelligence-core"><p>智能论题 · 《人工智能科学》 §34.5</p><h3>智能 = 信息</h3><span>一个自我意识主体的智能就是该主体的信息。</span></div><div id="strategy" className="strategy-pair"><article><span>MOU · 谋</span><h3>层谱抽象 · 全局认知</h3><p>在多个抽象层谱中组织对象、关系与目标。</p></article><b>协同</b><article><span>SUAN · 算</span><h3>分而治之 · 局部推理</h3><p>把整体目标落实为可计算、可执行的局部过程。</p></article></div><div className="principle-bridge"><div><p>科学原理</p><article><span>LEARNING</span><h3>学习</h3><small>认知世界 · 改造世界</small></article><article><span>SELF-AWARENESS</span><h3>自我意识</h3><small>认知自身 · 改造自身</small></article><article><span>CONTEST</span><h3>博弈／谋算</h3><small>设计策略 · 创造胜与利</small></article></div><b>↓</b><div id="machine"><p>工程原理</p><article><span>DECISION</span><h3>决策</h3></article><article><span>ACTION</span><h3>行动</h3></article><article><span>VERIFICATION</span><h3>验证</h3></article></div></div><div className="model-reference"><Source>《人工智能科学》 §17.4–17.9、§34.4–34.6</Source></div></div></section>

    <section id="sun" className="theory-section sun-section"><header><p>05 · SUN TZU LAWS</p><h2>孙子五大定律</h2><span>物质与信息结合的公理化科学原理，为孙子模型和谋算智能提供定律基础。</span></header><div className="sun-law-system"><div className="sun-center"><span>孙子模型</span><strong>谋算智能的信息模型</strong></div>{sunLaws.map(([no, title, text, section]) => <article key={no}><span>LAW {no}</span><h3>{title}</h3><p>{text}</p><a href="/sun-tzu-ai-principles.pdf">《孙子兵法的人工智能原理》 {section}<b>↗</b></a></article>)}</div></section>

    <section className="theory-books"><div><p>FORMAL REFERENCES</p><h2>理论编号以专著为准</h2><span>网站用于建立清晰的阅读路径；定义、定律、定理、证明与完整模型，以正式专著中的编号和表述为准。</span><div><a href="/books">《人工智能科学——智能的数学原理》<b>↗</b></a><a href="/sun-tzu-ai-principles.pdf">《孙子兵法的人工智能原理》<b>↗</b></a></div></div></section>
  </main>;
}
