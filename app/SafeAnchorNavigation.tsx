"use client";

import { useEffect } from "react";
import { resolveAnchorNavigation } from "./anchor-navigation";

const pendingAnchorKey = "mousuan-pending-anchor";

function releaseScrollLock() {
  for (const element of [document.documentElement, document.body]) {
    if (element.style.overflow === "hidden") element.style.removeProperty("overflow");
    if (element.style.position === "fixed") element.style.removeProperty("position");
    if (element.style.height === "100%") element.style.removeProperty("height");
  }
}

function scrollToAnchor(targetId: string) {
  releaseScrollLock();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({ behavior, block: "start" });
    return;
  }

  if (targetId === "top") window.scrollTo({ top: 0, behavior });
}

function scrollAfterRender(targetId: string) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => scrollToAnchor(targetId));
  });
}

function decodeHash(hash: string) {
  try {
    return decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return "";
  }
}

export default function SafeAnchorNavigation() {
  useEffect(() => {
    const initialTarget = decodeHash(window.location.hash);
    const pendingTarget = window.sessionStorage.getItem(pendingAnchorKey);

    if (pendingTarget) window.sessionStorage.removeItem(pendingAnchorKey);
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const targetId = pendingTarget || initialTarget;
    if (targetId) scrollAfterRender(targetId);
    else releaseScrollLock();

    function handleAnchorClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const clicked = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!clicked || clicked.target === "_blank" || clicked.hasAttribute("download")) return;

      const navigation = resolveAnchorNavigation(window.location.href, clicked.getAttribute("href") ?? "");
      if (navigation.kind === "ignore") return;

      event.preventDefault();
      if (navigation.kind === "same-page") {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
        scrollToAnchor(navigation.targetId);
        return;
      }

      window.sessionStorage.setItem(pendingAnchorKey, navigation.targetId);
      window.location.assign(navigation.destination);
    }

    document.addEventListener("click", handleAnchorClick, true);
    return () => document.removeEventListener("click", handleAnchorClick, true);
  }, []);

  return null;
}
