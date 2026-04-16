import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { SECTION_CONFIG } from "../../constants";
import { SectionHeaderProps } from "./types";
/**
 * Section header component
 * @param {SectionHeaderProps} props
 * @returns {JSX.Element}
 */
export const SectionHeader = memo(({ isVisible }: SectionHeaderProps) => {
  return (
    <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
      <Badge className="mb-4 bg-[#53f921] text-foreground font-bold uppercase border-2 border-foreground comic-shadow-pink">
        {SECTION_CONFIG.badgeText}
      </Badge>

      <h2 className="text-4xl sm:text-5xl font-black mb-6 text-balance uppercase leading-tight">
        {SECTION_CONFIG.title.prefix}{" "}
        <span className="relative inline-block">
          <span className="relative z-10">{SECTION_CONFIG.title.highlighted}</span>
          <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#f633cc] -skew-x-3 z-0" />
        </span>
      </h2>
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";