import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
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
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
