#!/usr/bin/env python3
"""Build the searchable academic-statement index from pdftotext output."""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path


ENTRY_PREFIX_RE = re.compile(
    r"^\s*(定义|定理|命题|引理|推论|公理|定律)\s*"
    r"([0-9]+(?:\.[0-9]+)*)\s*[.．]?\s*[（(](.*)$"
)
STOP_RE = re.compile(r"^\s*(证明|证毕)\s*[:：]")
SECTION_RE = re.compile(r"^\s*[0-9]+\.[0-9]+(?:\.[0-9]+)?\s+\S")
PAGE_NUMBER_RE = re.compile(r"·\s*([0-9]+)\s*·")

FORMULA_CONTENT_OVERRIDES = {
    "ai-science-定义-4.3": "假设 p = {p₁, p₂, …, pₙ} 是一个概率分布，X 是服从分布 p 的随机变量。定义嵌入在随机变量 X 中的不确定性的量为 H(X) = −∑ⁿᵢ₌₁ pᵢ log₂ pᵢ，称为随机变量 X 的熵。",
    "ai-science-定义-4.4": "给定一个联合概率分布 p(x, y)，假设 X 和 Y 分别是两个随机变量，使得 (X, Y) 服从联合概率分布 p(x, y)。定义 X 和 Y 的互信息为 I(X; Y) = ∑ₓ ∑ᵧ p(x, y) log₂ (p(x, y) / (p(x)p(y)))。",
    "ai-science-定义-5.22": "给定一个对象 x，该对象的一个抽象就是一个策略，作用于 x，提取对象 x 的一个数学属性 f，使得有很多对象 y₁, y₂, …, yₙ 等都具有属性 f。",
}


@dataclass(frozen=True)
class Book:
    key: str
    title: str
    text_path: Path
    href: str


def clean_line(line: str) -> str:
    line = line.replace("\u0000", "").strip()
    if not line:
        return ""
    if re.match(r"^第\s*[0-9IVXivx]+\s*章", line):
        return ""
    if "人工智能科学——智能的数学原理" in line and "定义" not in line and "定理" not in line:
        return ""
    return re.sub(r"\s+", " ", line)


