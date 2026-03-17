import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import MagneticHover from "./components/magnetic-hover";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hervé M. Ngenzi | Full-Stack Web Developer",
    template: "%s | Hervé M. Ngenzi",
  },
  description:
    "Full-stack web developer focused on scalable backend systems, robust APIs, and clean, maintainable software.",
  keywords: [
    "Full-Stack Developer",
    "Backend Developer",
    "Web Developer",
    "API Development",
    "NestJS",
    "Laravel",
    "Ruby on Rails",
    "PostgreSQL",
    "MongoDB",
    "Kigali",
  ],
  authors: [{ name: "Hervé M. Ngenzi", url: siteUrl }],
  creator: "Hervé M. Ngenzi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hervé M. Ngenzi | Full-Stack Web Developer",
    description:
      "Full-stack web developer focused on scalable backend systems, robust APIs, and clean, maintainable software.",
    siteName: "Hervé M. Ngenzi",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hervé M. Ngenzi | Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hervé M. Ngenzi | Full-Stack Web Developer",
    description:
      "Full-stack web developer focused on scalable backend systems, robust APIs, and clean, maintainable software.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/path21.png", sizes: "32x32", type: "image/png" },
      { url: "/path21.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#030304" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hervé M. Ngenzi",
    jobTitle: "Full-Stack Web Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/muhenge",
      "https://linkedin.com/in/mugungaherve",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "Rwanda",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="">{children}</main>
          <MagneticHover />
        </ThemeProvider>
      </body>
    </html>
  );
}
