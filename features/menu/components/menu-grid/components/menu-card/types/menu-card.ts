import { MenuItemProps } from "@/features/menu/types";
/**
 * Type for MenuCard component
 * @property {MenuItemProps} item
 * @property {number} index
 */
export interface MenuCardProps {
    item: MenuItemProps;
    index: number;
}