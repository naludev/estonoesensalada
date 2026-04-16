import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTAContentProps } from "./types";
/**
 * CTA Content
 * @param data - CTA data
 * @param onButtonClick - Button click handler
 */
export function CTAContent({ data, onButtonClick }: CTAContentProps) {
  return (
    <div className="relative text-center max-w-3xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance uppercase">
        {data.title}{" "}
        <span className="relative inline-block">
          <span className="relative z-10">{data.subtitle}</span>
          <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#f633cc] -skew-x-3 -z-0" />
        </span>
      </h2>
      
      <p className="text-xl text-foreground/80 mb-8 font-medium">
        Usá el código{" "}
        <span className="inline-block font-black bg-foreground text-background px-4 py-2 border-2 border-foreground transform -rotate-1">
          {data.code}
        </span>{" "}
        en tu primer pedido
      </p>
      
      <Button 
        size="lg" 
        className="text-lg px-8 bg-[#f633cc] hover:bg-[#e020b0] text-white font-black uppercase border-2 border-foreground comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        onClick={onButtonClick}
      >
        {data.buttonText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}