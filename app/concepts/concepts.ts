export type Concept = {
  slug: string;
  layer: "01" | "02" | "03";
  layerName: string;
  layerEnglish: string;
  title: string;
  englishTitle: string;
  tag: string;
  lead: string;
  proposition: string;
  relation: readonly [string, string, string];
  sections: readonly { label: string; title: string; text: string }[];
  formal: readonly { no: string; title: string; text: string }[];
  sources: readonly { label: string; detail: string; href: string }[];
};

export const concepts: Concept[] = [
  {
    slug: "physical-world", layer: "01", layerName: "认识基础", layerEnglish: "FOUNDATION",
    title: "物理世界", englishTitle: "Physical world", tag: "物理性质",
    lead: "先研究对象由自身决定的性质，再以局部分析建立可计算的物理认识。",
    proposition: "一个对象的物理性质，由该对象自己完全决定。",
    relation: ["对象", "自身结构与状态", "物理性质"],
    sections: [
      { label: "研究对象", title: "对象自身决定什么", text: "质量、形态、位置、能量与运动状态等物理性质，可以从对象自身及其组成中分析。这里首先回答对象“是什么”。" },
      { label: "认识方法", title: "分而治之", text: "把复杂对象分解为局部与组成部分，使用经典数学、微积分及逻辑推演分析局部，再重建整体的物理描述。" },
      { label: "理论边界", title: "物理性质不是全部知识", text: "对象如何被其他对象识别、影响或利用，并不完全包含在对象自身中；这部分属于信息性质，需要进入关系系统研究。" },
    ],
    formal: [
      { no: "DEF 15.1", title: "物理性质", text: "对象自身完全决定的性质。" },
      { no: "METHOD", title: "分而治之", text: "由局部分析通向整体描述。" },
      { no: "NEXT", title: "信息世界", text: "从对象自身转向对象之间的关系。" },
    ],
    sources: [{ label: "《孙子兵法的人工智能原理》", detail: "定义 15.1 · 物理性质", href: "/sun-tzu-ai-principles.pdf" }],
  },
  {
    slug: "information-world", layer: "01", layerName: "认识基础", layerEnglish: "FOUNDATION",
    title: "信息世界", englishTitle: "Information world", tag: "信息性质",
    lead: "对象不只具有物理状态，还通过存在、作用、运动以及主体意图进入信息世界。",
    proposition: "对象的信息性质，存在于对象与世界发生作用的关系之中。",
    relation: ["对象", "存在 · 作用 · 运动", "信息性质"],
    sections: [
      { label: "基本构成", title: "存在性、作用与运动性", text: "信息性质描述对象是否存在、怎样影响其他对象、怎样随时间运动和变化。它回答对象“意味着什么、产生什么作用”。" },
      { label: "主体信息", title: "需求与愿望", text: "当对象是自我意识主体时，需求和愿望也成为信息性质，并进一步影响选择、策略与行动。" },
      { label: "认识方法", title: "从孤立对象转向关系", text: "信息不能只靠拆分单个对象获得。必须观察对象所处的环境、交互对象和持续变化的关系。" },
    ],
    formal: [
      { no: "DEF 15.4", title: "信息性质", text: "由存在性、作用、运动性及主体意图构成。" },
      { no: "LAW 15.5", title: "普遍性", text: "现实世界的对象都具有信息性质。" },
      { no: "NEXT", title: "信息系统", text: "信息性质需要在系统关系中解码。" },
    ],
    sources: [{ label: "《孙子兵法的人工智能原理》", detail: "定义 15.4、信息定律 15.5", href: "/sun-tzu-ai-principles.pdf" }],
  },
  {
    slug: "information-system", layer: "01", layerName: "认识基础", layerEnglish: "FOUNDATION",
    title: "信息系统", englishTitle: "Information system", tag: "系统关系",
    lead: "把多个对象、对象的运动及其相互作用作为一个整体，才能研究嵌入关系中的信息。",
    proposition: "信息系统由对象、对象的运动以及对象之间的相互作用共同构成。",
    relation: ["多个对象", "运动与相互作用", "信息系统"],
    sections: [
      { label: "系统构成", title: "对象不是孤立节点", text: "系统中的对象通过作用、约束、依赖与竞争形成关系网络。关系改变时，同一对象的信息意义也会改变。" },
      { label: "信息嵌入", title: "信息藏在关系里", text: "一个对象的信息性质嵌入它与其他对象的相互作用之中。只研究单个对象，会丢失系统层面的结构信息。" },
      { label: "数学入口", title: "从系统走向结构", text: "信息系统可以进一步表示为图、代数模型和编码树，为层谱抽象、结构熵与解码信息建立数学对象。" },
    ],
    formal: [
      { no: "DEF 17.10", title: "信息系统", text: "对象、运动和相互作用的统一系统。" },
      { no: "LAW 15.6", title: "系统嵌入", text: "对象的信息性质嵌入关系系统。" },
      { no: "THM 7.7", title: "系统表示", text: "信息系统进入统一数学模型。" },
    ],
    sources: [
      { label: "《孙子兵法的人工智能原理》", detail: "信息定律 15.6、定义 17.10", href: "/sun-tzu-ai-principles.pdf" },
      { label: "《人工智能科学——智能的数学原理》", detail: "信息系统基本定理 7.7", href: "/books" },
    ],
  },
  {
    slug: "complete-knowledge", layer: "01", layerName: "认识基础", layerEnglish: "FOUNDATION",
    title: "完备知识", englishTitle: "Complete knowledge", tag: "物质 + 信息",
    lead: "同时认识对象自身与对象关系，才能形成对现实世界更完整的知识。",
    proposition: "完备知识 = 物理性质 + 信息性质。",
    relation: ["物理性质", "联合建模", "信息性质"],
    sections: [
      { label: "第一部分", title: "对象自身的知识", text: "物理性质给出对象的组成、状态和运动，是可分解、可测量、可计算的局部基础。" },
      { label: "第二部分", title: "对象关系的知识", text: "信息性质给出对象的存在、作用、运动意义以及主体意图，是系统环境中的全局知识。" },
      { label: "统一认识", title: "物质与信息共同建模", text: "两类性质不是互相替代，而是从不同方向描述同一个现实对象；联合之后才构成进入智能科学的认识基础。" },
    ],
    formal: [
      { no: "DEF 15.1", title: "物理性质", text: "对象自身决定的部分。" },
      { no: "DEF 15.4", title: "信息性质", text: "对象关系决定的部分。" },
      { no: "SYNTHESIS", title: "完备知识", text: "由两类性质联合形成。" },
    ],
    sources: [{ label: "《孙子兵法的人工智能原理》", detail: "定义 15.1、15.4 与信息定律 15.6", href: "/sun-tzu-ai-principles.pdf" }],
  },
  {
    slug: "scientific-paradigm", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "科学范式定律", englishTitle: "Scientific paradigm law", tag: "层谱抽象",
    lead: "物理世界与信息世界研究不同性质，因此需要两种互补的科学认识范式。",
    proposition: "物理世界以分而治之分析；信息世界以层谱抽象认知。",
    relation: ["复杂系统", "多层抽象与组织", "全局认识"],
    sections: [
      { label: "物理范式", title: "分而治之", text: "把复杂问题拆解为局部对象和可计算步骤，适合分析由对象自身决定的物理性质。" },
      { label: "信息范式", title: "层谱抽象", text: "同时观察对象、群体、层级和整体，在不同抽象尺度上保持关系结构，适合认识嵌入系统的信息。" },
      { label: "协同关系", title: "全局与局部互补", text: "层谱抽象确定整体结构和目标，分而治之完成局部计算和推理；二者协同成为谋与算的认识基础。" },
    ],
    formal: [
      { no: "LAW 6.1", title: "科学范式定律", text: "为两类世界配置不同认识方法。" },
      { no: "MOU", title: "层谱抽象", text: "建立多层、全局的结构认知。" },
      { no: "SUAN", title: "分而治之", text: "完成局部、可执行的逻辑推理。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "科学范式定律 6.1", href: "/books" }],
  },
  {
    slug: "structural-information", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "结构信息", englishTitle: "Structural information", tag: "编码树 · 结构熵",
    lead: "用编码树表示复杂系统的层谱，用结构熵度量嵌入组织结构中的信息。",
    proposition: "结构不仅承载对象，也承载可度量、可压缩、可解码的信息。",
    relation: ["信息系统", "编码树与结构熵", "结构信息"],
    sections: [
      { label: "表示", title: "编码树", text: "编码树把对象从节点、群体到整体组织为多个层谱，为复杂系统提供可计算的层级表示。" },
      { label: "度量", title: "结构熵", text: "结构熵描述系统结构的不确定性与编码代价，使组织程度不再只是直觉，而成为可以优化的数学量。" },
      { label: "学习", title: "发现自然结构", text: "通过结构熵优化，在数据中寻找更有组织、更可解释的层级结构，为知识发现与结构化学习提供基础。" },
    ],
    formal: [
      { no: "THM 7.6–7.7", title: "信息系统", text: "建立系统的图与代数表示。" },
      { no: "THM 8.9", title: "层谱抽象", text: "编码树提供跨层谱定义。" },
      { no: "SE", title: "结构熵", text: "度量结构中的信息与编码代价。" },
    ],
    sources: [
      { label: "Li & Pan (2016)", detail: "Structural Information and Dynamical Complexity of Networks", href: "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf" },
      { label: "Structural Information Learning Machinery", detail: "结构信息学习 · arXiv", href: "https://arxiv.org/abs/2001.09637" },
      { label: "《人工智能科学——智能的数学原理》", detail: "定理 7.6、7.7、8.9", href: "/books" },
    ],
  },
  {
    slug: "decoding-principles", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "解码原理", englishTitle: "Decoding principles", tag: "结构 → 知识",
    lead: "从系统结构中恢复被关系编码的信息，把数学表示推进为知识与规律。",
    proposition: "结构熵极小化组织结构；解码信息极大化揭示知识。",
    relation: ["结构熵极小化", "最优层谱", "解码信息极大化"],
    sections: [
      { label: "结构压缩", title: "减少无效描述", text: "优化编码树与结构熵，寻找对系统更简洁、更稳定的层级描述，过滤无组织的复杂性。" },
      { label: "信息解码", title: "恢复关系中的意义", text: "在压缩后的结构中识别群体、边界、角色和跨层关系，使嵌入系统的信息变成可解释知识。" },
      { label: "推理通道", title: "从知识到规律", text: "当结构、语义与目标连接起来，解码结果可以支持预测、决策和验证，形成机器智能的数学通道。" },
    ],
    formal: [
      { no: "PRINCIPLE 10.4", title: "压缩／解码原理", text: "结构压缩与信息解码相互对应。" },
      { no: "MIN SE", title: "结构熵极小化", text: "寻找更自然的层谱结构。" },
      { no: "MAX DI", title: "解码信息极大化", text: "从结构中获得更多有效知识。" },
    ],
    sources: [
      { label: "《人工智能科学——智能的数学原理》", detail: "压缩／解码原理 10.4", href: "/books" },
      { label: "Zeng et al. (2025)", detail: "Hierarchical Decision Making Based on Structural Information Principles", href: "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf" },
    ],
  },
  {
    slug: "intelligence-thesis", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "智能论题", englishTitle: "Intelligence thesis", tag: "智能 = 信息",
    lead: "以信息作为描述自我意识主体智能的本原要素，统一认识、策略和行动。",
    proposition: "一个自我意识主体的智能，就是该主体的信息。",
    relation: ["自我意识主体", "信息", "智能"],
    sections: [
      { label: "主体", title: "智能属于自我意识主体", text: "主体不仅接受外部信息，也认识自身的状态、需求、愿望与目标，并据此改变自身和环境。" },
      { label: "本原", title: "以信息统一智能活动", text: "学习获得信息，自我意识组织主体信息，博弈与谋算使用信息设计策略；不同智能活动由信息连接。" },
      { label: "系统", title: "从命题进入可构造模型", text: "将智能定义为信息之后，可以继续建立信息度量、学习过程、策略生成以及机器实现的形式体系。" },
    ],
    formal: [
      { no: "THESIS 34.5", title: "智能论题", text: "智能与主体信息建立本原关系。" },
      { no: "SCIENCE", title: "认识与设计", text: "学习、自我意识、博弈构成科学原理。" },
      { no: "ENGINEERING", title: "实现与验证", text: "决策、行动、验证构成工程原理。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "智能论题 34.5", href: "/books" }],
  },
  {
    slug: "mousuan-strategy", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "谋算策略", englishTitle: "MouSuan strategy", tag: "全局 ↔ 局部",
    lead: "以谋建立全局层谱和目标，以算完成局部推理与执行，在两者协同中形成智能策略。",
    proposition: "谋是层谱抽象策略；算是分而治之策略。",
    relation: ["谋 · 全局认知", "协同与反馈", "算 · 局部推理"],
    sections: [
      { label: "谋", title: "层谱抽象与全局设计", text: "谋在多个层谱上组织对象、关系、目标和约束，识别真正决定结果的结构与时机。" },
      { label: "算", title: "分而治之与局部执行", text: "算把全局目标分解为可计算问题，通过逻辑、算法和行动完成局部求解。" },
      { label: "协同", title: "谋指导算，算验证谋", text: "全局策略决定计算什么；局部结果持续修正全局认识。两条回路共同形成可适应的智能过程。" },
    ],
    formal: [
      { no: "DEF 15.12", title: "谋与算", text: "定义两类互补的智能策略。" },
      { no: "MOU", title: "全局层谱", text: "组织系统、关系与长期目标。" },
      { no: "SUAN", title: "局部求解", text: "落实计算、行动与短期验证。" },
    ],
    sources: [{ label: "《孙子兵法的人工智能原理》", detail: "谋与算定义 15.12", href: "/sun-tzu-ai-principles.pdf" }],
  },
  {
    slug: "scientific-principles", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "科学原理", englishTitle: "Scientific principles", tag: "认识与设计",
    lead: "学习、自我意识与博弈／谋算回答智能如何形成认识、主体和策略。",
    proposition: "智能科学研究学习、自我意识和博弈／谋算的共同信息原理。",
    relation: ["学习", "自我意识", "博弈／谋算"],
    sections: [
      { label: "学习", title: "认识世界与改造世界", text: "主体从环境和行动结果中获得信息，形成可更新的结构、知识与预测。" },
      { label: "自我意识", title: "认识自身与改造自身", text: "主体表示自己的状态、能力、需求和愿望，使行为不只响应外界，也受内部目标组织。" },
      { label: "博弈／谋算", title: "设计策略与创造结果", text: "主体在多方作用和不确定环境中组织全局策略，并通过局部计算、行动与反馈推进目标。" },
    ],
    formal: [
      { no: "PILLAR I", title: "学习", text: "获得和更新关于世界的信息。" },
      { no: "PILLAR II", title: "自我意识", text: "形成关于主体自身的信息。" },
      { no: "PILLAR III", title: "博弈／谋算", text: "使用信息设计策略。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "智能科学与工程原理 17.4–17.9、34.4–34.6", href: "/books" }],
  },
  {
    slug: "engineering-principles", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "工程原理", englishTitle: "Engineering principles", tag: "行动与验证",
    lead: "把科学原理落实为决策、行动和验证的闭环，使智能成为可运行、可检验的机器过程。",
    proposition: "智能工程以决策选择行动，以行动改变世界，以验证更新系统。",
    relation: ["决策", "行动", "验证"],
    sections: [
      { label: "决策", title: "从信息生成选择", text: "根据目标、约束、预测与风险比较候选方案，把全局策略转换为当前可执行选择。" },
      { label: "行动", title: "让策略进入现实", text: "机器通过工具、控制和交互改变环境；行动结果同时产生新的观察和信息。" },
      { label: "验证", title: "用结果校正智能", text: "比较预期与实际结果，检验知识、模型和策略，再将误差反馈给学习与下一轮决策。" },
    ],
    formal: [
      { no: "STEP I", title: "决策", text: "选择与目标一致的行动。" },
      { no: "STEP II", title: "行动", text: "把内部策略作用于外部世界。" },
      { no: "STEP III", title: "验证", text: "以结果更新认识和策略。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "智能科学与工程原理 17.4–17.9、34.4–34.6", href: "/books" }],
  },
];

export const conceptGroups = (["01", "02", "03"] as const).map((layer) => ({
  layer,
  name: concepts.find((concept) => concept.layer === layer)?.layerName ?? "",
  concepts: concepts.filter((concept) => concept.layer === layer),
}));

export function getConcept(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}
