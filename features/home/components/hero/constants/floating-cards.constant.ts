import { FloatingCardProps } from "../types";
/**
 * Floating cards
 * @type {readonly FloatingCardProps[]}
 * @property {"top-right" | "bottom-left"} position
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} value
 * @property {string} label
 * @property {string} subLabel
 * @property {"green" | "pink"} color
 */
export const FLOATING_CARDS: readonly FloatingCardProps[] = [
  {
    position: "top-right",
    label: "4.9",
    subLabel: "+50 reviews",
    color: "pink",
    value: "4.9",
  },
  {
    position: "bottom-left",
    label: "+100",
    subLabel: "pedidos este mes",
    color: "green",
    value: "+100",
  },
] as const;