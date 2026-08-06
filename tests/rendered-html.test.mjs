import assert from "node:assert/strict";
import test from "node:test";

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
  assert.match(html, /现实世界的完备建模/);
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
  assert.doesNotMatch(html, /只列出理解本主题|完整论证进入原著/);
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
