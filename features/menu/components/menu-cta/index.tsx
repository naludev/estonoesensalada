import { Button } from "@/components/ui/button";
import { MENU_CTA } from "./constants";
/**
 * Componente que muestra un CTA para nuevos usuarios con un descuento del 15%.
 * @returns {JSX.Element}
 */
export function MenuCTA() {
  const { title, description, code, buttonText } = MENU_CTA;
  return (
    <section className=" bg-foreground relative overflow-hidden py-10">
      <div className="absolute inset-0 halftone-dots opacity-10" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-background mb-4">
          {title}
        </h2>
        <p className="text-xl text-background/80 font-medium mb-6">
          {description} <span className="bg-[#53f921] text-foreground px-3 py-1 font-black">{code}</span>
        </p>
        <Button
          size="lg"
          className="bg-[#f633cc] hover:bg-[#e020b0] text-white font-bold uppercase border-2 border-background text-lg px-8"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
