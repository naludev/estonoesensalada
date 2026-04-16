import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HERO_CONFIG } from "../constants/hero-config.constant"
/**
 * Hero buttons component
 * @returns {JSX.Element}
 */
export function HeroButtons() {
  const { buttons: { menu: { href, text }, howItWorks: { href: howItWorksHref, text: howItWorksText } } } = HERO_CONFIG;
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        className="text-lg px-8 bg-[#53f921] hover:bg-[#4ae01d] text-foreground font-bold uppercase border-2 border-foreground comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        <a href={href}>{text}</a>
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="text-lg px-8 border-2 border-foreground text-foreground hover:bg-[#f633cc] hover:text-white font-bold uppercase comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        asChild
      >
        <a href={howItWorksHref}>{howItWorksText}</a>
      </Button>
    </div>
  )
}