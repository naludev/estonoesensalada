'use client'
import { useTestimonials } from "../../hooks";
import { TestimonialCard } from "../testimonial-card";
import { TestimonialsHeader } from "../testimonial-header";
/**
 * Testimonials
 * @returns {JSX.Element}
 */
export const Testimonials = () => {
    const { testimonials, getVariant } = useTestimonials();

    return (
        <section id="testimonios" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-muted" />
            <div className="absolute inset-0 halftone-dots opacity-10" />
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#f633cc] rotate-12 opacity-30" />
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#53f921] opacity-20 halftone-dots" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TestimonialsHeader />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                            variant={getVariant(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};