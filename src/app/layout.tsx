import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shekhar & Associates Consulting Firm",
  description:
    "Shekhar & Associates Consulting Firm — strategic advisory.",
  metadataBase: new URL("https://shekhar-associates.vercel.app"),
  openGraph: {
    title: "Shekhar & Associates Consulting Firm",
    description: "Strategic advisory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-brand-cream text-brand-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
