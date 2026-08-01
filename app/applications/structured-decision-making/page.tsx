import { PrinciplePage } from "../../principles/PrinciplePage";

export default function StructuredDecisionMakingPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 03 / 结构化决策",
      title: "结构化决策\n让决策有结构、有依据。",
      lead: "用结构信息解释层级决策、多智能体协同、强化学习探索与动态环境中的策略选择。",
      sections: [["决策不是孤立动作", "复杂环境中的一次决策依赖层级、上下文、资源、对手与目标。结构化决策首先要把这些关系表示出来。"], ["层级与协同", "编码树和层级表示帮助系统把整体目标拆解为可管理的子目标，并在多智能体协作中协调局部行动与全局结果。"], ["决策的验证", "一个可信决策系统不仅要给出动作，还要说明依据、预测后果，并通过环境反馈检验策略是否有效。"]],
      sourcesLabel: "原始论文与研究入口",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["曾祥华 · DBLP", "https://dblp.org/pid/165/5653.html"], ["结构信息原理页", "/principles/structural-information"]],
      closing: "本页将论文主题转换为研究方向说明；正式方法与实验请参阅原始论文。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 03 / STRUCTURED DECISION-MAKING",
      title: "Structured decisions\nwhen choices have structure and evidence.",
      lead: "Structural information explains hierarchical decisions, multi-agent coordination, reinforcement-learning exploration, and strategy selection in dynamic environments.",
      sections: [["A decision is not an isolated action", "A decision in a complex environment depends on hierarchy, context, resources, adversaries, and goals. Structured decision-making represents these relations first."], ["Hierarchy and coordination", "Encoding trees and hierarchical representations break a global objective into manageable subgoals and coordinate local actions with global outcomes in multi-agent systems."], ["Decision verification", "A trustworthy decision system does more than emit an action: it exposes its basis, predicts consequences, and tests the strategy through environmental feedback."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["Xianghua Zeng · DBLP", "https://dblp.org/pid/165/5653.html"], ["Structural information principles", "/principles/structural-information"]],
      closing: "This page translates the paper’s theme into a research-direction overview; see the paper for formal methods and experiments.",
    }}
  />;
}
