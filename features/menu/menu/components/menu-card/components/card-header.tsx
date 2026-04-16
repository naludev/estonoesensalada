import { MenuCardProps } from "../types";
import { PopularBadge } from "./popular-badge";
/**
 * Card Header
 * @param item - Menu item
 */
export function CardHeader({ item }: { item: MenuCardProps['item'] }) {
    return (
        <div className="flex justify-between items-start mb-3">
            <div className="text-5xl">{item.emoji}</div>
            <div className="flex flex-col gap-1 items-end">
                {item.popular && <PopularBadge />}
            </div>
        </div>
    );
}