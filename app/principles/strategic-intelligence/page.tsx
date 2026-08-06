import { PrinciplePage } from "../PrinciplePage";

export default function StrategicIntelligencePage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 03 / 谋算智能（MSI）",
      title: "谋算智能\n谋与算都是智能策略",
      lead: "命题 15.10 将谋和算规定为两类基本的智能策略；定义 15.12 进一步规定：一个谋策略就是一个层谱抽象策略，一个算策略就是一个分而治之策略。",
      sections: [["谋算原理 · 命题 15.10", "谋和算是两类基本的智能策略；任何一个智能策略由一系列谋策略和一系列算策略构成。"], ["谋算的定义 · 定义 15.12", "一个谋策略就是一个层谱抽象策略；一个算策略就是一个分而治之策略。"], ["科学原理", "观察学习的信息理论、自我意识的信息理论和谋算理论构成“智”的三个研究支柱。"], ["工程原理", "自主决策、自主控制与行动、自主系统验证构成“能”的三个工程步骤。"], ["智、能与智能", "“智”对应学习、自我意识与谋算博弈设计；“能”对应决策、控制与系统验证。智能是二者在同一智能模型中的统一。"], ["谋算双脑体系结构", "谋策略体系结构与算策略体系结构分工，并通过协同机制共同工作；其数学与工程实现以正式专著中的定义和模型为依据。"]],
      sourcesLabel: "原始论文与阅读入口",
      sources: [["《孙子兵法的人工智能原理》原始 PDF", "/sun-tzu-ai-principles.pdf"], ["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["书籍与购买链接", "/books/"], ["李昂生教授团队", "/team"]],
      closing: "谋、算、智能模型与谋算双脑体系结构的正式含义以专著中的命题 15.10、定义 15.12、定义 20.8 和命题 20.9 为准。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 03 / MOUSUAN INTELLIGENCE (MSI)",
      title: "MouSuan Intelligence\nMou and Suan as strategies",
      lead: "Proposition 15.10 identifies Mou and Suan as two basic classes of intelligent strategy. Definition 15.12 then states: a Mou strategy is a hierarchical-abstraction strategy, and a Suan strategy is a divide-and-conquer strategy.",
      sections: [["MouSuan principle · Proposition 15.10", "Mou and Suan are two basic classes of intelligent strategy; every intelligent strategy consists of a sequence of Mou strategies and a sequence of Suan strategies."], ["Definition of MouSuan · Definition 15.12", "A Mou strategy is a hierarchical-abstraction strategy; a Suan strategy is a divide-and-conquer strategy."], ["Scientific principles", "The information theory of learning from observing, the information theory of self-awareness, and MouSuan theory form the three Zhi research pillars."], ["Engineering principles", "Autonomous decision, autonomous control and action, and autonomous system verification form the three Neng engineering steps."], ["Zhi, Neng, and intelligence", "Zhi corresponds to learning, self-awareness, and MouSuan contest design; Neng corresponds to decision, control, and system verification. Intelligence unifies them in one model."], ["MouSuan dual-brain architecture", "The Mou-strategy and Suan-strategy architectures divide their work and cooperate; their mathematical and engineering realisation follows the formal definitions and models in the monograph."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Original PDF · AI Principles of Sun Tzu’s The Art of War", "/sun-tzu-ai-principles.pdf"], ["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["Books & purchase links", "/books/"], ["Professor Angsheng Li’s team", "/team"]],
      closing: "The formal meanings of Mou, Suan, the intelligence model, and the MouSuan dual-brain architecture follow Proposition 15.10, Definitions 15.12 and 20.8, and Proposition 20.9 of the monograph.",
    }}
  />;
}
