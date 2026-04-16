/**
 * Color styles
 * @type {Record<ValueColor, import('../types').ValueColorStyle>}
 * @property {string} bg
 * @property {string} shadow
 * @property {string} halftone
 * @property {string} text
 * @property {string} border
 */
export const COLOR_STYLES = {
  green: {
    bg: "bg-[#53f921]",
    text: "text-[#53f921]",
    border: "border-[#53f921]",
    shadow: "comic-shadow",
  },
  pink: {
    bg: "bg-[#f633cc]",
    text: "text-[#f633cc]",
    border: "border-[#f633cc]",
    shadow: "comic-shadow-pink",
  },
} as const;