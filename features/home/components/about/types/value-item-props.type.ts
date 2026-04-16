import { LucideIcon } from "lucide-react";
import { ValueColor } from "../constants";
/**
 * Value item
 * @type {import('lucide-react').LucideIcon}
 * @property {import('lucide-react').LucideIcon} icon
 * @property {string} title
 * @property {string} description
 * @property {ValueColor} color
 */
export interface ValueItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: ValueColor;
}