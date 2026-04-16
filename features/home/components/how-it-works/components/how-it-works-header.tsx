import { Badge } from "@/components/ui/badge";
import { HOW_IT_WORKS_CONFIG } from "../constants";
/**
 * How It Works Header
 * @returns {JSX.Element}
 */
export function HowItWorksHeader() {
    const { badgeText, title, highlightText, highlightColor, subtitle } = HOW_IT_WORKS_CONFIG;

    return (
        <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#f633cc] text-white font-bold uppercase border-2 border-background">
                {badgeText}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance uppercase">
                {title}{" "}
                <span className="relative inline-block">
                    <span className={`relative z-10 ${highlightColor}`}>{highlightText}</span>
                </span>
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto font-medium">
                {subtitle}
            </p>
        </div>
    );
}