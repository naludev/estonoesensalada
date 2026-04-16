import { LucideIcon } from "lucide-react";
/**
 * Stat item
 * @type {object}
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} label
 * @property {string} value
 * @property {string} iconColor
 * @property {boolean} showRating
 */
export interface StatItem {
  icon: LucideIcon;
  label: string;
  value?: string;
  iconColor: string;
  showRating?: boolean;
}
