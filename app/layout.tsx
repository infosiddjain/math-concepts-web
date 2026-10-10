import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Calculators & Real-World Math`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "math calculator",
    "scientific calculator",
    "percentage calculator",
    "unit converter",
    "fraction calculator",
    "learn math",
    "math practice questions",
    "real world math",
  ],
  openGraph: {
    title: `${site.name} — Premium Calculators & Real-World Math`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/og/mark-1200.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Premium Calculators & Real-World Math`,
    description: site.description,
    images: ["/og/mark-1200.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f3eb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-900 text-cloud-100">
        <Navbar />
        <main className="flex-1 pt-[81px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
