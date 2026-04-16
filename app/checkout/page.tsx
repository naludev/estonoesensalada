'use client'

import { useState } from "react";
import { CheckoutForm } from "@/features/checkout/components/checkout-form";
import { OrderSuccess } from "@/features/checkout/components/order-success";
import { useCart } from "@/context/cart-context";
import { Card, CardContent } from "@/components/ui/card";
import { Order } from "@/types/order.type";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

/**
 * Main Checkout Page component
 * Manages the state between filling out the customer form and showing order confirmation.
 */
export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [order, setOrder] = useState<Order | null>(null);

  // If order is created, show the success screen
  if (order) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24">
          <OrderSuccess 
            order={order} 
            onNewOrder={() => {
              clearCart();
              setOrder(null);
              window.location.href = '/'; // Go back to start
            }}
          />
        </div>
        <Footer />
      </main>
    );
  }

  // Handle empty cart state
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-muted border-4 border-foreground rounded-full flex items-center justify-center mb-6 halftone-dots">
          <ShoppingCart className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-black uppercase mb-4 tracking-tight">Tu bolsa está vacía</h1>
        <p className="text-muted-foreground mb-8 max-w-sm font-medium">No podés hacer un pedido sin un plato de felicidad en tu bolsa.</p>
        <Link 
          href="/" 
          className="h-14 px-8 inline-flex items-center justify-center bg-[#53f921] hover:bg-[#4ae01d] text-foreground font-black uppercase border-3 border-foreground comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-lg"
        >
          Volver al Menú
        </Link>
      </main>
    );
  }

  // Handle order creation
  const handleOrderCreated = (newOrder: Order) => {
    setOrder(newOrder);
    clearCart();
    
    // Auto-reload back to menu after 8 seconds (gives time for redirect and toast)
    setTimeout(() => {
      window.location.href = '/';
    }, 8000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form Column (Left) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/" className="p-3 border-2 border-foreground hover:bg-muted transition-colors rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-4xl font-black uppercase tracking-tight">Finalizar Pedido</h1>
            </div>
            
            <CheckoutForm 
              cartItems={items}
              total={totalPrice}
              onOrderCreated={handleOrderCreated}
            />
          </div>

          {/* Order Summary Column (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tight">Tu Pedido</h2>
            <Card className="border-3 border-foreground shadow-none">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="font-bold uppercase text-sm leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground font-bold italic">
                           Cantidad: {item.quantity}
                        </p>
                      </div>
                      <p className="font-black text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                  
                  <div className="border-t-4 border-foreground border-dashed pt-6 mt-6">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-black uppercase tracking-tight">Total</span>
                      <span className="font-black text-[#53f921] text-3xl">${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-muted border-2 border-foreground border-dashed p-6 rounded-lg">
              <p className="text-xs font-bold text-muted-foreground italic leading-relaxed">
                * El pedido será confirmado vía WhatsApp. El pago se coordina directamente con el repartidor o al momento de retiro en tienda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
