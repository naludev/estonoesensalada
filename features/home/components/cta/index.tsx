'use client'
import { BackgroundOverlays, CTAContent, DecorativeShapes } from "./components";
import { DEFAULT_CTA_DATA } from "./constants/default-cta.constant";
import { useCTALogic } from "./hooks";
import { CTASectionProps } from "./types";
/**
 * CTA Section
 * @param discountCode - Discount code
 * @param discountValue - Discount value
 * @param buttonText - Button text
 * @param onButtonClick - Button click handler
 */
export function CTASection({
  discountCode = DEFAULT_CTA_DATA.code,
  discountValue = 10,
  buttonText = DEFAULT_CTA_DATA.buttonText,
  onButtonClick
}: CTASectionProps) {

  const { isLoading, error, handleCTAClick } = useCTALogic({
    discountCode,
    onSuccess: onButtonClick
  });

  const ctaData = {
    ...DEFAULT_CTA_DATA,
    subtitle: `Tenés ${discountValue}% OFF`,
    code: discountCode,
    buttonText: isLoading ? "Procesando..." : buttonText
  };

  if (error) {
    console.error("CTA Error:", error);
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border-4 border-foreground bg-[#53f921] p-12 md:p-20 comic-shadow">
          <BackgroundOverlays />
          <DecorativeShapes />
          <CTAContent
            data={ctaData}
            onButtonClick={handleCTAClick}
          />
        </div>
      </div>
    </section>
  );
}