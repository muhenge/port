import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

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
    icons: {
        icon: [
            { url: "/path21.png", sizes: "32x32", type: "image/png" }, // 32x32 favicon
            { url: "/path21.png", sizes: "16x16", type: "image/png" }, // 16x16 favicon
        ],
    },
};
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Header />
        {/* Add padding to main to prevent content overlap */}
        <main className="">{children}</main>

      </body>
      </html>
  );
}
