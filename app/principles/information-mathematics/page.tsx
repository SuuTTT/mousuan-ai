import { PrinciplePage } from "../PrinciplePage";

export default function InformationMathematicsPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 02 / 信息的数学原理",
      title: "信息的数学原理\n为信息世界建立数学语言",
      lead: "信息世界的公理化数学原理，也即离散系统的微积分。信息演算、信息解码与信息生成构成描述离散信息世界的三大数学支柱。",
      sections: [["信息演算", "把结构、层级和编码过程纳入统一的演算框架，使信息不再只是一个统计数值，而是可以被操作、比较和传递的对象。"], ["信息解码", "从观察到结构，从结构到知识，解码过程把隐藏在系统组织中的信息还原为可理解、可推演的表示。"], ["信息生成", "信息不是凭空出现的。系统在约束、演化与观察中生成新的结构差异；理解生成机制，才能解释学习、创新与世界模型的形成。"]],
      sourcesLabel: "原始来源与阅读入口",
      sources: [["信息科学文章：打破香农的墙", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["书籍与购买链接", "/books/"]],
      closing: "本页将书稿中的原理整理为网站阅读入口；请以原始专著作为完整内容来源。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 02 / MATHEMATICAL PRINCIPLES OF INFORMATION",
      title: "Mathematical principles\nof information",
      lead: "Axiomatized mathematical principles of the information world—equivalently, the calculus of discrete systems. Information calculus, decoding, and generation form three pillars for describing discrete information-world systems.",
      sections: [["Information calculus", "Structure, hierarchy, and encoding become objects of one calculus. Information is no longer only a statistical number; it can be operated on, compared, and transmitted."], ["Information decoding", "From observation to structure, and from structure to knowledge, decoding recovers hidden information as a representation that can be understood and inferred."], ["Information generation", "Information does not appear from nowhere. Systems generate new structural differences through constraints, evolution, and observation. Understanding generation is essential to learning, innovation, and world models."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Article: Beyond Shannon’s wall", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["Books & purchase links", "/books/"]],
      closing: "This page turns the book’s principles into a readable web entry point; the original monograph is the complete source.",
    }}
  />;
}
