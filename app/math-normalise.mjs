const subscriptDigits = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
};

function normaliseTerminalIndex(token, variable, offset, source) {
  const nearbyPrefix = source.slice(Math.max(0, offset - 160), offset);
  const priorIndexedVariable = new RegExp(`(?:^|[^A-Za-z])${variable}[₀-₉](?:[^A-Za-z]|$)`);
  const followingText = source.slice(offset + token.length);
  const isMatrixDimension = /^[A-Z]$/.test(variable) && /^\s*[×x]\s*n\b/.test(followingText);

  return priorIndexedVariable.test(nearbyPrefix) || isMatrixDimension ? `${variable}ₙ` : token;
}

export function normaliseAcademicOCR(text) {
  return text
    .replace(/\b([A-Za-z])([0-9]+)\b/g, (_, variable, digits) => variable + [...digits].map((digit) => subscriptDigits[digit]).join(""))
    .replace(/\b([A-Za-z])n\b/g, normaliseTerminalIndex)
    .replace(/\s*·\s*·\s*·\s*/g, " … ")
    .replace(/log\s*2\b/g, "log₂")
    .replace(/\s+([)\]}])/g, "$1");
}
