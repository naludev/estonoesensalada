import { TestimonialProps } from "../types";
/**
 * Testimonials
 * @type {readonly TestimonialProps[]}
 * @property {string} name
 * @property {string} role
 * @property {string} content
 * @property {number} rating
 */
export const TESTIMONIALS: TestimonialProps[] = [
  {
    name: "Valentina R.",
    role: "Fan de la Focaccia",
    content: "La focaccia de la casa es de otro planeta. Esponjosa, con el pesto justo... la pido siempre que puedo.",
    rating: 5,
  },
  {
    name: "Santi G.",
    role: "Adicto al Combo Poderoso",
    content: "El combo poderoso realmente te deja listo para cualquier batalla. Las milas son increíbles y el chimi le da el toque final perfecto.",
    rating: 5,
  },
  {
    name: "Mica S.",
    role: "Amante del Pastel Mandi'o",
    content: "No puedo creer que el pastel mandi'o sea plant-based. El sabor de la masa es tal cual el tradicional, ¡totalmente adictivo!",
    rating: 5,
  },
];
