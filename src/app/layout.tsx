import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ClientShell } from "@/components/layout/client-shell";
import { publicConfig } from "@/lib/config";
import { siteContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(publicConfig.siteUrl),
  title: {
    default: `${siteContent.name}｜社区运维模拟经营游戏`,
    template: `%s｜${siteContent.name}`,
  },
  description: siteContent.description,
  alternates: { canonical: "/" },
  applicationName: siteContent.name,
  keywords: [
    "小区经理",
    "模拟经营游戏",
    "独立游戏",
    "社区运维",
    "Unity",
    "数字孪生",
  ],
  authors: [{ name: "小区经理个人开发者" }],
  creator: "小区经理个人开发者",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: siteContent.name,
    title: `${siteContent.name}｜社区运维模拟经营游戏`,
    description: siteContent.tagline,
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "《小区经理》温暖明亮的中国现代住宅社区插画",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name}｜社区运维模拟经营游戏`,
    description: siteContent.tagline,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f4e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    { "@context":"https://schema.org", "@type":"WebSite", name:siteContent.name, alternateName:siteContent.englishName, url:publicConfig.siteUrl },
    { "@context":"https://schema.org", "@type":"VideoGame", name:siteContent.name, alternateName:siteContent.englishName, description:"轻量社区运营模拟经营游戏", gamePlatform:"Windows", applicationCategory:"Game", inLanguage:"zh-CN", author:{"@type":"Person",name:"《小区经理》独立开发者"} },
    { "@context":"https://schema.org", "@type":"Person", name:"《小区经理》独立开发者", description:"Unity、3D 与数字孪生方向开发者" },
  ];
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SiteHeader />
        <ClientShell>{children}</ClientShell>
        <SiteFooter />
      </body>
    </html>
  );
}
