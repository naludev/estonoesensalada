import { FooterLinkProps } from "./footer-link.type";
/**
 * Footer Links Group
 * @param menu - Menu links
 * @param empresa - Company links
 * @param contacto - Contact links
 */
export interface FooterLinksGroupProps {
    menu: FooterLinkProps[];
    empresa: FooterLinkProps[];
    contacto: FooterLinkProps[];
}
