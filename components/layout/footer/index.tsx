'use client'
import { FooterBrand, FooterDecoration, FooterLinksSection, FooterSocial, HalftoneBackground } from "./components";
import { footerLinks } from "./constants";
/**
 * Footer Component
 * @returns {JSX.Element}
 */
export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      <HalftoneBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <FooterBrand />
            <FooterSocial />
          </div>

          <FooterLinksSection
            title="Menú"
            links={footerLinks.menu}
            titleColor="text-[#53f921]"
            linkHoverColor="hover:text-[#53f921]"
          />

          <FooterLinksSection
            title="Contacto"
            links={footerLinks.contacto}
            titleColor="text-[#53f921]"
            linkHoverColor="hover:text-[#53f921]"
          />

          <FooterLinksSection
            title="Empresa"
            links={footerLinks.empresa}
            titleColor="text-[#f633cc]"
            linkHoverColor="hover:text-[#f633cc]"
          />
        </div>

        <div className="pt-8 border-t-2 border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm font-medium">
            &copy; {new Date().getFullYear()} ESTO NO ES ENSALADA. Todos los derechos reservados.
          </p>
          <FooterDecoration />
        </div>
      </div>
    </footer>
  );
}