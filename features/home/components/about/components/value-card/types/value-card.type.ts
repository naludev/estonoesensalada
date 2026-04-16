import { ValueItemProps } from "@/features/home/components/about/types";
/**
 * Value card props
 * @type {object}
 * @property {ValueItem} value
 * @property {number} index
 * @property {boolean} isVisible
 */
export interface ValueCardProps {
  value: ValueItemProps;
  index: number;
  isVisible?: boolean;
}