import Link from "next/link";
import { FooterLinksSectionProps } from "../types";
/**
 * Footer Links Section
 * @param title - Section title
 * @param links - Section links
 * @param titleColor - Section title color
 * @param linkHoverColor - Section link hover color
 */
export function FooterLinksSection({
    title,
    links,
    titleColor = "text-[#53f921]",
    linkHoverColor = "hover:text-[#53f921]"
}: FooterLinksSectionProps) {
    return (
        <div>
            <h4 className={`font-black mb-4 uppercase ${titleColor}`}>
                {title}
            </h4>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className={`text-background/60 ${linkHoverColor} text-sm font-medium transition-colors uppercase`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}