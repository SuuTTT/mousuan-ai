import { PrinciplePage } from "../../principles/PrinciplePage";

export default function StructuredAIPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 04 / 结构化 AI",
      title: "结构化 AI\n让大模型与智能体可理解。",
      lead: "从编码树到大模型与智能体，把知识编辑、推理和行动放进可解释的结构信息框架。",
      sections: [["结构化知识", "模型不应只保存分散的事实。结构化 AI 关注知识之间的层级、关系和组织方式，使知识可以被定位、编辑与验证。"], ["推理与行动", "可解释推理需要展示信息如何被解码、哪些结构关系支持结论，以及结论如何转化为行动。"], ["从模型到智能体", "大模型提供广泛的语言与知识能力，结构信息为其补充可组织、可控制、可验证的内部结构，推动智能体走向自主与可信。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["Yifan Wei · GitHub", "https://github.com/weiyifan1023"], ["Yifan Wei · Homepage", "https://weiyifan1023.github.io/"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "本页是结构化 AI 的研究方向说明；代码与论文链接会随着项目成果继续补充。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 04 / STRUCTURED AI",
      title: "Structured AI\nwhen models and agents become legible.",
      lead: "From encoding trees to foundation models and agents, structured AI places knowledge editing, reasoning, and action inside an interpretable structural-information framework.",
      sections: [["Structured knowledge", "A model should not only store disconnected facts. Structured AI studies hierarchy, relations, and organisation so knowledge can be located, edited, and verified."], ["Reasoning and action", "Explainable reasoning shows how information was decoded, which structural relations support a conclusion, and how that conclusion becomes an action."], ["From models to agents", "Foundation models bring broad language and knowledge capabilities. Structural information adds organisation, control, and verification so agents can become more autonomous and trustworthy."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Yifan Wei · GitHub", "https://github.com/weiyifan1023"], ["Yifan Wei · Homepage", "https://weiyifan1023.github.io/"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "This page describes the structured-AI direction; project papers and code links will grow with new outcomes.",
    }}
  />;
}
