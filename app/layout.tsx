import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIQUIRE — Don't Just Adopt AI. AIQUIRE It.",
  description:
    "AIQUIRE bridges the gap between what AI promises and what your business actually needs — combining deep business consulting, proven Design Thinking methodology, and hands-on AI expertise.",
  metadataBase: new URL("https://aiquire.siprahub.com"),
  openGraph: {
    title: "AIQUIRE — Don't Just Adopt AI. AIQUIRE It.",
    description:
      "AI adoption consulting powered by Design Thinking. Strategy, implementation, training, and governance for growing businesses.",
    siteName: "AIQUIRE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
