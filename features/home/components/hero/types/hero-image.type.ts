/**
 * Hero image props
 * @type {object}
 * @property {string} imageUrl
 * @property {string} imageAlt
 * @property {boolean} showCombo
 * @property {number} comboPrice
 * @property {string} comboName
 * @property {string} comboDescription
 */
export interface HeroImageProps {
  imageUrl?: string;
  imageAlt?: string;
  showCombo?: boolean;
  comboPrice?: number;
  comboName?: string;
  comboDescription?: string;
}