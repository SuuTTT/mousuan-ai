export type Theme = {
  slug: string;
  no: string;
  question: string;
  title: string;
  englishTitle: string;
  dimension: string;
  formula: string;
  lead: string;
  interpretation: string;
  parts: readonly { label: string; title: string; text: string }[];
  basis: readonly {
    label: string;
    detail: string;
    href: string;
    references?: readonly { number: string; title: string; content: string; href: string }[];
  }[];
  deeper: readonly { title: string; text: string; href: string }[];
  sunLaws?: readonly { no: string; title: string; text: string; href: string }[];
};

export const themes: Theme[] = [
  {
    slug: "information",
    no: "01",
    question: "信息的数学基础",
    title: "信息与信息的数学原理",
    englishTitle: "Information and Its Mathematical Principles",
    dimension: "智能的数学基础",
    formula: "确定性 ⇄ 不确定性",
    lead: "信息科学研究现实世界的确定性、不确定性，以及二者相互转化的规律与作用。信息的数学原理为这种转化建立公理化、可度量的数学基础。",
    interpretation: "信息世界以层谱抽象为科学范式，以信息演算理论、信息解码原理和信息生成原理为三大支柱。",
    parts: [
      { label: "总方法", title: "层谱抽象", text: "跨越抽象层谱组织对象、关系和系统；其数学定义与数据结构是编码树。" },
      { label: "数学理论", title: "信息演算", text: "以编码树为基础，统一同一抽象层谱的逻辑推理与跨越抽象层谱的演算和推理。" },
      { label: "基本原理", title: "解码与生成", text: "解码策略使不确定性转化为确定性；生成策略使确定性转化为不确定性，二者都是可度量的信息过程。" },
    ],
    basis: [
      {
        label: "《人工智能科学——智能的数学原理》",
        detail: "§4.6.2–4.6.3、定义 8.2、定义 10.1 与定理 10.9",
        href: "/books#artificial-intelligence-science",
        references: [
          {
            number: "§4.6.2",
            title: "信息科学是什么？",
            content: "信息科学研究现实世界的确定性、不确定性，以及确定性到不确定性、不确定性到确定性转化的规律与作用。实现两类转化的动作或操作称为策略；生成策略与解码策略产生的信息均可度量。",
            href: "/theorems?q=4.6.2",
          },
          {
            number: "§4.6.3",
            title: "信息的数学原理是什么？",
            content: "信息世界的科学范式是层谱抽象；层谱抽象的数学原理是信息演算，即离散系统的微积分。编码树是层谱抽象的数学模型、数据结构和全局无损编码。",
            href: "/theorems?q=4.6.3",
          },
          {
            number: "定义 8.2",
            title: "集合的编码树",
            content: "给定有穷集合 A，其编码树是有根树 T：根节点 λ 对应整个集合 A；每个内部节点的立即后继所对应的子集构成该节点所对应子集的一个划分；每个叶子节点对应 A 中的一个独点集。",
            href: "/theorems?q=定义+8.2",
          },
          {
            number: "定义 10.1",
            title: "解码信息",
            content: "给定不可约非负矩阵 A 及其编码树 T，编码树 T 从信息系统 A 中解码的信息定义为 Dᵀ(A) = H¹(A) − Hᵀ(A)。",
            href: "/theorems?q=定义+10.1",
          },
          {
            number: "定理 10.9",
            title: "压缩／解码原理",
            content: "对任意不可约非负矩阵 A：Cᵀ(A) = H¹(A) − Hᵀ(A) = Dᵀ(A)；C(A) = H¹(A) − H(A) = D(A)；对 k ≥ 2，Cᵏ(A) = H¹(A) − Hᵏ(A) = Dᵏ(A)；对任意编码树类型 𝒯，同样有 C𝒯(A) = H¹(A) − H𝒯(A) = D𝒯(A)。",
            href: "/theorems?q=定理+10.9",
          },
        ],
      },
    ],
    deeper: [
      { title: "信息世界", text: "信息性质与信息世界", href: "/concepts/information-world" },
      { title: "结构信息", text: "编码树与结构熵", href: "/concepts/structural-information" },
      { title: "解码信息原理", text: "压缩信息与解码信息", href: "/concepts/decoding-principles" },
      { title: "理论索引", text: "关键定义、定律与定理", href: "/framework#information" },
    ],
  },
  {
    slug: "intelligence-thesis",
    no: "02",
    question: "智能的实质",
    title: "智能论题",
    englishTitle: "Intelligence Thesis",
    dimension: "智能的数学实质",
    formula: "智能 = 信息",
    lead: "一个主体的智能就是该主体的信息。智能论题把智能从经验描述转化为可以在信息科学体系中研究的数学对象。",
    interpretation: "任何一个智能策略或者是信息生成策略，或者是信息解码策略；因此，信息是智能体和人工智能系统的数学基础。",
    parts: [
      { label: "主体", title: "智能体是信息系统", text: "智能有明确主体；智能体通过生成和解码信息维持存在、认识世界并采取行动。" },
      { label: "生成", title: "生成信息", text: "提出问题、创造结构和改变环境，使确定性转化为新的不确定性与可能性。" },
      { label: "解码", title: "解码信息", text: "回答问题、发现知识和消除不确定性，使嵌入系统中的信息成为主体可用的知识。" },
    ],
    basis: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 34.5–34.6 · 智能论题与人工智能基本模型", href: "/books#artificial-intelligence-science" },
    ],
    deeper: [
      { title: "智能论题", text: "智能、信息与智能体", href: "/concepts/intelligence-thesis" },
      { title: "信息系统", text: "对象、运动与相互作用", href: "/concepts/information-system" },
      { title: "人工智能科学原理", text: "学习、自我意识与博弈／谋算", href: "/concepts/scientific-principles" },
    ],
  },
  {
    slug: "strategy-principle",
    no: "03",
    question: "智能的策略",
    title: "智能的策略原理",
    englishTitle: "Strategy Principle of Intelligence",
    dimension: "智能机构建的机器原理",
    formula: "智能的策略就是谋和算",
    lead: "智能的策略就是谋和算。谋和算是两类基本的智能策略；任何一个智能策略由一系列谋策略和一系列算策略构成。",
    interpretation: "谋与算可分、可合：谋负责全局的层谱抽象与跨层推理，算负责同一层谱内的局部逻辑推理，由此决定智能体的谋体系结构与算体系结构。",
    parts: [
      { label: "谋 · 全局", title: "层谱抽象与跨层推理", text: "谋进行层谱抽象的全局认知，以及跨越抽象层谱的演算、推理与优化。" },
      { label: "算 · 局部", title: "逻辑推理与局部求解", text: "算进行分而治之分析，以及同一抽象层谱的演算、逻辑推理与优化。" },
      { label: "体系结构", title: "谋算双脑", text: "智能机器分别建立处理谋与算的体系结构，并使两个体系结构同步协作。" },
    ],
    basis: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 28.5 · 博弈的科学方法：谋与算", href: "/books#artificial-intelligence-science" },
    ],
    deeper: [
      { title: "谋算策略", text: "谋、算及双脑体系结构", href: "/concepts/mousuan-strategy" },
      { title: "谋算机器智能", text: "从原理到工程系统", href: "/modules/mousuan-mi" },
      { title: "孙子模型", text: "谋算策略的智能模型", href: "/themes/sun-tzu-model" },
    ],
  },
  {
    slug: "sun-tzu-model",
    no: "04",
    question: "智能的模型",
    title: "孙子模型",
    englishTitle: "Sun Tzu Model",
    dimension: "智能的实现模型",
    formula: "智能：智与能",
    lead: "中文“智能”已经蕴含实现模型：“智”是人工智能科学原理，“能”是人工智能工程原理。孙子模型把二者组织为一个连续、可执行、可验证的机器过程。",
    interpretation: "孙子模型中的每一步都以谋和算为基本策略：谋组织全局和抽象层谱，算完成局部推理、决策与执行。",
    parts: [
      { label: "智 · 科学原理", title: "学习 · 自我意识 · 博弈／谋算", text: "观察并认识外部世界，层谱抽象地认知自我，在确定性与不确定性的转化中设计策略。" },
      { label: "能 · 工程原理", title: "决策 · 行动 · 系统验证", text: "对策略做出决策，执行行动，并比较实际效果与预期结果，形成可验证的工程闭环。" },
    ],
    basis: [
      { label: "《人工智能科学——智能的数学原理》", detail: "命题 34.2、定义 34.3–34.4 · 智能的完备策略、人工智能科学原理与孙子模型", href: "/books#artificial-intelligence-science" },
    ],
    deeper: [
      { title: "智：科学原理", text: "学习、自我意识与博弈／谋算", href: "/concepts/scientific-principles" },
      { title: "能：工程原理", text: "决策、行动与系统验证", href: "/concepts/engineering-principles" },
      { title: "孙子模型研究模块", text: "模型、定律与研究计划", href: "/modules/sun-tzu" },
      { title: "理论索引", text: "智能论题、策略原理与孙子五大定律", href: "/framework#intelligence" },
    ],
    sunLaws: [
      { no: "I", title: "利益定律", text: "战争定义对象与自我意识主体的利益。", href: "/sun-tzu-ai-principles.pdf#page=567" },
      { no: "II", title: "物质与信息定律", text: "决定战争胜败结局的本原要素是物质和信息。", href: "/sun-tzu-ai-principles.pdf#page=577" },
      { no: "III", title: "力量生成定律", text: "运动的物质生成能量；能量释放生成力。", href: "/sun-tzu-ai-principles.pdf#page=578" },
      { no: "IV", title: "战争能力度量定律", text: "战争能力 = 物质 × 信息²。", href: "/sun-tzu-ai-principles.pdf#page=583" },
      { no: "V", title: "战争不可逆定律", text: "亡国不可以复存，死者不可以复生。", href: "/sun-tzu-ai-principles.pdf#page=596" },
    ],
  },
];

export function getTheme(slug: string) {
  return themes.find((theme) => theme.slug === slug);
}
