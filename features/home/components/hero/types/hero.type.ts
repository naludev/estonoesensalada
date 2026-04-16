import { HeroSection } from "../constants";
/**
 * Hero props
 * @type {object}
 * @property {string} className
 * @property {() => void} onCtaClick
 */
export interface HeroProps {
  className?: string;
  onCtaClick?: (type: HeroSection) => void;
}

