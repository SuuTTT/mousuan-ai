const definitions = [
  ["physical-property", "定义 15.1", "物理性质", "一个对象的物理性质由该对象自己完全决定。", "《孙子兵法的人工智能原理》 §15.1", "/sun-tzu-ai-principles.pdf#page=395"],
  ["information-property", "定义 15.4", "信息性质", "对象的信息性质包括存在性、作用、运动性及其背后的原因；自我意识主体还包括需求和愿望。", "《孙子兵法的人工智能原理》 §15.3", "/sun-tzu-ai-principles.pdf#page=401"],
  ["information-system", "定义 17.10", "信息系统", "一个信息系统是一个包含多个对象及其对象的运动和对象之间的相互作用构成的系统。", "《孙子兵法的人工智能原理》 §17.10", "/sun-tzu-ai-principles.pdf#page=464"],
  ["mousuan-definition", "定义 15.12", "谋算的定义", "一个谋策略就是一个层谱抽象策略；一个算策略就是一个分而治之策略。", "《孙子兵法的人工智能原理》 §15.11", "/sun-tzu-ai-principles.pdf#page=412"],
] as const;

const laws = [
  ["信息定律 I", "信息性质的普遍性", "现实世界的每一个对象、每一个自我意识主体都有一个信息性质。", "《孙子兵法的人工智能原理》 §15.5", "/sun-tzu-ai-principles.pdf#page=406"],
  ["信息定律 II", "信息性质的系统嵌入", "现实世界中一个对象的信息性质嵌入在该对象和其他对象相互作用的关系中。", "《孙子兵法的人工智能原理》 §15.6", "/sun-tzu-ai-principles.pdf#page=407"],
  ["命题 15.6", "信息世界的科学范式定律", "信息世界的科学范式，即总方法，就是层谱抽象。", "《孙子兵法的人工智能原理》 §15.7", "/sun-tzu-ai-principles.pdf#page=408"],
  ["系统定律 III", "信息解码策略", "解码嵌入在一个系统中的信息的方法是谋策略和算策略。", "《孙子兵法的人工智能原理》 §17.10", "/sun-tzu-ai-principles.pdf#page=466"],
] as const;

const theorems = [
  ["定义 19.14", "编码树", "有限集合 V 的编码树是满足根节点、逐层划分与单点叶节点条件的有根树。", "《孙子兵法的人工智能原理》 §19.10", "/sun-tzu-ai-principles.pdf#page=483"],
  ["定义 19.21", "结构熵", "H(A) = minₜ Hₜ(A)，其中 T 取遍 A 的所有编码树。", "《孙子兵法的人工智能原理》 §19.12", "/sun-tzu-ai-principles.pdf#page=487"],
  ["定义 19.29", "解码信息", "D(A) = H₁(A) − H(A)。", "《孙子兵法的人工智能原理》 §19.14", "/sun-tzu-ai-principles.pdf#page=489"],
  ["定理 19.44", "压缩／解码原理", "Cᵀ(A) = H₁(A) − Hᵀ(A) = Dᵀ(A)。", "《孙子兵法的人工智能原理》 §19.17", "/sun-tzu-ai-principles.pdf#page=492"],
] as const;

const sunLaws = [
  ["I", "利益定律", "战争定义对象与自我意识主体的利益；每一个对象与主体在战争中都追求自己的利益。", "§21.1", "/sun-tzu-ai-principles.pdf#page=567"],
  ["II", "物质与信息", "决定战争胜败结局的本原要素是物质和信息。", "§21.2", "/sun-tzu-ai-principles.pdf#page=577"],
  ["III", "力量生成", "运动的物质生成能量；能量释放的同时生成力；力作用于敌人与敌目标。", "§21.3", "/sun-tzu-ai-principles.pdf#page=578"],
  ["IV", "战争能力度量", "战争能力 = 物质 × 信息²。", "§21.5", "/sun-tzu-ai-principles.pdf#page=583"],
  ["V", "战争的不可逆性", "亡国不可以复存，死者不可以复生。", "§21.13", "/sun-tzu-ai-principles.pdf#page=596"],
] as const;

const Source = ({ children, href = "/sun-tzu-ai-principles.pdf" }: { children: React.ReactNode; href?: string }) => <a className="theory-source" href={href}>{children}<b>↗</b></a>;

