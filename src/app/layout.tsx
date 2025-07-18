import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Noto_Sans_SC, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// 配置思源黑体(中文字体)
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
});

// 配置Inter(英文字体)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | 徐KonXe的网络辐射塔',
    default: '徐KonXe的网络辐射塔 - 探索个体与网络的力量',
  },
  description: "一个关于个人能力产品化、人际网络构建和价值创造的线上实践场。分享我的思考、工具与项目，希望能与同样追求卓越的你，共同成长。",
  keywords: ['前端开发', '人际关系', '网络理论', '个人成长', '技术博客', 'React', 'Next.js'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        notoSansSC.variable, 
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 