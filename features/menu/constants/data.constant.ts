import { MenuItemProps } from "../types";
/**
 * Constants for Menu component
 * @constant {MenuItemProps[]} MENU_ITEMS - Array of menu items
 * @property {number} id - Menu item id
 * @property {string} name - Menu item name
 * @property {string} description - Menu item description
 * @property {number} price - Menu item price
 * @property {string} category - Menu item category
 * @property {number} rating - Menu item rating
 * @property {boolean} popular - Menu item popular
 * @property {string} emoji - Menu item emoji
 */
export const MENU_ITEMS: MenuItemProps[] = [
  {
    id: 14,
    name: "Pizza clásica",
    description: "Una vuelta plant-based a la pizza clásica: base crocante, salsa casera y un queso de maní cremoso, intenso y lleno de sabor. Reconfortante, original y adictiva desde el primer bocado.",
    price: 450,
    category: "Pizzas",
    rating: 4.9,
    popular: true,
    emoji: "🍕",
  },
  {
    id: 15,
    name: "Pizza margarita",
    description: "Con queso de maní, pesto y tomates confitados. Una combinación que no falla: queso de maní suave, pesto aromático y tomates confitados. Una pizza equilibrada, fresca y llena de capas de sabor.",
    price: 490,
    category: "Pizzas",
    rating: 4.8,
    popular: true,
    emoji: "🍕",
  },
  {
    id: 16,
    name: "Focaccia de la Casa",
    description: "Esponjosa por dentro, dorada por fuera. Cubierta con pesto casero y una mezcla de verduras que aportan textura, color y frescura.",
    price: 380,
    category: "Panes",
    rating: 4.7,
    popular: true,
    emoji: "🥖",
  },
  {
    id: 13,
    name: "Panes caseros",
    description: "Panes artesanales hechos con tiempo, paciencia y mucho amor. Corteza dorada y miga suave. Ideales para acompañar, armar sándwiches o simplemente disfrutar con algo untado arriba.",
    price: 320,
    category: "Panes",
    rating: 4.8,
    popular: false,
    emoji: "🥖",
  },
  {
    id: 1,
    name: "Chorizos (4 unidades)",
    description: "Chorizos veganos con carácter. Gluten de trigo y legumbres fermentadas para una mejor digestión, con ese sabor intenso que no pide permiso. Tradición, pero versión evolucionada. Esto no es ensalada, es potencia pura.",
    price: 420,
    category: "Principales",
    rating: 4.9,
    popular: true,
    emoji: "🌭",
  },
  {
    id: 2,
    name: "Milas de Seitán (4 unidades)",
    description: "La mila que no falla. Gluten de trigo y legumbres, crocante por fuera, potente por dentro. Un reemplazo vegetal que no intenta copiar… directamente compite. Esto no es ensalada, es la milanga que estabas esperando.",
    price: 499,
    category: "Principales",
    rating: 4.7,
    popular: true,
    emoji: "🍗",
  },
  {
    id: 3,
    name: "Salchichas (4 unidades)",
    description: "Salchichas vegetales bien power: gluten de trigo, proteína de soja texturizada y legumbres. Todo laburado para lograr ese sabor clásico que esperás… pero sin nada animal. Igual de tentadoras, mejor hechas. Esto no es ensalada, es puro sabor.",
    price: 399,
    category: "Principales",
    rating: 4.8,
    popular: true,
    emoji: "🌭",
  },
  {
    id: 4,
    name: "Pastel Mandi'o (3 unidades)",
    description: "Empanadas de mandioca bien paraguayas, con masa suave y un relleno potente de soja texturizada y verduras. Sabor casero, pero en modo Esto No Es Ensalada. Tradición que pega fuerte.",
    price: 499,
    category: "Principales",
    rating: 4.8,
    popular: true,
    emoji: "🥟",
  },
  {
    id: 5,
    name: "Combo 4 Choripanes",
    description: "4 chorizos + 4 panes + salsa chimichurri. El combo que te hace olvidar que estás comiendo plantas. Todo el sabor, ningún remordimiento. Esto no es ensalada, es un viaje de ida.",
    price: 850,
    category: "Combos",
    rating: 4.9,
    popular: true,
    emoji: "🔥",
  },
  {
    id: 6,
    name: "Combo 4 Panchos",
    description: "4 salchichas + 4 panes  + mayonesa de zanahoria. El clásico de la cancha pero versión evolucionada. Perfecto para cuando querés algo rico sin preguntar de qué está hecho. Esto no es ensalada, es tu nueva adicción.",
    price: 750,
    category: "Combos",
    rating: 4.7,
    popular: false,
    emoji: "🌭",
  },
  {
    id: 7,
    name: "Combo Poderoso",
    description: "4 Milas de Seitán + 3 Pastel Mandi'o + salsa chimichurri. La combinación que te deja listo para cualquier batalla. Dos clásicos de Esto No Es Ensalada en un solo pedido. ¿Ensalada? Acá no hay lugar para eso.",
    price: 990,
    category: "Combos",
    rating: 4.8,
    popular: true,
    emoji: "💪",
  },
  {
    id: 11,
    name: "Salsa Chimichurri",
    description: "El toque final que todo plato se merece. Nuestra salsa chimichurri con el punto justo de ajo, perejil y especias. Tan buena que vas a querer ponerle a todo. Esto no es ensalada, es la salsa que despierta sabores.",
    price: 120,
    category: "Extras",
    rating: 4.7,
    popular: false,
    emoji: "🥫",
  },
  {
    id: 12,
    name: "Mayonesa de Zanahoria",
    description: "Mayonesa de zanahoria rebozada con salsa chimichurri y mayonesa de zanahoria. La mejor opción para un plato de mayonesa. ¿Qué es lo que te gusta de esto? ¿Qué te gusta de esto?",
    price: 120,
    category: "Extras",
    rating: 4.7,
    popular: false,
    emoji: "🥫",
  }
];
