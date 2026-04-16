/**
 * Testimonials Config
 * @type {readonly TestimonialsConfigProps[]}
 * @property {string} sectionId
 * @property {string} badgeText
 * @property {string} titlePrefix
 * @property {string} titleHighlight
 * @property {string} subtitle
 * @property {string} ratingIcon
 * @property {number} maxRating
 */
export const TESTIMONIALS_CONFIG = {
  sectionId: "testimonios",
  badgeText: "Testimonios",
  titlePrefix: "Lo que dicen",
  titleHighlight: "nuestros clientes",
  subtitle: "No nos creas a nosotros, creeles a ellos",
  ratingIcon: "Star",
  maxRating: 5,
} as const;