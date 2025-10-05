import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-switcher";

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
    <html suppressHydrationWarning lang="en">
      <body className="antialiased font-sans">
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
