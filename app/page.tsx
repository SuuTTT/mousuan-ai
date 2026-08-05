"use client";

import { useEffect, useState, type MouseEvent } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: ["首页", "公理原理", "应用成果", "孙子模型", "知识与研究", "谋算 MI", "关于我们"],
    ids: ["discover", "principles", "applications", "suntzu", "library", "venture", "about"],
    kicker: "结构信息 · 机器智能 · 谋算智能",
    hero: "谋算智能\n— 揭示智能实质的科学原理",
    intro: "谋算智能科学技术（Science and Technology of MouSuan Strategy）：人的智能策略就是“谋”和“算”，二者都是策略。谋算双脑（左右半脑）体系结构是谋算智能的核心，是信息科学与计算科学结合的产物；它让机器智能有原理、可解释、高效、可信、自主、可控，并形成中国原始创新的完整技术路线。",
    explore: "探索五大板块",
    watch: "关于我们",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "智能不是一个黑箱。它可以被观察、生成、解码、组织、编码，并被赋予可验证的原理。一个自我意识体的智能就是它的信息：智能 = 信息。信息是被消除的不确定性，是解码信息世界的钥匙。信息是创建智能科学原理的数学基础。“智”是策略性地设计与认知，“能”是能动性与高效行动；智能是二者的统一，智能需要行动。英文暂用 Intelligence，也可表述为 recognition and agency。",
    foundationKicker: "第一板块 · 信息世界的公理化科学原理",
    foundationTitle: "从信息世界，到机器智能科学",
    foundationLead: "信息世界的层谱抽象定律与信息基本定理，指向以层谱抽象策略与局部逻辑推理为研究对象的数学原理；如同微积分以分而治之策略为研究对象，它建立信息演算、信息解码与信息生成的数学原理，即离散系统的微积分，也即层谱抽象策略的数学原理。数学是信息世界的对象，并可由层谱抽象加以定义；信息的数学原理与经典数学、计算机科学数学不处于同一抽象层谱。",
    breakthroughs: [
      ["2016", "结构信息", "结构信息是连通信息与计算之间的桥梁。编码树与结构熵度量嵌入复杂系统结构中的信息，建立信息世界的层谱抽象范式，打通信息与计算的通道。", "/principles/structural-information"],
      ["2024", "信息的数学原理", "信息世界的层谱抽象定律与信息基本定理，指向以层谱抽象策略为研究对象的数学原理；层谱抽象的实质是多抽象层谱的全局认知。", "/principles/information-mathematics"],
      ["2024", "谋算智能的信息科学原理", "经典数学、数理逻辑与计算理论分别支撑物质建模、逻辑推理和计算；机器智能还需要以信息模型为基础的数学原理与模型。", "/principles/strategic-intelligence"],
      ["机器", "机器智能原理", "智能的数学原理、决策的信息模型、系统协同行动模型与系统验证模型，共同构成可解释的机器智能技术路线。", "/principles/ai-principles"],
    ],
    applicationsKicker: "第二板块 · 应用成果",
    applicationsTitle: "让原理进入学习、决策与机器",
    applicationsLead: "",
    suntzuContext: [
      "1686年，牛顿创建了关于物质及物质运动的公理化科学原理，建立了物理世界分析的数学原理，即物理世界分析的总方法——分而治之方法的数学原理，即微积分。牛顿物理世界科学原理引领了近代科学技术和工业革命，也奠定了英国的科学自信。",
      "公元前300年左右，欧几里得针对物质对象形状建立了公理化数学原理，即《几何原本》（Elements），提出了“公理化数学”的科学思想。欧几里得的贡献奠定了希腊的科学与文明自信；牛顿延续这一思想，建立了物理世界的公理化科学原理。",
      "结论：物理世界科学技术已经比较成熟。",
      "问题：一切科学都必须在牛顿的物理世界科学体系下建立吗？除了牛顿的物理世界科学体系，没有其它科学了吗？",
      "公元前515年左右，孙武《孙子兵法》创建了以战争为研究对象、包括物质和信息的现实世界体系对抗博弈的公理化特征科学原理。",
      "《孙子兵法》计篇第一（一）：“孙子曰：兵者，国之大事。死生之地，存亡之道。不可不察也。”开宗明义，战争是关于一个国家作为整体的“存在性”，以及存在性支撑的“作用”“运动性”“需求”和“愿望”的现象。",
      "因此，战争要解决的是一个信息问题，即信息性质的问题，而不是一个物质和物质运动的问题。这说明，在物理世界科学体系下不可能建立战争的科学原理。",
      "《孙子兵法》恰是一个物质与信息结合的科学原理，具有公理化特征，但是没有公理化。是否存在战争的公理化科学原理？",
    ],
    applications: [
      ["01", "谋算学习", "基于信息科学原理的学习：从已有黑箱路线，走向结构可见、过程可解释的白盒路线。", "/applications/strategic-learning"],
      ["02", "信息原理的具身智能", "以自我意识的信息模型为核心，探索自主、可信、可验证的智能体与智能机。", "/applications/embodied-intelligence"],
      ["03", "结构化决策", "用结构信息与决策的信息模型解释层级决策、多智能体协同、强化学习探索与动态环境中的策略选择。", "/applications/structured-decision-making"],
      ["04", "结构化机器智能", "从编码树到大模型与智能体，沉淀可解释的知识编辑、推理和行动能力。", "/applications/structured-ai"],
      ["05", "网络安全、舆情分析", "用结构信息识别网络空间中的层级关系、传播路径与群体态势，支持可解释的安全研判与舆情分析。", "/applications/network-security"],
      ["06", "生物信息、生命的科学原理", "以信息科学与结构化建模研究生命系统中的信息组织、演化规律与可验证的科学原理。", "/applications/bioinformatics"],
    ],
    suntzuKicker: "第三板块 · 孙子兵法的机器智能原理",
    suntzuTitle: "谋与算，构成智能的策略",
    suntzuLead: "《孙子兵法》以战争现象为对象，把物质与信息结合为动态演化的体系对抗博弈；孙子模型把它转化为可研究、可设计、可验证的机器智能框架。孙子模型是谋算智能的模型——一个面向层谱设计和高效行动的有原理模型。",
    bookTitle: "孙子兵法的人工智能原理",
    bookSub: "物质与信息结合的公理化科学原理 · 1,115 pages",
    bookAction: "打开书籍页面",
    lawsTitle: "孙子五大定律 · 物质与信息结合的定律",
    laws: ["战争是物质与信息结合的体系对抗；揭示战争规律的钥匙是物质和信息", "战争结局由物质与信息的结合决定", "战争现象具有可度量、可推演的规律", "谋与算是战争设计和基本策略", "知彼、知己、知天、知地构成获胜、获利的条件"],
    modelTitle: "孙子模型 / 孙子机",
    modelLead: "一个自我意识主体的智能闭环：",
    model: ["自主学习 · 知彼", "自我意识 · 知己", "谋算博弈 · 设计策略", "自主决策", "自主行动", "系统验证 · 判断胜负与获利"],
    peopleKicker: "关于我们 · 李昂生教授团队",
    peopleTitle: "把信息科学原理变成智能机",
    peopleLead: "李昂生教授团队以结构信息、信息的数学原理、机器智能技术和机器智能科学为基础，从计算到谋算，把已有的“黑箱”变成可解释、可验证的“白盒”。",
    teamIntro: "我们研究智能的数学原理，并将其落实为观察学习机、自我意识机、谋算博弈模型、孙子模型、谋算智能机与谋算智能机器人。谋算双脑（左右半脑）体系结构是谋算智能的核心，连接信息科学与计算科学，形成中国原始创新的机器智能科学技术路线。",
    directionsKicker: "五大研究方向",
    directions: [
      ["01", "基于信息科学原理的机器智能技术", "神经网络深度学习、具身智能、大模型与世界模型，每一项都建立在信息科学原理之上，并形成不同于已有路线的谋算智能技术。", ["神经网络深度学习", "具身智能", "大模型", "世界模型"], "#principles"],
      ["02", "自我意识机", "机器能判定一个信息事件，即确定性、不确定性、不确定性到确定性的转化、确定性到不确定性的转化对自身是有利还是有害；并采取策略使得利可以加强，害可以转移或者转化。", [], "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["03", "孙子模型（世界模型）", "以知彼、知己、知天、知地为核心，把世界理解转化为可推演的策略模型，具有科学原理的世界模型。", [], "/books"],
      ["04", "谋算智能机", "把解码信息、生成信息、决策的信息模型与自主决策结合为有原理的谋算双脑体系结构智能机。", [], "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["05", "谋算智能机器人", "让机器人在复杂环境中学习、谋算、行动，并通过系统验证获得可信结果。", [], "https://suuttt.github.io/"],
    ],
    plansKicker: "两大计划 · 原始创新",
    plansTitle: "重大、原始创新、标志性、颠覆性的研究计划",
    plansLead: "围绕信息世界科学原理，集中推进两个可形成标志性系统的长期研究计划。",
    plans: [
      ["01", "孙子模型（谋算系统）", "基于信息世界科学原理的谋算智能系统", "孙子模型是谋算智能的模型——一个面向策略设计和有效行动的有原理、可解释世界模型；形成民用版与军用版。", "/books"],
      ["02", "孙子机（谋算机）", "基于信息世界科学原理的谋算双脑智能机", "有原理、可解释的智能机。", "/principles/strategic-intelligence"],
    ],
    people: [
      ["李昂生", "结构信息、信息世界数学原理与智能科学", [["代表论文", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]], "/people/angsheng-li.jpg"],
      ["潘祎诚", "网络模型与算法、信息论、结构信息", [["北航主页", "https://scse.buaa.edu.cn/info/1080/7261.htm"]], "/people/pan-yicheng.jpg"],
      ["许可", "算法与复杂性、数据挖掘、网络与信息传播", [["北航主页", "https://scse.buaa.edu.cn/info/1078/2655.htm"]], "/people/ke-xu.jpg"],
      ["曾祥华", "层级决策、多智能体协同与结构信息原则", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]], "/people/xianghua-zeng.jpg"],
      ["卫一帆", "大语言模型、知识编辑、智能体与机器智能安全", [["个人主页", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]], "/people/yifan-wei-20260802.jpg"],
      ["苏丁力", "结构信息决策、结构熵与智能系统工程", [["个人主页", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]], "/people/dingli-su-20260802.jpg"],
    ] as [string, string, [string, string][], string][],
    libraryKicker: "第四板块 · 机器智能知识与研究平台",
    libraryTitle: "图书馆、年鉴与实验室",
    libraryLead: "以图书馆沉淀知识，以年鉴遴选重要成果，以实验室推动研究与验证，形成从知识积累到学术出版、再到原始创新的完整体系。",
    knowledgeModules: [
      ["01", "有原理、可解释机器智能图书馆", "系统收录有原理、可解释的机器智能论文、著作、代码与研究资料。"],
      ["02", "机器智能年鉴", "遴选年度重要的、有科学原理的机器智能研究成果，形成年度学术记录，为未来创办专业期刊做准备。"],
      ["03", "机器智能实验室", "围绕信息科学原理开展研究、实验与系统验证，推动有原理、可解释的机器智能科学技术研究。"],
    ],
    archiveKicker: "有原理、可解释机器智能图书馆 · 当前收录",
    archiveTitle: "重要成果与解释文章",
    archiveLead: "收录原理文章、论文、代码、基准与术语资料。",
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
      ["术语 Wiki：谋算智能中英对照", "MouSuan、层谱抽象、策略与公理化科学原理的统一术语表", "/wiki/terminology"],
    ],
    ventureKicker: "第五板块 · 谋算机器智能",
    ventureTitle: "谋算机器智能",
    ventureBrand: "MouSuan Machine Intelligence · MouSuan MI",
    ventureLead: "推动行业、产业智能化、智能制造、谋算机与谋算机器人等实际落地应用，为未来成立公司与成果转化做准备。",
    ventureCards: [
      ["01", "原理产品化", "把信息科学原理、谋算策略与谋算双脑体系结构转化为可验证、可交付的机器智能产品。"],
      ["02", "行业、产业智能化", "把谋算机器智能用于行业与产业系统的认知、决策、协同与验证。"],
      ["03", "智能制造", "面向制造过程形成可解释的感知、设计、调度、执行与质量验证闭环。"],
      ["04", "谋算机", "研制以谋算双脑体系结构为核心、有原理且可解释的谋算机。"],
      ["05", "谋算机器人", "让机器人在复杂环境中识别、谋算、行动并验证结果，形成实际落地应用。"],
      ["06", "公司筹备", "积累核心技术、知识产权、合作伙伴与交付能力，为未来成立谋算机器智能公司做准备。"],
    ],
    footer: "机器智能年鉴 · 机器智能实验室 · 谋算机器智能（MouSuan MI）",
    contact: "反馈与联系：1015011749@qq.com",
  },
  en: {
    nav: ["Discover", "Principles", "Applications", "Sun Tzu model", "Knowledge & research", "MouSuan MI", "About us"],
    ids: ["discover", "principles", "applications", "suntzu", "library", "venture", "about"],
    kicker: "Structural information · machine intelligence · MouSuan Intelligence (MSI)",
    hero: "MouSuan Intelligence:\nMathematical Principles for Revealing the Essence of Intelligence",
    intro: "Science and Technology of MouSuan Strategy: human intelligence strategy consists of Mou and Suan, both strategies. Its MouSuan dual-brain (left–right brain) architecture is the core, combining information science with computer science into a principled, explainable, efficient, trustworthy, autonomous, and controllable route for machine intelligence.",
    explore: "Explore five pillars",
    watch: "About us",
    signal: "STRUCTURE / LEARNING / STRATEGY / INTELLIGENCE",
    manifesto: "Intelligence need not remain a black box. It can be observed, generated, decoded, organised, encoded, and grounded in verifiable principles. The intelligence of a self-aware subject is its information: intelligence = information. Information is uncertainty that has been eliminated; it is the key to decoding the information world. Information is the mathematical foundation for establishing the principles of intelligent science. “Zhi” is strategically designing and recognition; “Neng” is agency and efficiently acting. Chinese 智能 is provisionally rendered as Intelligence and can also be expressed as recognition and agency. It is the unity of the two and requires action.",
    foundationKicker: "PILLAR 01 · AXIOMATIZED PRINCIPLES OF THE INFORMATION WORLD",
    foundationTitle: "From the information world to a science of machine intelligence",
    foundationLead: "The law of hierarchical abstraction and the fundamental theorem of information identify mathematical principles that take hierarchical-abstracting strategy and local logical reasoning as their objects of study. Just as calculus takes divide-and-conquer strategy as its object of study, they establish mathematical principles for information calculus, decoding, and generation: the calculus of discrete systems, namely the mathematical principles of hierarchical-abstracting strategy. Mathematics is an object of the information world and can be defined through hierarchical abstraction; these principles do not occupy the same spectrum of abstraction as classical mathematics or the mathematics of computer science.",
    breakthroughs: [
      ["2016", "Structural information", "Structural information is the bridge connecting information and computation. Encoding trees and structural entropy measure information embedded in complex-system structure, establish a spectrum-of-hierarchies abstraction, and open a passage between information and computation.", "/principles/structural-information"],
      ["2024", "Mathematical principles of information", "The law of hierarchical abstraction and the fundamental theorem of information identify mathematical principles that take hierarchical-abstracting strategy as their object of study; hierarchical abstraction is global recognition across multiple spectra of abstraction.", "/principles/information-mathematics"],
      ["2024", "Information science of MouSuan Intelligence (MSI)", "Classical mathematics, mathematical logic, and computing theory respectively support material modelling, logical reasoning, and computing; machine intelligence also needs mathematical principles and models grounded in information models.", "/principles/strategic-intelligence"],
      ["MACHINE", "Principles of machine intelligence", "Mathematical principles of intelligence, information models of decision, cooperative action, and system verification form an explainable route for machine intelligence.", "/principles/ai-principles"],
    ],
    applicationsKicker: "PILLAR 02 · APPLIED RESEARCH OUTCOMES",
    applicationsTitle: "Put principles to work in learning, decisions, and machines",
    applicationsLead: "",
    suntzuContext: [
      "In 1686, Newton established axiomatized scientific principles for matter and motion, creating the mathematical principles for analysing the physical world: the general divide-and-conquer method, expressed mathematically as calculus. These principles led modern science and technology into the Industrial Revolution and underpinned British scientific confidence.",
      "Around 300 BCE, Euclid modelled the shapes of material objects in the Elements and introduced the scientific idea of axiomatized mathematics. Euclid’s contribution supported Greek scientific and civilizational confidence; Newton extended this idea into axiomatized scientific principles for the physical world.",
      "Conclusion: physical-world science and technology are comparatively mature.",
      "Question: must every science be established within Newton’s physical-world system? Is there no other science beyond it?",
      "Around 515 BCE, Sun Wu’s Art of War created axiomatic-featured principles for system-level contests in the real world, taking war as its object and combining matter with information.",
      "The opening chapter states that war concerns a state’s existence as a whole, together with the functions, motion, needs, and desires that sustain it.",
      "War therefore addresses an information problem—the nature of information—not merely a problem of matter and material motion. This suggests that a science of war cannot be established within a physical-world science system alone.",
      "The Art of War is a scientific principle combining matter and information. It has axiomatic features but is not yet axiomatized. Does an axiomatized science of war exist?",
    ],
    applications: [
      ["01", "MouSuan learning", "Learning from information-science principles: moving from existing black-box systems toward structured, explainable white-box systems.", "/applications/strategic-learning"],
      ["02", "Information-principled embodied intelligence", "An information model of awareness for autonomous, trustworthy, and verifiable agents and intelligent machines.", "/applications/embodied-intelligence"],
      ["03", "Hierarchically abstracting decision-making", "Structural information for hierarchically abstracting decisions, multi-agent coordination, reinforcement-learning exploration, and dynamic environments.", "/applications/structured-decision-making"],
      ["04", "Structured machine intelligence", "From encoding trees to foundation models and agents: interpretable knowledge editing, reasoning, and acting.", "/applications/structured-ai"],
      ["05", "Cybersecurity & public-opinion analysis", "Use structural information to map hierarchies, propagation paths, and collective signals for explainable security and public-opinion analysis.", "/applications/network-security"],
      ["06", "Bioinformatics & scientific principles of life", "Study information organisation, evolutionary regularities, and verifiable principles in living systems through information science and structured modelling.", "/applications/bioinformatics"],
    ],
    suntzuKicker: "PILLAR 03 · MACHINE-INTELLIGENCE PRINCIPLES OF SUN TZU’S THE ART OF WAR",
    suntzuTitle: "Mou and Suan: intelligence through hierarchically abstracting recognition and logical computation",
    suntzuLead: "Treating warfare as a system-level, dynamically evolving contest involving many bodies of matter and information, the Sun Tzu Model turns the Art of War into a researchable, designable, and verifiable machine-intelligence framework. It is a model of MouSuan Intelligence: a principled model for hierarchical design and efficient action.",
    bookTitle: "Machine-Intelligence Principles of Sun Tzu’s The Art of War",
    bookSub: "Axiomatized Science Principles combining matter and information · 1,115 pages",
    bookAction: "Open book page",
    lawsTitle: "The five Sun Tzu laws · laws of combining matter and information",
    laws: ["War is a system-level contest combining matter and information; matter and information are the keys to revealing its regularities", "Outcomes are determined by the combination of matter and information", "War phenomena have measurable, inferable regularities", "Mou and Suan are fundamental strategies for designing war", "Knowing the adversary, self, time, and terrain creates conditions for winning and gaining"],
    modelTitle: "The Sun Tzu model / Sun Tzu machine",
    modelLead: "The intelligence loop of a self-aware subject:",
    model: ["Autonomous learning · know the adversary", "Self-awareness · know the self", "MouSuan contest · strategic interaction design", "Autonomous decision", "Autonomous action", "System verification · test victory and gain"],
    peopleKicker: "ABOUT US · ANGSHENG LI’S RESEARCH TEAM · MOUSUAN INTELLIGENCE (MSI)",
    peopleTitle: "Turning information-science principles into machine intelligence",
    peopleLead: "Professor Angsheng Li’s team builds on structural information, mathematical principles of information, machine-intelligence technology, and intelligence science to turn existing black boxes into an explainable, verifiable white-box route—from computational intelligence to MouSuan Intelligence (MSI).",
    teamIntro: "MouSuan Intelligence (MSI)—also described as recognition and agency—is built around a dual-brain (left–right brain) architecture that combines information science with computer science. Our team carries this Chinese original innovation into learning machines from observing, self-awareness machines, models of MouSuan contest and strategic interaction, the Sun Tzu Model, MouSuan dual-brain architecture intelligent machines, and MouSuan intelligent robots.",
    directionsKicker: "FIVE RESEARCH DIRECTIONS",
    directions: [
      ["01", "Machine intelligence technology based on information-science principles", "Neural-network deep learning, embodied intelligence, foundation models, and world models are each grounded in information-science principles and form a route distinct from existing black-box approaches.", ["Neural-network deep learning", "Embodied intelligence", "Foundation models", "World models"], "#principles"],
      ["02", "Self-awareness machine", "A machine that determines whether information events and their certainty transitions benefit or harm itself, then strengthens benefits and transfers or transforms harms through strategy.", [], "https://mp.weixin.qq.com/s?__biz=MzYzOTIyNDYyNw==&mid=2247484239&idx=1&sn=ed7b32ef7f916a282da9ba673ffe481c"],
      ["03", "The Sun Tzu model (world model)", "Know the adversary, self, time, and terrain—and turn world understanding into an inferable strategy model: a world model with scientific principles.", [], "/books"],
      ["04", "MouSuan dual-brain architecture intelligent machines", "MouSuan dual-brain architecture intelligent machines combine decoded information, generated information, information models of decision, cooperative action, and system verification.", [], "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"],
      ["05", "MouSuan intelligent robots", "Robots that learn, plan, calculate, act, and verify outcomes in complex environments.", [], "https://suuttt.github.io/"],
    ],
    plansKicker: "TWO MAJOR PROGRAMMES · ORIGINAL INNOVATION",
    plansTitle: "Landmark, disruptive research programmes",
    plansLead: "Grounded in the scientific principles of the information world, these two programmes target systems with lasting scientific and engineering significance.",
    plans: [
      ["01", "Sun Tzu Model (MouSuan system)", "A MouSuan Intelligence system based on the scientific principles of the information world", "The Sun Tzu Model is a model of MouSuan Intelligence—a principled, explainable model for hierarchical design and efficient action, with civilian and military versions.", "/books"],
      ["02", "Sun Tzu Machine (MouSuan machine)", "A MouSuan dual-brain architecture intelligent machine based on the scientific principles of the information world", "A principled, explainable intelligent machine.", "/principles/strategic-intelligence"],
    ],
    people: [
      ["Angsheng Li", "Structural information, mathematical principles of the information world, and science of machine intelligence", [["Key paper", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]], "/people/angsheng-li.jpg"],
      ["Yicheng Pan", "Network models and algorithms, information theory, and structural information", [["BUAA profile", "https://scse.buaa.edu.cn/info/1080/7261.htm"]], "/people/pan-yicheng.jpg"],
      ["Ke Xu", "Algorithms and complexity, data mining, networks, and information propagation", [["BUAA profile", "https://scse.buaa.edu.cn/info/1078/2655.htm"]], "/people/ke-xu.jpg"],
      ["Xianghua Zeng", "Hierarchical decision-making, multi-agent coordination, and structural principles", [["DBLP", "https://dblp.org/pid/165/5653.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]], "/people/xianghua-zeng.jpg"],
      ["Yifan Wei", "Large language models, knowledge editing, agents, and machine-intelligence safety", [["Homepage", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]], "/people/yifan-wei-20260802.jpg"],
      ["Dingli Su", "Structural-information decision-making, structural entropy, and intelligent systems", [["Homepage", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["Key paper", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]], "/people/dingli-su-20260802.jpg"],
    ] as [string, string, [string, string][], string][],
    libraryKicker: "PILLAR 04 · MACHINE INTELLIGENCE KNOWLEDGE & RESEARCH PLATFORM",
    libraryTitle: "Library, Annals, and Laboratory",
    libraryLead: "The library preserves knowledge, the annals select significant work, and the laboratory advances research and verification—forming a complete path from knowledge accumulation to scholarly publishing and original innovation.",
    knowledgeModules: [
      ["01", "Principled and Explainable Machine Intelligence Library", "Principled and explainable machine-intelligence papers, books, code, and research resources."],
      ["02", "Annals of Machine Intelligence", "An annual selection of significant machine-intelligence research grounded in scientific principles, preparing the foundation for a future scholarly journal."],
      ["03", "Machine Intelligence Laboratory", "Research, experimentation, and system verification grounded in information-science principles, advancing principled and explainable machine intelligence."],
    ],
    archiveKicker: "PRINCIPLED AND EXPLAINABLE MACHINE INTELLIGENCE LIBRARY · CURRENT COLLECTION",
    archiveTitle: "Significant results and explanatory articles",
    archiveLead: "Foundational articles, papers, code, benchmarks, and terminology resources.",
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
      ["Terminology Wiki: MouSuan Intelligence", "Unified Chinese-English terminology and meanings", "/wiki/terminology"],
    ],
    ventureKicker: "PILLAR 05 · MOUSUAN MACHINE INTELLIGENCE",
    ventureTitle: "MouSuan Machine Intelligence",
    ventureBrand: "MouSuan MI",
    ventureLead: "Advancing deployable applications in industry and industrial intelligence, intelligent manufacturing, MouSuan machines, and MouSuan robots while preparing the foundations for a future company.",
    ventureCards: [
      ["01", "Principles to products", "Translate information-science principles, MouSuan strategies, and the MouSuan dual-brain architecture into verifiable, deliverable machine-intelligence products."],
      ["02", "Industry and industrial intelligence", "Apply MouSuan Machine Intelligence to recognition, decision-making, coordination, and verification in industry and industrial systems."],
      ["03", "Intelligent manufacturing", "Build explainable loops for perception, design, scheduling, execution, and quality verification in manufacturing."],
      ["04", "MouSuan machine", "Develop a principled, explainable MouSuan machine centred on the MouSuan dual-brain architecture."],
      ["05", "MouSuan robot", "Enable robots to recognise, reason with MouSuan, act, and verify results in complex environments as deployable applications."],
      ["06", "Company groundwork", "Build core technology, intellectual property, partnerships, and delivery capability for a future MouSuan Machine Intelligence company."],
    ],
    footer: "Annals of Machine Intelligence · Machine Intelligence Laboratory · MouSuan MI",
    contact: "Feedback & contact: 1015011749@qq.com",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  useEffect(() => {
    const next = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "zh";
    setLang(next);
    document.documentElement.lang = next === "en" ? "en" : "zh-CN";
  }, []);
  const changeLang = (next: Lang) => {
    setLang(next);
    document.documentElement.lang = next === "en" ? "en" : "zh-CN";
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const c = content[lang];
  const goTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main data-lang={lang}>
    <nav className="nav"><a className="brand" href="#discover" onClick={goTo("discover")}><span className="brand-symbol"><img src="/logo-encoding-tree.svg" alt="" /></span><b>STRUCTURAL<br />INTELLIGENCE</b></a><div className="nav-links">{c.nav.map((label, i) => <a key={label} href={`#${c.ids[i]}`} onClick={goTo(c.ids[i])}>{label}</a>)}</div><div className="lang"><button className={lang === "zh" ? "is-on" : ""} onClick={() => changeLang("zh")}>中</button><i>/</i><button className={lang === "en" ? "is-on" : ""} onClick={() => changeLang("en")}>EN</button></div></nav>

    <section id="discover" className="hero"><div className="hero-copy"><p className="overline">{c.kicker}</p><h1>{c.hero.split("\n").map(line => <span key={line}>{line}</span>)}</h1><p className="intro">{c.intro}</p><div className="hero-actions"><a className="button light" href="#principles" onClick={goTo("principles")}>{c.explore} <b>↘</b></a><a className="text-link" href="#about" onClick={goTo("about")}>{c.watch} <b>→</b></a></div></div><div className="hero-visual" aria-hidden="true"><div className="visual-label"><span>∞</span> {c.signal}</div></div></section>

    <section className="manifesto"><p>“{c.manifesto}”</p></section>

    <section id="principles" className="section shell"><header className="section-head"><div><p className="overline">{c.foundationKicker}</p><h2 className={lang === "zh" ? "balanced-zh-title" : undefined}>{lang === "zh" ? <><span>从信息世界，</span><span>到机器智能科学</span></> : c.foundationTitle}</h2></div><p>{c.foundationLead}</p></header><div className="breakthroughs">{c.breakthroughs.map(([num, title, text, href]) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div></section>

    <section id="applications" className="research"><div className="shell"><header className="section-head"><div><p className="overline">{c.applicationsKicker}</p><h2 className={lang === "zh" ? "balanced-zh-title" : undefined}>{lang === "zh" ? <><span>让原理进入学习、</span><span>决策与机器</span></> : c.applicationsTitle}</h2></div>{c.applicationsLead && <p>{c.applicationsLead}</p>}</header><div className="research-list">{c.applications.map(([num, title, text, href]) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></a>)}</div></div></section>

    <section id="suntzu" className="suntzu section"><div className="shell"><header className="section-head"><div><p className="overline">{c.suntzuKicker}</p><h2>{c.suntzuTitle}</h2></div></header><div className="suntzu-context">{c.suntzuContext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="suntzu-grid"><a className="book-card" href="/books"><span className="book-mark">BOOKS</span><h3>{c.bookTitle}</h3><p className="book-lead">{c.suntzuLead}</p><p>{c.bookSub}</p><strong>{c.bookAction} ↗</strong></a><div className="laws-card"><p className="overline">{c.lawsTitle}</p><ol>{c.laws.map((law, i) => <li key={law}><span>0{i + 1}</span>{law}</li>)}</ol></div></div><div className="model-block"><div><p className="overline">{c.modelTitle}</p><p className="model-lead">{c.modelLead}</p></div><div className="model-steps">{c.model.map((step, i) => <div key={step}><span>0{i + 1}</span><p>{step}</p></div>)}</div></div></div></section>

    <section id="library" className="library">
      <div className="shell">
        <header className="section-head">
          <div><p className="overline">{c.libraryKicker}</p><h2>{c.libraryTitle}</h2></div>
          <p>{c.libraryLead}</p>
        </header>
        <div className="knowledge-modules">{c.knowledgeModules.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <header id="library-archive" className="archive-head">
          <p className="overline">{c.archiveKicker}</p>
          <h3>{c.archiveTitle}</h3>
          <p>{c.archiveLead}</p>
        </header>
        <div className="library-grid">{c.library.map(([title, text, href], i) => <a href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={title}><span>{String(i + 1).padStart(3, "0")}</span><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}</div>
      </div>
    </section>

    <section id="venture" className="venture section">
      <div className="shell">
        <header className="venture-head">
          <p className="overline">{c.ventureKicker}</p>
          <div><h2>{c.ventureTitle}</h2><p className="venture-brand">{c.ventureBrand}</p></div>
          <p className="venture-lead">{c.ventureLead}</p>
        </header>
        <div className="venture-grid">{c.ventureCards.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="about" className="section shell people"><header className="section-head"><div><p className="overline">{c.peopleKicker}</p><h2>{c.peopleTitle}</h2></div><p>{c.peopleLead}</p></header><p className="team-intro">{c.teamIntro}</p><div className="major-plans"><header className="major-plans-head"><p className="overline">{c.plansKicker}</p><h3>{c.plansTitle}</h3><p>{c.plansLead}</p></header><div className="major-plans-grid">{c.plans.map(([num, title, subtitle, text, href]) => <a className="major-plan-card" href={href} key={num}><span>{num}</span><h4>{title}</h4><p className="major-plan-subtitle">{subtitle}</p><p>{text}</p><b>↗</b></a>)}</div></div><div className="directions-head"><p className="overline">{c.directionsKicker}</p></div><div className="directions-grid">{(c.directions as [string, string, string, string[], string][]).map(([num, title, text, tags, href]) => <a className="direction-card" href={href} onClick={href.startsWith("#") ? goTo(href.slice(1)) : undefined} target={href.startsWith("#") || href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("#") || href.startsWith("/") ? undefined : "noreferrer"} key={num}><span className="direction-num">{num}</span><h3>{title}</h3><p>{text}</p>{tags.length > 0 && <div className="direction-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<b>↗</b></a>)}</div><div className="team-heading"><p className="overline">{lang === "zh" ? "核心成员" : "CORE TEAM"}</p></div><div className="team-group"><h3 className="team-group-title">{lang === "zh" ? "教授" : "FACULTY"}</h3><div className="people-grid">{c.people.slice(0, 3).map(([name, focus, links, avatar], i) => <article key={name}><span className="portrait">{avatar ? <img src={avatar} alt={`${name} portrait`} /> : String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{focus}</p><div className="profile-links">{links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <b>↗</b></a>)}</div></article>)}</div></div><div className="team-group"><h3 className="team-group-title">{lang === "zh" ? "博士生" : "PHD STUDENTS"}</h3><div className="people-grid">{c.people.slice(3).map(([name, focus, links, avatar], i) => <article key={name}><span className="portrait">{avatar ? <img src={avatar} alt={`${name} portrait`} /> : String(i + 4).padStart(2, "0")}</span><h3>{name}</h3><p>{focus}</p><div className="profile-links">{links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} <b>↗</b></a>)}</div></article>)}</div></div></section>

    <footer><a className="brand" href="#discover" onClick={goTo("discover")}><span className="brand-symbol"><img src="/logo-encoding-tree.svg" alt="" /></span><b>STRUCTURAL<br />INTELLIGENCE</b></a><p>{c.footer}</p><a className="contact-email" href="mailto:1015011749@qq.com">{c.contact}</a><a href="#discover" onClick={goTo("discover")}>↑</a></footer>
  </main>;
}
