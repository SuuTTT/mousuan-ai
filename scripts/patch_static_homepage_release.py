from pathlib import Path
import shutil
import sys


source = Path(sys.argv[1]).resolve()
target = Path(sys.argv[2]).resolve()
if target.exists():
    raise SystemExit(f"target already exists: {target}")
shutil.copytree(source, target)


def reorder_homepage(text: str, *, html: bool) -> str:
    if html:
        start_marker = '<div class="directions-head">'
        major_marker = '<div class="major-plans">'
        team_marker = '<div class="team-heading">'
    else:
        start_marker = '(0,i.jsx)(`div`,{className:`directions-head`'
        major_marker = '(0,i.jsxs)(`div`,{className:`major-plans`'
        team_marker = '(0,i.jsx)(`div`,{className:`team-heading`'
    start = text.find(start_marker)
    major = text.find(major_marker)
    team = text.find(team_marker, max(start, major))
    if min(start, major, team) < 0:
        raise SystemExit(f"homepage markers missing (html={html})")
    if major < start:
        return text
    reordered = text[:start] + text[major:team] + text[start:major] + text[team:]
    return reordered


def relocate_english_plans(text: str) -> str:
    english_plans = "plansKicker:`TWO MAJOR PROGRAMMES · ORIGINAL INNOVATION`"
    start = text.find(english_plans)
    english_object = text.find("en:{")
    if start < 0 or english_object < 0:
        raise SystemExit("English plans or language object missing")
    if start > english_object:
        return text
    end = text.find("people:[[", start)
    if end < 0:
        raise SystemExit("Chinese people marker missing after misplaced English plans")
    block = text[start:end]
    text = text[:start] + text[end:]
    english_object = text.find("en:{")
    english_people = text.find("people:[[", english_object)
    if english_people < 0:
        raise SystemExit("English people marker missing")
    return text[:english_people] + block + text[english_people:]


index = target / "index.html"
if not index.exists() and (target / "site").is_dir():
    index = target / "site" / "index.html"
site_root = index.parent
index_text = index.read_text()
index_text = reorder_homepage(index_text, html=True)
index_text = index_text.replace("两项重大计划 · 原始创新研究", "两大计划 · 原始创新")
index_text = index_text.replace("我们的研究方向", "五大研究方向")
index.write_text(index_text)

for name in ("page-C4CoRdmv.js", "page-DLp5E-7P.js"):
    asset = site_root / "assets" / name
    if not asset.exists():
        continue
    asset_text = asset.read_text()
    asset_text = reorder_homepage(asset_text, html=False)
    asset_text = relocate_english_plans(asset_text)
    asset_text = asset_text.replace("两项重大计划 · 原始创新研究", "两大计划 · 原始创新")
    asset_text = asset_text.replace("我们的研究方向", "五大研究方向")
    asset_text = asset_text.replace("OUR RESEARCH DIRECTIONS", "FIVE RESEARCH DIRECTIONS")
    asset.write_text(asset_text)

print(target)
