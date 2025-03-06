import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngenzi | portfolio",
  description: "portfolio website",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {/* Add padding to main to prevent content overlap */}
        <main className="pt-20 pb-16 sm:pb-0">{children}</main>
      </ThemeProvider>
      </body>
      </html>
  );
}