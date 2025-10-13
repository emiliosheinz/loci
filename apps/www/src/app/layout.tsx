import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono as GeistMono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-switcher";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = GeistMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const title = "Loci";
const description =
  "A simple, frictionless app to capture anything in the moment";

export const metadata: Metadata = {
  title,
  description,
  icons: "/favicon.svg",
  openGraph: {
    title,
    type: "website",
    siteName: title,
    locale: "en-US",
    description: description,
    images: "/og-banner.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title,
    images: "/og-banner.png",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute={["class", "data-theme"]}
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
