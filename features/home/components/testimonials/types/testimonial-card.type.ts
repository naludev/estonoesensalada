import { TestimonialProps } from "./testimonials.type";
/**
 * Testimonial card props
 * @type {object}
 * @property {TestimonialProps} testimonial
 * @property {number} index
 * @property {'green' | 'pink'} variant
 */
export interface TestimonialCardProps {
  testimonial: TestimonialProps;
  index: number;
  variant: 'green' | 'pink';
}