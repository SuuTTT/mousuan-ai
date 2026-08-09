import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import bookIndex from "../app/theorems/book-index.json" with { type: "json" };
import { resolveAnchorNavigation } from "../app/anchor-navigation.mjs";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the public knowledge hierarchy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /目标：有原理、可解释的机器智能科学技术，智能机器，智能机器人。/);
  assert.match(html, /信息世界数学原理/);
  assert.match(html, /五个科学问题/);
  assert.doesNotMatch(html, /基本问题|基本回答/);
  assert.match(html, /五个回答/);
  assert.match(html, /信息的数学原理/);
  assert.doesNotMatch(html, /信息世界(?:的)?(?:公理化)?科学原理/);
  assert.doesNotMatch(html, /信息的数学基础|信息基础/);
  for (const question of ["支撑人工智能科学技术的新数学是什么？", "智能是什么？", "智能从哪里来？", "怎样实现智能？", "智能的模型是什么？"]) {
    assert.ok(html.includes(question));
  }
  assert.match(html, /智能 = 信息/);
  assert.match(html, /智能 = 谋算/);
  assert.match(html, /智能 = 智 \+ 能/);
  assert.match(html, /孙子模型/);
  assert.match(html, /一个中心 · 三个定义 · 一个模型/);
  assert.match(html, /构成了人工智能科学技术体系/);
  assert.match(html, /智能的策略就是谋和算/);
  assert.match(html, /“\+”表示二者在同一智能系统中的统一/);
  assert.match(html, /信息是人工智能的数学基础/);
  assert.match(html, /信息渗透在人工智能的每一个步骤与过程/);
  assert.match(html, /智 · 人工智能科学原理/);
  assert.match(html, /能 · 人工智能工程原理/);
  assert.match(html, /学习/);
  assert.match(html, /系统验证/);
  for (const sectionId of ["questions", "center", "definitions", "model", "modules"]) {
    assert.match(html, new RegExp(`id="${sectionId}"`));
  }
  assert.ok(html.indexOf('id="center"') < html.indexOf('id="definitions"'));
  assert.ok(html.indexOf('id="definitions"') < html.indexOf('id="model"'));
  assert.ok(html.indexOf('id="model"') < html.indexOf('id="modules"'));
  assert.doesNotMatch(html, /中文“智能”|无非是谋或者算|已经蕴含实现模型/);
  assert.doesNotMatch(html, /现实世界的完备建模|COMPLETELY MODELING|complete-model/);
  assert.match(html, /href="\/themes\/information"/);
  assert.match(html, /href="\/themes\/zhi-neng-definition"/);
  assert.doesNotMatch(html, /href="#theme-01"|id="theme-01"|id="themes"/);
  assert.doesNotMatch(html, /questions-books|主要著作/);
  assert.doesNotMatch(html, /先给出答案|首页只呈现|简单首页|分层展开|第一层|第二层|第三层|2—3 LEVELS/);
  assert.match(html, /questions-menu-toggle/);
  assert.match(html, /aria-label="研究主页导航"/);
  assert.doesNotMatch(html, /↗️/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("public subpages expose an explicit research-home link", async () => {
  for (const pathname of ["/themes/information", "/themes/zhi-neng-definition", "/concepts/physical-world", "/modules/principles", "/framework", "/team", "/theorems"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /研究主页/);
  }
});

test("team page presents contribution-led member profiles without rank prefixes", async () => {
  const response = await render("/team");
  assert.equal(response.status, 200);
  const html = await response.text();
  const normalizedHtml = html.replaceAll("<!-- -->", "");
  for (const contribution of [
    "现实世界科学的两个世界理论",
    "信息世界十大定律",
    "信息演算理论、信息解码原理和信息生成原理",
    "学习的信息理论、自我意识的信息理论和谋算博弈理论",
    "智能实现的孙子模型",
    "物质与信息结合的孙子五大定律",
  ]) assert.match(html, new RegExp(contribution));
  for (const name of ["李昂生", "潘祎诚", "许可", "曾祥华", "卫一帆", "苏丁力"]) assert.match(html, new RegExp(`>${name}<`));
  assert.match(html, /aria-label="智能 = 信息"/);
  assert.match(html, /aria-label="智能 = 谋算"/);
  assert.match(html, /aria-label="智能 = 智 \+ 能"/);
  for (const work of ["《人工智能科学》", "《人工智能原理》", "《孙子兵法的人工智能原理》"]) assert.match(html, new RegExp(work));
  for (const href of [
    "/books#artificial-intelligence-science",
    "/books#artificial-intelligence-principles",
    "/books#sun-tzu-ai-principles",
  ]) assert.match(html, new RegExp(`href="${href}"`));
  assert.match(normalizedHtml, /《人工智能科学》<\/a>，2024<\/span><span>；/);
  assert.match(normalizedHtml, /《人工智能原理》<\/a>，2024<\/span><span>；/);
  assert.match(normalizedHtml, /《孙子兵法的人工智能原理》<\/a>，2026/);
  assert.doesNotMatch(html, /教授 · FACULTY|博士生 · PHD STUDENTS|李昂生教授/);
});

test("English homepage opens with the requested information-world statement", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const homeCss = await readFile(new URL("../app/home-four-questions.css", import.meta.url), "utf8");
  assert.match(source, /Objective: Principled and explainable machine intelligence science and technology, intelligent machines, and intelligent robots\./);
  assert.match(source, /kicker: "Mathematical principles of the information world"/);
  assert.match(source, /What new mathematics underpins artificial intelligence science and technology\?/);
  assert.match(source, /Mathematical principles of information, also called mathematical principles of the information world/);
  assert.match(source, /Intelligence = Zhi \+ Neng/);
  assert.match(source, /guide: "Five questions · Five answers"/);
  assert.match(source, /What is the model of intelligence\?/);
  assert.match(source, /One centre · Three definitions · One model/);
  assert.match(homeCss, /grid-template-columns:minmax\(72px,max-content\) minmax\(0,1fr\)/);
  assert.match(homeCss, /questions-system-summary\{grid-template-columns:1fr;gap:7px\}/);
  assert.doesNotMatch(source, /Mathematical foundation of information|Information foundations?/i);
});

