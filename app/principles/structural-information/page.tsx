import { PrinciplePage } from "../PrinciplePage";

export default function StructuralInformationPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 01 / 结构信息",
      title: "结构信息\n编码树、结构熵与解码信息",
      lead: "编码树给出信息系统的层谱抽象；结构熵度量在编码树下嵌入信息系统中的不确定性；解码信息由一维结构熵与结构熵之差定义。",
      sections: [["编码树 · 定义 8.2", "编码树是层谱抽象的数学定义、数学模型与数据结构。"], ["结构熵 · 定义 9.3–9.4", "Hᵀ(A) 度量在编码树 T 下嵌入信息系统 A 中的不确定性；信息系统的结构熵定义为 H(A) = minᵀ Hᵀ(A)。"], ["解码信息 · 定义 10.1", "信息系统 A 的解码信息定义为 D(A) = H₁(A) − H(A)。定理 10.9 进一步证明，在同一编码树下，压缩信息等于解码信息。"]],
      sourcesLabel: "原始来源与延伸阅读",
      sources: [["《人工智能科学——智能的数学原理》", "/books#artificial-intelligence-science"]],
      closing: "本页采用《人工智能科学——智能的数学原理》定义 8.2、9.3–9.4、10.1 与定理 10.9；结构信息论的原始论文列为进一步研究入口。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 01 / STRUCTURAL INFORMATION",
      title: "Structural information\nencoding trees, entropy, and decoding",
      lead: "An encoding tree defines a hierarchical abstraction of an information system; structural entropy measures uncertainty embedded in the system under that tree; decoding information is defined by the difference between one-dimensional and structural entropy.",
      sections: [["Encoding tree · Definition 8.2", "An encoding tree is the mathematical definition, model, and data structure of hierarchical abstraction."], ["Structural entropy · Definitions 9.3–9.4", "Hᵀ(A) measures uncertainty embedded in information system A under encoding tree T; the structural entropy of the system is H(A) = minᵀ Hᵀ(A)."], ["Decoding information · Definition 10.1", "The decoding information of A is D(A) = H₁(A) − H(A). Theorem 10.9 further proves that compression information equals decoding information under the same encoding tree."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — Mathematical Principles of Intelligence", "/books#artificial-intelligence-science"]],
      closing: "This page follows Definitions 8.2, 9.3–9.4, and 10.1 and Theorem 10.9 of Artificial Intelligence Science; the original structural-information paper is linked for further research.",
    }}
  />;
}
