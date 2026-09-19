"use client";

type SiteTheme = "light" | "dark";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const current: SiteTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next: SiteTheme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("mousuan-theme", next);
  };

  return <button
    className="site-theme-toggle"
    type="button"
    onClick={toggleTheme}
    aria-label="切换网页明暗模式"
    title="切换网页明暗模式"
  >
    <svg className="site-theme-icon site-theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
    </svg>
    <svg className="site-theme-icon site-theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.2A8.2 8.2 0 0 1 8.8 4a8.2 8.2 0 1 0 11.2 11.2Z" />
    </svg>
  </button>;
}
