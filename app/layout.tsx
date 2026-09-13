import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Providers from "@/components/providers/Providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERDANT — Zamanın Ötesinde Zarafet",
  description:
    "1887'den bu yana Cenevre'de el işçiliğiyle üretilen lüks saatler. VERDANT koleksiyonunu keşfedin.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
      <body className="bg-onyx-950 font-sans text-ivory">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
