'use client'
import { memo } from "react";
import { AboutSectionProps } from "./types";
import { SECTION_CONFIG, VALUES } from "./constants";
import { useAboutSection } from "./hooks";
import { cn } from "@/lib/utils";
import { SectionHeader, ValueCard } from "./components";
/**
 * About section component
 * @param {AboutSectionProps} props
 * @returns {JSX.Element}
 */
export const AboutSection = memo(({ 
  className, 
  id = SECTION_CONFIG.id,
  onSectionVisible 
}: AboutSectionProps) => {
  const { isVisible, sectionRef } = useAboutSection(onSectionVisible);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "py-24 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#f633cc] opacity-20 rotate-12" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-[#53f921] rounded-full opacity-20" />
      <div className="absolute top-1/2 right-1/4 halftone-dots w-40 h-40 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader isVisible={isVisible} />

            <div className={isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
                Nacimos hartos de escuchar que la comida vegana es aburrida,
                insípida y cara. Así que decidimos demostrar lo contrario.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestros chefs vienen del mundo de la cocina tradicional y
                aplicaron todo su conocimiento para crear platos que te hacen
                olvidar que estás comiendo 100% vegetal. Porque sí, se puede
                comer rico, cuidar el planeta y no arruinarte en el intento.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((value, index) => (
              <ValueCard
                key={`${value.title}-${index}`}
                value={value}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";