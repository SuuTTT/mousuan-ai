import { PrinciplePage } from "../../principles/PrinciplePage";

export default function NetworkSecurityPage() {
  return <PrinciplePage variant="application"
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 05 / 网络安全与舆情分析",
      title: "网络安全、舆情分析\n让复杂传播过程可解释",
      lead: "以结构信息刻画网络空间中的层级关系、传播路径与群体态势，为安全研判和舆情分析建立可观察、可解码、可验证的科学方法。",
      sections: [["结构化网络认知", "将网络节点、关系与传播过程组织成可观察的层谱结构，识别关键节点、异常关系与跨层传播。"], ["安全态势与舆情演化", "从局部事件到整体态势，结合信息解码与动态建模，解释热点形成、扩散、转折与消退。"], ["可验证的策略生成", "把结构发现转化为风险研判、响应优先级与行动方案，并通过持续观测验证策略效果。"]],
      sourcesLabel: "研究入口",
      sources: [["动态图结构熵增量测量（AIJ）", "https://penghao-bdsc.github.io/papers/AIJ2024-Incremental%20Measurement%20of%20Structural%20Entropy%20for%20Dynamic%20Graphs.pdf"], ["结构熵最小化与无监督社会事件检测", "https://penghao-bdsc.github.io/papers/Hierarchical%20and%20Incremental%20Structural%20Entropy%20Minimization%20for%20Unsupervised%20Social%20Event%20Detection.pdf"], ["结构信息原理", "/principles/structural-information"], ["结构化决策", "/applications/structured-decision-making"], ["术语 Wiki", "/wiki/terminology"]],
      closing: "该方向以动态图结构熵、层级结构熵极小化和结构化决策为主要方法基础。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 05 / CYBERSECURITY & PUBLIC-OPINION ANALYSIS",
      title: "Cybersecurity & public-opinion analysis\nwhen complex propagation becomes legible",
      lead: "Use structural information to describe hierarchies, propagation paths, and collective signals in networked spaces, creating an observable, decodable, and verifiable method for security and public-opinion analysis.",
      sections: [["Structured network cognition", "Organise network nodes, relations, and propagation into observable hierarchical structures so key nodes, anomalous relations, and cross-level diffusion can be identified."], ["Security posture and opinion dynamics", "Move from local events to system-level posture with information decoding and dynamic modelling that explains how attention forms, spreads, turns, and fades."], ["Verifiable strategy generation", "Turn discovered structure into risk assessments, response priorities, and action plans, then verify their effects through continued observation."]],
      sourcesLabel: "RESEARCH ENTRANCE",
      sources: [["Incremental measurement of structural entropy for dynamic graphs", "https://penghao-bdsc.github.io/papers/AIJ2024-Incremental%20Measurement%20of%20Structural%20Entropy%20for%20Dynamic%20Graphs.pdf"], ["Structural-entropy minimization for unsupervised social-event detection", "https://penghao-bdsc.github.io/papers/Hierarchical%20and%20Incremental%20Structural%20Entropy%20Minimization%20for%20Unsupervised%20Social%20Event%20Detection.pdf"], ["Structural information principles", "/principles/structural-information"], ["Structured decision-making", "/applications/structured-decision-making"], ["Terminology Wiki", "/wiki/terminology"]],
      closing: "The direction is grounded in dynamic-graph structural entropy, hierarchical structural-entropy minimisation, and structured decision-making.",
    }}
  />;
}