test("terminology wiki records the canonical information-principle terms", async () => {
  const response = await render("/wiki/terminology");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, />信息原理</);
  assert.match(html, />Information principles</);
  assert.match(html, />信息的数学原理</);
  assert.match(html, />Mathematical principles of information</);
  assert.match(html, />信息世界数学原理</);
  assert.match(html, />Mathematical principles of the information world</);
  assert.match(html, />战争的科学原理</);
  assert.match(html, /战争同时涉及物质与信息/);
  assert.match(html, />智能的科学—工程定义</);
  assert.match(html, /智能 = 智 \+ 能/);
  assert.doesNotMatch(html, /Information foundations?|Mathematical foundations? of information/i);
});

test("formulae are emitted as semantic mathematical markup", async () => {
  const response = await render("/concepts/structural-information");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<math[^>]+aria-label="H\(A\) = minₜ Hₜ\(A\)"/);
  assert.match(html, /<msub>/);
  assert.match(html, /class="math-inline"/);

  const mathCss = await readFile(new URL("../app/math.css", import.meta.url), "utf8");
  assert.match(mathCss, /\.math-inline mtext[\s\S]*Noto Sans SC/);
  assert.doesNotMatch(mathCss, /\.math-inline mtext[\s\S]*Noto Serif SC/);
});

test("site-authored cognition terminology is consistent across public sections", async () => {
  const files = [
    "../app/concepts/concepts.ts",
    "../app/themes/themes.ts",
    "../app/modules/modules.ts",
    "../app/principles/ai-principles/page.tsx",
    "../app/team/page.tsx",
  ];
  const source = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), "utf8")))).join("\n");
  assert.doesNotMatch(source, /认识/);
  assert.match(source, /认知基础/);
  assert.match(source, /COGNITIVE FOUNDATIONS/);
  assert.match(source, /认知世界与改造世界/);
});

test("strategy theme uses the explicit strategy statement and one earliest-book link", async () => {
  const response = await render("/themes/strategy-principle");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /智能的策略就是谋和算/);
  assert.equal(html.match(/href="\/books#artificial-intelligence-science"/g)?.length, 1);
  assert.doesNotMatch(html, /智能 = 谋算/);
});

test("information theme lists its primary references without editorial prompts", async () => {
  const response = await render("/themes/information");
  assert.equal(response.status, 200);

  const html = await response.text();
  for (const reference of ["§4.6.2", "§4.6.3", "定义 8.2", "定义 10.1", "定理 10.9"]) {
    assert.ok(html.includes(reference));
  }
  assert.match(html, /集合的编码树/);
  assert.match(html, /Dᵀ\(A\) = H¹\(A\) − Hᵀ\(A\)/);
  assert.match(html, /压缩／解码原理/);
  assert.doesNotMatch(html, /只列出理解本主题|完整论证进入原著/);
});

