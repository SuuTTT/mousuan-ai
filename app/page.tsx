"use client";

import { useState, type MouseEvent } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: ["首页", "公理原理", "应用成果", "孙子模型", "关于我们", "文库"],
    ids: ["discover", "principles", "applications", "suntzu", "about", "library"],
    kicker: "结构信息 · 人工智能 · 谋算智能",
    hero: "发现智能\n结构的原理。",
    intro: "谋算智能科学技术（MouSuan Intelligence）：让人工智能有原理、可解释、高效、可信、自主、可控，并形成从技术路线到谋算双脑体系结构智能机器与谋算智能机器人的完整体系。",
    explore: "探索四大板块",
    watch: "关于我们",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "智能不是一个黑箱。它可以被观察、解码、组织，并被赋予可检验的原理。一个自我意识体的智能就是它的信息：智能 = 信息。",
    foundationKicker: "第一板块 · 公理化科学原理",
    foundationTitle: "从信息世界，到人工智能科学。",
    foundationLead: "以层谱抽象为总方法，建立信息演算、信息解码、信息生成三大支柱，并发展观察学习、自我意识与谋算博弈的信息科学原理。",
    breakthroughs: [
      ["2016", "结构信息", "编码树与结构熵：度量嵌入复杂系统结构中的信息，建立信息世界的层谱抽象范式。", "/principles/structural-information"],
      ["2024", "信息的数学原理", "信息演算理论、信息解码原理、信息生成原理：面向离散系统的信息世界数学语言。", "/principles/information-mathematics"],
      ["2024", "谋算智能的信息科学原理", "以观察学习、自我意识、谋算博弈为三大支柱，从计算智能走向有原理的谋算智能。", "/principles/strategic-intelligence"],
      ["AI", "人工智能原理", "智能的数学原理、谋算决策、自主控制与自主验证，共同构成可解释的人工智能科学技术路线。", "/principles/ai-principles"],
    ],
    applicationsKicker: "第二板块 · 应用成果",
    applicationsTitle: "让原理进入学习、决策与机器。",
    applicationsLead: "应用成果按研究主题组织；应用总结表可继续扩展为论文、代码、数据集、演示与工程项目。",
    applications: [
      ["01", "谋算学习", "基于信息科学原理的学习：从计算智能的黑箱路线，走向结构可见、过程可解释的白盒路线。", "/applications/strategic-learning"],
      ["02", "具身智能", "以自我意识的信息理论为核心，探索自主、可信、可验证的智能体与智能机器。", "/applications/embodied-intelligence"],
      ["03", "结构化决策", "用结构信息解释层级决策、多智能体协同、强化学习探索与动态环境中的策略选择。", "/applications/structured-decision-making"],
      ["04", "结构化 AI", "从编码树到大模型与智能体，沉淀可解释的知识编辑、推理和行动能力。", "/applications/structured-ai"],
    ],
    suntzuKicker: "第三板块 · 孙子兵法的人工智能原理",
    suntzuTitle: "谋与算，构成智能的策略。",
    suntzuLead: "《孙子兵法》以战争现象为对象，把物质与信息结合为动态演化的体系对抗博弈；孙子模型把它转化为可研究、可设计、可验证的人工智能框架。",
    bookTitle: "孙子兵法的人工智能原理",
    bookSub: "物质与信息结合的公理化科学原理 · 1,115 pages",
    bookAction: "打开书籍页面",
    lawsTitle: "孙子五大定律 · 物质与信息结合",
    laws: ["战争是物质与信息结合的体系对抗", "战争结局由物质与信息的结合决定", "战争现象具有可度量、可推演的规律", "谋与算是信息解码与策略生成", "知彼、知己、知天、知地形成胜利条件"],
    modelTitle: "孙子模型 / 孙子机",
    modelLead: "一个自我意识主体的智能闭环：",
    model: ["自主学习 · 知彼", "自我意识 · 知己", "谋算博弈 · 设计策略", "自主决策", "自主行动", "系统验证 · 判断胜负与获利"],
    peopleKicker: "关于我们 · 李昂生教授团队",
    peopleTitle: "把信息科学原理变成智能机器。",
    peopleLead: "李昂生教授团队以结构信息和人工智能科学为基础，从计算到谋算，把已有的“黑箱”变成可解释、可验证的“白盒”。",
    teamIntro: "我们研究智能的数学原理，并将其落实为自我意识机器、孙子模型、谋算智能机器与谋算智能机器人，重点发展谋算双脑体系结构智能机器，形成从科学原理、技术路线到智能系统的完整研究体系。",
    directionsKicker: "我们的研究方向",
    directions: [
      ["01", "基于信息科学原理的人工智能技术", "从计算到谋算，把已有的“黑箱”变“白盒”。", ["神经网络", "具身智能", "大模型", "世界模型"], "#principles"],
      ["02", "自我意识机器", "让机器能够观察自身、表征自身，并在信息世界中形成可验证的自我意识。", [], "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["03", "孙子模型（世界模型）", "以知彼、知己、知天、知地为核心，把世界理解转化为可推演的策略模型。", [], "/books"],
      ["04", "谋算智能机器", "把信息解码、策略生成与自主决策结合为有原理的谋算双脑体系结构智能机器。", [], "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["05", "谋算智能机器人", "让机器人在复杂环境中学习、谋算、行动，并通过系统验证获得可信结果。", [], "https://suuttt.github.io/"],
    ],
    people: [
      ["李昂生", "结构信息、信息世界数学原理与智能科学", [["代表论文", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]]],
      ["曾祥华", "层级决策、多智能体协同与结构信息原则", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
      ["卫一帆", "大语言模型、知识编辑、智能体与 AI safety", [["个人主页", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]]],
      ["苏丁力", "结构信息决策、结构熵与智能系统工程", [["个人主页", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
    ],
    libraryKicker: "第四板块 · 其它重要应用成果",
    libraryTitle: "把重要成果与解释文章放进同一座知识库。",
    libraryLead: "精选原理文章、研究解读与外部成果入口，后续可按主题继续扩充。",
    library: [
      ["幂律、全息律与黑洞", "自然演化网络的结构信息", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484862&idx=1&sn=04aad29e2970569eac3e2c16e3de4b7e&chksm=f12d1a513e8f89ea0da6941c8dbee5705667308c9fafb6b9cdb5418e253f6b80e4d41e483007&mpshare=1&scene=1&srcid=0606Dw2APZHpnA1XXlCAq6B4&sharer_shareinfo=bd60597ba727f4cc97577db8e2114016&sharer_shareinfo_first=bd60597ba727f4cc97577db8e2114016#rd"],
      ["二分性与相变", "结构信息在经典图上的精确度量", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484854&idx=1&sn=0ae2c9e93b39178d4c2e22e298c8b490&chksm=f1564fbbb40d7e5ce40c2fd080e0b5fef571282d6fa8aa6df246a3f9354a24916d9e64e220fc&mpshare=1&scene=1&srcid=0605weJb5j6DoX5rnJTNh1W1&sharer_shareinfo=d7d52581f647583f7ae30f7c668e9e5a5&sharer_shareinfo_first=d7d52581f647583f7ae30f7c668e9e5a5#rd"],
      ["获得信息，不等于获得利", "自我意识的数学定义", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c&chksm=f186fcac37978ea22598edf7b80c4031dfc9aa0342b369cc01b23e7d9afd96e3adb0b1134769&mpshare=1&scene=1&srcid=0602AYmbBOhNSvAiFOW7H3cr&sharer_shareinfo=b1b674e32fd2153fed462e63c1a9c44f&sharer_shareinfo_first=b1b674e32fd2153fed462e63c1a9c44f#rd"],
      ["学习到底是什么", "从编码树到知识树", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08&chksm=f17baa304f70e266c722b74a5eb9cbadfbb2f23e2a1262ab5a5e93259abff4328b0414d67ea8&mpshare=1&scene=1&srcid=0602i2UnFouSru2x89MYGWw5&sharer_shareinfo=ddcde571d352e82efa35ee39d93a3e07&sharer_shareinfo_first=ddcde571d352e82efa35ee39d93a3e07#rd"],
      ["谋算《孙子兵法》", "孙子兵法的信息科学原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53e92d3a2cc7c6b7fd&chksm=f1cfe29120282331b9ea69df3bdb00002e264c76f40c6a8bbcbec566836adb9cb9ec80a0a96d&mpshare=1&scene=1&srcid=0513kO4604r0m3iotj2Dw0u6&sharer_shareinfo=9a5e169d891e8f47fa02be38a1df3892&sharer_shareinfo_first=9a5e169d891e8f47fa02be38a1df3892#rd"],
      ["信息是怎么生成的", "从熵极大到信息隐藏", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484572&idx=1&sn=1e5601b8c96a83ef6ccaf928167e28f3&chksm=f1708313d468c02ce0be0e253bbc06f474c5ecf963fc0d97b863f56b11b86e7b6045f6cc32db&mpshare=1&scene=1&srcid=0513feIGsnTjFatzPjUDmEN2&sharer_shareinfo=81de45fc7120f0bf4e1907cadec86b09&sharer_shareinfo_first=81de45fc7120f0bf4e1907cadec86b09#rd"],
      ["控制论没做完的事", "推理就是编码", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484666&idx=1&sn=bfc4d43ed0037707c404b3e92255c03a&chksm=f141331485bff97934650039a0a63616d60cb135a3ffba54a1dbbc1e4f81ad29fc6622a68b4c&mpshare=1&scene=1&srcid=0514KPilcXh4WfM52ISDY1BR&sharer_shareinfo=6a83922e1c8024e6012dc5cc0b18cbc0&sharer_shareinfo_first=6a83922e1c8024e6012dc5cc0b18cbc0#rd"],
      ["什么值得注意", "从编码树到 Transformer 的注意力原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494&chksm=f1c6b763f0977e126898abf47648b455bdc075e96dc59364af88e09b267d4c346a7f51be1d19&mpshare=1&scene=1&srcid=0515PF0PdW5JposGbyjdxxKY&sharer_shareinfo=da62ef53dd9235c481b6d35b08d2e5a5&sharer_shareinfo_first=da62ef53dd9235c481b6d35b08d2e5a5#rd"],
      ["打破香农的墙", "从香农熵到编码树，结构信息的诞生", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74&chksm=f1eced13eff1c785799377805085553572e2bf4e24c3512c5546b105b9acf54a50867f946252&mpshare=1&scene=1&srcid=0524LSDzLzPTQH2c6YOrTc9P&sharer_shareinfo=03de703f364e12a7e8b1fd5460ea06e8&sharer_shareinfo_first=03de703f364e12a7e8b1fd5460ea06e8#rd"],
      ["为什么整体不等于部分之和", "复杂系统的信息科学原理", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484602&idx=1&sn=42a9b188affc0f472981d0e6c2c3351f&chksm=f13f7af6f98cce6d254bec33ca2be25e9cbec6408302b37f5514cae2e727eca828ed909cf111&mpshare=1&scene=1&srcid=0524QwkxDyouaQAd12zS1Sit&sharer_shareinfo=3a4418b293b4a7f830fe6351d1881615&sharer_shareinfo_first=3a4418b293b4a7f830fe6351d1881615#rd"],
      ["结构熵综述", "理论、方法与应用的 IJCAI 2025 survey", "https://www.ijcai.org/proceedings/2025/1183"],
      ["结构熵综述仓库", "GitHub source of truth：论文、代码、基准与复现记录", "https://github.com/SuuTTT/structural-entropy-survey"],
    ],
    footer: "结构信息与人工智能研究资料库 · 谋算智能科学技术",
  },
  en: {
    nav: ["Discover", "Principles", "Applications", "Sun Tzu model", "About us", "Library"],
    ids: ["discover", "principles", "applications", "suntzu", "about", "library"],
    kicker: "Structural information · AI · MouSuan Intelligence (MSI)",
    hero: "Discover the principles\nof intelligent structure.",
    intro: "MouSuan Intelligence (MSI): AI generated by two complementary strategies—hierarchical abstraction for global recognition (encoding), and calculating for reasoning and action (computing).",
    explore: "Explore four pillars",
    watch: "About us",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "Intelligence need not remain a black box. It can be observed, decoded, organised, and grounded in testable principles. The intelligence of a self-aware subject is its information: intelligence = information.",
    foundationKicker: "PILLAR 01 · AXIOMATIC SCIENTIFIC PRINCIPLES",
    foundationTitle: "From the information world to a science of AI.",
    foundationLead: "Using spectrum-of-hierarchies abstraction as the general method, we build information calculus, decoding, and generation—and the information-science principles of learning, self-awareness, and strategic games.",
    breakthroughs: [
      ["2016", "Structural information", "Encoding trees and structural entropy measure information embedded in complex system structure and establish a spectrum-of-hierarchies abstraction.", "/principles/structural-information"],
      ["2024", "Mathematical principles of information", "Information calculus, information decoding, and information generation: a mathematical language for discrete information-world systems.", "/principles/information-mathematics"],
      ["2024", "Information science of MouSuan Intelligence (MSI)", "Observation-based learning, self-awareness, and strategic games form the three pillars of a principled intelligence science.", "/principles/strategic-intelligence"],
      ["AI", "Principles of Artificial Intelligence", "Mathematical intelligence principles, strategic decisions, autonomous control, and autonomous verification form a white-box AI route.", "/principles/ai-principles"],
    ],
    applicationsKicker: "PILLAR 02 · APPLIED RESEARCH OUTCOMES",
    applicationsTitle: "Put principles to work in learning, decisions, and machines.",
    applicationsLead: "Outcomes are grouped by theme and can grow into a portfolio of papers, code, datasets, demonstrations, and engineering projects.",
    applications: [
      ["01", "MouSuan learning", "Learning from information-science principles: moving from existing black-box AI toward structured, explainable white-box systems.", "/applications/strategic-learning"],
      ["02", "Embodied intelligence", "An information theory of self-awareness for autonomous, trustworthy, and verifiable agents and intelligent machines.", "/applications/embodied-intelligence"],
      ["03", "Structured decision-making", "Structural information for hierarchical decisions, multi-agent coordination, reinforcement-learning exploration, and dynamic environments.", "/applications/structured-decision-making"],
      ["04", "Structured AI", "From encoding trees to foundation models and agents: interpretable knowledge editing, reasoning, and action.", "/applications/structured-ai"],
    ],
    suntzuKicker: "PILLAR 03 · AI PRINCIPLES OF SUN TZU’S THE ART OF WAR",
    suntzuTitle: "Strategy is the intelligence of planning and computation.",
    suntzuLead: "Treating warfare as a system-level, dynamically evolving contest of matter and information, the Sun Tzu model turns the Art of War into a researchable, designable, and verifiable AI framework.",
    bookTitle: "AI Principles of Sun Tzu’s The Art of War",
    bookSub: "Axiomatic scientific principles combining matter and information · 1,115 pages",
    bookAction: "Open book page",
    lawsTitle: "The five Sun Tzu laws · matter and information",
    laws: ["War is a system-level contest combining matter and information", "Outcomes are determined by the combination of matter and information", "War phenomena have measurable, inferable regularities", "Planning and computation decode information and generate strategy", "Knowing the adversary, self, time, and terrain creates the conditions for victory"],
    modelTitle: "The Sun Tzu model / Sun Tzu machine",
    modelLead: "The intelligence loop of a self-aware subject:",
    model: ["Autonomous learning · know the adversary", "Self-awareness · know the self", "Strategic game design", "Autonomous decision", "Autonomous action", "System verification · test victory and gain"],
    peopleKicker: "ABOUT US · ANGSHENG LI’S RESEARCH TEAM · MOUSUAN INTELLIGENCE (MSI)",
    peopleTitle: "Turning information-science principles into intelligent machines.",
    peopleLead: "Professor Angsheng Li’s team builds on structural information and AI science to turn existing AI black boxes into an explainable, verifiable white-box route—from computation to MouSuan Intelligence (MSI).",
    teamIntro: "MouSuan Intelligence (MSI) is intelligence generated by two complementary strategies: hierarchical abstraction for global recognition (encoding), and calculating for reasoning and action (computing). Our team carries this into self-awareness machines, the Sun Tzu model, MouSuan dual-brain architecture intelligent machines, and MouSuan intelligent robots.",
    directionsKicker: "OUR RESEARCH DIRECTIONS",
    directions: [
      ["01", "AI technology based on information-science principles", "From computation to MouSuan Intelligence: turn existing black-box AI into a white box.", ["Neural networks", "Embodied intelligence", "Foundation models", "World models"], "#principles"],
      ["02", "Self-awareness machines", "Machines that observe and represent themselves, forming verifiable self-awareness in the information world.", [], "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["03", "The Sun Tzu model (world model)", "Know the adversary, self, time, and terrain—and turn world understanding into an inferable strategy model.", [], "/books"],
      ["04", "MouSuan Intelligence machines", "MouSuan dual-brain architecture intelligent machines combine global recognition, cross-level reasoning, calculation, and autonomous decisions.", [], "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["05", "MouSuan intelligent robots", "Robots that learn, plan, calculate, act, and verify outcomes in complex environments.", [], "https://suuttt.github.io/"],
    ],
    people: [
      ["Angsheng Li", "Structural information, information-world mathematics, and intelligence science", [["Key paper", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]]],
      ["Xianghua Zeng", "Hierarchical decision-making, multi-agent coordination, and structural principles", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
      ["Yifan Wei", "Large language models, knowledge editing, agents, and AI safety", [["Homepage", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]]],
      ["Dingli Su", "Structural-information decision-making, structural entropy, and intelligent systems", [["Homepage", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]]],
    ],
    libraryKicker: "PILLAR 04 · OTHER SIGNIFICANT APPLIED OUTCOMES",
    libraryTitle: "Keep important results and explanatory work in one library.",
    libraryLead: "Selected principles, research explainers, and external outcomes—with room for the next application summary.",
    library: [
      ["Power laws, holographic laws, and black holes", "Structural information in naturally evolving networks", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484862&idx=1&sn=04aad29e2970569eac3e2c16e3de4b7e"],
      ["Bipartiteness and phase transitions", "Exact structural-information measures on classical graphs", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484854&idx=1&sn=0ae2c9e93b39178d4c2e22e298c8b490"],
      ["Information is not utility", "A mathematical definition of self-awareness", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["What is learning?", "From encoding trees to knowledge trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484196&idx=1&sn=352d1ee21305b8fefa657506c54dce08"],
      ["Strategic computation: The Art of War", "Information-science principles of Sun Tzu’s classic", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484206&idx=1&sn=dadc947290f41c53e92d3a2cc7c6b7fd"],
      ["How is information generated?", "From maximum entropy to hidden information", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484572&idx=1&sn=1e5601b8c96a83ef6ccaf928167e28f3"],
      ["What cybernetics left unfinished", "Inference is coding", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484666&idx=1&sn=bfc4d43ed0037707c404b3e92255c03a"],
      ["What deserves attention?", "From encoding trees to Transformer attention", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484645&idx=1&sn=14fc6af2935f49d78af2758bf7fce494"],
      ["Beyond Shannon’s wall", "From Shannon entropy to encoding trees", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484707&idx=1&sn=dbcd0f5d6f3b6df0caef00c1900d9e74"],
      ["Why the whole is not the sum of its parts", "Information science of complex systems", "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484602&idx=1&sn=42a9b188affc0f472981d0e6c2c3351f"],
      ["Structural Entropy survey", "Theory, methods, and applications · IJCAI 2025", "https://www.ijcai.org/proceedings/2025/1183"],
      ["Structural Entropy survey repository", "104-entry source of truth with papers, code, benchmarks, and reproducibility records", "https://github.com/SuuTTT/structural-entropy-survey"],
    ],
    footer: "Structural Information & Artificial Intelligence research library · MouSuan Intelligence (MSI)",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const c = content[lang];
  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main>
    <nav className="nav"><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="nav-links">{c.nav.map((label, i) => <a key={label} href={`#${c.ids[i]}`} onClick={goTo(c.ids[i])}>{label}</a>)}</div><div className="lang"><button className={lang === "zh" ? "is-on" : ""} onClick={() => setLang("zh")}>中</button><i>/</i><button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button></div></nav>

    <section id="discover" className="hero"><div className="hero-copy"><p className="overline">{c.kicker}</p><h1>{c.hero.split("\n").map(line => <span key={line}>{line}</span>)}</h1><p className="intro">{c.intro}</p><div className="hero-actions"><a className="button light" href="#principles" onClick={goTo("principles")}>{c.explore} <b>↘</b></a><a className="text-link" href="#about" onClick={goTo("about")}>{c.watch} <b>→</b></a></div></div><div className="hero-visual" aria-hidden="true"><div className="visual-label"><span>∞</span> {c.signal}</div></div></section>

    <section className="manifesto"><p>“{c.manifesto}”</p></section>

    <section id="principles" className="section shell"><header className="section-head"><div><p className="overline">{c.foundationKicker}</p><h2>{c.foundationTitle}</h2></div><p>{c.foundationLead}</p></header><div className="breakthroughs">{c.breakthroughs.map(([num, title, text, href]) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></section>

    <section id="applications" className="research"><div className="shell"><header className="section-head"><div><p className="overline">{c.applicationsKicker}</p><h2>{c.applicationsTitle}</h2></div><p>{c.applicationsLead}</p></header><div className="research-list">{c.applications.map(([num, title, text, href]) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></a>)}</div></div></section>

    <section id="suntzu" className="suntzu section"><div className="shell"><header className="section-head"><div><p className="overline">{c.suntzuKicker}</p><h2>{c.suntzuTitle}</h2></div><p>{c.suntzuLead}</p></header><div className="suntzu-grid"><a className="book-card" href="/books"><span className="book-mark">BOOKS</span><h3>{c.bookTitle}</h3><p>{c.bookSub}</p><strong>{c.bookAction} ↗</strong></a><div className="laws-card"><p className="overline">{c.lawsTitle}</p><ol>{c.laws.map((law, i) => <li key={law}><span>0{i + 1}</span>{law}</li>)}</ol></div></div><div className="model-block"><div><p className="overline">{c.modelTitle}</p><p className="model-lead">{c.modelLead}</p></div><div className="model-steps">{c.model.map((step, i) => <div key={step}><span>0{i + 1}</span><p>{step}</p></div>)}</div></div></div></section>

    <section id="about" className="section shell people"><header className="section-head"><div><p className="overline">{c.peopleKicker}</p><h2>{c.peopleTitle}</h2></div><p>{c.peopleLead}</p></header><p className="team-intro">{c.teamIntro}</p><div className="directions-head"><p className="overline">{c.directionsKicker}</p></div><div className="directions-grid">{c.directions.map(([num, title, text, tags, href]) => <a className="direction-card" href={href} onClick={href.startsWith("#") ? goTo(href.slice(1)) : undefined} target={href.startsWith("#") || href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("#") || href.startsWith("/") ? undefined : "noreferrer"} key={num}><span className="direction-num">{num}</span><h3>{title}</h3><p>{text}</p>{tags.length > 0 && <div className="direction-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<b>↗</b></a>)}</div><div className="team-heading"><p className="overline">{lang === "zh" ? "核心成员" : "CORE TEAM"}</p></div><div className="people-grid">{c.people.map(([name, focus, links], i) => <article key={name}><span className="portrait">{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{focus}</p><div className="profile-links">{links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <b>↗</b></a>)}</div></article>)}</div></section>

    <section id="library" className="library"><div className="shell"><header className="section-head"><div><p className="overline">{c.libraryKicker}</p><h2>{c.libraryTitle}</h2></div><p>{c.libraryLead}</p></header><div className="library-grid">{c.library.map(([title, text, href], i) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>0{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></div></section>

    <footer><a className="brand" href="#discover" onClick={goTo("discover")}><span>SI</span><b>STRUCTURAL<br />INTELLIGENCE</b></a><p>{c.footer}</p><a href="#discover" onClick={goTo("discover")}>↑</a></footer>
  </main>;
}
