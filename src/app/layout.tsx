import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Share_Tech_Mono } from "next/font/google";
import { Doto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Deep Tech Fund Advisors",
  description: "DTFA backs visionary, technical leaders turned founders solving the world's most complex, high-impact problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shareTechMono.variable} ${geistSans.className} ${geistMono.className} antialiased`}
      >
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
