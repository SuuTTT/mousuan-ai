import type { Metadata } from "next";
import "./globals.css";
import "./book-title-fix.css";

export const metadata: Metadata = {
  title: "Structural Information & Artificial Intelligence | 结构信息与人工智能",
  description: "A bilingual research hub for structural information, MouSuan Strategy (MSI), and the Sun Tzu model.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Structural Information & Artificial Intelligence | 结构信息与人工智能",
    description: "Principles · Learning · Strategy",
    images: [{ url: "/og-frontier-research.png", width: 1774, height: 887, alt: "Structural Information and Artificial Intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "Structural Information & Artificial Intelligence", images: ["/og-frontier-research.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
