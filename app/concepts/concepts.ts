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
    slug: "physical-world", layer: "01", layerName: "认知基础", layerEnglish: "COGNITIVE FOUNDATIONS",
    title: "物理世界", englishTitle: "Physical world", tag: "物理性质",
    lead: "物理世界由现实世界对象的物理性质构成；一个对象的物理性质由该对象自己完全决定。",
    proposition: "一个对象的物理性质，由该对象自己完全决定。",
    relation: ["对象", "自身结构与状态", "物理性质"],
    sections: [
      { label: "研究对象", title: "物理性质", text: "一个对象的物理性质由该对象自己完全决定。物理世界研究现实世界对象的物理性质。" },
      { label: "总方法", title: "分而治之", text: "物理世界的科学范式是分而治之分析方法，即在同一个抽象层谱分解对象。" },
      { label: "数学原理", title: "微积分", text: "微积分是分而治之分析方法的数学原理；研究数与形的经典数学支撑物理世界科学技术体系。" },
    ],
    formal: [
      { no: "定义 5.3", title: "物理性质", text: "一个对象的物理性质由该对象自己完全决定。" },
      { no: "定义 5.5", title: "物理世界的科学范式", text: "获取对象物理性质的总方法是分而治之。" },
      { no: "定义 6.1", title: "物理科学范式定律", text: "物理世界的科学范式是分而治之分析方法。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "定义 5.3、5.5 与定义 6.1 · 物理性质及物理科学范式", href: "/books#artificial-intelligence-science" }],
  },
  {
    slug: "information-world", layer: "01", layerName: "认知基础", layerEnglish: "COGNITIVE FOUNDATIONS",
    title: "信息世界", englishTitle: "Information world", tag: "信息性质",
    lead: "信息世界由现实世界对象和自我意识主体的信息性质构成。",
    proposition: "现实世界中一个对象的信息性质嵌入在该对象和其他对象相互作用的关系中。",
    relation: ["对象", "存在 · 作用 · 运动", "信息性质"],
    sections: [
      { label: "一般对象", title: "存在性、作用与运动性", text: "一个对象的信息性质包括它的存在性、功能与作用、运动性，以及这些性质背后的原因。" },
      { label: "自我意识主体", title: "需求与愿望", text: "自我意识主体的信息性质还包括需求和愿望，以及这些性质背后的原因。" },
      { label: "系统关系", title: "信息性质在哪里", text: "对象的信息性质嵌入该对象和其他对象相互作用的关系中，不能通过只对该对象进行分而治之而获得。" },
    ],
    formal: [
      { no: "定义 5.1", title: "信息世界", text: "现实世界对象和自我意识主体的信息性质构成信息世界。" },
      { no: "定义 5.6", title: "信息性质与知识", text: "对象的信息性质描述它的存在、作用、运动及其原因；对主体而言还包括需求与愿望。" },
      { no: "§5.1.4", title: "物理性质与信息性质", text: "信息性质不能只由孤立对象自身决定，而嵌入对象之间的相互作用。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "定义 5.1、5.6 与 §5.1.4 · 信息世界及信息性质", href: "/books#artificial-intelligence-science" }],
  },
  {
    slug: "information-system", layer: "01", layerName: "认知基础", layerEnglish: "COGNITIVE FOUNDATIONS",
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
      { no: "定义 5.15", title: "信息系统", text: "信息系统由多个对象、对象的运动以及对象之间的相互作用构成。" },
      { no: "定义 6.25", title: "系统定律 I", text: "嵌入系统中的信息是知识的数学基础；知识是信息的语义。" },
      { no: "定义 6.27", title: "系统定律 III", text: "系统中的信息需要通过层谱抽象与分而治之相结合的方法解码。" },
    ],
    sources: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 5.15；定义 6.25–6.28 · 信息系统与系统定律", href: "/books#artificial-intelligence-science" },
    ],
  },
  {
    slug: "complete-knowledge", layer: "01", layerName: "认知基础", layerEnglish: "COGNITIVE FOUNDATIONS",
    title: "完备知识", englishTitle: "Complete knowledge", tag: "物质 + 信息",
    lead: "现实世界对象的物理性质和信息性质联合起来，构成该对象的完备知识。",
    proposition: "完备知识 = 物理性质 + 信息性质。",
    relation: ["物理性质", "联合建模", "信息性质"],
    sections: [
      { label: "第一部分", title: "对象自身的知识", text: "物理性质给出对象的组成、状态和运动，是可分解、可测量、可计算的局部基础。" },
      { label: "第二部分", title: "对象关系的知识", text: "信息性质给出对象的存在、作用、运动意义以及主体意图，是系统环境中的全局知识。" },
      { label: "统一认知", title: "物质与信息共同建模", text: "两类性质不是互相替代，而是从不同方向描述同一个现实对象；联合之后才构成进入智能科学的认知基础。" },
    ],
    formal: [
      { no: "定义 5.3", title: "物理性质", text: "一个对象的物理性质由该对象自己完全决定。" },
      { no: "定义 5.6", title: "信息性质", text: "对象的信息性质嵌入该对象与其他对象的相互作用中。" },
      { no: "完备建模", title: "物质与信息联合", text: "一个对象的物理性质和信息性质合起来，构成了该对象的完备知识。" },
    ],
    sources: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 5.3、5.6 与 §5.1.4 · 物理性质和信息性质", href: "/books#artificial-intelligence-science" },
    ],
  },
  {
    slug: "scientific-paradigm", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "信息世界认知模型定律", englishTitle: "Cognitive Model Law of the Information World", tag: "层谱抽象",
    lead: "信息世界的认知模型、总策略或总方法是层谱抽象；层谱抽象是在多个抽象层谱上的分解。",
    proposition: "信息世界的认知模型、总策略或总方法是层谱抽象。",
    relation: ["复杂系统", "多层抽象与组织", "全局认知"],
    sections: [
      { label: "物理范式", title: "分而治之", text: "把复杂问题拆解为局部对象和可计算步骤，适合分析由对象自身决定的物理性质。" },
      { label: "信息世界认知模型", title: "层谱抽象", text: "同时观察对象、群体、层级和整体，在不同抽象尺度上保持关系结构，适合认知嵌入系统的信息。" },
      { label: "协同关系", title: "全局与局部互补", text: "层谱抽象确定整体结构和目标，分而治之完成局部计算和推理；二者协同成为谋与算的认知基础。" },
    ],
    formal: [
      { no: "定义 6.1", title: "物理科学范式定律", text: "物理世界的科学范式是分而治之。" },
      { no: "定义 6.2", title: "信息世界认知模型定律", text: "信息世界的认知模型、总策略或总方法是层谱抽象。" },
      { no: "定义 28.5", title: "博弈的科学方法", text: "谋采用层谱抽象，算采用分而治之；二者共同构成博弈的科学方法。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "定义 6.1、6.2 与定义 28.5 · 分而治之、层谱抽象及谋算", href: "/books#artificial-intelligence-science" }],
  },
  {
    slug: "structural-information", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "结构信息", englishTitle: "Structural information", tag: "编码树 · 结构熵",
    lead: "编码树给出信息系统的层谱抽象；结构熵度量在编码树下嵌入信息系统中的不确定性。",
    proposition: "H(A) = minₜ Hₜ(A)：结构熵是在所有编码树下结构熵的最小值。",
    relation: ["信息系统", "编码树与结构熵", "结构信息"],
    sections: [
      { label: "表示", title: "编码树", text: "编码树把对象从节点、群体到整体组织为多个层谱，为复杂系统提供可计算的层级表示。" },
      { label: "度量", title: "编码树下的结构熵", text: "Hₜ(A) 度量在编码树 T 下嵌入信息系统 A 中的不确定性。" },
      { label: "极小化", title: "信息系统的结构熵", text: "H(A) 取遍 A 的所有编码树并极小化 Hₜ(A)；达到极小值的编码树给出相应的层谱抽象结构。" },
    ],
    formal: [
      { no: "定义 8.2", title: "编码树", text: "编码树是层谱抽象的数学定义、数学模型与数据结构。" },
      { no: "定义 9.3", title: "编码树下的结构熵", text: "Hᵀ(A) 度量在编码树 T 下嵌入信息系统 A 中的不确定性。" },
      { no: "定义 9.4", title: "结构熵", text: "H(A) = minₜ Hᵀ(A)，其中 T 取遍 A 的所有编码树。" },
    ],
    sources: [
      { label: "Li & Pan · Structural Information and Dynamical Complexity of Networks", detail: "IEEE Transactions on Information Theory 62(6): 3290–3339 · 2016 · DOI 10.1109/TIT.2016.2555904", href: "https://doi.org/10.1109/TIT.2016.2555904" },
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 8.2、定义 9.3–9.4 · 编码树与结构熵", href: "/books#artificial-intelligence-science" },
    ],
  },
  {
    slug: "decoding-principles", layer: "02", layerName: "数学原理", layerEnglish: "MATHEMATICAL PRINCIPLES",
    title: "解码原理", englishTitle: "Decoding principles", tag: "结构 → 知识",
    lead: "在同一编码树下，解码信息等于一维结构熵与编码树下结构熵之差；压缩／解码原理证明压缩信息等于解码信息。",
    proposition: "Cᵀ(A) = H₁(A) − Hᵀ(A) = Dᵀ(A)。",
    relation: ["结构熵极小化", "最优层谱", "解码信息极大化"],
    sections: [
      { label: "定义", title: "解码信息", text: "Dᵀ(A) = H₁(A) − Hᵀ(A)；信息系统的解码信息为 D(A) = H₁(A) − H(A)。" },
      { label: "定理", title: "压缩／解码原理", text: "对任意编码树 T，压缩信息 Cᵀ(A)、结构熵差 H₁(A) − Hᵀ(A) 与解码信息 Dᵀ(A) 三者相等。" },
      { label: "层谱", title: "可定义性", text: "使 Hᵀ(A) 取得极小值的编码树给出信息系统中个体的层谱抽象定义。" },
    ],
    formal: [
      { no: "定义 10.1", title: "解码信息", text: "D(A) = H₁(A) − H(A)。" },
      { no: "定理 10.9", title: "压缩／解码原理", text: "Cᵀ(A) = H₁(A) − Hᵀ(A) = Dᵀ(A)。" },
      { no: "定义 12.9", title: "层谱抽象可定义性", text: "使结构熵极小的编码树给出系统的层谱抽象定义。" },
    ],
    sources: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 10.1、定理 10.9 与定义 12.9 · 解码、压缩与层谱", href: "/books#artificial-intelligence-science" },
    ],
  },
  {
    slug: "intelligence-thesis", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "智能论题", englishTitle: "Intelligence thesis", tag: "智能 = 信息",
    lead: "孙子谋算智能模型的六个步骤都以信息为数学基础，由此得到智能论题。",
    proposition: "一个智能体的智能就是它的信息，即：智能 = 信息。",
    relation: ["自我意识主体", "信息", "智能"],
    sections: [
      { label: "主体", title: "智能属于自我意识主体", text: "主体不仅接受外部信息，也认知自身的状态、需求、愿望与目标，并据此改变自身和环境。" },
      { label: "本原", title: "以信息统一智能活动", text: "学习获得信息，自我意识组织主体信息，博弈与谋算使用信息设计策略；不同智能活动由信息连接。" },
      { label: "系统", title: "从命题进入可构造模型", text: "将智能定义为信息之后，可以继续建立信息度量、学习过程、策略生成以及机器实现的形式体系。" },
    ],
    formal: [
      { no: "定义 34.5", title: "智能论题", text: "一个智能体的智能就是它的信息，即：智能 =（狭义）信息。" },
      { no: "定义 34.4", title: "孙子模型", text: "学习、自我意识、博弈／谋算、决策、行动与系统验证构成六个步骤。" },
      { no: "定义 34.6", title: "人工智能基本模型", text: "生成信息与解码信息给出人工智能的基本模型。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "定义 34.4–34.6 · 孙子模型、智能论题与人工智能基本模型", href: "/books#artificial-intelligence-science" }],
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
      { label: "协同", title: "谋指导算，算验证谋", text: "全局策略决定计算什么；局部结果持续修正全局认知。两条回路共同形成可适应的智能过程。" },
    ],
    formal: [
      { no: "定义 28.5", title: "谋算的科学方法", text: "谋是层谱抽象的认知方法，算是分而治之的分析方法；博弈 = 谋算。" },
      { no: "命题 15.10", title: "智能策略的构成", text: "谋和算是两类基本智能策略；任何智能策略由一系列谋策略与算策略构成。" },
      { no: "体系结构原理", title: "谋算双脑", text: "谋策略体系结构与算策略体系结构分工，并通过协同机制共同工作。" },
    ],
    sources: [
      { label: "《人工智能科学——智能的数学原理》", detail: "定义 28.5 · 博弈的科学方法：谋与算", href: "/books#artificial-intelligence-science" },
    ],
  },
  {
    slug: "scientific-principles", layer: "03", layerName: "智能体系", layerEnglish: "INTELLIGENCE SYSTEM",
    title: "科学原理", englishTitle: "Scientific principles", tag: "认知与设计",
    lead: "学习、自我意识与博弈／谋算回答智能如何形成认知、主体和策略。",
    proposition: "智能科学研究学习、自我意识和博弈／谋算的共同信息原理。",
    relation: ["学习", "自我意识", "博弈／谋算"],
    sections: [
      { label: "学习", title: "认知世界与改造世界", text: "主体从环境和行动结果中获得信息，形成可更新的结构、知识与预测。" },
      { label: "自我意识", title: "认知自身与改造自身", text: "主体表示自己的状态、能力、需求和愿望，使行为不只响应外界，也受内部目标组织。" },
      { label: "博弈／谋算", title: "设计策略与创造结果", text: "主体在多方作用和不确定环境中组织全局策略，并通过局部计算、行动与反馈推进目标。" },
    ],
    formal: [
      { no: "定义 34.3", title: "人工智能科学原理", text: "人工智能科学原理由学习、自我意识与博弈／谋算构成。" },
      { no: "命题 34.2", title: "智能的完备策略", text: "学习、自我意识学习和博弈／谋算共同构成智能的完备策略。" },
      { no: "定义 34.4", title: "孙子模型之“智”", text: "学习、自我意识与博弈／谋算是孙子模型的三个科学步骤。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "命题 34.2、定义 34.3–34.4 · 智能的完备策略与科学原理", href: "/books#artificial-intelligence-science" }],
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
      { no: "定义 34.4(4)", title: "决策", text: "根据博弈／谋算策略做出决策。" },
      { no: "定义 34.4(5)", title: "行动", text: "执行决策并作用于现实世界。" },
      { no: "定义 34.4(6)", title: "系统验证", text: "根据行动结果验证系统目标是否实现。" },
    ],
    sources: [{ label: "《人工智能科学——智能的数学原理》", detail: "定义 34.4 · 孙子模型之“能”：决策、行动与系统验证", href: "/books#artificial-intelligence-science" }],
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