export default function FrameworkPage() {
  return <main className="theory-page">
    <nav className="theory-nav"><a className="theory-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="#definitions">定义</a><a href="#laws">定律</a><a href="#theorems">数学原理</a><a href="#intelligence">智能体系</a><a href="#sun">孙子定律</a></div><a className="theory-home" href="/">返回首页</a></nav>
    <section className="theory-hero"><div><p>AXIOMATIZED SCIENCE OF INFORMATION</p><h1>信息世界的<br />公理化科学体系</h1><span>从对象与系统的定义出发，经由信息定律和数学定理，建立学习、自我意识、谋算与机器智能模型。</span></div><aside><strong>体系路径</strong><div><span>定义</span><b>→</b><span>定律</span><b>→</b><span>定理</span><b>→</b><span>模型</span></div></aside></section>

    <section id="definitions" className="theory-section"><header><p>01 · DEFINITIONS</p><h2>基本定义</h2><span>对象、性质、系统与策略构成形式体系的基本研究对象。</span></header><div className="definition-orbit"><div id="complete-knowledge" className="definition-core"><em className="target-marker">当前所选</em><span>现实世界</span><strong>物质 + 信息</strong></div>{definitions.map(([id, no, title, text, source, sourceHref]) => <article id={id} key={id}><em className="target-marker">当前所选</em><span>{no}</span><h3>{title}</h3><p>{text}</p><Source href={sourceHref}>{source}</Source></article>)}</div></section>

    <section id="laws" className="theory-section law-section"><header><p>02 · LAWS</p><h2>信息世界基本定律</h2><span>信息性质的普遍性、系统嵌入性与层谱抽象范式构成认识信息世界的基本关系。</span></header><div className="law-axis"><div className="law-spine" aria-hidden="true"><span>对象</span><b>↓</b><span>系统</span><b>↓</b><span>认知</span></div>{laws.map(([no, title, text, source, sourceHref], index) => <article className={index % 2 ? "right" : "left"} key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p><Source href={sourceHref}>{source}</Source></article>)}</div></section>

    <section id="theorems" className="theory-section theorem-section"><header><p>03 · FORMAL CHAIN</p><h2>从编码树到解码信息的定义与定理链</h2><span>编码树给出层谱抽象，结构熵度量不确定性，解码信息由结构熵差定义，压缩／解码原理给出三者的等式关系。</span></header><div className="theorem-chain">{theorems.map(([no, title, text, source, sourceHref], index) => <article key={no}><div><span>{no}</span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p><Source href={sourceHref}>{source}</Source>{index < theorems.length - 1 && <b className="chain-arrow">→</b>}</article>)}</div><div className="theorem-result"><span>形式链</span><strong>信息系统</strong><b>→</b><strong>编码树</strong><b>→</b><strong>结构熵</strong><b>→</b><strong>解码信息</strong></div></section>

    <section id="intelligence" className="intelligence-section"><div className="theory-section"><header><p>04 · INTELLIGENCE SYSTEM</p><h2>机器智能科学与工程</h2><span>智能论题、谋算策略与孙子谋算智能模型共同规定机器智能的数学基础、科学原理和工程原理。</span></header><div className="intelligence-core"><p>智能论题 · §20.10</p><h3>智能 = 信息</h3><span>一个智能体的智能就是它的信息。</span></div><div id="strategy" className="strategy-pair"><article><span>MOU · 谋</span><h3>层谱抽象策略</h3><p>一个谋策略就是一个层谱抽象策略。</p></article><b>协同</b><article><span>SUAN · 算</span><h3>分而治之策略</h3><p>一个算策略就是一个分而治之策略。</p></article></div><div className="principle-bridge"><div><p>科学原理 · 智</p><article><span>LEARNING</span><h3>观察学习</h3><small>认知世界 · 改造世界</small></article><article><span>SELF-AWARENESS</span><h3>自我意识</h3><small>认知自我 · 改造自我</small></article><article><span>MOU-SUAN</span><h3>谋算博弈设计</h3><small>规划 · 博弈策略设计</small></article></div><b>↓</b><div id="machine"><p>工程原理 · 能</p><article><span>DECISION</span><h3>自主决策</h3></article><article><span>CONTROL</span><h3>自主控制与行动</h3></article><article><span>VERIFICATION</span><h3>自主系统验证</h3></article></div></div><div className="model-reference"><Source href="/sun-tzu-ai-principles.pdf#page=502">《孙子兵法的人工智能原理》定义 20.8、命题 20.9、§20.10</Source></div></div></section>

    <section id="sun" className="theory-section sun-section"><header><p>05 · SUN TZU LAWS</p><h2>孙子五大定律</h2><span>利益、物质与信息、力量生成、战争能力度量与战争不可逆性构成物质和信息结合的五条基本定律。</span></header><div className="sun-law-system"><div className="sun-center"><span>孙子模型</span><strong>谋算智能的信息模型</strong></div>{sunLaws.map(([no, title, text, section, sourceHref]) => <article key={no}><span>LAW {no}</span><h3>{title}</h3><p>{text}</p><a href={sourceHref}>《孙子兵法的人工智能原理》 {section}<b>↗</b></a></article>)}</div></section>

    <section className="theory-books"><div><p>FORMAL REFERENCES</p><h2>原始专著</h2><span>定义、命题、定理、证明与完整模型均以原始专著中的编号和表述为依据。</span><div><a href="/books">《人工智能科学——智能的数学原理》<b>↗</b></a><a href="/sun-tzu-ai-principles.pdf">《孙子兵法的人工智能原理》<b>↗</b></a></div></div></section>
  </main>;
}
