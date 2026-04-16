import { LucideIcon } from "lucide-react";
import { ValueColor } from "../constants";
/**
 * Floating card props
 * @type {object}
 * @property {"top-right" | "bottom-left"} position
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} value
 * @property {string} label
 * @property {string} subLabel
 * @property {"green" | "pink"} color
 */
export interface FloatingCardProps {
  position: "top-right" | "bottom-left";
  icon?: LucideIcon;
  value?: string;
  label: string;
  subLabel?: string;
  color: ValueColor;
  className?: string;
}