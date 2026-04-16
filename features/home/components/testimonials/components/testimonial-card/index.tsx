import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { TestimonialCardProps } from "../../types";
/**
 * Testimonial Card
 * @param {TestimonialCardProps} props
 * @property {TestimonialProps} testimonial
 * @property {number} index
 * @property {'green' | 'pink'} variant
 * @returns {JSX.Element}
 */
export const TestimonialCard = ({
    testimonial,
    index,
    variant,
}: TestimonialCardProps) => {
    const isGreen = variant === "green";
    const accentColor = isGreen ? "#53f921" : "#f633cc";
    const shadowClass = isGreen ? "comic-shadow-green" : "comic-shadow-pink";

    return (
        <Card
            className={cn(
                "bg-card border-2 border-foreground hover:translate-x-1 hover:translate-y-1 transition-all duration-200 hover:shadow-none relative overflow-hidden",
                shadowClass
            )}
        >
            <CardContent className="p-8 relative">
                {/* Halftone decoration */}
                <div
                    className={cn(
                        "absolute -top-4 -right-4 w-16 h-16 opacity-20 rounded-full",
                        isGreen ? "bg-[#53f921]" : "bg-[#f633cc]"
                    )}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                            key={i}
                            className="h-5 w-5 text-[#53f921] fill-[#53f921]"
                        />
                    ))}
                </div>

                {/* Content */}
                <p className="text-lg mb-6 leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <div
                        className={cn(
                            "w-10 h-10 flex items-center justify-center font-black text-foreground border-2 border-foreground",
                            isGreen ? "bg-[#53f921]" : "bg-[#f633cc]"
                        )}
                    >
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-black uppercase">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground font-medium">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};