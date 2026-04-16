import { Button } from "@/components/ui/button";
import { MenuCardProps } from "../types";
import { Plus } from "lucide-react";
/**
 * Card Footer
 * @param item - Menu item
 * @param onAddToCart - Callback function to add item to cart
 */
export function CardFooter({ item, onAddToCart }: { item: MenuCardProps['item']; onAddToCart: () => void }) {
    return (
        <div className="flex items-center justify-between">
            <p className="text-2xl font-black text-[#53f921]">
                ${item.price.toLocaleString()}
            </p>
            <Button
                size="icon"
                onClick={onAddToCart}
                className="h-10 w-10 bg-[#53f921] hover:bg-[#f633cc] text-foreground border-2 border-foreground group-hover:scale-110 transition-transform"
            >
                <Plus className="h-5 w-5" />
            </Button>
        </div>
    );
}