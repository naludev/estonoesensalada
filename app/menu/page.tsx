import { JSX } from "react";
import { Metadata } from "next";
import { MenuPageContent } from "@/features/menu";

export const metadata: Metadata = {
  title: "Menú Plant-Based | Platos con Personalidad",
  description: "Explorá nuestro menú 100% plantas. Chorizos, milanesas de seitán y combos potentes. Sin ensalada, solo sabor real.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menú Plant-Based | Esto No Es Ensalada",
    description: "Platos veganos con personalidad y sabor intenso. Pedí tus viandas ahora.",
    url: "/menu",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Esto No Es Ensalada - Menú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menú Plant-Based | Esto No Es Ensalada",
    description: "Platos veganos con personalidad y sabor intenso.",
    images: ["/logo.png"],
  },
};

/**
 * Menu page component
 * @returns {JSX.Element}
 */
export default function MenuPage(): JSX.Element {
  return <MenuPageContent />;

}