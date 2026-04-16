import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONFIG } from "../constants";
/**
 * Footer Brand
 * @returns {JSX.Element}
 */
export function FooterBrand() {
  return (
    <div className="col-span-2 md:col-span-1">
      <Link href="/" className="flex items-center gap-2 mb-4">
        <Image
          src="/logo.png"
          alt={FOOTER_CONFIG.logoAlt}
          width={FOOTER_CONFIG.logoSizes.width}
          height={FOOTER_CONFIG.logoSizes.height}
          className="h-9 w-auto invert"
        />
      </Link>
      <p className="text-background/60 text-sm leading-relaxed mb-4">
        {FOOTER_CONFIG.description}
      </p>
    </div>
  );
}