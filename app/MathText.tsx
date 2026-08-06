import type { ReactNode } from "react";

const canonicalFormulae = [
  "Cᵀ(A) = H¹(A) − Hᵀ(A) = Dᵀ(A)",
  "C(A) = H¹(A) − H(A) = D(A)",
  "Cᵏ(A) = H¹(A) − Hᵏ(A) = Dᵏ(A)",
  "C𝒯(A) = H¹(A) − H𝒯(A) = D𝒯(A)",
  "Dᵀ(A) = H¹(A) − Hᵀ(A)",
  "Dᵀ(A) = H₁(A) − Hᵀ(A)",
  "D(A) = H¹(A) − H(A)",
  "D(A) = H₁(A) − H(A)",
  "H(A) = minₜ Hᵀ(A)",
  "H(A) = minₜ Hₜ(A)",
  "H(A) = minᵀ Hᵀ(A)",
  "完备知识 = 物理性质 + 信息性质",
  "战争能力 = 物质 × 信息²",
  "intelligence = information in the narrow sense",
  "Intelligence = Information",
  "Intelligence = MouSuan",
  "智能 =（狭义）信息",
  "智能 = 信息",
  "智能 = 谋算",
  "contest = MouSuan",
  "博弈 = 谋算",
  "确定性 ⇄ 不确定性",
  "k ≥ 2",
] as const;

const escapedFormulae = [...canonicalFormulae]
  .sort((left, right) => right.length - left.length)
  .map((formula) => formula.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

const formulaPattern = new RegExp(`(${escapedFormulae.join("|")})`, "g");
const superscript: Record<string, string> = { "¹": "1", "²": "2", "ᵀ": "T", "ᵏ": "k" };
const subscript: Record<string, string> = { "₁": "1", "ₜ": "t" };

function atom(value: string, key: string): ReactNode {
  if (/^[0-9]+$/.test(value)) return <mn key={key}>{value}</mn>;
  if (/^[A-Za-z]$/.test(value) || value === "𝒯") return <mi key={key}>{value}</mi>;
  if (value === "min") return <mo key={key}>min</mo>;
  return <mtext key={key}>{value}</mtext>;
}

function MathFormula({ expression }: { expression: string }) {
  const nodes: ReactNode[] = [];
  const characters = [...expression];
  let index = 0;

  while (index < characters.length) {
    const current = characters[index];
    if (/\s/.test(current)) {
      nodes.push(<mspace key={`space-${index}`} width=".22em" />);
      index += 1;
      continue;
    }
    if ("=+−-×⇄≥:;,：；，()（）".includes(current)) {
      nodes.push(<mo key={`operator-${index}`}>{current}</mo>);
      index += 1;
      continue;
    }

    let value = current;
    if (/[A-Za-z]/.test(current)) {
      while (index + 1 < characters.length && /[A-Za-z]/.test(characters[index + 1])) value += characters[++index];
    } else if (/[㐀-鿿]/.test(current)) {
      while (index + 1 < characters.length && /[㐀-鿿]/.test(characters[index + 1])) value += characters[++index];
    } else if (/[0-9]/.test(current)) {
      while (index + 1 < characters.length && /[0-9]/.test(characters[index + 1])) value += characters[++index];
    }

    let base = atom(value, `atom-${index}`);
    const next = characters[index + 1];
    if (next && superscript[next]) {
      base = <msup key={`sup-${index}`}>{base}<mn>{superscript[next]}</mn></msup>;
      index += 1;
    } else if (next && subscript[next]) {
      base = <msub key={`sub-${index}`}>{base}<mi>{subscript[next]}</mi></msub>;
      index += 1;
    } else if (next === "𝒯" && /^[HCD]$/.test(value)) {
      base = <msub key={`script-${index}`}>{base}<mi>𝒯</mi></msub>;
      index += 1;
    }
    nodes.push(base);
    index += 1;
  }

  return <span className="math-inline" title={expression}>
    <math aria-label={expression}><mrow>{nodes}</mrow></math>
  </span>;
}

export function MathText({ text }: { text: string }) {
  const parts = text.split(formulaPattern);
  return <>{parts.map((part, index) => canonicalFormulae.includes(part as typeof canonicalFormulae[number])
    ? <MathFormula expression={part} key={`${part}-${index}`} />
    : part)}</>;
}
