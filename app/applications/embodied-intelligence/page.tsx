import { PrinciplePage } from "../../principles/PrinciplePage";

export default function EmbodiedIntelligencePage() {
  return <PrinciplePage
    zh={{
      back: "← 返回研究主页", toggle: "EN", eyebrow: "应用成果 · 02 / 信息原理的具身智能",
      title: "信息原理的具身智能\n让智能进入身体与环境",
      lead: "信息原理的具身智能以自我意识的信息模型为核心，让智能体在真实环境中观察、学习、行动并验证结果。",
      sections: [["身体是信息接口", "智能不只存在于参数中。身体、传感器、动作和环境共同构成信息交换的边界，智能体必须在其中建立对自身与世界的表示。"], ["自我意识与行动", "自我意识的信息模型表征主体自身状态、确定性与不确定性及其转化，并判断利害；它支撑自主、可信与可验证的行动。"], ["面向智能机", "从结构信息到世界模型，研究路线把感知、观察学习、谋算与控制组织在同一闭环中，连接智能体、智能机和机器人。"]],
      sourcesLabel: "原始来源与研究入口",
      sources: [["获得信息，不等于获得利：自我意识文章", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"], ["关于我们 · 李昂生教授团队", "/#about"]],
      closing: "这里使用“信息原理的具身智能”作为正式术语；本页是团队研究方向的解释性入口。",
    }}
    en={{
      back: "← Back to research hub", toggle: "中", eyebrow: "OUTCOMES · 02 / INFORMATION-PRINCIPLED EMBODIED INTELLIGENCE",
      title: "Information-principled embodied intelligence\nwhen intelligence enters body and world",
      lead: "Information-principled embodied intelligence uses an information model of awareness so an agent can observe, learn, act, and verify outcomes in a real environment.",
      sections: [["The body as an information interface", "Intelligence does not live only in parameters. Body, sensors, action, and environment form an information boundary in which an agent must represent both self and world."], ["Awareness and action", "An information model of awareness represents a subject’s own state, certainty and uncertainty, their transformations, and their benefits or harms. It supports autonomous, trustworthy, and verifiable action."], ["Toward intelligent machines", "From structural information to world models, the route joins perception, learning from observing, MouSuan strategy, and control in one loop connecting agents, intelligent machines, and robots."]],
      sourcesLabel: "ORIGINAL SOURCES",
      sources: [["Information is not utility: self-awareness article", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"], ["About us · Angsheng Li’s research team", "/#about"]],
      closing: "The formal term used here is information-principled embodied intelligence; this page is an explanatory entry point for the team’s direction.",
    }}
  />;
}
