import { PrinciplePage } from "../PrinciplePage";

export default function AIPrinciplesPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 04 / 机器智能原理",
      title: "机器智能原理\n从科学原理到工程实现",
      lead: "孙子谋算智能模型以观察学习、自我意识、谋算博弈设计、决策、行动和系统验证构成六个步骤，并将“智”的科学原理与“能”的工程原理统一起来。",
      sections: [["智能论题", "一个智能体的智能就是它的信息，即：智能 = 信息。孙子谋算智能模型的六个步骤都以信息为数学基础。"], ["科学原理 · 智", "观察学习、自我意识和谋算博弈设计构成前三个步骤，分别对应认知世界与改造世界、认知自我与改造自我，以及规划与博弈策略设计。"], ["工程原理 · 能", "自主决策、自主控制与行动、自主系统验证构成后三个步骤，把科学原理落实为工程过程。"], ["通用模型 · 命题 20.9", "孙子谋算智能模型是一个有原理、可解释的通用人工智能模型，并给出观察学习机、自我意识机、谋算博弈设计机、谋算智能机、谋算机器人和谋算智能系统的框架。"], ["谋算双脑体系结构", "谋策略体系结构与算策略体系结构分工协同，使层谱抽象与分而治之在同一机器智能系统中结合。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["《孙子兵法的人工智能原理》原始 PDF", "/sun-tzu-ai-principles.pdf"], ["三部研究专著", "/books"], ["李昂生教授团队", "/team"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "术语与编号采用定义 20.8、命题 20.9 与 §20.10；完整论证、定义与模型见原始专著。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 04 / PRINCIPLES OF MACHINE INTELLIGENCE",
      title: "Principles of machine intelligence\nfrom science to engineering",
      lead: "The Sun Tzu MouSuan intelligence model consists of six steps—learning from observing, self-awareness, MouSuan contest design, decision, action, and system verification—and unifies the scientific principles of Zhi with the engineering principles of Neng.",
      sections: [["Intelligence thesis", "The intelligence of an intelligent agent is its information: intelligence = information. Information is the mathematical basis of all six steps of the model."], ["Scientific principles · Zhi", "Learning from observing, self-awareness, and MouSuan contest design form the first three steps: knowing and changing the world, knowing and changing oneself, and planning and contest-strategy design."], ["Engineering principles · Neng", "Autonomous decision, autonomous control and action, and autonomous system verification form the last three steps and realise the scientific principles as engineering processes."], ["General model · Proposition 20.9", "The Sun Tzu MouSuan intelligence model is a principled, explainable general AI model and provides frameworks for learning-from-observing machines, self-awareness machines, MouSuan contest-design machines, intelligent machines, robots, and intelligent systems."], ["MouSuan dual-brain architecture", "Mou-strategy and Suan-strategy architectures divide their work and cooperate, combining hierarchical abstraction and divide-and-conquer in one machine-intelligence system."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Original PDF · AI Principles of Sun Tzu’s The Art of War", "/sun-tzu-ai-principles.pdf"], ["Three research monographs", "/books"], ["Professor Angsheng Li’s team", "/team"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "Terminology and numbering follow Definition 20.8, Proposition 20.9, and §20.10; complete arguments, definitions, and models appear in the original monograph.",
    }}
  />;
}
