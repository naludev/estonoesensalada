/**
 * Halftone Menu Background
 * @returns {JSX.Element}
 */
export function HalftoneMenuBackground() {
    return (
        <>
            <div className="absolute inset-0 bg-muted" />
            <div className="absolute inset-0 halftone-dots-gradient opacity-20" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#f633cc] opacity-10 halftone-dots" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#53f921] opacity-10 halftone-dots-pink" />
        </>
    );
}