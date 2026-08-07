/**
 * @typedef {{ kind: "ignore" } |
 *   { kind: "same-page", targetId: string } |
 *   { kind: "cross-page", targetId: string, destination: string }} AnchorNavigation
 */

const documentExtension = /\.(?:pdf|docx?|xlsx?|pptx?|zip|epub)$/i;

/**
 * @param {string} currentHref
 * @param {string} rawHref
 * @returns {AnchorNavigation}
 */
export function resolveAnchorNavigation(currentHref, rawHref) {
  if (!rawHref.includes("#")) return { kind: "ignore" };

  let current;
  let destination;
  try {
    current = new URL(currentHref);
    destination = new URL(rawHref, current);
  } catch {
    return { kind: "ignore" };
  }

  if (destination.origin !== current.origin || !destination.hash || documentExtension.test(destination.pathname)) {
    return { kind: "ignore" };
  }

  let targetId;
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
