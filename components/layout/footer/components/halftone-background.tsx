/**
 * Halftone Background
 * @returns {JSX.Element}
 */
export function HalftoneBackground() {
  return (
    <>
      <div className="absolute inset-0 halftone-dots-large opacity-5" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#53f921] opacity-10 halftone-dots" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#f633cc] opacity-10 halftone-dots-pink" />
    </>
  );
}