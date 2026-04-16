import { MenuHeaderProps } from "./types";
/**
 * MenuHeader component
 * @param {MenuHeaderProps} props
 */
export function MenuHeader({ count }: MenuHeaderProps) {
    return (
        <p className="text-muted-foreground font-medium mb-8">
            Mostrando{" "}
            <span className="font-bold text-foreground">{count}</span>{" "}
            platos
        </p>
    );
}