import { FooterLinksGroupProps } from "../types";
/**
 * Footer Links Group
 * @param menu - Menu links
 * @param empresa - Company links
 * @param contacto - Contact links
 */
export const footerLinks: FooterLinksGroupProps = {
  menu: [
    { label: "Chorizos", href: "#menu" },
    { label: "Milas de Seitán", href: "#menu" },
    { label: "Salchichas", href: "#menu" },
    { label: "Pastel Mandi'o", href: "#menu" },
    { label: "Ver menú completo", href: "#menu" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
  ],
  contacto: [
    { label: "Whatsapp", href: "https://api.whatsapp.com/send?phone=094646481" },
    { label: "Email", href: "mailto:estonoesensalada@gmail.com" },
  ],
};
