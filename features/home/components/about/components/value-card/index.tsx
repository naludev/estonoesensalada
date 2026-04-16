import { cn } from "@/lib/utils";
import { memo } from "react";
import { COLOR_STYLES } from "../../constants";
import { ValueCardProps } from "./types";
/**
 * Value card component
 * @param {ValueCardProps} props
 * @returns {JSX.Element}
 */
export const ValueCard = memo(({ value, index, isVisible }: ValueCardProps) => {
  const { icon: Icon, title, description, color } = value;
  const styles = COLOR_STYLES[color];

  return (
    <div
      className={cn(
        "p-6 bg-card border-2 border-foreground",
        "hover:translate-x-1 hover:translate-y-1 transition-all duration-200",
        "hover:shadow-none relative overflow-hidden",
        styles.shadow,
        isVisible && "animate-fade-in-up",
        `animation-delay-${index * 100}`
      )}
      style={{ animationFillMode: "backwards" }}
    >
      <div
        className={cn(
          "absolute -bottom-4 -right-4 w-20 h-20 opacity-20 halftone-dots rounded-full",
          styles.halftone
        )}
      />
      <div
        className={cn(
          "p-3 w-fit mb-4 border-2 border-foreground",
          styles.bg
        )}
      >
        <Icon className="h-6 w-6 text-foreground" />
      </div>

      <h3 className="text-lg font-black mb-2 uppercase">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
});

ValueCard.displayName = "ValueCard";