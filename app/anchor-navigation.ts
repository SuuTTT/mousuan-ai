export type AnchorNavigation =
  | { kind: "ignore" }
  | { kind: "same-page"; targetId: string }
  | { kind: "cross-page"; targetId: string; destination: string };

const documentExtension = /\.(?:pdf|docx?|xlsx?|pptx?|zip|epub)$/i;

export function resolveAnchorNavigation(currentHref: string, rawHref: string): AnchorNavigation {
  if (!rawHref.includes("#")) return { kind: "ignore" };

  let current: URL;
  let destination: URL;
  try {
    current = new URL(currentHref);
    destination = new URL(rawHref, current);
  } catch {
    return { kind: "ignore" };
  }

  if (destination.origin !== current.origin || !destination.hash || documentExtension.test(destination.pathname)) {
    return { kind: "ignore" };
  }

  let targetId: string;
  try {
    targetId = decodeURIComponent(destination.hash.slice(1));
  } catch {
    return { kind: "ignore" };
  }
  if (!targetId) return { kind: "ignore" };

  if (destination.pathname === current.pathname && destination.search === current.search) {
    return { kind: "same-page", targetId };
  }

  return {
    kind: "cross-page",
    targetId,
    destination: `${destination.pathname}${destination.search}`,
  };
}
