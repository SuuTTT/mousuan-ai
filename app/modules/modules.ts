export type ResearchModule = {
  slug: string;
  no: string;
  title: string;
  englishTitle: string;
  shortTitle: string;
  lead: string;
  thesis: string;
  items: readonly {
    id: string;
    no: string;
    title: string;
    english: string;
    text: string;
    href: string;
  }[];
};

export const researchModules: ResearchModule[] = [
  {
    slug: "principles", no: "01", shortTitle: "公理原理",
    title: "信息世界的公理化科学原理", englishTitle: "Axiomatized principles of the information world",
    lead: "从信息世界的定义与定律出发，经由编码树、结构熵、信息演算、信息解码与信息生成，进入谋算智能的信息科学原理。",
    thesis: "信息的数学原理以信息演算理论、信息解码原理和信息生成原理为三大支柱。",
    items: [
      { id: "structural-information", no: "01.1", title: "结构信息", english: "Structural information", text: "编码树给出层谱抽象；结构熵度量在编码树下嵌入信息系统中的不确定性。", href: "/principles/structural-information" },
      { id: "information-mathematics", no: "01.2", title: "信息的数学原理", english: "Mathematical principles of information", text: "建立以信息演算理论、信息解码原理和信息生成原理为三大支柱的数学原理。", href: "/principles/information-mathematics" },
      { id: "strategic-intelligence", no: "01.3", title: "谋算智能的信息科学原理", english: "Information science of MouSuan Intelligence", text: "观察学习、自我意识与谋算博弈构成智能科学的认知与策略基础。", href: "/principles/strategic-intelligence" },
      { id: "machine-intelligence", no: "01.4", title: "机器智能原理", english: "Principles of machine intelligence", text: "把智能的数学原理连接到决策、协同行动和系统验证。", href: "/principles/ai-principles" },
    ],
  },
  {
    slug: "applications", no: "02", shortTitle: "应用成果",
    title: "让原理进入学习、决策与机器", englishTitle: "Applied research outcomes",
    lead: "把信息世界的原理落实到学习、具身智能、决策、网络系统和生命系统。",
    thesis: "科学原理通过可解释的方法、实验对象与验证过程进入真实的机器智能问题。",
    items: [
      { id: "learning", no: "02.1", title: "谋算学习", english: "MouSuan learning", text: "从黑箱拟合走向结构可见、过程可解释的学习路线。", href: "/applications/strategic-learning" },
      { id: "embodied", no: "02.2", title: "信息原理的具身智能", english: "Information-principled embodied intelligence", text: "以自我意识的信息模型研究自主、可信、可验证的智能体与智能机。", href: "/applications/embodied-intelligence" },
      { id: "decision", no: "02.3", title: "结构化决策", english: "Structured decision-making", text: "以结构信息解释层级决策、多智能体协同与动态策略选择。", href: "/applications/structured-decision-making" },
      { id: "structured-ai", no: "02.4", title: "结构化机器智能", english: "Structured machine intelligence", text: "从编码树进入大模型、知识编辑、推理、智能体与行动。", href: "/applications/structured-ai" },
      { id: "security", no: "02.5", title: "网络安全与舆情分析", english: "Cybersecurity and public-opinion analysis", text: "识别网络空间的层级关系、传播路径与群体态势。", href: "/applications/network-security" },
      { id: "bioinformatics", no: "02.6", title: "生物信息与生命科学原理", english: "Bioinformatics and principles of life", text: "研究生命系统中的信息组织、演化规律与可验证模型。", href: "/applications/bioinformatics" },
    ],
  },
  {
    slug: "sun-tzu", no: "03", shortTitle: "孙子模型",
    title: "孙子兵法的人工智能原理", englishTitle: "AI principles of Sun Tzu’s The Art of War",
    lead: "以战争现象为研究对象，建立物质与信息结合的公理化科学原理，并由孙子谋算智能模型连接科学原理与工程原理。",
    thesis: "孙子五大定律规定利益、物质与信息、力量生成、战争能力度量和战争不可逆性。",
    items: [
      { id: "axioms", no: "03.1", title: "物质与信息结合", english: "Matter and information", text: "决定战争胜败结局的本原要素是物质和信息。", href: "/framework#sun" },
      { id: "laws", no: "03.2", title: "孙子五大定律", english: "Five Sun Tzu laws", text: "利益、物质与信息、力量生成、战争能力度量与战争不可逆性构成五条基本定律。", href: "/framework#sun" },
      { id: "model", no: "03.3", title: "孙子谋算智能模型", english: "Sun Tzu MouSuan intelligence model", text: "观察学习、自我意识、谋算博弈设计、决策、行动和系统验证构成六个步骤。", href: "/concepts/intelligence-thesis" },
      { id: "book", no: "03.4", title: "正式专著", english: "Formal monograph", text: "完整定义、定律、推导和模型以《孙子兵法的人工智能原理》为准。", href: "/books#sun-tzu-ai-principles" },
    ],
  },
  {
    slug: "knowledge", no: "04", shortTitle: "知识与研究",
    title: "机器智能知识与研究平台", englishTitle: "Machine-intelligence knowledge and research platform",
    lead: "以图书馆沉淀知识，以年鉴遴选重要成果，以实验室推动研究、实验与系统验证。",
    thesis: "知识积累、年度学术记录和实验验证共同组成研究基础，并贯穿全部理论层级。",
    items: [
      { id: "library", no: "04.1", title: "有原理、可解释机器智能图书馆", english: "Principled and Explainable Machine Intelligence Library", text: "系统收录有原理、可解释的论文、著作、代码、术语与研究资料。", href: "/wiki/terminology" },
      { id: "annals", no: "04.2", title: "机器智能年鉴", english: "Annals of Machine Intelligence", text: "遴选年度重要且有科学原理的机器智能研究成果，形成连续的年度学术记录，并为未来专业期刊积累基础。", href: "/modules/knowledge#annals" },
      { id: "laboratory", no: "04.3", title: "机器智能实验室", english: "Machine Intelligence Laboratory", text: "围绕信息科学原理开展研究、实验和系统验证，推动有原理、可解释的机器智能科学技术。", href: "/modules/knowledge#laboratory" },
    ],
  },
  {
    slug: "mousuan-mi", no: "05", shortTitle: "谋算机器智能",
    title: "谋算机器智能", englishTitle: "MouSuan Machine Intelligence · MouSuan MI",
    lead: "推动行业与产业智能化、智能制造、谋算机和谋算机器人等可验证、可交付的实际应用。",
    thesis: "理论与应用成果进一步形成从科学原理、核心技术到产业系统和工程交付的转化体系。",
    items: [
      { id: "products", no: "05.1", title: "原理到产品", english: "Principles to products", text: "把信息科学原理、谋算策略与双脑体系结构转化为可验证、可交付的机器智能产品。", href: "/concepts/engineering-principles" },
      { id: "industry", no: "05.2", title: "行业、产业智能化", english: "Industry and industrial intelligence", text: "面向行业系统的认知、决策、协同、行动与验证。", href: "/modules/mousuan-mi#industry" },
      { id: "manufacturing", no: "05.3", title: "智能制造", english: "Intelligent manufacturing", text: "建立感知、设计、调度、执行和质量验证的可解释闭环。", href: "/modules/mousuan-mi#manufacturing" },
      { id: "machine", no: "05.4", title: "谋算机", english: "MouSuan machine", text: "以谋算双脑体系结构为核心，发展有原理、可解释的智能机。", href: "/concepts/mousuan-strategy" },
      { id: "robot", no: "05.5", title: "谋算机器人", english: "MouSuan robot", text: "让机器人在复杂环境中认知、谋算、行动并验证结果。", href: "/applications/embodied-intelligence" },
      { id: "translation", no: "05.6", title: "成果转化", english: "Research translation", text: "积累核心技术、知识产权、合作伙伴与工程交付能力。", href: "/modules/mousuan-mi#translation" },
    ],
  },
];

export function getResearchModule(slug: string) {
  return researchModules.find((module) => module.slug === slug);
}
