import { PrinciplePage } from "../PrinciplePage";

export default function StructuralInformationPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 01 / 结构信息",
      title: "结构信息\n编码树、结构熵与解码信息",
      lead: "编码树给出信息系统的层谱抽象；结构熵度量在编码树下嵌入信息系统中的不确定性；解码信息由一维结构熵与结构熵之差定义。",
      sections: [["编码树 · 定义 19.14", "有限集合 V 的编码树是满足根节点、逐层划分与单点叶节点条件的有根树。编码树是层谱抽象的数学模型与数据结构。"], ["结构熵 · 定义 19.20–19.21", "Hₜ(A) 度量在编码树 T 下嵌入信息系统 A 中的不确定性；信息系统的结构熵定义为 H(A) = minₜ Hₜ(A)。"], ["解码信息 · 定义 19.29", "信息系统 A 的解码信息定义为 D(A) = H₁(A) − H(A)。定理 19.44 进一步证明，在同一编码树下，压缩信息等于解码信息。"]],
      sourcesLabel: "原始来源与延伸阅读",
      sources: [["2016 TIT PDF：结构信息与网络动力学复杂性", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"], ["Structural Information Learning Machinery · arXiv", "https://arxiv.org/abs/2001.09637"], ["结构熵综述仓库", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "上述定义与公式采用《孙子兵法的人工智能原理》第 19 章中的编号；结构信息论的原始研究以 2016 年 IEEE Transactions on Information Theory 论文为正式论文来源。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 01 / STRUCTURAL INFORMATION",
      title: "Structural information\nencoding trees, entropy, and decoding",
      lead: "An encoding tree defines a hierarchical abstraction of an information system; structural entropy measures uncertainty embedded in the system under that tree; decoding information is defined by the difference between one-dimensional and structural entropy.",
      sections: [["Encoding tree · Definition 19.14", "An encoding tree of a finite set V is a rooted tree satisfying root, recursive partition, and singleton-leaf conditions. It is the mathematical model and data structure of hierarchical abstraction."], ["Structural entropy · Definitions 19.20–19.21", "Hᵀ(A) measures uncertainty embedded in information system A under encoding tree T; the structural entropy of the system is H(A) = minᵀ Hᵀ(A)."], ["Decoding information · Definition 19.29", "The decoding information of A is D(A) = H₁(A) − H(A). Theorem 19.44 further proves that compression information equals decoding information under the same encoding tree."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["2016 TIT PDF: Structural Information and Dynamical Complexity of Networks", "https://ieeexplore.ieee.org/iel7/18/7473802/07456290.pdf"], ["Structural Information Learning Machinery · arXiv", "https://arxiv.org/abs/2001.09637"], ["Structural Entropy survey repository", "https://github.com/SuuTTT/structural-entropy-survey"]],
      closing: "The numbering and formulae above follow Chapter 19 of AI Principles of Sun Tzu’s The Art of War; the 2016 IEEE Transactions on Information Theory paper remains the original research citation for structural information theory.",
    }}
  />;
}
