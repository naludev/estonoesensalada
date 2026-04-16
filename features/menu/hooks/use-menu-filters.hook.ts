import { useState, useMemo } from "react";
import { MENU_ITEMS } from "../constants/data.constant";
/**
 * Hook for Menu component
 * @returns {Object}
 * @property {string} activeCategory - Active category
 * @property {(category: string) => void} setActiveCategory - Set active category
 * @property {string} searchQuery - Search query
 * @property {(query: string) => void} setSearchQuery - Set search query
 * @property {MenuItem[]} filteredItems - Filtered menu items
 */
export function useMenuFilters() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
      const matchesSearch = !query || 
        item.name?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query);
        
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredItems
  };
}
