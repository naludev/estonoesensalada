"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "./constants/nav-links.constant"
import { useCart } from "@/context/cart-context"
import { CartDrawer } from "./components/cart-drawer"

/**
 * Navbar component
 * @returns {JSX.Element} - Navbar component
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Esto No Es Ensalada" width={140} height={40} className="h-10 w-auto" style={{ width: "auto" }} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase text-muted-foreground hover:text-[#53f921] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <CartDrawer>
              <Button variant="ghost" size="icon" aria-label="Ver carrito" className="relative border-2 border-foreground hover:bg-[#f633cc] hover:text-white">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#53f921] text-foreground text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-foreground animate-in zoom-in duration-200">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartDrawer>
          </div>

          <button
            className="md:hidden p-2 border-2 border-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-foreground">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase text-muted-foreground hover:text-[#53f921] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-[#53f921] hover:bg-[#4ae01d] text-foreground font-bold uppercase border-2 border-foreground">
                Pedir Ahora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
