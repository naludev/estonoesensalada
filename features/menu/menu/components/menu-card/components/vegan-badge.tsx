import { BADGE_TEXTS } from "@/features/menu/components/menu-grid/components/menu-card/constants";
import { Leaf } from "lucide-react";
/**
 * Vegan Badge
 * @returns {JSX.Element}
 */
export function VeganBadge() {
    return (
        <div className="flex items-center gap-1">
            <Leaf className="h-3 w-3 text-[#53f921]" />
            <span>{BADGE_TEXTS.vegan}</span>
        </div>
    );
}