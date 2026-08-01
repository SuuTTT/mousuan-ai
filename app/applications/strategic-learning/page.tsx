import { PrinciplePage } from "../../principles/PrinciplePage";

export default function StrategicLearningPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 01 / 谋算学习",
      title: "谋算学习\n让学习过程可以解释。",
      lead: "基于信息科学原理，把学习从黑箱拟合推进到结构发现、信息解码与策略生成。",
      sections: [["学习的对象", "学习不是只记住输入与输出之间的相关性，而是理解环境中的结构、层级、约束与变化规律。"], ["白盒学习路线", "以结构信息、编码树和信息解码为基础，让模型能够展示自己看到了什么、如何组织知识、为什么采取某个策略。"], ["从学习到谋算", "当学习结果能够被解码和验证，系统就能进一步进行策略生成、自主决策与行动验证，形成从观察到谋算的闭环。"]],
      sourcesLabel: "原始来源与阅读入口",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["结构信息原理页", "/principles/structural-information"]],
      closing: "本页是谋算学习方向的应用说明；论文与结构信息原理页提供正式研究依据。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 01 / STRATEGIC-COMPUTATIONAL LEARNING",
      title: "Strategic-computational learning\nwhen learning becomes explainable.",
      lead: "Information-science principles move learning beyond black-box fitting toward structure discovery, information decoding, and strategy generation.",
      sections: [["What learning models", "Learning is not only a correlation between inputs and outputs. It is an understanding of structure, hierarchy, constraints, and change in an environment."], ["A white-box route", "With structural information, encoding trees, and information decoding, a model can show what it observed, how it organised knowledge, and why it selected a strategy."], ["From learning to planning", "Once learned structure can be decoded and verified, a system can generate strategy, decide autonomously, and verify its actions—a closed loop from observation to planning."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Hierarchical Decision Making Based on Structural Information Principles · JMLR", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"], ["Structural information principles", "/principles/structural-information"]],
      closing: "This page explains the strategic-learning direction; the paper and structural-information page provide the formal basis.",
    }}
  />;
}
