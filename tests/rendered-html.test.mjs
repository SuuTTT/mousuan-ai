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
  assert.match(html, /现实世界的完整建模/);
  assert.match(html, /信息世界的公理化数学原理/);
  assert.match(html, /机器智能体系/);
  assert.match(html, /定理 19\.44/);
  assert.match(html, /智能 = 信息/);
  assert.match(html, /href="\/concepts\/physical-world"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("server-renders the theorem framework with source references", async () => {
  const response = await render("/framework");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /定义 19\.14/);
  assert.match(html, /定义 19\.21/);
  assert.match(html, /定义 19\.29/);
  assert.match(html, /定理 19\.44/);
  assert.match(html, /sun-tzu-ai-principles\.pdf#page=492/);
  assert.doesNotMatch(html, /原有模块|核验原始手稿|audit-redesign/);
});
