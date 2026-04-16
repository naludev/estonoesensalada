import { Badge } from "@/components/ui/badge";
import { MENU_CONFIG } from "../constants";
/**
 * Menu Header
 * @returns {JSX.Element}
 */
export function MenuHeader() {
    const { title, highlightText, highlightColor, subtitle, badgeText } = MENU_CONFIG;
    const titleParts = title.split(highlightText);

    return (
        <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#f633cc] text-white font-bold uppercase border-2 border-foreground comic-shadow">
                {badgeText}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance uppercase">
                {titleParts[0]}
                <span className="relative inline-block">
                    <span className="relative z-10">{highlightText}</span>
                    <span className={`absolute -bottom-1 left-0 w-full h-3 ${highlightColor} -skew-x-3 -z-0`} />
                </span>
                {titleParts[1]}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                {subtitle}
            </p>
        </div>
    );
}