import type { Metadata } from "next";
import "./globals.css";
import "./book-title-fix.css";
import "./section-title-fix.css";
import "./hero-responsive-fix.css";
import "./brand-logo.css";
import "./theme-citation-fix.css";
import "./site-filing.css";
import SafeAnchorNavigation from "./SafeAnchorNavigation";
import SiteFiling from "./SiteFiling";

export const metadata: Metadata = {
  metadataBase: new URL("https://mousuan.net"),
  title: {
    default: "机器智能原理：信息模型，机器原理，智能工程 | Principles of Machine Intelligence: Information model, Principles of Intelligent Machines, Intelligence Engineering",
    template: "%s | 机器智能原理",
  },
  description: "机器智能原理：信息模型、机器原理与智能工程。Principles of Machine Intelligence: Information model, Principles of Intelligent Machines, Intelligence Engineering.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "机器智能原理：信息模型，机器原理，智能工程 | Principles of Machine Intelligence",
    description: "Information model · Principles of Intelligent Machines · Intelligence Engineering",
    images: [{ url: "/og-frontier-research.png", width: 1774, height: 887, alt: "Principles of Machine Intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "Principles of Machine Intelligence", images: ["/og-frontier-research.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><SafeAnchorNavigation />{children}<SiteFiling /></body></html>;
}
