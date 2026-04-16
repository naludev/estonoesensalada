import { FooterLinkProps } from "./footer-link.type";
/**
 * Footer Links Section
 * @param title - Section title
 * @param links - Section links
 * @param titleColor - Section title color
 * @param linkHoverColor - Section link hover color
 */
export interface FooterLinksSectionProps {
  title: string;
  links: FooterLinkProps[];
  titleColor?: string;
  linkHoverColor?: string;
}
