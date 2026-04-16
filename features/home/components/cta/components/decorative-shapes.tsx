/**
 * Decorative Shapes
 */
export function DecorativeShapes() {
    return (
        <>
            <div className="absolute top-8 left-8 w-8 h-8 border-4 border-foreground rotate-45" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-4 border-[#f633cc] rounded-full" />
            <div className="absolute top-1/2 right-12 w-4 h-4 bg-foreground" />
            <div className="absolute bottom-1/4 left-12 w-6 h-6 bg-[#f633cc]" />
        </>
    );
}