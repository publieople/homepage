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

export const metadata: Metadata = {
  title: "人民公仆 | Publieople",
  description:
    "大学生 · 内容创作者 · Vibe Coder。通识分享企划创始人，电脑高手速成班作者。",
  openGraph: {
    title: "人民公仆 | Publieople",
    description:
      "大学生 · 内容创作者 · Vibe Coder。通识分享企划创始人，电脑高手速成班作者。",
    type: "website",
    locale: "zh_CN",
  },
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
        <ThemeProvider>
          <ScrollProgress className="top-[65px]" />
          <NoiseOverlay opacity={0.018} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}