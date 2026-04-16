/**
 * Type for MenuFilters component
 * @property {string} searchQuery
 * @property {(query: string) => void} setSearchQuery
 * @property {string} activeCategory
 * @property {(category: string) => void} setActiveCategory
 */
export interface MenuFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
