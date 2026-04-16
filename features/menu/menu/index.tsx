"use client";
import { HalftoneMenuBackground, MenuCategories, MenuFooter, MenuGrid, MenuHeader } from "./components";
import { useMenuFilter } from "./hooks";
/**
 * Menu Section
 * @returns {JSX.Element}
 */
export function MenuSection() {
  const { activeCategory, filteredItems, handleCategoryChange } = useMenuFilter();

  return (
    <section id="menu" className="py-24 relative overflow-hidden">
      <HalftoneMenuBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuHeader />
        <MenuCategories 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <MenuGrid items={filteredItems} />
        <MenuFooter />
      </div>
    </section>
  );
}