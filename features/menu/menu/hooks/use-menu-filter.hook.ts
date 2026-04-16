'use client'
import { useState, useMemo } from 'react';
import { CategoryProps } from '../types';
import { MENU_ITEMS } from '../../constants/data.constant';
/**
 * Use Menu Filter
 * @returns {object}
 * @property {CategoryProps} activeCategory - Active category
 * @property {MenuItemProps[]} filteredItems - Filtered items
 * @property {function} handleCategoryChange - Handle category change
 */
export function useMenuFilter() {
    const [activeCategory, setActiveCategory] = useState<CategoryProps>("Todos");

    const filteredItems = useMemo(() => {
        const baseItems = activeCategory === "Todos" 
            ? MENU_ITEMS 
            : MENU_ITEMS.filter(item => item.category === activeCategory);
            
        return baseItems.slice(0, 6);
    }, [activeCategory]);

    const handleCategoryChange = (category: CategoryProps) => {
        setActiveCategory(category);
    };

    return {
        activeCategory,
        filteredItems,
        handleCategoryChange
    };
}