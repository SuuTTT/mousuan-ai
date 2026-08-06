import type { ReactNode } from "react";

const canonicalFormulae = [
  "I(X; Y) = ∑ₓ ∑ᵧ p(x, y) log₂ (p(x, y) / (p(x)p(y)))",
  "H(X) = −∑ⁿᵢ₌₁ pᵢ log₂ pᵢ",
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
  "E = 1/2 · m · v²",
  "F = ΔE/Δt",
  "dE/dt",
  "k ≥ 2",
] as const;

const escapedFormulae = [...canonicalFormulae]
  .sort((left, right) => right.length - left.length)
  .map((formula) => formula.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

const formulaPattern = new RegExp(`(${escapedFormulae.join("|")})`, "g");
const superscript: Record<string, string> = { "¹": "1", "²": "2", "³": "3", "ᵀ": "T", "ᵏ": "k", "ⁿ": "n" };
const subscript: Record<string, string> = {
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
  "ₜ": "t", "ₓ": "x", "ᵧ": "y", "ᵢ": "i", "ⱼ": "j", "ₙ": "n",
};

function normaliseAcademicOCR(text: string) {
  const subscriptDigits: Record<string, string> = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
  return text
    .replace(/\b([A-Za-z])([0-9]+)\b/g, (_, variable: string, digits: string) => variable + [...digits].map((digit) => subscriptDigits[digit]).join(""))
    .replace(/\b([A-Za-z])n\b/g, "$1ₙ")
    .replace(/\s*·\s*·\s*·\s*/g, " … ")
    .replace(/log\s*2\b/g, "log₂")
    .replace(/\s+([)\]}])/g, "$1");
}

function atom(value: string, key: string): ReactNode {
  if (/^[0-9]+$/.test(value)) return <mn key={key}>{value}</mn>;
  if (/^[A-Za-zΑ-ω]$/.test(value) || value === "𝒯") return <mi key={key}>{value}</mi>;
  if (["min", "max", "log", "ln", "sin", "cos", "arg"].includes(value)) return <mi key={key} mathvariant="normal">{value}</mi>;
  if (["∑", "∏", "∫", "√"].includes(value)) return <mo key={key}>{value}</mo>;
  return <mtext key={key}>{value}</mtext>;
}

export function MathFormula({ expression }: { expression: string }) {
  if (expression === "I(X; Y) = ∑ₓ ∑ᵧ p(x, y) log₂ (p(x, y) / (p(x)p(y)))") {
    return <span className="math-inline math-display-equation" title={expression}><math aria-label={expression}><mrow>
      <mi>I</mi><mo>(</mo><mi>X</mi><mo>;</mo><mi>Y</mi><mo>)</mo><mo>=</mo>
      <msub><mo>∑</mo><mi>x</mi></msub><msub><mo>∑</mo><mi>y</mi></msub>
      <mi>p</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo>
      <msub><mi mathvariant="normal">log</mi><mn>2</mn></msub>
      <mfrac><mrow><mi>p</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><mrow><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mi>p</mi><mo>(</mo><mi>y</mi><mo>)</mo></mrow></mfrac>
    </mrow></math></span>;
  }
  if (expression === "H(X) = −∑ⁿᵢ₌₁ pᵢ log₂ pᵢ") {
    return <span className="math-inline math-display-equation" title={expression}><math aria-label={expression}><mrow>
      <mi>H</mi><mo>(</mo><mi>X</mi><mo>)</mo><mo>=</mo><mo>−</mo>
      <munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover>
      <msub><mi>p</mi><mi>i</mi></msub><msub><mi mathvariant="normal">log</mi><mn>2</mn></msub><msub><mi>p</mi><mi>i</mi></msub>
    </mrow></math></span>;
  }
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
    if ("=+−-×·/⇄≥≤⩾∈⊂⊆≈≠<>:;,：；，()（）{}[]|…".includes(current)) {
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
  return <AcademicMathText text={text} />;
}

// Keep prose outside MathML. The expression branches deliberately accept only
// mathematical tokens, so an equation followed by a Chinese explanation stops
// at the equation boundary instead of turning the whole sentence into math.
const academicExpressionPattern = /([A-Za-zΑ-ω𝒯][A-Za-z0-9Α-ω𝒯₀-₉ₓᵧᵢⱼₙᵀᵏ¹²]*\s*(?:\([A-Za-z0-9Α-ω𝒯₀-₉ₓᵧᵢⱼₙᵀᵏ¹²\s,;:+−\-×·/.…∑∏∫√|∥∅ℜˆ⟨⟩∗]*\)|\{[A-Za-z0-9Α-ω𝒯₀-₉ₓᵧᵢⱼₙᵀᵏ¹²\s,;:+−\-×·/.…∑∏∫√|∥∅ℜˆ⟨⟩∗]*\})?\s*(?:=|≥|≤|⩾|∈|⊂|⊆|≈|≠|>|<)\s*[A-Za-z0-9Α-ω𝒯₀-₉ₓᵧᵢⱼₙᵀᵏ¹²\s(){}\[\],;:+−\-×·/.…∑∏∫√=≥≤⩾∈⊂⊆≈≠<>|∥∅ℜˆ⟨⟩∗]{1,150}|[A-Za-z][₀-₉](?:\s*[,，]\s*[A-Za-z][₀-₉])+(?:\s*[,，]\s*…\s*[,，]\s*[A-Za-z]ₙ)?|[A-ZpHCDI]\([A-Za-z0-9Α-ω𝒯₀-₉ₓᵧᵢⱼₙᵀᵏ¹²\s,;:+−\-×·/.…∑∏∫√|∥∅ℜˆ⟨⟩∗]{1,55}\)|(?<![A-Za-z])[A-Za-zΑ-ω](?:[₀-₉ₓᵧᵢⱼₙᵀᵏ¹²])?(?![A-Za-z]))/g;

export function AcademicMathText({ text }: { text: string }) {
  const normalised = normaliseAcademicOCR(text);
  const canonicalParts = normalised.split(formulaPattern);
  return <>{canonicalParts.map((part, outerIndex) => {
    if (canonicalFormulae.includes(part as typeof canonicalFormulae[number])) return <MathFormula expression={part} key={`canonical-${outerIndex}`} />;
    const academicParts = part.split(academicExpressionPattern);
    return academicParts.map((academicPart, innerIndex) => innerIndex % 2 === 1
      ? <MathFormula expression={academicPart.trim()} key={`academic-${outerIndex}-${innerIndex}`} />
      : academicPart);
  })}</>;
}
