import { CartItem } from "@/context/cart-context";

export interface CustomerData {
  name: string;
  phone: string;
  address?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  createdAt: string;
}
