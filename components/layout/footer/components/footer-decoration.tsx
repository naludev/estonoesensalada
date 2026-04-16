/**
 * Footer Decoration
 * @returns {JSX.Element}
 */
export function FooterDecoration() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-[#53f921]" />
      <div className="w-3 h-3 bg-[#f633cc] rotate-45" />
      <div className="w-3 h-3 border-2 border-[#53f921] rounded-full" />
    </div>
  );
}