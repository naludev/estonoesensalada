'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOrder } from "@/hooks/use-order";
import { sendWhatsAppToMerchant } from "@/lib/services/callmebot.service";
import { Loader2, User, Phone, MapPin } from "lucide-react";
import { Order } from "@/types/order.type";
import { CartItem } from "@/context/cart-context";

interface CheckoutFormProps {
  cartItems: CartItem[];
  total: number;
  onOrderCreated: (order: Order) => void;
}

/**
 * Premium checkout form for collecting customer details.
 */
export function CheckoutForm({ cartItems, total, onOrderCreated }: CheckoutFormProps) {
  const { createOrder } = useOrder();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Create order with unique ID
    const order = createOrder(cartItems, total, {
      name: formData.name,
      phone: formData.phone,
      address: formData.address
    });
    
    // 2. Send background WhatsApp to merchant
    try {
      await sendWhatsAppToMerchant(order);
    } catch (err) {
      console.error('Merchant notification failed, but order was created locally.', err);
    }
    
    // 3. Move to success state
    onOrderCreated(order);
    setIsSubmitting(false);
  };

  return (
    <Card className="border-3 border-foreground comic-shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="bg-muted border-b-3 border-foreground">
        <CardTitle className="text-2xl font-black uppercase tracking-tight">Datos de Entrega</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-bold uppercase flex items-center gap-2">
              <User className="h-4 w-4 text-[#53f921]" />
              Nombre completo *
            </Label>
            <Input
              id="name"
              required
              className="border-2 border-foreground h-12 focus-visible:ring-0 focus-visible:border-[#53f921] transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ej: Juan Pérez"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-bold uppercase flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#53f921]" />
              WhatsApp de contacto *
            </Label>
            <Input
              id="phone"
              required
              type="tel"
              className="border-2 border-foreground h-12 focus-visible:ring-0 focus-visible:border-[#53f921] transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="099 123 456"
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground font-medium">Te contactaremos a este número para coordinar.</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-bold uppercase flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#53f921]" />
              Dirección de entrega
            </Label>
            <Input
              id="address"
              className="border-2 border-foreground h-12 focus-visible:ring-0 focus-visible:border-[#53f921] transition-all"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Calle, número y barrio"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="pt-4">
            <Button 
                type="submit" 
                className="w-full h-14 bg-[#53f921] hover:bg-[#4ae01d] text-foreground font-black uppercase border-3 border-foreground comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-lg" 
                disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando pedido...
                </>
              ) : (
                "Confirmar mi pedido"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