test("structural-information concept cites the 2016 paper before the later monograph", async () => {
  const response = await render("/concepts/structural-information");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Structural Information and Dynamical Complexity of Networks/);
  assert.match(html, /IEEE Transactions on Information Theory 62\(6\): 3290–3339/);
  assert.match(html, /10\.1109\/TIT\.2016\.2555904/);
  assert.ok(html.indexOf("10.1109/TIT.2016.2555904") < html.indexOf("artificial-intelligence-science"));
});

test("searchable academic index covers both source books", async () => {
  assert.equal(bookIndex.length, 917);
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定义-8.2" && entry.title === "集合的编码树"));
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定理-10.9" && entry.content.includes("C T (A)")));
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定义-4.4" && entry.content.includes("∑ₓ ∑ᵧ") && !entry.content.includes("(4.4) x y")));
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定义-5.22" && entry.content.includes("y₁, y₂, …, yₙ")));
  assert.ok(bookIndex.some((entry) => entry.id === "sun-tzu-定义-1.1"));
  assert.ok(bookIndex.some((entry) => entry.id === "sun-tzu-定律-IV" && entry.content.includes("物质 × 信息²")));

  const response = await render("/theorems");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /定义·定理·定律索引/);
  assert.match(html, /917(?:<!-- -->)? 条学术陈述/);
  assert.match(html, /关键词或编号/);
  assert.match(html, /aria-label="I\(X; Y\) = ∑ₓ ∑ᵧ p\(x, y\) log₂/);
  assert.match(html, /<mfrac>/);
  assert.match(html, /aria-label="y₁, y₂, …, yₙ"/);
});

test("server-renders the theorem framework with source references", async () => {
  const response = await render("/framework");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /定义 8\.2/);
  assert.match(html, /定理 10\.9/);
  assert.match(html, /定义 34\.5/);
  assert.match(html, /信息世界数学原理/);
  assert.match(html, /智能 = 智 \+ 能/);
  assert.match(html, /孙子模型以信息为数学基础/);
  assert.match(html, /战争之科学原理/);
  assert.match(html, /sun-tzu-ai-principles\.pdf#page=567/);
  assert.doesNotMatch(html, /原有模块|核验原始手稿|audit-redesign/);
});

test("server-renders the Sun Tzu model with primary-source order and five laws", async () => {
  const response = await render("/themes/sun-tzu-model");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /定义 34\.3–34\.4/);
  assert.match(html, /孙子五大定律/);
  assert.match(html, /孙子模型以信息为数学基础/);
  assert.match(html, /信息渗透在学习、自我意识、博弈／谋算、决策、行动与系统验证的每一步/);
  assert.match(html, /战争能力 = 物质 × 信息²/);
  assert.equal(html.match(/href="\/books#artificial-intelligence-science"/g)?.length, 1);
});

test("server-renders the independent Zhi–Neng definition", async () => {
  const response = await render("/themes/zhi-neng-definition");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /aria-label="智能 = 智 \+ 能"/);
  assert.match(html, /结构上的统一，而不是数值相加/);
  assert.match(html, /学习 · 自我意识 · 博弈／谋算/);
  assert.match(html, /决策 · 行动 · 系统验证/);
  assert.match(html, /href="\/themes\/sun-tzu-model"/);
});

test("all internal HTML anchors use lock-safe navigation while document fragments remain native", () => {
  assert.deepEqual(resolveAnchorNavigation("https://example.test/", "#modules"), {
    kind: "same-page",
    targetId: "modules",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/", "#definitions"), {
    kind: "same-page",
    targetId: "definitions",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/team", "/#modules"), {
    kind: "cross-page",
    targetId: "modules",
    destination: "/",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/", "/framework#sun"), {
    kind: "cross-page",
    targetId: "sun",
    destination: "/framework",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/themes/information", "/books#artificial-intelligence-science"), {
    kind: "cross-page",
    targetId: "artificial-intelligence-science",
    destination: "/books",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/framework", "/books/sun-tzu-ai-principles.pdf#page=567"), {
    kind: "ignore",
  });
  assert.deepEqual(resolveAnchorNavigation("https://example.test/", "https://other.test/#modules"), {
    kind: "ignore",
  });
});
