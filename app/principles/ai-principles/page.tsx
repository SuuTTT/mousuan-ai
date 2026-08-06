import { PrinciplePage } from "../PrinciplePage";

export default function AIPrinciplesPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 04 / 机器智能原理",
      title: "机器智能原理\n从科学原理到工程实现",
      lead: "定义 34.4 的孙子模型以学习、自我意识、博弈／谋算、决策、行动和系统验证构成六个步骤，并将“智”的科学原理与“能”的工程原理统一起来。",
      sections: [["智能论题 · 定义 34.5", "一个智能体的智能就是它的信息，即：智能 =（狭义）信息。孙子模型的六个步骤都以信息为数学基础。"], ["科学原理 · 智", "定义 34.3 将学习、自我意识和博弈／谋算规定为人工智能科学原理。"], ["工程原理 · 能", "孙子模型以决策、行动和系统验证作为后三个工程步骤，把科学原理落实为可运行、可检验的过程。"], ["孙子模型 · 定义 34.4", "中文“智能”已蕴含实现结构：智是科学原理，能是工程原理；六个步骤连接认识、策略、执行与验证。"], ["谋算双脑体系结构", "谋策略体系结构与算策略体系结构分工协同，使层谱抽象与分而治之在同一机器智能系统中结合。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["《人工智能科学——智能的数学原理》", "/books#artificial-intelligence-science"]],
      closing: "本页以先出版的《人工智能科学——智能的数学原理》定义 34.3–34.5 为基本依据；后续专著用于补充孙子模型与机器体系结构的展开。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 04 / PRINCIPLES OF MACHINE INTELLIGENCE",
      title: "Principles of machine intelligence\nfrom science to engineering",
      lead: "Definition 34.4 presents the Sun Tzu Model as six steps—learning, self-awareness, contest/MouSuan, decision, action, and system verification—uniting the scientific principles of Zhi with the engineering principles of Neng.",
      sections: [["Intelligence Thesis · Definition 34.5", "The intelligence of an intelligent agent is its information: intelligence = information in the narrow sense. Information is the mathematical basis of the model."], ["Scientific principles · Zhi", "Definition 34.3 identifies learning, self-awareness, and contest/MouSuan as the scientific principles of artificial intelligence."], ["Engineering principles · Neng", "Decision, action, and system verification are the final three engineering steps, making the scientific principles operational and testable."], ["Sun Tzu Model · Definition 34.4", "The Chinese word for intelligence already contains the structure: Zhi denotes scientific principles and Neng denotes engineering principles."], ["MouSuan dual-brain architecture", "Mou-strategy and Suan-strategy architectures divide their work and cooperate, combining hierarchical abstraction and divide-and-conquer in one machine-intelligence system."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — Mathematical Principles of Intelligence", "/books#artificial-intelligence-science"]],
      closing: "This page takes Definitions 34.3–34.5 of the earlier Artificial Intelligence Science as its primary basis; the later monograph provides further development of the model and machine architecture.",
    }}
  />;
}
