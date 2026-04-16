"use client";

import { useMenuFilters } from "./hooks";
import { MenuHeader } from "./components/menu-header";
import { MenuFilters } from "./components/menu-filters";
import { MenuGrid } from "./components/menu-grid";
import { MenuCTA } from "./components/menu-cta";
import { Footer } from "@/components/layout/footer"
/**
 * Component that displays the menu page content
 * @returns {JSX.Element} 
 */
export function MenuPageContent() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    filteredItems
  } = useMenuFilters();

  return (
    <main className="min-h-screen bg-background">
      <MenuHeader />
      <MenuFilters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MenuGrid items={filteredItems} />
      <div className="w-full">
        <MenuCTA />
      </div>
      <Footer />

    </main>
  );
}
