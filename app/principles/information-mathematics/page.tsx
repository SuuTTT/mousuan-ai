import { PrinciplePage } from "../PrinciplePage";

export default function InformationMathematicsPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 02 / 信息的数学原理",
      title: "信息的数学原理\n演算、解码与生成",
      lead: "信息世界的科学范式是层谱抽象。信息的数学原理以信息演算理论、信息解码原理和信息生成原理为三大支柱，并被表述为层谱抽象策略的数学原理、信息世界的数学原理或离散系统的微积分。",
      sections: [["信息演算理论", "信息演算研究层谱抽象结构上的演算、推理与优化。编码树为层谱抽象提供数学模型与数据结构。"], ["信息解码原理", "定义 19.29 给出 D(A) = H₁(A) − H(A)；定理 19.44 证明同一编码树上的压缩信息等于结构熵差，也等于解码信息。"], ["信息生成原理", "信息定律 VI 将确定性到不确定性的转化所需策略称为生成策略，并将生成策略所生成的不确定性的量称为生成信息。"]],
      sourcesLabel: "原始来源与阅读入口",
      sources: [["《孙子兵法的人工智能原理》原始 PDF", "/sun-tzu-ai-principles.pdf"], ["信息科学文章：打破香农的墙", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["书籍与购买链接", "/books/"]],
      closing: "术语与编号采用信息定律 VI、定义 19.14、19.29 和定理 19.44；信息演算理论、信息解码原理和信息生成原理的完整体系见原始专著。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 02 / MATHEMATICAL PRINCIPLES OF INFORMATION",
      title: "Mathematical principles of information\ncalculus, decoding, and generation",
      lead: "Hierarchical abstraction is the scientific paradigm of the information world. The mathematical principles of information have three pillars—information calculus, information decoding, and information generation—and are described as the mathematics of hierarchical-abstraction strategies, the mathematics of the information world, or the calculus of discrete systems.",
      sections: [["Information calculus", "Information calculus studies calculation, inference, and optimisation on hierarchical-abstraction structures. Encoding trees provide the mathematical model and data structure."], ["Information decoding", "Definition 19.29 gives D(A) = H₁(A) − H(A); Theorem 19.44 proves that compression information under the same encoding tree equals the structural-entropy difference and equals decoding information."], ["Information generation", "Information Law VI calls a strategy that transforms certainty into uncertainty a generating strategy, and the quantity of uncertainty it generates generating information."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Original PDF · AI Principles of Sun Tzu’s The Art of War", "/sun-tzu-ai-principles.pdf"], ["Article: Beyond Shannon’s wall", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["Books & purchase links", "/books/"]],
      closing: "Terminology and numbering follow Information Law VI, Definitions 19.14 and 19.29, and Theorem 19.44; the complete system of information calculus, decoding, and generation appears in the original monographs.",
    }}
  />;
}
