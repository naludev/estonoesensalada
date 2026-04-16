/**
 * Background Overlays
 */
export function BackgroundOverlays() {
    return (
        <>
            <div className="absolute inset-0 halftone-dots opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f633cc] opacity-30 halftone-dots rounded-full blur-sm" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-foreground opacity-10 halftone-dots rounded-full blur-sm" />
        </>
    );
}