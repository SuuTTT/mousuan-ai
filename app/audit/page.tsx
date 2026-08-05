"use client";

import { useEffect, useMemo, useState } from "react";
import "./review.css";

type Status = "待核验" | "已确认" | "暂不采用";

type AuditItem = {
  id: string;
  order: number;
  section: string;
  title: string;
  images: string[];
  transcription: string;
  uncertain: string;
};

const image = (id: string) => `/audit/handwritten/codex-clipboard-${id}.jpg`;
const imageFile = (filename: string) => `/audit/handwritten/${filename}`;

const items: AuditItem[] = [
  {
    id: "theory-33",
    order: 1,
    section: "前置理论批注 · 3(3)",
    title: "结构信息、信息与计算智能的通道",
    images: [image("39b0d331-ffa0-4e78-9da4-5bd663f32a38")],
    transcription: "可辨认：批注讨论结构与信息的关系；结论句为“打通了信息与计算智能的通道。”",
    uncertain: "第一句中间有涂改，无法可靠逐字还原。请确认完整原文。",
  },
  {
    id: "theory-34",
    order: 2,
    section: "前置理论批注 · 3(4)",
    title: "信息世界与层谱抽象",
    images: [image("d75d5167-957c-4e5f-bb9d-ddf42174058c")],
    transcription: "可辨认：信息世界的层谱抽象……信息基本定理。",
    uncertain: "“层谱抽象”后面的词可能是“艺术”或“本质”；请写下正式句子。",
  },
  {
    id: "theory-35",
    order: 3,
    section: "前置理论批注 · 3(5)",
    title: "层谱抽象与“智”",
    images: [image("5bd61271-06b5-43b8-b6cd-46ac7ec6d1c7")],
    transcription: "可辨认：‘层谱抽象’是信息世界研究中的重要概念；批注追问‘智’与层谱抽象的关系，以及层谱抽象的定义。",
    uncertain: "请确认两条批注的完整定义性句子。",
  },
  {
    id: "theory-36",
    order: 4,
    section: "前置理论批注 · 3(6)",
    title: "结构熵学的基础性定位",
    images: [image("5c0a7e2e-6a70-493c-b281-9ea1d1b3f509")],
    transcription: "可辨认：结构熵学应被定位为理解复杂系统、研究智能的基础理论。",
    uncertain: "整段字迹较密，无法可靠逐字转写；请补充电子文本或确认正式表述。",
  },
  {
    id: "theory-37",
    order: 5,
    section: "前置理论批注 · 3(7)",
    title: "层谱抽象的总方法",
    images: [image("d6a313e9-60eb-415d-a4d4-4a8390f128b8")],
    transcription: "可辨认：‘层谱抽象是人怎么认识世界的总方法。’‘层谱抽象的数学定义是什么？’",
    uncertain: "第三句关于层谱抽象、世界与数学/智能的关系无法可靠辨认。",
  },
  {
    id: "hero-zh",
    order: 6,
    section: "首页 · 中文主视觉",
    title: "“谋算智能”与英文术语",
    images: [image("6913dd9b-bbee-4d43-a548-87f3cd441e30"), image("ae39483c-9196-4ce2-a8ea-37d6de207551")],
    transcription: "批注质疑把中文“智能”直接译为 Intelligence；同时标注当前“Science and Technology of MouSuan Strategy”需重新核对。",
    uncertain: "请确认此处最终统一的中英名称及缩写；这将驱动全站替换。",
  },
  {
    id: "manifesto-zh",
    order: 7,
    section: "首页 · 中文宣言",
    title: "信息、智、能的定义",
    images: [image("29c693d6-b23f-4dfe-bb08-2990bdaa582d"), image("bd7b0828-1ac5-4506-a9a5-cf403a91ed08")],
    transcription: "可辨认：批注要求重核“生成”、信息与不确定性的关系，以及“智”为策略性设计、“能”为高效行动的定义。",
    uncertain: "请确认“信息是消除/减少不确定性”的最终中文句式，以及是否保留“智能=信息”。",
  },
  {
    id: "manifesto-en",
    order: 8,
    section: "首页 · English manifesto",
    title: "generated / generated principles 与 Zhi–Neng",
    images: [image("e1412c55-a9d2-462f-8a61-3c21d5c8ece4")],
    transcription: "批注指向 generated 一词及英文 Zhi / Neng 定义，要求用术语表中的正式表达。",
    uncertain: "请确认这里应使用 generated、generation，还是“created/established”的正式术语。",
  },
  {
    id: "pillar-1-zh",
    order: 9,
    section: "第一板块 · 中文",
    title: "信息世界的公理化科学原理与三张卡",
    images: [image("9b10eaf5-9569-4a89-a9ab-85c53915875f"), image("bd5277ad-7bba-4c54-9bf1-1dd487603c9c"), image("b717a22f-1739-4f79-b3a9-96b9ebc48e9c")],
    transcription: "三张核心卡片旁标有“加 3(3)–3(7)”，要求将前置理论批注分别补入对应内容；标题、年份、卡片描述均需与这些定义一致。",
    uncertain: "需您确认 3(3)–3(7) 与每一张卡片的确切映射关系。",
  },
  {
    id: "pillar-1-en",
    order: 10,
    section: "第一板块 · English",
    title: "层谱抽象、信息世界与谋算博弈",
    images: [image("6e934a4f-6440-427c-bfaf-391f648af9fd"), image("264e177b-7000-4ed9-bf5b-df70eb823781")],
    transcription: "批注要求说明：层谱抽象是信息世界的总体策略/总方法；补足其数学原理，并加入 MouSuan game。标题、Structural Information 卡片和 MouSuan 条目均需按术语表修订。",
    uncertain: "请确认 MouSuan game 的正式中英文定义与放置位置。",
  },
  {
    id: "applications-zh",
    order: 11,
    section: "第二板块 · 中文应用",
    title: "具身智能、结构化决策与结构化 AI",
    images: [image("0fe03000-a00e-46c5-b3ff-a446354c3e6c")],
    transcription: "批注要求澄清具身智能与自我意识的关系。其他卡片应使用结构信息和层谱抽象的准确表达。",
    uncertain: "“具身智能”的具体改写句子尚未完全辨认。",
  },
  {
    id: "applications-en",
    order: 12,
    section: "第二板块 · English applications",
    title: "信息科学原理、层谱抽象与 acting",
    images: [image("39d7dbe2-92f0-4cd0-924c-e00783dbcbaa")],
    transcription: "MouSuan learning 应强调 information principles；Structured decision-making 应表达 hierarchically abstracting；Structured AI 末尾要核对 action / acting。",
    uncertain: "请确认每张英文卡片要使用的完整正式句子。",
  },
  {
    id: "suntzu-context-zh",
    order: 13,
    section: "第三板块 · 中文历史与问题",
    title: "物理世界、信息世界与孙子兵法",
    images: [image("d34f5509-7684-453d-8ff5-c415251b7ec3"), image("0ebf796d-9434-4b80-be96-28a291641049")],
    transcription: "批注要求强化战争作为物质与信息结合的动态体系对抗；书卡要更大，并增加书、双脑体系结构、自我意识主体与智能机创建之间的解释。",
    uncertain: "新增段落的完整中文原文待确认。",
  },
  {
    id: "suntzu-laws-zh",
    order: 14,
    section: "第三板块 · 中文五条",
    title: "孙子五大定律与智能闭环",
    images: [image("c218e180-ddf4-49d2-9faf-4782ebde5fed"), image("cff0fbe8-967f-4336-b28e-822ece1008e8")],
    transcription: "批注指向五条内容：应明确体系对抗、物质与信息、战争过程的基本规律，以及‘知彼、知己、知天、知地’如何构成获利/胜利条件。",
    uncertain: "第 1、3、5 条的精确替换句暂不清晰。",
  },
  {
    id: "suntzu-en",
    order: 15,
    section: "第三板块 · English",
    title: "Sun Tzu model、principles 与 winning and gaining",
    images: [image("6e9650ce-8a43-41b9-9a01-467b3e8023cf"), image("f2b3c7fd-3beb-413b-a312-0d1c894391f3")],
    transcription: "将 five laws 改为更准确的 principles；第 5 条由 victory 改为表达 winning and gaining；模型应说明物质与信息、多主体/多系统对抗、策略性设计与有效行动。",
    uncertain: "‘MouSuan Strategy / Intelligence’与书卡正文的最终英语仍待术语确认。",
  },
  {
    id: "about-zh",
    order: 16,
    section: "关于我们 · 中文",
    title: "团队定位与智能机",
    images: [image("cf6403c9-9363-4804-82a1-47969d6d6b47")],
    transcription: "批注指向标题和导语：团队定位、信息的数学原理、人工智能科学技术路线均需以正式术语重新表达。",
    uncertain: "红字中关于‘信息的数学原理’与团队定位的整句需要您确认。",
  },
  {
    id: "about-en",
    order: 17,
    section: "About us · English",
    title: "machine intelligence、computational intelligence 与观察学习",
    images: [image("1cc44bf8-6a88-4ab6-8841-0b3cab21bbe0"), image("c53d0cb0-f056-4325-99c8-f9ca4bbab76b")],
    transcription: "批注要求把 information-world mathematics / intelligence science 统一为更准确的术语；区分 computational intelligence；补入 learning machine from observing；重新表述双脑体系结构的基础关系。",
    uncertain: "请确认团队英文定位最终应为 ‘science of machine intelligence’ 还是另一正式名称。",
  },
  {
    id: "programmes",
    order: 18,
    section: "两大重大计划",
    title: "孙子模型与孙子机",
    images: [image("8c807093-28ef-45b6-bb8a-7c2f737c6aca"), image("b30cb00f-76b0-49fc-9f17-c14b63a63ba9")],
    transcription: "两张计划卡被标注：MouSuan 的英文和 ‘strategic design’ 用法需统一；孙子模型的性质应与谋算智能/智能模型的正式定义一致。",
    uncertain: "请确认卡片标题的最终英译。",
  },
  {
    id: "people",
    order: 19,
    section: "核心成员",
    title: "研究方向与成果库的衔接",
    images: [image("f9a15322-76f7-4ead-9c02-ce65b2e4336e")],
    transcription: "批注提出建立 ‘Significant Results Library of Principled Machine Intelligence’，并使团队成员成果与该资源库关联。",
    uncertain: "请确认该资源库的最终中英文名称与缩写。",
  },
  {
    id: "library",
    order: 20,
    section: "第四板块 · 知识库",
    title: "完整收录相关成果",
    images: [image("fb1a0320-4cb8-423b-8fe2-b7856b7a92a6"), image("cf6403c9-9363-4804-82a1-47969d6d6b47"), image("39bb3ace-b157-46e9-80f4-7b80a7b653f8")],
    transcription: "批注明确要求：将所有相关成果系统收录到此处，按主题分类；资源库应作为 principled machine intelligence 的成果库，而非零散外链集合。",
    uncertain: "请确认资源库中必须覆盖的一级分类：论文、书籍、代码、数据、基准、解释文章、项目等。",
  },
  {
    id: "footer",
    order: 21,
    section: "页脚与移动端",
    title: "移动端排版修复",
    images: [image("39bb3ace-b157-46e9-80f4-7b80a7b653f8"), image("fb1a0320-4cb8-423b-8fe2-b7856b7a92a6")],
    transcription: "页脚中的研究库名、术语 Wiki、联系邮箱在移动端发生竖排与挤压；需做响应式重排。",
    uncertain: "无。",
  },
  {
    id: "theory-supplement-a",
    order: 22,
    section: "补充理论批注 · 3(3)",
    title: "对象的层谱抽象与信息世界",
    images: [
      imageFile("codex-clipboard-939f0830-692b-47ce-81ad-62ca8d8a096a.png"),
      imageFile("codex-clipboard-67bad121-41a0-49d0-a706-6e02c5f467fb.jpg"),
    ],
    transcription: "补充页讨论一个对象的层谱抽象、对象的结构世界，以及物质世界、信息世界与数学对象之间的关系。页面提出多个定义性问题，要求分别澄清各对象所在的抽象层谱。",
    uncertain: "红字逐句较密，尚不能可靠还原。请在右栏确认：对象层谱抽象的正式定义，以及物质世界、信息世界和数学对象的关系。",
  },
  {
    id: "theory-supplement-b",
    order: 23,
    section: "补充理论批注 · 3(3)+",
    title: "信息世界对象、数学对象与层谱抽象",
    images: [
      imageFile("codex-clipboard-76fdd83d-7376-4322-a577-544ef41ceae4.jpg"),
      imageFile("codex-clipboard-1fd3723d-3072-4319-affe-0b3e8b77aaef.jpg"),
      imageFile("codex-clipboard-fdc99341-e445-41ce-a0b7-70f1675e5e18.jpg"),
    ],
    transcription: "补充页围绕信息世界的对象、信息系统、数学对象和层谱抽象提出问题；其中要求区分信息世界与物理世界，并核验数学在信息世界中的位置。",
    uncertain: "请在右栏逐项确认：1）数学是否是信息世界的对象；2）层谱抽象策略所研究的对象；3）人工智能与信息世界的关系；4）信息世界的层谱抽象是否存在其他正式表述。",
  },
];

