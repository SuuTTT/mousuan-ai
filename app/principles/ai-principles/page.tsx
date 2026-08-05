import { PrinciplePage } from "../PrinciplePage";

export default function AIPrinciplesPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 04 / 机器智能原理",
      title: "机器智能原理\n把黑箱路线变成\n白盒路线",
      lead: "以智能的数学原理为基础，把谋算决策、自主控制与自主验证组织为一条可解释的机器智能科学技术路线。",
      sections: [["从计算到谋算", "神经网络、大模型与世界模型不应只是不可解释的工具；它们需要被放进信息科学原理中，成为可以观察、解码、推演和验证的系统。"], ["从原理到机器", "自我意识机器、孙子模型、谋算智能机与谋算双脑体系结构智能机，是把数学原理落实到智能实体的研究载体。"], ["智、能与智能", "“智”是认知与策略设计的科学原理，即策略性设计；“能”是有效行动的工程原理、能动性与执行能力，即高效行动。智能是二者的统一，智能需要行动。英文暂用 Intelligence，也可表述为 recognition and agency。"], ["谋算双脑", "谋脑负责层谱抽象的全局认知与推理，算脑负责分而治之的演算与推理；两脑协同，让机器同时具备理解整体、计算局部和有效行动的能力。"], ["白盒智能", "白盒不是放弃性能，而是让智能的表示、决策、行动和验证过程具有结构依据，能够解释、控制和持续改进。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["《人工智能科学——智能的数学原理》购书入口", "/books"], ["关于我们 · 李昂生教授团队", "/#about"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "这是团队机器智能技术路线的概览页；专著、论文与仓库构成完整的研究资料。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 04 / PRINCIPLES OF MACHINE INTELLIGENCE",
      title: "Principles of machine intelligence\nturning black boxes into white boxes",
      lead: "Grounded in mathematical principles of intelligence, this route combines MouSuan decision-making, autonomous control, and autonomous verification into an explainable machine-intelligence science and technology programme.",
      sections: [["From computation to MouSuan Intelligence", "Neural networks, foundation models, and world models should not remain inexplicable tools. They belong inside information science: systems that can be observed, decoded, generated, inferred, and verified."], ["From principles to machines", "Self-awareness machines, the Sun Tzu Model, MouSuan intelligent machines, and MouSuan dual-brain (left–right brain) architecture intelligent machines are research carriers for bringing mathematical principles into machine intelligence."], ["Zhi, Neng, and intelligence", "Zhi refers to recognition and to the scientific principles of cognition and strategic design; Neng refers to agency and to the engineering principles and capability for efficient action. Chinese 智能 is provisionally rendered as Intelligence and can also be expressed as recognition and agency. It is their unity and requires action."], ["The MouSuan dual brain", "The Mou brain performs hierarchically abstracting global recognition and reasoning; the Suan brain performs divide-and-conquer calculation and reasoning. Together they connect whole-system understanding with local computation and efficient action."], ["White-box intelligence", "White-box does not mean giving up performance. It means that representation, decision, action, and verification have structural grounds and can be explained, controlled, and improved."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — purchase entry", "/books"], ["About us · Angsheng Li’s research team", "/#about"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "This is an overview of the team’s machine-intelligence route; the monograph, papers, and repository contain the full research record.",
    }}
  />;
}
