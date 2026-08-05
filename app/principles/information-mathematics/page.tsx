import { PrinciplePage } from "../PrinciplePage";

export default function InformationMathematicsPage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "公理原理 · 02 / 信息的数学原理",
      title: "信息的数学原理\n研究层谱抽象策略与局部逻辑推理",
      lead: "信息世界的层谱抽象定律与信息基本定理，指向以层谱抽象策略与局部逻辑推理为研究对象的数学原理；如同微积分以分而治之策略为研究对象，它建立信息演算、信息解码与信息生成的数学原理，即离散系统的微积分，也即层谱抽象策略的数学原理。数学是信息世界的对象，并可由层谱抽象加以定义；信息的数学原理与经典数学、计算机科学数学不处于同一抽象层谱。",
      sections: [["信息演算", "层谱抽象策略与局部逻辑推理是信息演算的研究对象。层谱抽象的实质是多抽象层谱的全局认知；信息演算研究信息结构如何被定义、操作、比较和传递，而不是把层谱抽象误作所有问题的总方法。"], ["信息解码", "从观察到结构，从结构到知识，解码过程把隐藏在系统组织中的信息还原为可理解、可推演的表示，并形成可用的解码信息。"], ["信息生成", "信息不是凭空出现的。系统在约束、演化与观察中生成新的结构差异；生成策略说明可用信息如何形成，并支撑学习、创新与世界模型。"]],
      sourcesLabel: "原始来源与阅读入口",
      sources: [["信息科学文章：打破香农的墙", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["书籍与购买链接", "/books/"]],
      closing: "经典数学以物质抽象与物理世界建模为基础，数理逻辑支撑逻辑推理，计算理论以计算为研究对象；支撑抽象智能的数学原理与机器智能的模型，仍需要从信息世界研究。本页将书稿中的原理整理为网站阅读入口；“层谱抽象策略”和“局部逻辑推理”的正式定义以原始专著为准。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "PRINCIPLES · 02 / MATHEMATICAL PRINCIPLES OF INFORMATION",
      title: "Mathematical principles\nof information",
      lead: "The law of hierarchical abstraction and the fundamental theorem of information identify mathematical principles that take hierarchical-abstracting strategy and local logical reasoning as their objects of study. Just as calculus takes divide-and-conquer strategy as its object of study, they establish mathematical principles for information calculus, decoding, and generation: the calculus of discrete systems, namely the mathematical principles of hierarchical-abstracting strategy. Mathematics is an object of the information world and can be defined through hierarchical abstraction; these principles do not occupy the same spectrum of abstraction as classical mathematics or the mathematics of computer science.",
      sections: [["Information calculus", "Hierarchical-abstracting strategy and local logical reasoning are its objects of study. The essence of hierarchical abstraction is global recognition across multiple hierarchies of abstraction. Information calculus asks how information structures are defined, operated on, compared, and transmitted; it does not treat hierarchical abstraction as a universal method."], ["Information decoding", "From observation to structure, and from structure to knowledge, decoding recovers hidden information as a representation that can be understood and inferred, producing usable decoded information."], ["Information generation", "Information does not appear from nowhere. Systems generate new structural differences through constraints, evolution, and observation. Generating strategy explains how usable information is formed and supports learning, innovation, and world models."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Article: Beyond Shannon’s wall", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"], ["Books & purchase links", "/books/"]],
      closing: "Classical mathematics begins with material abstraction and models of the physical world; mathematical logic supports logical reasoning, and computation theory takes computation as its object of study. The mathematical principles that support abstract intelligence and models of machine intelligence must still be studied from the information world. This page turns the book’s principles into a readable web entry point; the original monograph remains the source for the formal definitions of hierarchical-abstracting strategy and local logical reasoning.",
    }}
  />;
}