const storageKey = "mousuan-manual-audit-v1";

export default function AuditPage() {
  const [activeId, setActiveId] = useState(items[0].id);
  const [status, setStatus] = useState<Record<string, Status>>({});
  const [confirmed, setConfirmed] = useState<Record<string, string>>({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as { status?: Record<string, Status>; confirmed?: Record<string, string> };
      setStatus(parsed.status ?? {});
      setConfirmed(parsed.confirmed ?? {});
    } catch { /* keep a clean review workspace */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ status, confirmed }));
  }, [status, confirmed]);

  const filtered = useMemo(() => items.filter((item) => `${item.section} ${item.title} ${item.transcription}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const progress = items.filter((item) => status[item.id] === "已确认").length;

  const exportReview = () => {
    const text = items.map((item) => `# ${item.order}. ${item.section}｜${item.title}\n\n识别：${item.transcription}\n\n待确认：${item.uncertain}\n\n状态：${status[item.id] ?? "待核验"}\n\n确认文本：${confirmed[item.id] ?? ""}\n`).join("\n---\n\n");
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(new Blob([text], { type: "text/markdown;charset=utf-8" }));
    anchor.download = "mousuan-manual-audit.md";
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  };

  return (
    <main className="audit-page">
      <aside className="audit-sidebar" aria-label="批注目录">
        <a className="audit-brand" href="/">SI <span>手写批注核验台</span></a>
        <p className="audit-side-copy">逐页确认手写批注。所有输入仅保存在这台设备，导出后可作为正式修改清单。</p>
        <label className="audit-search">搜索<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="标题、板块或内容" /></label>
        <nav>
          {filtered.map((item) => <button className={item.id === active.id ? "audit-index is-active" : "audit-index"} key={item.id} onClick={() => setActiveId(item.id)}><span>{String(item.order).padStart(2, "0")}</span><b>{item.title}</b><i className={`status-dot ${status[item.id] === "已确认" ? "done" : ""}`} /></button>)}
        </nav>
        <div className="audit-progress"><span>已确认</span><b>{progress} / {items.length}</b></div>
      </aside>

      <section className="audit-workspace">
        <header className="audit-topbar">
          <div><p>{active.section}</p><h1>{active.title}</h1></div>
          <button className="audit-export" onClick={exportReview}>导出核验记录 ↗</button>
        </header>
        <div className="audit-grid">
          <article className="audit-card source-card">
            <div className="audit-card-label">原始图像 · {active.images.length} 张</div>
            <div className="audit-images">
              {active.images.map((src, index) => <a href={src} target="_blank" key={src}><img src={src} alt={`${active.title} 的手写批注图 ${index + 1}`} /></a>)}
            </div>
            <p className="audit-hint">点击图片可在新标签查看原图。</p>
          </article>
          <article className="audit-card transcription-card">
            <div className="audit-card-label">我的识别</div>
            <p className="audit-transcription">{active.transcription}</p>
            <div className="audit-uncertain"><b>待您核验</b><p>{active.uncertain}</p></div>
            <label className="audit-status">处理状态<select value={status[active.id] ?? "待核验"} onChange={(event) => setStatus({ ...status, [active.id]: event.target.value as Status })}><option>待核验</option><option>已确认</option><option>暂不采用</option></select></label>
          </article>
          <article className="audit-card confirm-card">
            <div className="audit-card-label">您确认的正式内容</div>
            <textarea value={confirmed[active.id] ?? ""} onChange={(event) => setConfirmed({ ...confirmed, [active.id]: event.target.value })} placeholder="请输入或粘贴确认后的原句、术语、替换要求……" />
            <p className="audit-hint">输入会自动保存到本机浏览器；完成后可用右上角“导出核验记录”。</p>
          </article>
        </div>
      </section>
    </main>
  );
}
