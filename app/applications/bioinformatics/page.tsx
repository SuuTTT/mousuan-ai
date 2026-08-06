import { PrinciplePage } from "../../principles/PrinciplePage";

export default function BioinformaticsPage() {
  return <PrinciplePage variant="application"
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 06 / 生物信息与生命科学原理",
      title: "生物信息、生命的科学原理\n从信息理解生命系统",
      lead: "以信息科学与结构化建模研究生命系统中的信息组织、演化规律与可验证的科学原理。",
      sections: [["生命系统的信息结构", "把基因、细胞、个体与生态系统视为相互嵌套的层级结构，研究信息如何表示、组织与传递。"], ["从局部观测到整体规律", "通过层谱抽象连接分子、细胞与系统尺度，在多层信息之间建立可解释的关系与推理。"], ["可验证的生命科学原理", "将结构发现、信息解码与计算结合起来，形成可复现、可检验、可持续更新的生命科学模型。"]],
      sourcesLabel: "研究入口",
      sources: [["基于结构熵的无监督皮肤病变分割", "https://arxiv.org/abs/2309.01899"], ["不同约束下的半监督结构熵聚类", "https://arxiv.org/abs/2312.10917"], ["SECTOR：空间转录组时空组织的结构熵学习", "https://doi.org/10.1093/bioinformatics/btag367"], ["信息世界的数学原理", "/principles/information-mathematics"], ["结构信息原理", "/principles/structural-information"], ["术语 Wiki", "/wiki/terminology"]],
      closing: "生命系统的多层组织可由结构发现、信息解码和可复现实验共同研究。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 06 / BIOINFORMATICS & SCIENTIFIC PRINCIPLES OF LIFE",
      title: "Bioinformatics & scientific principles of life\nunderstanding living systems through information",
      lead: "Study information organisation, evolutionary regularities, and verifiable principles in living systems through information science and structured modelling.",
      sections: [["Information structures in living systems", "Treat genes, cells, organisms, and ecosystems as nested hierarchical structures, and study how information is represented, organised, and transmitted."], ["From local observations to global regularities", "Use hierarchically abstracting to connect molecular, cellular, and system scales, building interpretable relations and reasoning across levels."], ["Verifiable principles of life science", "Combine structure discovery, information decoding, and calculation into reproducible, testable, and continuously updateable models of living systems."]],
      sourcesLabel: "RESEARCH ENTRANCE",
      sources: [["Unsupervised skin-lesion segmentation via structural entropy", "https://arxiv.org/abs/2309.01899"], ["Semi-supervised clustering via structural entropy with different constraints", "https://arxiv.org/abs/2312.10917"], ["SECTOR: structural-entropy learning of spatiotemporal organisation in spatial transcriptomics", "https://doi.org/10.1093/bioinformatics/btag367"], ["Mathematical principles of the information world", "/principles/information-mathematics"], ["Structural information principles", "/principles/structural-information"], ["Terminology Wiki", "/wiki/terminology"]],
      closing: "The multilevel organisation of living systems can be studied through structure discovery, information decoding, and reproducible experiments.",
    }}
  />;
}
