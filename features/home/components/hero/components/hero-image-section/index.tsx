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
    <div className="relative mt-8 lg:mt-0">
      <div className="relative aspect-square max-w-[300px] sm:max-w-lg mx-auto">
        {/* Main circle with halftone */}
        <div className="absolute inset-0 bg-[#53f921] rounded-full halftone-overlay border-4 border-foreground comic-shadow-pink" />
        <div className="absolute inset-4 sm:inset-6 bg-card rounded-full border-4 border-foreground flex items-center justify-center">
          <div className="text-center p-4 sm:p-8">
            <Image 
              src="/logo.png" 
              alt="Esto No Es Ensalada" 
              width={140} 
              height={140} 
              className="mx-auto mb-2 sm:mb-4 w-24 sm:w-auto" 
            />
            <p className="text-lg sm:text-2xl font-black uppercase leading-tight">{name}</p>
            <p className="text-xs sm:text-base text-muted-foreground font-medium line-clamp-2 sm:line-clamp-none">{description}</p>
            <p className="text-2xl sm:text-4xl font-black text-[#53f921] mt-1 sm:mt-2">${price.toFixed(0)}</p>
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-[#f633cc] p-2 sm:p-4 border-2 border-foreground comic-shadow z-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-foreground fill-foreground" />
            <span className="font-black text-sm sm:text-base text-foreground">{ratingValue}</span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold text-foreground/80">{ratingLabel}</p>
        </div>

        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-[#53f921] p-2 sm:p-4 border-2 border-foreground comic-shadow z-10">
          <p className="text-xs sm:text-sm font-black text-foreground">{ordersValue}</p>
          <p className="text-[10px] sm:text-xs font-bold text-foreground/80">{ordersLabel}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#f633cc] rotate-45" />
        <div className="absolute bottom-1/4 -left-3 sm:-left-6 w-2 h-2 sm:w-3 sm:h-3 bg-[#53f921]" />
        <div className="absolute top-1/4 -left-6 sm:-left-10 w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#f633cc] rounded-full" />
      </div>
    </div>
  )
}