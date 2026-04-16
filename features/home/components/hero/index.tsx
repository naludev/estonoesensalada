'use client'
import { HeroBackground, HeroBadge, HeroButtons, HeroDescription, HeroFeatures, HeroImageSection, HeroTitle } from "./components";
/**
 * Hero component
 * @returns {JSX.Element}
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <HeroButtons />
            <HeroFeatures />
          </div>

          {/* Right Column - Image */}
          <HeroImageSection />

        </div>
      </div>
    </section>
  )
}