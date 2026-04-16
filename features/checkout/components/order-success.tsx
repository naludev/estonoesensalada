'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Copy, Check, ShoppingBag, Truck, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Order } from "@/types/order.type";

interface OrderSuccessProps {
  order: Order;
  onNewOrder: () => void;
}

/**
 * Animated and visually rich order success component.
 */
export function OrderSuccess({ order, onNewOrder }: OrderSuccessProps) {
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const { toast } = useToast();

  const getWhatsAppUrl = () => {
    const itemsList = order.items.map(item => 
      `• ${item.quantity} x ${item.name}`
    ).join('\n');
    
    const message = `¡Hola! 👋 Mi pedido es el *${order.id}*\n\n` +
      `*Detalle de mi orden:*\n${itemsList}\n\n` +
      `*Total:* $${order.total.toLocaleString()}\n\n` +
      `Quedo a la espera de la confirmación. ¡Gracias!`;
      
    return `https://wa.me/59894646481?text=${encodeURIComponent(message)}`;
  };

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(order.id);
    setCopied(true);
    toast({ title: "¡Copiado!", description: "Número de pedido copiado al portapapeles" });
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  // Auto-redirect effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          openWhatsApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
      {/* Celebration Header */}
      <div className="text-center">
        <div className="text-8xl mb-6 inline-block animate-bounce">🎉</div>
        <h1 className="text-4xl font-black uppercase tracking-tight mb-2">¡Pedido Confirmado!</h1>
        <p className="text-muted-foreground text-lg font-medium italic">"Acá no hay ensaladas, solo buenas noticias por venir."</p>
      </div>

      {/* Unique Order ID Card */}
      <Card className="border-4 border-foreground bg-[#53f921] comic-shadow-lg p-1">
        <CardContent className="bg-background p-8 text-center border-2 border-foreground">
          <p className="text-sm font-black uppercase text-muted-foreground mb-2">Tu número de orden es:</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-[#f633cc]">
              {order.id}
            </p>
            <Button size="icon" variant="outline" onClick={copyOrderNumber} className="border-2 border-foreground hover:bg-[#53f921] h-12 w-12 transition-colors">
              {copied ? <Check className="h-6 w-6 text-foreground" /> : <Copy className="h-6 w-6" />}
            </Button>
          </div>
          <p className="text-xs font-bold text-muted-foreground flex items-center justify-center gap-2">
            <span className="h-2 w-2 bg-[#53f921] rounded-full animate-pulse" />
            {countdown > 0 
              ? `Redirigiendo a WhatsApp en ${countdown} segundos...` 
              : "Abriendo WhatsApp..."}
          </p>
        </CardContent>
      </Card>

      {/* Summary Recap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-3 border-foreground">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-[#f633cc]/10 border-2 border-[#f633cc] rounded-full">
               <Truck className="h-6 w-6 text-[#f633cc]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-muted-foreground">Dirección</p>
              <p className="font-bold">{order.customerAddress || 'Coordinar con el local'}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-3 border-foreground">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-[#53f921]/10 border-2 border-[#53f921] rounded-full">
               <Phone className="h-6 w-6 text-[#53f921]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-muted-foreground">Contacto</p>
              <p className="font-bold">{order.customerPhone}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4 pt-4">
        <Button 
          onClick={openWhatsApp}
          className="w-full h-16 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 text-xl font-black uppercase border-3 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Consultar por WhatsApp
        </Button>

        <Button 
          onClick={onNewOrder}
          variant="outline"
          className="w-full h-14 border-3 border-foreground font-black uppercase tracking-tight hover:bg-muted"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Hacer otro pedido
        </Button>
      </div>

      <p className="text-sm text-center font-bold text-muted-foreground max-w-sm mx-auto">
        Te llegará un mensaje de confirmación una vez que tu pedido esté en camino. ¡Buen provecho!
      </p>
    </div>
  );
}
