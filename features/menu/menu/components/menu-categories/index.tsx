import { Button } from "@/components/ui/button";
import { CATEGORIES } from "../../constants";
import { MenuCategoriesProps } from "./types";
/**
 * Menu Categories
 * @param activeCategory - Active category
 * @param onCategoryChange - Category change handler
 */
export function MenuCategories({ activeCategory, onCategoryChange }: MenuCategoriesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`font-bold uppercase border-2 border-foreground transition-all ${activeCategory === category
              ? "bg-[#53f921] text-foreground comic-shadow-pink"
              : "bg-card hover:bg-[#f633cc] hover:text-white"
            }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}