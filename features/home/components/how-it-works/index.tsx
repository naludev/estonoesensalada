'use client'
import { DecorativeShapes, HalftoneHowItWorksBackground, HowItWorksHeader, StatsGrid, StepsGrid } from "./components";
import { useHowItWorks } from "./hooks";
/**
 * How It Works Section
 * @returns {JSX.Element}
 */
export function HowItWorks() {
  const { steps, stats } = useHowItWorks();

  return (
    <section id="como-funciona" className="py-24 bg-foreground text-background relative overflow-hidden">
      <HalftoneHowItWorksBackground />
      <DecorativeShapes />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />

        <StepsGrid steps={steps} />
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}