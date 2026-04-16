'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  emoji: string
  description: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  decrementItem: (id: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

/**
 * Cart Provider Component
 * @param children - React children
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id)
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const decrementItem = (id: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing?.quantity === 1) {
        return prev.filter((i) => i.id !== id)
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
    })
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        decrementItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/**
 * Hook to use the Cart Context
 */
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
