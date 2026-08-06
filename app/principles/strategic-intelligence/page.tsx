import { PrinciplePage } from "../PrinciplePage";

export default function StrategicIntelligencePage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 03 / 谋算智能（MSI）",
      title: "谋算智能\n谋与算都是智能策略",
      lead: "《人工智能科学》定义 28.5 以谋和算给出博弈的科学方法：谋采用层谱抽象，算采用分而治之。后续专著进一步将其表述为两类基本智能策略。",
      sections: [["谋算的科学方法 · 定义 28.5", "谋是层谱抽象的认知方法；算是分而治之的分析方法；博弈 = 谋算。"], ["智能的策略原理", "谋建立全局层谱认知并支持跨层演算与推理；算完成同一层谱内的局部逻辑推理。"], ["智能策略的构成 · 命题 15.10", "谋和算是两类基本智能策略；任何智能策略由一系列谋策略和算策略构成。"], ["机器体系结构", "智能体系由谋策略体系结构与算策略体系结构构成，二者分工并通过协同机制共同工作。"]],
      sourcesLabel: "原始论文与阅读入口",
      sources: [["《人工智能科学——智能的数学原理》", "/books#artificial-intelligence-science"], ["《孙子兵法的人工智能原理》· 命题 15.10 与定义 15.12", "/sun-tzu-ai-principles.pdf#page=411"], ["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["三部研究专著", "/books"]],
      closing: "基础定义优先采用《人工智能科学》定义 28.5；智能策略序列、跨层推理与谋算双脑体系结构的展开见后续专著。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 03 / MOUSUAN INTELLIGENCE (MSI)",
      title: "MouSuan Intelligence\nMou and Suan as strategies",
      lead: "Definition 28.5 of Artificial Intelligence Science gives Mou and Suan as the scientific methods of contest: Mou uses hierarchical abstraction, and Suan uses divide-and-conquer. The later monograph develops them as two basic classes of intelligent strategy.",
      sections: [["Scientific method of MouSuan · Definition 28.5", "Mou is the cognitive method of hierarchical abstraction; Suan is the analytical method of divide-and-conquer; contest = MouSuan."], ["Strategy Principle of Intelligence", "Mou builds global hierarchical cognition and supports reasoning across abstraction hierarchies; Suan performs local logical reasoning within a hierarchy."], ["Composition of strategy · Proposition 15.10", "Mou and Suan are two basic classes of intelligent strategy; every intelligent strategy consists of a sequence of Mou strategies and Suan strategies."], ["Machine architecture", "An intelligent system has cooperating Mou-strategy and Suan-strategy architectures with distinct roles."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — Mathematical Principles of Intelligence", "/books#artificial-intelligence-science"], ["AI Principles of Sun Tzu’s The Art of War · Proposition 15.10 and Definition 15.12", "/sun-tzu-ai-principles.pdf#page=411"], ["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["Three research monographs", "/books"]],
      closing: "The earlier Definition 28.5 is primary; the later monograph develops intelligent-strategy sequences, cross-hierarchy inference, and the MouSuan dual-brain architecture.",
    }}
  />;
}
