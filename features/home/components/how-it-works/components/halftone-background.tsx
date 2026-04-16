/**
 * Halftone How It Works Background
 */
export function HalftoneHowItWorksBackground() {
    return (
        <>
            <div className="absolute inset-0 halftone-dots-large opacity-5" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#53f921] opacity-10 halftone-dots rounded-full blur-sm" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f633cc] opacity-10 halftone-dots-pink rounded-full blur-sm" />
        </>
    );
}