def normalise_text(lines: list[str], limit: int = 1100) -> str:
    text = " ".join(line for line in lines if line)
    text = re.sub(r"(?<=[\u3400-\u9fff，。；：！？、）])\s+(?=[\u3400-\u9fff（])", "", text)
    text = re.sub(r"\s+([，。；：！？、）])", r"\1", text)
    text = re.sub(r"([（])\s+", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > limit:
        text = text[:limit].rstrip("，；：、 ") + "……"
    return text


def page_number(page: str) -> str | None:
    for line in page.splitlines()[:8]:
        match = PAGE_NUMBER_RE.search(line)
        if match:
            return match.group(1)
    return None


def parse_heading(rows: list[tuple[int, str]], index: int) -> tuple[str, str, str, str, int] | None:
    match = ENTRY_PREFIX_RE.match(rows[index][1])
    if not match:
        return None
    kind, number, rest = match.groups()
    depth = 1
    title_chars: list[str] = []
    consumed = 0
    body = ""
    while index + consumed < len(rows) and consumed < 4:
        fragment = rest if consumed == 0 else rows[index + consumed][1].strip()
        for char_index, char in enumerate(fragment):
            if char in "（(":
                depth += 1
            elif char in "）)":
                depth -= 1
                if depth == 0:
                    body = fragment[char_index + 1 :].strip()
                    return kind, number, normalise_text(["".join(title_chars)], 180), body, consumed
            title_chars.append(char)
        title_chars.append(" ")
        consumed += 1
    return None


def parse_book(book: Book) -> list[dict[str, object]]:
    pages = book.text_path.read_text(encoding="utf-8", errors="replace").split("\f")
    rows: list[tuple[int, str]] = []
    printed_pages: dict[int, str | None] = {}
    for pdf_page, page in enumerate(pages, start=1):
        printed_pages[pdf_page] = page_number(page)
        rows.extend((pdf_page, line) for line in page.splitlines())

    entries: list[dict[str, object]] = []
    for index, (pdf_page, line) in enumerate(rows):
        heading = parse_heading(rows, index)
        if not heading:
            continue
        kind, number, title, first, heading_continuation = heading
        body_lines = [clean_line(first)] if first.strip() else []
        for cursor in range(index + heading_continuation + 1, len(rows)):
            next_page, candidate = rows[cursor]
            if parse_heading(rows, cursor):
                break
            if STOP_RE.match(candidate):
                break
            if SECTION_RE.match(candidate) and normalise_text(body_lines):
                break
            cleaned = clean_line(candidate)
            if not cleaned and body_lines:
                last = body_lines[-1].rstrip()
                if last.endswith(("。", "；", "）", ")")) and not last.endswith(("如下：", "定义为：")):
                    next_text = ""
                    for lookahead in range(cursor + 1, min(cursor + 5, len(rows))):
                        next_text = clean_line(rows[lookahead][1])
                        if next_text:
                            break
                    if not re.match(r"^[（(][0-9]+[）)]", next_text):
                        break
            if cleaned:
                body_lines.append(cleaned)
            if len(normalise_text(body_lines, 5000)) >= 1100:
                break
        content = normalise_text(body_lines)
        if not content:
            content = "原书条目；正文内容待复核。"
        source_href = book.href
        if book.key == "sun-tzu":
            source_href = f"/sun-tzu-ai-principles.pdf#page={pdf_page}"
        entries.append(
            {
                "id": f"{book.key}-{kind}-{number}",
                "book": book.key,
                "bookTitle": book.title,
                "type": kind,
                "number": number,
                "title": title,
                "content": content,
                "printedPage": printed_pages.get(pdf_page),
                "pdfPage": pdf_page,
                "href": source_href,
            }
        )

    # Keep the first occurrence if a source repeats a formally numbered heading.
    unique: dict[str, dict[str, object]] = {}
    for entry in entries:
        unique.setdefault(str(entry["id"]), entry)
    for entry in unique.values():
        override = FORMULA_CONTENT_OVERRIDES.get(str(entry["id"]))
        if override:
            entry["content"] = override
    return list(unique.values())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ai-science", type=Path, required=True)
    parser.add_argument("--sun-tzu", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    books = [
        Book(
            "ai-science",
            "《人工智能科学——智能的数学原理》",
            args.ai_science,
            "/books#artificial-intelligence-science",
        ),
        Book(
            "sun-tzu",
            "《孙子兵法的人工智能原理》",
            args.sun_tzu,
            "/sun-tzu-ai-principles.pdf",
        ),
    ]
    entries = [entry for book in books for entry in parse_book(book)]
    entries.extend(
        [
            {
                "id": "ai-science-原理-4.6.2",
                "book": "ai-science",
                "bookTitle": "《人工智能科学——智能的数学原理》",
                "type": "原理",
                "number": "4.6.2",
                "title": "信息科学是什么？",
                "content": "信息科学研究现实世界的确定性、不确定性，以及确定性到不确定性、不确定性到确定性转化的规律与作用。实现两类转化的动作或操作称为策略；从确定性到不确定性的是生成策略，从不确定性到确定性的是解码策略，两类信息均可度量。",
                "printedPage": "80",
                "pdfPage": 114,
                "href": "/books#artificial-intelligence-science",
            },
            {
                "id": "ai-science-原理-4.6.3",
                "book": "ai-science",
                "bookTitle": "《人工智能科学——智能的数学原理》",
                "type": "原理",
                "number": "4.6.3",
                "title": "信息的数学原理是什么？",
                "content": "信息世界的科学范式或总方法论是层谱抽象；层谱抽象的数学原理是信息演算，即离散系统的微积分。编码树是层谱抽象的数学模型、数据结构和全局无损编码。层谱抽象同时是信息系统的解码策略。",
                "printedPage": "80–81",
                "pdfPage": 114,
                "href": "/books#artificial-intelligence-science",
            },
            {
                "id": "sun-tzu-定律-I",
                "book": "sun-tzu",
                "bookTitle": "《孙子兵法的人工智能原理》",
                "type": "定律",
                "number": "I",
                "title": "孙子定律 I：利益",
                "content": "战争定义了一个对象或者自我意识主体的利益；每一个对象、每一个自我意识主体在博弈中都追求自己的利益。",
                "printedPage": "567",
                "pdfPage": 567,
                "href": "/sun-tzu-ai-principles.pdf#page=567",
            },
            {
                "id": "sun-tzu-定律-II",
                "book": "sun-tzu",
                "bookTitle": "《孙子兵法的人工智能原理》",
                "type": "定律",
                "number": "II",
                "title": "孙子定律 II：物质与信息",
                "content": "决定战争结局的本原要素是物质和信息，物质和信息结合决定战争的胜败；战争是有规律的。对现实世界，世界 = 物质 + 信息，其中“+”表示结合或融合。",
                "printedPage": "577",
                "pdfPage": 577,
                "href": "/sun-tzu-ai-principles.pdf#page=577",
            },
            {
                "id": "sun-tzu-定律-III",
                "book": "sun-tzu",
                "bookTitle": "《孙子兵法的人工智能原理》",
                "type": "定律",
                "number": "III",
                "title": "孙子定律 III：战斗力生成原理",
                "content": "运动的物质生成能量，能量释放的同时生成力，力作用于敌人消灭敌人；E = 1/2·m·v²，F = ΔE/Δt，力的极限为 dE/dt。",
                "printedPage": "578",
                "pdfPage": 578,
                "href": "/sun-tzu-ai-principles.pdf#page=578",
            },
            {
                "id": "sun-tzu-定律-IV",
                "book": "sun-tzu",
                "bookTitle": "《孙子兵法的人工智能原理》",
                "type": "定律",
                "number": "IV",
                "title": "孙子定律 IV：战争能力度量",
                "content": "物质是战争的基础；智能就是信息；决定战争结局的条件是物质和智能。战争能力 = 物质 × 智能² = 物质 × 信息²。",
                "printedPage": "583",
                "pdfPage": 583,
                "href": "/sun-tzu-ai-principles.pdf#page=583",
            },
            {
                "id": "sun-tzu-定律-V",
                "book": "sun-tzu",
                "bookTitle": "《孙子兵法的人工智能原理》",
                "type": "定律",
                "number": "V",
                "title": "孙子定律 V：战争的不可逆性定律",
                "content": "战争的失败是不可逆的：亡国不可以复存，死者不可以复生。",
                "printedPage": "596",
                "pdfPage": 596,
                "href": "/sun-tzu-ai-principles.pdf#page=596",
            },
        ]
    )
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(entries, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    counts: dict[str, int] = {}
    for entry in entries:
        key = f'{entry["book"]}:{entry["type"]}'
        counts[key] = counts.get(key, 0) + 1
    print(json.dumps({"total": len(entries), "counts": counts}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
