import { Button } from "@/components/ui/button";
import Link from "next/link";
/**
 * Menu Footer
 * @returns {JSX.Element}
 */
export function MenuFooter() {
    return (
        <div className="text-center mt-12">
            <Button
                size="lg"
                variant="outline"
                className="font-bold uppercase border-2 border-foreground comic-shadow hover:bg-foreground hover:text-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
                <Link href="/menu">Ver menú completo</Link>
            </Button>
        </div>
    );
}