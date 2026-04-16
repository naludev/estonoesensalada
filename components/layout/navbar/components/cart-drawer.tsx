'use client'

import React from 'react'
import { Drawer } from 'vaul'
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useToast } from '@/hooks/use-toast'

interface CartDrawerProps {
  children: React.ReactNode
}

export function CartDrawer({ children }: CartDrawerProps) {
  const { items, totalItems, totalPrice, addItem, decrementItem, removeItem, clearCart } = useCart()
  const { toast } = useToast()

  const handleCheckout = () => {
    const orderList = items
      .map((item) => `- ${item.quantity} x ${item.name} ($${item.price * item.quantity})`)
      .join('\n')
    
    const message = `Mi orden es:\n${orderList}\n\nTotal: $${totalPrice}`
    const whatsappUrl = `https://wa.me/59894646481?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    // Feedback
    toast({
      title: "¡Gracias por tu compra!",
      description: "Tu pedido ha sido enviado. Te esperamos en WhatsApp.",
    })

    // Redirect to checkout page
    window.location.href = '/checkout'
  }

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        {children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[100]" />
        <Drawer.Content className="bg-background border-l-2 border-foreground flex flex-col rounded-t-[10px] h-full w-full max-w-md fixed bottom-0 right-0 z-[101] outline-none">
          <div className="p-6 flex-1 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#53f921] border-2 border-foreground">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <Drawer.Title className="text-2xl font-black uppercase tracking-tight">
                  Tu Bolsa
                </Drawer.Title>
                <Drawer.Description className="sr-only">
                  Resumen de los platos que has añadido a tu pedido.
                </Drawer.Description>
              </div>
              <Drawer.Close asChild>
                <button className="p-2 hover:bg-muted transition-colors border-2 border-foreground">
                  <X className="h-5 w-5" />
                </button>
              </Drawer.Close>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6 opacity-20">
                  <ShoppingBag className="h-12 w-12" />
                </div>
                <p className="text-xl font-bold uppercase mb-2">Tu bolsa está vacía</p>
                <p className="text-muted-foreground">¡Agregá algo rico del menú para empezar!</p>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 -mx-2 px-2">
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                        <div className="text-4xl p-2 bg-muted border-2 border-foreground h-fit">
                          {item.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold uppercase truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <p className="font-black text-[#53f921]">${item.price}</p>
                            <div className="flex items-center border-2 border-foreground bg-background">
                              <button
                                onClick={() => decrementItem(item.id)}
                                className="p-1 hover:bg-[#f633cc] hover:text-white transition-colors border-r-2 border-foreground"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                              <button
                                onClick={() => addItem(item)}
                                className="p-1 hover:bg-[#53f921] transition-colors border-l-2 border-foreground"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="mt-auto pt-8 border-t-4 border-foreground border-dashed">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase">Total ({totalItems} items)</p>
                      <p className="text-3xl font-black text-[#53f921]">${totalPrice}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearCart}
                      className="border-2 border-foreground hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Vaciar
                    </Button>
                  </div>
                  <Button 
                    onClick={handleCheckout}
                    className="w-full h-14 text-lg bg-[#53f921] hover:bg-[#4ae01d] text-foreground font-black uppercase border-3 border-foreground comic-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    Finalizar Pedido
                  </Button>
                </div>
              </>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
