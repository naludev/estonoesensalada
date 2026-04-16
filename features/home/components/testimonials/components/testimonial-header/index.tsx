import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS_CONFIG } from "../../constants";
/**
 * Testimonials Header
 * @returns {JSX.Element}
 */
export const TestimonialsHeader = () => {
    return (
        <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#53f921] text-foreground font-bold uppercase border-2 border-foreground comic-shadow-pink">
                {TESTIMONIALS_CONFIG.badgeText}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance uppercase">
                {TESTIMONIALS_CONFIG.titlePrefix}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10">{TESTIMONIALS_CONFIG.titleHighlight}</span>
                    <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#f633cc] -skew-x-3 -z-0" />
                </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                {TESTIMONIALS_CONFIG.subtitle}
            </p>
        </div>
    );
};