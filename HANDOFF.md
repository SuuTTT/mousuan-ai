# MouSuan Website — Continuation Handoff

This document is the starting point for the next Codex chat. Read it before editing. It records user-approved decisions, open audit work, and safe restart checks. Do not copy any credentials or tokens into code, commits, or messages; previously shared GitHub tokens must be treated as compromised and rotated.

## 1. Workspace and live URLs

- Project: `/Users/suu/Documents/codexcli/information-intelligence-site`
- Deployed review site: `http://54.179.195.54:8888/`
- Local audit UI: `http://localhost:3011/static-overrides/audit/`
- Intended redesign-audit UI: `http://localhost:3011/static-overrides/audit-redesign/` — currently reported as **404** and must be repaired.
- Intended GitHub repository: `SuuTTT/mousuan-ai`; do not assume remote, branch, visibility, or push status. Verify first.

Use a local HTTP server for browser/i18n tests, never `file://`:

```sh
cd /Users/suu/Documents/codexcli/information-intelligence-site
python3 -m http.server 3011 --bind 127.0.0.1
```

Before any edit, inspect:

```sh
git status --short
git remote -v
rg --files static-overrides | sort
rg -n "audit-redesign|favicon|icon|具身智能|层谱抽象|应用总结表" .
```

Do not deploy to the EC2 server or alter production services unless the user explicitly asks. Earlier port-8888 downtime may have involved a long-lived development process/resources; production should ultimately be static files behind nginx/systemd, not a development server.

## 2. Current task state

The user has supplied a large handwritten redesign set. They asked for it to be added to the audit experience **before implementing the redesign**:

- Create/repair a separate redesign-audit page.
- One supplied photo per tab/page.
- Each tab should show the source image, transcription/interpretation, and a field for the user to confirm or correct it.
- The present audit page covers earlier feedback; the new hand-drawn information-world structure must be a separate audit set.
- Do not compress several images into one entry and do not silently infer uncertain handwriting. Mark uncertainty explicitly.

The high-level redesign request is clear even before all handwriting is confirmed:

- The home page is currently too long and too complex.
- Reorganise through **hierarchical abstraction**: clear, simple, layered, and navigable by clicking into deeper levels.
- Important claims need citations close to the claim.
- The user will later provide/confirm their desired hierarchy, so build the audit/transcription workflow first rather than a speculative full redesign.

## 3. Terminology source of truth

Apply terms contextually; do **not** use a global text replacement without reviewing each occurrence.

| Chinese | Preferred English / use |
| --- | --- |
| 谋算智能科学技术 | **Science and Technology of MouSuan Strategy** |
| 谋 | **Mou**; hierarchical abstracting global recognition; cross-hierarchy calculating/reasoning; encoding-tree updating |
| 算 | **Suan**; Computing / Calculating; a strategy of logical reasoning |
| 谋和算 | Both are strategies / intelligent strategies |
| 智 | Strategically designing |
| 能 | Efficiently acting |
| 智能 | No one exact English equivalent. Temporarily use **Intelligence** where necessary; use **recognition and agency** together where that distinction is important. Chinese intelligence is the unity of strategic design and effective action, and requires action. |
| 机器智能 | **machine intelligence** (preferred emphasis over generic AI) |
| 博弈 | Use **Contest** and **Strategic interaction**; use **war** only in the Sun Tzu / Art of War context |
| 双脑（左右半脑）体系结构 | MouSuan dual-brain (left/right-brain) architecture |
| 层谱抽象 | hierarchical abstraction / hierarchical abstracting, depending on grammar |
| 编码树 | encoding tree |
| 解码策略 / 生成策略 | decoding strategy / generating strategy |
| 解码信息 / 生成信息 | decoding information / generating information |

Wiki additions requested:

- 信息的模型 — model of information
- 观察学习的信息模型 — information model of learning from observing
- 自我意识的信息模型 — information model of awareness
- 谋算博弈模型 — model of MouSuan confrontation
- 决策的信息模型 — information model of decision
- 系统协同行动模型
- 系统验证模型
- 孙子模型 — Sun Tzu model

Use the supplied 2024 book for details where appropriate. Preserve the existing Strategic Intelligence theory items:

- 观察学习的信息理论
- 自我意识的信息理论
- 谋算博弈理论

### Crucial correction: mathematical principles of information

Do **not** say that information mathematics takes “hierarchical abstraction as its general method” (`以层谱抽象为总方法`). The approved formulation is:

- 信息的数学原理以**层谱抽象策略和局部逻辑推理为研究对象**。
- It is analogous to calculus studying the divide-and-conquer strategy.
- Mathematics is an object in the information world and may be defined through hierarchical abstraction.
- Information mathematics is on a different abstraction hierarchy from classical mathematics and computer-science mathematics.

## 4. Approved information architecture/content direction

