import { PrinciplePage } from "../PrinciplePage";

export default function InformationMathematicsPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 02 / 信息的数学原理",
      title: "信息的数学原理\n演算、解码与生成",
      lead: "信息世界的科学范式是层谱抽象。信息的数学原理以信息演算理论、信息解码原理和信息生成原理为三大支柱，并被表述为层谱抽象策略的数学原理、信息世界的数学原理或离散系统的微积分。",
      sections: [["信息演算理论", "信息演算研究层谱抽象结构上的演算、推理与优化。定义 8.2 以编码树给出层谱抽象的数学模型与数据结构。"], ["信息解码原理", "定义 10.1 给出解码信息；定理 10.9 证明同一编码树上的压缩信息等于结构熵差，也等于解码信息。"], ["信息生成原理", "信息生成研究从确定性到不确定性的策略及其生成的信息量；完整定义与论证见原书。"]],
      sourcesLabel: "原始来源与阅读入口",
      sources: [["《人工智能科学——智能的数学原理》", "/books#artificial-intelligence-science"], ["信息科学文章：打破香农的墙", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["三部研究专著", "/books"]],
      closing: "这里只列理解主题所需的关键依据：定义 8.2、定义 10.1 与定理 10.9；完整定义、证明与信息生成理论见《人工智能科学——智能的数学原理》。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 02 / MATHEMATICAL PRINCIPLES OF INFORMATION",
      title: "Mathematical principles of information\ncalculus, decoding, and generation",
      lead: "Hierarchical abstraction is the scientific paradigm of the information world. The mathematical principles of information have three pillars—information calculus, information decoding, and information generation—and are described as the mathematics of hierarchical-abstraction strategies, the mathematics of the information world, or the calculus of discrete systems.",
      sections: [["Information calculus", "Information calculus studies calculation, inference, and optimisation on hierarchical-abstraction structures. Definition 8.2 presents the encoding tree as their mathematical model and data structure."], ["Information decoding", "Definition 10.1 introduces decoding information; Theorem 10.9 proves that compression information under the same encoding tree equals the structural-entropy difference and decoding information."], ["Information generation", "Information generation studies strategies from certainty to uncertainty and the information they generate; the complete definitions and arguments appear in the book."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Artificial Intelligence Science — Mathematical Principles of Intelligence", "/books#artificial-intelligence-science"], ["Article: Beyond Shannon’s wall", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["Three research monographs", "/books"]],
      closing: "This page lists only the key foundations: Definitions 8.2 and 10.1 and Theorem 10.9. Complete definitions, proofs, and the theory of information generation appear in Artificial Intelligence Science.",
    }}
  />;
}
