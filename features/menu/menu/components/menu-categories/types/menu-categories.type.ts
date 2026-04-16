import { CategoryProps } from "../../../types";
/**
 * Menu Categories
 * @param activeCategory - Active category
 * @param onCategoryChange - Category change handler
 */
export interface MenuCategoriesProps {
    activeCategory: CategoryProps;
    onCategoryChange: (category: CategoryProps) => void;
}