import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
/**
 * MenuHeader component
 * @returns {JSX.Element}
 */
export function MenuHeader() {
  return (
    <header className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#53f921]" />
      <div className="absolute inset-0 halftone-dots-pink opacity-20" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f633cc] opacity-30 halftone-dots rounded-full blur-sm" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground opacity-10 halftone-dots" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground font-bold uppercase mb-6 hover:underline">
          <ArrowLeft className="h-5 w-5" />
          Volver al inicio
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-foreground">
              Nuestro Menú
            </h1>
            <p className="text-xl font-bold text-foreground/80 mt-2">
              Todo lo que necesitas para ser feliz
            </p>
            <p className="text-md font-medium text-foreground/70 mt-1 max-w-2xl">
              Acá no hay ensalada. Solo platos con personalidad, sabor intenso y 100% plantas.
            </p>
          </div>
          
          <Image src="/logo-white.png" alt="Esto No Es Ensalada" width={100} height={100} className="hidden md:block brightness-100" />
        </div>
      </div>
    </header>
  );
}
