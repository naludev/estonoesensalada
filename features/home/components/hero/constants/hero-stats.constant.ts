import { Leaf, Clock, Star } from "lucide-react";
import { StatItem } from "../types";
/**
 * Hero stats
 * @type {readonly StatItem[]}
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} label
 * @property {string} value
 * @property {string} iconColor
 * @property {boolean} showRating
import { StatItem } from "../types";
 */
export const HERO_STATS: readonly StatItem[] = [
  {
    icon: Leaf,
    label: "100% Vegano",
    iconColor: "text-[#53f921]",
  },
  {
    icon: Clock,
    label: "30 min delivery",
    iconColor: "text-[#f633cc]",
  },
  {
    icon: Star,
    label: "4.9 rating",
    iconColor: "text-[#53f921]",
    showRating: true,
  },
] as const;
