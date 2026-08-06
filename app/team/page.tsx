const programmes = [
  ["01", "孙子模型（谋算系统）", "基于信息世界科学原理的谋算智能系统", "以知彼、知己、知天、知地组织学习、自我意识、策略、决策、行动与验证；形成有原理、可解释的世界模型。", "/modules/sun-tzu"],
  ["02", "孙子机（谋算机）", "基于信息世界科学原理的谋算双脑智能机", "以谋进行层谱抽象和全局认知，以算完成局部计算和逻辑推理，形成可验证的智能机器。", "/modules/mousuan-mi"],
] as const;

const directions = [
  ["01", "基于信息科学原理的机器智能技术", "研究神经网络深度学习、具身智能、大模型与世界模型，使机器智能具有结构、原理和解释。", "/modules/applications"],
  ["02", "自我意识机", "研究机器对自身状态、需求、愿望、利与害的认识，以及由此产生的策略和行动。", "/applications/embodied-intelligence"],
  ["03", "孙子模型（世界模型）", "把知彼、知己、知天、知地转化为可推演、可验证的谋算智能模型。", "/modules/sun-tzu"],
  ["04", "谋算智能机", "把信息解码、策略生成、决策、协同行动和系统验证结合为谋算双脑体系结构。", "/modules/mousuan-mi#machine"],
  ["05", "谋算智能机器人", "让机器人在复杂环境中学习、谋算、行动，并通过系统验证获得可信结果。", "/modules/mousuan-mi#robot"],
] as const;

const faculty = [
  { name: "李昂生", focus: "结构信息、信息世界数学原理与智能科学", image: "/people/angsheng-li.jpg", links: [["代表论文", "https://arxiv.org/abs/2001.09637"], ["DBLP", "https://dblp.org/pid/66/4917.html"]] },
  { name: "潘祎诚", focus: "网络模型与算法、信息论、结构信息", image: "/people/pan-yicheng.jpg", links: [["北航主页", "https://scse.buaa.edu.cn/info/1080/7261.htm"]] },
  { name: "许可", focus: "算法与复杂性、数据挖掘、网络与信息传播", image: "/people/ke-xu.jpg", links: [["北航主页", "https://scse.buaa.edu.cn/info/1078/2655.htm"]] },
] as const;

const students = [
  { name: "曾祥华", focus: "层级决策、多智能体协同与结构信息原则", image: "/people/xianghua-zeng.jpg", links: [["DBLP", "https://dblp.org/pid/165/5653.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]] },
  { name: "卫一帆", focus: "大语言模型、知识编辑、智能体与机器智能安全", image: "/people/yifan-wei-20260802.jpg", links: [["个人主页", "https://weiyifan1023.github.io/"], ["GitHub", "https://github.com/weiyifan1023"], ["DBLP", "https://dblp.org/pid/204/1769-1.html"]] },
  { name: "苏丁力", focus: "结构信息决策、结构熵与智能系统工程", image: "/people/dingli-su-20260802.jpg", links: [["个人主页", "https://suuttt.github.io/"], ["DBLP", "https://dblp.org/pid/362/8210.html"], ["代表论文", "https://jmlr.org/papers/volume26/24-1184/24-1184.pdf"]] },
] as const;

function PeopleGroup({ title, people }: { title: string; people: typeof faculty | typeof students }) {
  return <section className="team-people-group"><header><span>{title}</span><b>{String(people.length).padStart(2, "0")}</b></header><div>{people.map((person) => <article key={person.name}><img src={person.image} alt={`${person.name}照片`} /><div><h3>{person.name}</h3><p>{person.focus}</p><nav>{person.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>)}</nav></div></article>)}</div></section>;
}

export default function TeamPage() {
  return <main className="team-page">
    <nav className="team-nav"><a className="team-brand" href="/"><img src="/logo-encoding-tree.svg" alt="" /><b>STRUCTURAL<br />INTELLIGENCE</b></a><div><a href="/#hierarchy">三层理论</a><a href="/#modules">五大模块</a><a href="/books">三部专著</a></div></nav>
    <header className="team-hero"><div><p>ABOUT US · 李昂生教授团队</p><h1>把信息科学原理<br />变成智能机</h1><span>团队以结构信息、信息的数学原理、机器智能技术和智能科学为基础，从计算到谋算，把已有黑箱变成有原理、可解释、可验证的机器智能。</span></div><aside><strong>研究路线</strong><p>谋算双脑体系结构连接信息科学与计算科学，并落实为观察学习机、自我意识机、孙子模型、谋算智能机与谋算智能机器人。</p></aside></header>

    <section className="team-members team-shell"><header><p>CORE TEAM</p><h2>核心成员</h2><span>教授与博士生共同推进结构信息、机器智能科学与谋算智能研究。</span></header><PeopleGroup title="教授 · FACULTY" people={faculty} /><PeopleGroup title="博士生 · PHD STUDENTS" people={students} /></section>

    <section className="team-programmes team-shell"><header><p>MAJOR PROGRAMMES</p><h2>重大、原始创新研究计划</h2><span>围绕信息世界科学原理，推进两个能够形成标志性系统的长期研究计划。</span></header><div>{programmes.map(([no, title, subtitle, text, href]) => <a href={href} key={no}><span>{no}</span><h3>{title}</h3><strong>{subtitle}</strong><p>{text}</p><b>进入计划 ↗</b></a>)}</div></section>

    <section className="team-directions"><div className="team-shell"><header><p>FIVE RESEARCH DIRECTIONS</p><h2>五大研究方向</h2></header><div>{directions.map(([no, title, text, href]) => <a href={href} key={no}><span>{no}</span><section><h3>{title}</h3><p>{text}</p></section><b>↗</b></a>)}</div></div></section>

    <footer className="team-footer"><div className="team-shell"><span>反馈与联系</span><a href="mailto:1015011749@qq.com">1015011749@qq.com</a><a href="/">返回首页 ↑</a></div></footer>
  </main>;
}
