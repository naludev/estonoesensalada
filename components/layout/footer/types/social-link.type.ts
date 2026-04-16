/**
 * Social Link
 * @param icon - Icon component
 * @param href - Link URL
 * @param bgColor - Background color
 * @param hoverColor - Hover background color
 */
export interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}