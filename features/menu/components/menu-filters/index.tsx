import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MenuFiltersProps } from "./types";
import { CATEGORIES } from "../../constants/categories.constant";
/**
 Component that filters the menu items by category and search query
 @param {MenuFiltersProps} props
 @property {string} searchQuery
 @property {(query: string) => void} setSearchQuery
 @property {string} activeCategory
 @property {(category: string) => void} setActiveCategory
 @returns {JSX.Element}
 */
export function MenuFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}: MenuFiltersProps) {
  return (
    <section className="sticky top-0 z-40 bg-background border-b-4 border-foreground py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar platos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-foreground font-medium"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`font-bold uppercase border-2 border-foreground transition-all ${activeCategory === category
                  ? "bg-[#f633cc] text-white"
                  : "bg-card hover:bg-[#53f921] hover:text-foreground"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
