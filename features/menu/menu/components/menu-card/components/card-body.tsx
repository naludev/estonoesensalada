import { ExpandableText } from "@/components/shared/expandable-text";
import { MenuCardProps } from "../types";
import { RatingDisplay } from "./rating-display";
import { VeganBadge } from "./vegan-badge";
/**
 * Card Body
 * @param item - Menu item
 */
export function CardBody({ item }: { item: MenuCardProps['item'] }) {
    return (
        <>
            <h3 className="text-lg font-black mb-2 uppercase leading-tight">
                {item.name}
            </h3>
            <ExpandableText text={item.description} />

            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <RatingDisplay rating={item.rating} />
                <VeganBadge />
            </div>
        </>
    );
}