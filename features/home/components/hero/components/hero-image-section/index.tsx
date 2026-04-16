import Image from "next/image"
import { Star } from "lucide-react"
import { HERO_CONFIG } from "../../constants";
/**
 * Hero image section component
 * @returns {JSX.Element} 
 */
export function HeroImageSection() {
  const { image: { combo: { name, description, price } }, floatingCards: { rating: { value: ratingValue, label: ratingLabel }, orders: { value: ordersValue, label: ordersLabel } } } = HERO_CONFIG;
  return (
    <div className="relative">
      <div className="relative aspect-square max-w-lg mx-auto">
        {/* Main circle with halftone */}
        <div className="absolute inset-0 bg-[#53f921] rounded-full halftone-overlay border-4 border-foreground comic-shadow-pink" />
        <div className="absolute inset-6 bg-card rounded-full border-4 border-foreground flex items-center justify-center">
          <div className="text-center p-8">
            <Image src="/logo.png" alt="Esto No Es Ensalada" width={180} height={180} className="mx-auto mb-4" />
            <p className="text-2xl font-black uppercase">{name}</p>
            <p className="text-muted-foreground font-medium">{description}</p>
            <p className="text-3xl font-black text-[#53f921] mt-2">${price.toFixed(0)}</p>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute -top-4 -right-4 bg-[#f633cc] p-4 border-2 border-foreground comic-shadow">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-foreground fill-foreground" />
            <span className="font-black text-foreground">{ratingValue}</span>
          </div>
          <p className="text-xs font-bold text-foreground/80">{ratingLabel}</p>
        </div>

        <div className="absolute -bottom-4 -left-4 bg-[#53f921] p-4 border-2 border-foreground comic-shadow">
          <p className="text-sm font-black text-foreground">{ordersValue}</p>
          <p className="text-xs font-bold text-foreground/80">{ordersLabel}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#f633cc] rotate-45" />
        <div className="absolute bottom-1/4 -left-6 w-3 h-3 bg-[#53f921]" />
        <div className="absolute top-1/4 -left-10 w-6 h-6 border-2 border-[#f633cc] rounded-full" />
      </div>
    </div>
  )
}