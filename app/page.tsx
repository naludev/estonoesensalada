import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/features/home/components/hero"
import { MenuSection } from "@/features/menu/menu"
import { HowItWorks } from "@/features/home/components/how-it-works"
import { CTASection } from "@/features/home/components/cta"
import { Footer } from "@/components/layout/footer"
import { TestimonialsSection } from "@/features/home/components/testimonials"
import { AboutSection } from "@/features/home/components/about"
/**
 * Home page component
 * @returns {JSX.Element} - Home page component
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
