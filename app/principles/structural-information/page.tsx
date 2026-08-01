import { PrinciplePage } from "../PrinciplePage";

export default function StructuralInformationPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 01 / 结构信息",
      title: "结构信息\n让结构本身成为信息。",
      lead: "结构信息研究复杂系统中的组织关系：用编码树和结构熵度量结构中嵌入的信息，并以层谱抽象建立信息世界的共同语言。",
      sections: [["研究问题", "香农熵描述随机性，却不能完整表达复杂系统的组织结构。结构信息关注节点、社区、层级与整体之间的关系，回答“结构如何携带信息”。"], ["核心原理", "编码树把一个复杂系统逐层组织为可解码的层级结构；结构熵则度量观察者沿编码树进行结构描述时所需的信息量。结构越有组织，结构信息越可被压缩、解释和推演。"], ["研究路线", "从图与网络出发，发展结构信息学习、层级发现、结构化表示与决策方法，为可解释人工智能、世界模型和谋算智能提供结构基础。"]],
      sourcesLabel: "原始来源与延伸阅读",
      sources: [["2016 TIT PDF：结构信息与网络动力学复杂性", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"], ["2016 TIT DOI：结构信息与网络动力学复杂性", "https://doi.org/10.1109/TIT.2016.2555904"], ["Structural Information Learning Machinery · arXiv", "https://arxiv.org/abs/2001.09637"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "本页是研究主页的解释性入口；原始论文与代码仓库仍是正式引用来源。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 01 / STRUCTURAL INFORMATION",
      title: "Structural information\nwhen structure itself becomes information.",
      lead: "Structural information studies the organisation of complex systems: encoding trees and structural entropy measure information embedded in structure and provide a common language for the information world.",
      sections: [["The question", "Shannon entropy describes randomness, but it does not fully express organisation. Structural information studies relations among nodes, communities, hierarchies, and wholes: how does structure carry information?"], ["The principle", "An encoding tree organises a complex system into a decodable hierarchy; structural entropy measures the information required to describe that structure. The more organised the structure, the more it can be compressed, explained, and inferred."], ["The route", "From graphs and networks, we develop structural-information learning, hierarchy discovery, structured representations, and decisions—the basis for explainable AI, world models, and strategic intelligence."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["2016 TIT PDF: Structural Information and Dynamical Complexity of Networks", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"], ["2016 TIT DOI: Structural Information and Dynamical Complexity of Networks", "https://doi.org/10.1109/TIT.2016.2555904"], ["Structural Information Learning Machinery · arXiv", "https://arxiv.org/abs/2001.09637"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "This page is an explanatory entry point; the original paper and repository remain the authoritative citation sources.",
    }}
  />;
}
