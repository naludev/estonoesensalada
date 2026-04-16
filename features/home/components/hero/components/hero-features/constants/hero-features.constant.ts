import { Leaf, Clock, Star } from "lucide-react";
/**
 * Hero features
 * @type {readonly import('../types').HeroFeaturesProps[]}
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} text
 * @property {string} color
 * @property {boolean} fill
 */
export const features = [
  { icon: Leaf, text: "100% Vegano", color: "text-[#53f921]" },
  { icon: Clock, text: "30 min delivery", color: "text-[#f633cc]" },
  { icon: Star, text: "4.9 rating", color: "text-[#53f921]", fill: true },
];
