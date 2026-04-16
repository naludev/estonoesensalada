/**
 * Hero config
 * @type {import('../types').HeroConfig}
 * @property {string} badge
 * @property {object} title
 * @property {string} title.prefix
 * @property {string} title.highlighted
 * @property {string} title.suffix
 * @property {string} title.gradientFrom
 * @property {string} title.gradientTo
 * @property {string} subtitle
 * @property {string[]} description
 * @property {object} buttons
 * @property {object} buttons.menu
 * @property {string} buttons.menu.text
 * @property {"default" | "outline"} buttons.menu.variant
 * @property {string} buttons.menu.href
 * @property {object} buttons.howItWorks
 * @property {string} buttons.howItWorks.text
 * @property {"default" | "outline"} buttons.howItWorks.variant
 * @property {string} buttons.howItWorks.href
 * @property {object} image
 * @property {string} image.defaultImage
 * @property {string} image.defaultAlt
 * @property {object} image.combo
 * @property {string} image.combo.name
 * @property {string} image.combo.description
 * @property {number} image.combo.price
 */
export const HERO_CONFIG = {
  badge: {
    text: "100% PLANT-BASED",
    className: "bg-[#53f921]",
  },
  title: {
    prefix: "ESTO NO ES",
    highlighted: "ENSALADA",
    suffix: "",
    gradientFrom: "#53f921",
    gradientTo: "#3dd615",
  },
  subtitle: "Comida vegana que no aburre",
  description: [
    "Olvidate de las ensaladas tristes. Acá encontrás choris con carácter, milas que compiten con las de toda la vida y combos que te dejan listo para cualquier batalla.",
    "Todo 100% vegetal, pero con la personalidad que la comida de verdad merece.",
  ],
  buttons: {
    menu: {
      text: "Ver Menú",
      variant: "default" as const,
      href: "/menu",
    },
    howItWorks: {
      text: "Cómo Funciona",
      variant: "outline" as const,
      href: "#como-funciona",
    },
  },
  image: {
    defaultImage: "/logo.png",
    defaultAlt: "Esto No Es Ensalada",
    combo: {
      name: "Combo poderoso",
      description: "Nuestro combo más vendido",
      price: 950,
    },
  },
  floatingCards: {
    rating: {
      value: "4.9",
      label: "+50 reviews",
    },
    orders: {
      value: "+100",
      label: "pedidos este mes"
    }
  }
} as const;