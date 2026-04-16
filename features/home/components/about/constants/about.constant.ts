import { Leaf, Heart, Sparkles } from "lucide-react";
import { ValueItemProps } from "../types";

/**
 * Values
 * @type {readonly ValueItem[]}
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} title
 * @property {string} description
 * @property {ValueColor} color
 */
export const VALUES: readonly ValueItemProps[] = [
  {
    icon: Leaf,
    title: "100% Plant-Based",
    description: "Sin ingredientes de origen animal. Punto.",
    color: "green",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada plato preparado como si fuera para nuestra familia.",
    color: "pink",
  },
  {
    icon: Sparkles,
    title: "Sabor Real",
    description: "Nada de comida aburrida. Acá el sabor es protagonista.",
    color: "green",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly",
    description: "Delivery en bici cuando podemos.",
    color: "pink",
  },
] as const;

/**
 * Color styles
 * @type {Record<ValueColor, import('../types').ValueColorStyle>}
 * @property {string} bg
 * @property {string} shadow
 * @property {string} halftone
 */
export const COLOR_STYLES = {
  green: {
    bg: "bg-[#53f921]",
    shadow: "comic-shadow-green",
    halftone: "bg-[#53f921]",
  },
  pink: {
    bg: "bg-[#f633cc]",
    shadow: "comic-shadow-pink",
    halftone: "bg-[#f633cc]",
  },
} as const;

/**
 * Section config
 * @type {import('../types').AboutSectionProps}
 * @property {string} id
 * @property {string} badgeText
 * @property {object} title
 * @property {string} title.prefix
 * @property {string} title.highlighted
 * @property {string} title.suffix
 */
export const SECTION_CONFIG = {
  id: "nosotros",
  badgeText: "Nosotros",
  title: {
    prefix: "No somos un emprendimiento",
    highlighted: "vegano más",
    suffix: "",
  },
} as const;