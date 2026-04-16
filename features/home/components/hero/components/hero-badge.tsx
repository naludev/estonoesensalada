import { HERO_CONFIG } from "../constants/hero-config.constant"
import { Badge } from "@/components/ui/badge"
/**
 * Hero badge component
 * @returns {JSX.Element}
 */
export function HeroBadge() {
  const { badge: { text } } = HERO_CONFIG;
  return (
    <Badge className="px-4 py-2 text-sm bg-[#53f921] text-foreground font-bold border-2 border-foreground comic-shadow">
      {text}
    </Badge>
  )
}