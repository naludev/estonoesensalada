import { Badge } from "@/components/ui/badge";
import { BADGE_TEXTS } from "@/features/menu/components/menu-grid/components/menu-card/constants";
import { Flame } from "lucide-react";
/**
 * Popular Badge
 * @returns {JSX.Element}
 */
export function PopularBadge() {
    return (
        <Badge className="bg-[#f633cc] text-white font-bold uppercase border-2 border-foreground text-xs">
            <Flame className="h-3 w-3 mr-1" />
            {BADGE_TEXTS.popular}
        </Badge>
    );
}