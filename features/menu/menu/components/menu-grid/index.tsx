import { MenuCard } from "../menu-card";
import { MenuGridProps } from "./types";
/**
 * Menu Grid
 * @param items - Menu items
 */
export function MenuGrid({ items }: MenuGridProps) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
            ))}
        </div>
    );
}