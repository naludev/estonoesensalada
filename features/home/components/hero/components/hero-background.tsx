/**
 * Hero background component
 * @returns {JSX.Element}
 */
export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 halftone-dots opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full halftone-dots-pink opacity-5" />

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#53f921] rounded-full opacity-20 halftone-overlay" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#f633cc] rounded-full opacity-15 halftone-overlay" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 border-4 border-[#53f921] rotate-45 opacity-30" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-4 border-[#f633cc] rounded-full opacity-30" />
    </>
  )
}