import type { Metadata } from "next";
import { Playfair_Display, Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solar Flare AI Agency | The Celestial Authority",
  description:
    "Solar Flare fuses high-fidelity artificial intelligence with master-level strategic wisdom. We don't just build models; we curate digital legacies.",
  openGraph: {
    title: "Solar Flare AI Agency | The Celestial Authority",
    description: "Architects of Intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${manrope.variable} ${notoSerif.variable} bg-background text-on-surface font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