### Pillar 2

- Rename `具身智能` to **信息原理的具身智能**.
- Remove generic future-facing filler such as: `应用总结表可继续扩展为论文、代码、数据集、演示与工程项目`.

### Pillar 4 — three submodules

1. **有原理、可解释机器智能图书馆** (not merely “机器智能图书馆”)
2. **机器智能年鉴 / 年刊** — *Annals of Machine Intelligence*: significant research results with scientific principles; preparation for a future journal
3. **机器智能实验室** — promotes principled, explainable machine-intelligence science and technology

### Pillar 5 — application/industrialisation direction

- 名称：**谋算机器智能** / **MouSuan Machine Intelligence** / **MouSuan MI**
- Include: 行业、产业智能化；智能制造；谋算机；谋算机器人；and practical deployments.

### About Us

- Place About Us at the very bottom.
- Order people as professors first, then PhD students.
- Mentioned team members include 李昂生、曾祥华、卫一帆、苏丁力、潘祎诚、许可. Verify exact role, Chinese/English names, links, and biographies in source before changing them.
- Feedback email: `1015011749@qq.com`.
- User supplied new portraits for Dingli Su and Yifan Wei; ensure centred cropping.

### Books

- Consolidate 2–3 purchase links on `/books/`; avoid repeating the same book/paper links throughout pages.
- The published AI-principles books should have purchase links, not copyright PDFs.
- `人工智能原理：从计算到谋算的模型、原理与方法` author line must be **李昂生 等 著**; its cover represents multiple contributors.
- The Sun Tzu book can be shown as requested. Preserve copyright restrictions.

## 5. Design choices and known defects

Visual direction: Google DeepMind-like, Beihang/starry-blue (`星空蓝`), dark cosmic visual language. Avoid stark white surfaces with arbitrary colour blocks.

Selected identity:

- Use the **A** logo concept, expressing **编码树 / ENCODING TREE**.
- Replace the old four-cube logo in the header and also install it as the browser-tab favicon/app icon.

Open UI issues to verify and fix:

- The `BOOKS` label overlaps the book-card title.
- Large Chinese titles sometimes leave a single character on a second line, e.g. `从信息世界，到机器智能科学` and `让原理进入学习、决策与机器`. Use responsive sizing/line breaking; no orphaned final character.
- At medium/narrow desktop widths, the hero image drops far below the copy. Adjust breakpoints/grid/min widths.
- Safari arrows must be an SVG/CSS icon, never emoji; the whole card and arrow must be clickable.
- Check the earlier “Explore” anchor bug: navigation must not lock the page or prevent scrolling.
- Large hero English typography is too huge/readability-poor; adjust responsive scale and line length.
- Remove periods from all large headings.
- Keep Chinese names in the Chinese page.

## 6. i18n/functional test requirements

Known breakages:

- Main-page EN switch has previously produced a white screen.
- Wiki EN may load correctly, but its return-to-main link sends users to Chinese rather than English.
- Local testing from `file://` produced false/unclear failures; test through HTTP.

For every changed page, verify:

1. Chinese page loads.
2. EN control loads the English counterpart with no JS errors/white screen.
3. Return/home links preserve selected language.
4. Cards, arrows, buttons, and accessibility keyboard navigation work.
5. Viewports: phone (375px), narrow desktop (~900px), 1440px, and wide desktop.

## 7. Previous content requests that remain relevant

- Research focus includes: information-science-principled neural/deep learning, embodied intelligence, large models, world models; self-awareness machines; Sun Tzu model/world model; MouSuan dual-brain machines; MouSuan robots.
- `孙子模型` is a principled, explainable model for strategic design and effective action, with civilian and military versions mentioned by the user.
- Avoid wording that identifies named individuals on network-security, bioinformatics, or structured-AI application pages when the user asked for representative works instead.
- Add primary links thoughtfully (homepage / DBLP / GitHub / paper) only when verified. Do not invent links.
- Every major claim should eventually have a nearby citation/source.

## 8. Proposed work order for the next chat

1. Confirm repository status, locate the actual audit assets, and repair the `audit-redesign` 404.
2. Add every new handwritten redesign photo as an individual audit tab with conservative transcription and a confirmation area.
3. Let the user review/confirm the hierarchy and ambiguous handwriting.
4. Implement the agreed architecture, not a guessed version.
5. Apply the favicon/logo and responsive fixes.
6. Run language, link, viewport, and remote deployment checks.
7. Report exact before/after text for terminology changes.

## 9. Suggested prompt for a new Codex chat

> Continue the MouSuan website work. First read `/Users/suu/Documents/codexcli/information-intelligence-site/HANDOFF.md`. Do not redesign the live site yet. Repair and complete the new handwritten redesign audit page, then show me the audit URL so I can confirm the hierarchy page by page.
