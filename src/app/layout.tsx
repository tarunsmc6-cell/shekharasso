import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shekharassob.vercel.app"),
  title: {
    default: "Shekhar & Associates — Chartered Accountancy, US CPA, Corporate Law",
    template: "%s · Shekhar & Associates",
  },
  description:
    "A boutique practice in chartered accountancy, US CPA services, and corporate law. Senior-led counsel for founders, boards, and family offices.",
  openGraph: {
    title: "Shekhar & Associates",
    description:
      "Boutique advisory: chartered accountancy, US CPA, and corporate law.",
    type: "website",
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-brand-cream text-brand-ink font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-brand-cream"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
