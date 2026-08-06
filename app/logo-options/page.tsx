import "./logo-options.css";
import "./hierarchy-options.css";

const options = [
  { id: "A", file: "a-encoding-tree.svg", name: "编码树", en: "Encoding Tree", idea: "层谱抽象、全局认知与编码树。学术感最强，结构清晰，适合研究团队。", fit: "研究主页 / 论文 / favicon" },
  { id: "B", file: "b-dual-brain.svg", name: "谋算双脑", en: "Dual-Brain Bridge", idea: "左右半脑式的谋脑与算脑，由信息通道连接。最直接表达核心体系结构。", fit: "品牌主标 / 双脑架构页面" },
  { id: "C", file: "c-mousuan-loop.svg", name: "谋算闭环", en: "MouSuan Loop", idea: "谋与算形成连续闭环：认知、推理、行动、验证。形状简洁，识别度高。", fit: "品牌主标 / App 图标" },
  { id: "D", file: "d-hierarchy-spectrum.svg", name: "层谱通道", en: "Hierarchy Spectrum", idea: "多层抽象与跨层演算通道，强调从全局策略到局部行动。", fit: "学术平台 / 知识库" },
  { id: "E", file: "e-strategy-compass.svg", name: "策略罗盘", en: "Strategy Compass", idea: "观察、谋划、决策、行动和验证的方向系统。更庄重、机构化。", fit: "研究院 / 年鉴 / 实验室" },
  { id: "F", file: "f-information-seed.svg", name: "信息之种", en: "Information Seed", idea: "信息生成智能结构，并通过行动与验证形成回路。更具生命力和未来感。", fit: "机器智能 / 机器人 / 产业应用" },
];

const hierarchyOptions = [
  { id: "G", file: "g-spectrum-ascent.svg", name: "层谱上升", en: "Spectrum Ascent", idea: "多层结构沿中心通道逐层抽象，最终形成高层全局认知。对“层谱抽象”的过程表达最直接。", fit: "品牌主标 / 学术主页 / favicon" },
  { id: "H", file: "h-encoding-spectrum.svg", name: "编码层谱", en: "Encoding Spectrum", idea: "编码树组织局部结构，弧线标示不同抽象层级；同时表达编码树与层谱。", fit: "理论体系 / 论文 / 知识库" },
  { id: "I", file: "i-cross-hierarchy.svg", name: "跨层演算", en: "Cross-Hierarchy Reasoning", idea: "层谱结构中加入跨层路径，强调跨越抽象层谱的演算、推理与策略传递。", fit: "谋算智能 / 双脑架构 / 工程系统" },
  { id: "J", file: "j-global-recognition.svg", name: "全局认知", en: "Global Recognition", idea: "多个局部对象逐层汇聚为整体结构，并在最高层形成全局观察与认知。", fit: "研究团队 / 机器智能 / 公共品牌" },
];

function LogoCard({ option }: { option: typeof options[number] }) {
  return <article className="logo-card">
    <div className="logo-card-head"><span>{option.id}</span><div><h2>{option.name}</h2><p>{option.en}</p></div></div>
    <div className="logo-stage dark">
      <img src={`/logo-options/${option.file}`} alt={`${option.name} Logo`} />
      <div className="wordmark"><strong>谋算机器智能</strong><small>MOUSUAN MACHINE INTELLIGENCE</small></div>
    </div>
    <div className="logo-stage light">
      <img src={`/logo-options/${option.file}`} alt="" />
      <div className="wordmark"><strong>谋算机器智能</strong><small>MOUSUAN MACHINE INTELLIGENCE</small></div>
    </div>
    <div className="size-test"><span>小尺寸</span><div className="mini dark"><img src={`/logo-options/${option.file}`} alt="" /></div><img className="s32" src={`/logo-options/${option.file}`} alt="" /><img className="s20" src={`/logo-options/${option.file}`} alt="" /></div>
    <p className="logo-idea">{option.idea}</p>
    <div className="logo-fit"><b>适用：</b>{option.fit}</div>
    <a className="svg-link" href={`/logo-options/${option.file}`} download>下载 SVG ↗︎</a>
  </article>;
}

export default function LogoOptionsPage() {
  return <main className="logo-review">
    <header className="logo-review-hero">
      <a href="/" className="review-back">← 返回研究主页</a>
      <p>MOUSUAN VISUAL IDENTITY · SVG CONCEPTS</p>
      <h1>谋算网站 Logo 候选</h1>
      <div className="review-intro">第二轮专门聚焦“层谱抽象”：局部结构逐层汇聚为全局认知，并呈现编码树或跨层演算。每个方案同时测试深色、浅色和 favicon 小尺寸。</div>
    </header>

    <section className="round-heading"><p>ROUND 02 · HIERARCHICAL ABSTRACTION</p><h2>突出层谱抽象</h2><div>优先比较 G–J。请回复一个字母，或指定组合，例如“用 H 的编码树结构，加 I 的跨层箭头”。</div></section>
    <section className="logo-grid">
      {hierarchyOptions.map((option) => <LogoCard option={option} key={option.id} />)}
    </section>
    <section className="round-heading previous"><p>ROUND 01 · EARLIER CONCEPTS</p><h2>第一轮候选</h2></section>
    <section className="logo-grid previous-grid">
      {options.map((option) => <LogoCard option={option} key={option.id} />)}
    </section>
    <footer className="logo-review-foot"><b>本轮建议</b><p>G 最直观地表达“逐层抽象”；H 同时包含编码树与层谱，理论含义最完整；I 强调跨层演算；J 更像公共品牌标志。若以团队核心概念为第一优先，我建议从 H 开始细化。</p></footer>
  </main>;
}
