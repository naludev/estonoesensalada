import { EmptyState, MenuCard, MenuHeader } from "./components";
import { MenuGridProps } from "./types";
/**
 * MenuGrid component
 * @param {MenuGridProps} props
 */
export function MenuGrid({ items }: MenuGridProps) {
  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 halftone-dots-gradient opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuHeader count={items.length} />

        {items.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}