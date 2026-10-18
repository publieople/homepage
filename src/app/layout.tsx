import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/hooks/use-theme";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "AI 工具链 · 智能体应用 · 自动化效率。DeepSeek Harness 插件作者、通识分享企划主理人，记录技术探索与效率实践。";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.for-people.cn"),
  title: "人民公仆 | Publieople",
  description: DESCRIPTION,
  keywords: [
    "人民公仆",
    "Publieople",
    "AI 工具链",
    "智能体",
    "DeepSeek Harness",
    "自动化效率",
    "技术博客",
  ],
  authors: [{ name: "人民公仆 / Publieople", url: "https://www.for-people.cn" }],
  alternates: { canonical: "https://www.for-people.cn/" },
  openGraph: {
    title: "人民公仆 | Publieople",
    description: DESCRIPTION,
    type: "website",
    locale: "zh_CN",
    url: "https://www.for-people.cn/",
    siteName: "人民公仆 / Publieople",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "人民公仆 · Publieople",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "人民公仆 | Publieople",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "冯周杰",
  alternateName: ["人民公仆", "Publieople", "publieople"],
  url: "https://www.for-people.cn/",
  image: "https://www.for-people.cn/avatar.webp",
  jobTitle: "AI 工具链开发与智能体应用 · 自动化效率工程师",
  description: DESCRIPTION,
  email: "mailto:publieople@outlook.com",
  sameAs: [
    "https://github.com/publieople",
    "https://blog.for-people.cn/",
    "https://space.bilibili.com/324858924",
    "https://www.zhihu.com/people/2631792752",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "上海中侨职业技术大学",
  },
  knowsAbout: [
    "AI Agent",
    "DeepSeek Harness",
    "TypeScript",
    "Next.js",
    "自动化效率",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      data-snap="on"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('publieople-theme') || 'linear';
                  document.documentElement.dataset.theme = theme;
                  
                  var mode = localStorage.getItem('publieople-mode');
                  if (!mode) {
                    // Linear is dark-native: default dark, fall back to system pref
                    mode = (theme === 'linear' || window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
                  }
                  document.documentElement.dataset.mode = mode;
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <ThemeProvider>
          <ScrollProgress className="top-[65px]" />
          <NoiseOverlay opacity={0.018} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}