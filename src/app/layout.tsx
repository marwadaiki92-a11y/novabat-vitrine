
import type { Metadata } from "next";
import "./globals.css";

const siteName = "NovaBât";
const siteDescription =
  "NovaBât vous accompagne dans vos projets de construction, d’architecture et de rénovation, avec une approche exigeante, durable et soignée.";

export const metadata: Metadata = {
  title: {
    default: "NovaBât | Construction, architecture et rénovation",
    template: "%s | NovaBât",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "NovaBât",
    "construction",
    "architecture",
    "rénovation",
    "bâtiment",
    "projets de construction",
    "architecture intérieure",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "NovaBât | Construction, architecture et rénovation",
    description: siteDescription,
    siteName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBât | Construction, architecture et rénovation",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
