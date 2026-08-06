import assert from "node:assert/strict";
import test from "node:test";
import bookIndex from "../app/theorems/book-index.json" with { type: "json" };
import { resolveAnchorNavigation } from "../app/anchor-navigation.ts";

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
  assert.match(html, /信息与智能的/);
  assert.match(html, /四个基本问题/);
  assert.match(html, /信息的数学基础/);
  assert.match(html, /智能 = 信息/);
  assert.match(html, /智能的策略就是谋和算/);
  assert.doesNotMatch(html, /现实世界的完备建模|COMPLETELY MODELING|complete-model/);
  assert.match(html, /href="\/themes\/information"/);
  assert.doesNotMatch(html, /href="#theme-01"|id="theme-01"/);
  assert.doesNotMatch(html, /questions-books|主要著作/);
  assert.doesNotMatch(html, /智能 = 谋算/);
  assert.doesNotMatch(html, /先给出答案|首页只呈现|简单首页|分层展开|第一层|第二层|第三层|2—3 LEVELS/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
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

test("searchable academic index covers both source books", async () => {
  assert.equal(bookIndex.length, 917);
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定义-8.2" && entry.title === "集合的编码树"));
  assert.ok(bookIndex.some((entry) => entry.id === "ai-science-定理-10.9" && entry.content.includes("C T (A)")));
  assert.ok(bookIndex.some((entry) => entry.id === "sun-tzu-定义-1.1"));
  assert.ok(bookIndex.some((entry) => entry.id === "sun-tzu-定律-IV" && entry.content.includes("物质 × 信息²")));

  const response = await render("/theorems");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /定义·定理·定律索引/);
  assert.match(html, /917(?:<!-- -->)? 条学术陈述/);
  assert.match(html, /关键词或编号/);
});

test("server-renders the theorem framework with source references", async () => {
  const response = await render("/framework");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /定义 8\.2/);
  assert.match(html, /定理 10\.9/);
  assert.match(html, /定义 34\.5/);
  assert.match(html, /sun-tzu-ai-principles\.pdf#page=567/);
  assert.doesNotMatch(html, /原有模块|核验原始手稿|audit-redesign/);
});

test("server-renders the Sun Tzu model with primary-source order and five laws", async () => {
  const response = await render("/themes/sun-tzu-model");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /定义 34\.3–34\.4/);
  assert.match(html, /孙子五大定律/);
  assert.match(html, /战争能力 = 物质 × 信息²/);
  assert.equal(html.match(/href="\/books#artificial-intelligence-science"/g)?.length, 1);
});

test("all internal HTML anchors use lock-safe navigation while document fragments remain native", () => {
  assert.deepEqual(resolveAnchorNavigation("https://example.test/", "#modules"), {
    kind: "same-page",
    targetId: "modules",
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
