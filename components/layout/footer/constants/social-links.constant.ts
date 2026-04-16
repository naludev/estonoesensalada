import { Instagram, Facebook, Twitter } from 'lucide-react';
import { SocialLinkProps } from '../types';
/**
 * Social Links
 * @param icon - Social icon
 * @param href - Social link
 * @param bgColor - Background color
 * @param hoverColor - Hover color
 */
export const socialLinks: SocialLinkProps[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/noesensalada.uy/",
    label: "Instagram",
    bgColor: "bg-[#53f921]",
    hoverColor: "hover:bg-[#f633cc]"
  },
];

