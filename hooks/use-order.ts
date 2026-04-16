import { CartItem } from "@/context/cart-context";
import { Order, CustomerData } from "@/types/order.type";

/**
 * Hook to manage order creation and history.
 */
export function useOrder() {
  /**
   * Generates a unique, readable order ID inspired by the current date and time.
   * Format: YYMMDD-HHMM-RAND
   */
  const generateOrderId = () => {
    try {
      const lastId = localStorage.getItem('last_sequential_order_id');
      const nextId = lastId ? parseInt(lastId) + 1 : 123;
      localStorage.setItem('last_sequential_order_id', nextId.toString());
      
      const date = new Date();
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      
      // We still include a date prefix so the merchant knows roughly when it was
      // but the main number is the sequential count.
      return `${day}${month}-${nextId}`;
    } catch (e) {
      // Fallback if localStorage fails
      return `ORD-${Math.floor(Math.random() * 1000)}`;
    }
  };

  /**
   * Creates a new order object and saves it to the local history.
   */
  const createOrder = (
    cartItems: CartItem[], 
    total: number, 
    customerData: CustomerData
  ): Order => {
    const order: Order = {
      id: generateOrderId(),
      items: cartItems,
      total,
      customerName: customerData.name,
      customerPhone: customerData.phone,
      customerAddress: customerData.address,
      createdAt: new Date().toISOString()
    };
    
    // Persist to local storage for user history
    try {
      const savedHistory = localStorage.getItem('orders_history');
      const orders = savedHistory ? JSON.parse(savedHistory) : [];
      orders.push(order);
      localStorage.setItem('orders_history', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save order to history:', e);
    }
    
    return order;
  };

  return { createOrder, generateOrderId };
}
