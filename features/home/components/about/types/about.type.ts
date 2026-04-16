/**
 * About section props
 * @type {object}
 * @property {string} className
 * @property {string} id
 * @property {() => void} onSectionVisible
 */
export interface AboutSectionProps {
  className?: string;
  id?: string;
  onSectionVisible?: () => void;
}
