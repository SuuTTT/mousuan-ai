import { PrinciplePage } from "../PrinciplePage";

export default function StrategicIntelligencePage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 03 / 谋算智能",
      title: "谋算智能\n从计算走向谋与算。",
      lead: "谋算智能把观察学习、自我意识与谋算博弈组织成一个可解释、可验证的智能科学框架。",
      sections: [["观察学习", "智能体先观察世界中的结构变化，再从结构中学习，而不是只在大量样本上拟合相关性。"], ["自我意识", "智能体需要知道自己如何表示世界、拥有什么能力、处在什么状态；自我意识是自主决策与可信行动的内部条件。"], ["谋算博弈", "在对抗、协作与不确定环境中，智能体通过解码信息、生成策略、作出决策并验证结果，形成从知到行的闭环。"]],
      sourcesLabel: "原始论文与阅读入口",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["关于我们 · 李昂生教授团队", "/#about"]],
      closing: "这是一页面向公众的概念说明；论文与团队主页提供正式研究细节。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 03 / STRATEGIC-COMPUTATIONAL INTELLIGENCE",
      title: "Strategic intelligence\nfrom computation to planning.",
      lead: "Strategic-computational intelligence organises observation-based learning, self-awareness, and strategic games into an explainable and verifiable intelligence science.",
      sections: [["Observation-based learning", "An intelligent subject first observes structural change in the world and learns from that structure, rather than fitting correlations only from large samples."], ["Self-awareness", "A subject needs to know how it represents the world, what capabilities it has, and what state it occupies. Self-awareness is an internal condition for autonomous decisions and trustworthy action."], ["Strategic games", "Across adversarial, cooperative, and uncertain environments, a subject decodes information, generates strategy, decides, acts, and verifies the outcome—a closed loop from knowing to doing."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["About us · Angsheng Li’s research team", "/#about"]],
      closing: "This is a public-facing concept page; the paper and team homepage provide the formal research details.",
    }}
  />;
}
