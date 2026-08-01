import { PrinciplePage } from "../PrinciplePage";

export default function AIPrinciplesPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 04 / 人工智能原理",
      title: "人工智能原理\n把黑箱路线变成白盒路线。",
      lead: "以智能的数学原理为基础，把谋算决策、自主控制与自主验证组织为一条可解释的人工智能科学技术路线。",
      sections: [["从计算到谋算", "神经网络、大模型与世界模型不应只是不可解释的工具；它们需要被放进信息科学原理中，成为可以观察、解码、推演和验证的系统。"], ["从原理到机器", "自我意识机器、孙子模型、谋算智能机器与谋算双脑体系结构智能机器，是把数学原理落实到智能实体的研究载体。"], ["谋算双脑", "谋脑负责层谱抽象的全局认知，算脑负责分而治之的演算与推理；两脑协同，让机器同时具备理解整体与计算局部的能力。"], ["白盒智能", "白盒不是放弃性能，而是让智能的表示、决策、行动和验证过程具有结构依据，能够解释、控制和持续改进。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["《人工智能科学——智能的数学原理》", "/ai-science-mathematical-principles.pdf"], ["关于我们 · 李昂生教授团队", "/#about"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "这是团队人工智能技术路线的概览页；专著、论文与仓库构成完整的研究资料。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 04 / PRINCIPLES OF ARTIFICIAL INTELLIGENCE",
      title: "Principles of AI\nturning black boxes into white boxes.",
      lead: "Grounded in mathematical principles of intelligence, this route combines strategic decisions, autonomous control, and autonomous verification into an explainable AI science and technology programme.",
      sections: [["From computation to MouSuan Intelligence", "Neural networks, foundation models, and world models should not remain inexplicable tools. They belong inside information science: systems that can be observed, decoded, inferred, and verified."], ["From principles to machines", "Self-awareness machines, the Sun Tzu model, MouSuan Intelligence machines, and MouSuan dual-brain architecture intelligent machines are research carriers for bringing mathematical principles into intelligent entities."], ["The MouSuan dual brain", "The Mou brain performs hierarchical abstraction and global cognition; the Suan brain performs divide-and-conquer calculation and reasoning. Together they connect whole-system understanding with local computation."], ["White-box intelligence", "White-box does not mean giving up performance. It means that representation, decision, action, and verification have structural grounds and can be explained, controlled, and improved."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — Mathematical Principles", "/ai-science-mathematical-principles.pdf"], ["About us · Angsheng Li’s research team", "/#about"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "This is an overview of the team’s AI technology route; the monograph, papers, and repository contain the full research record.",
    }}
  />;
}
