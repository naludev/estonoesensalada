import { Order } from "@/types/order.type";

/**
 * Service to send WhatsApp notifications to the merchant using CallMeBot API.
 * This runs in the background to notify the merchant of new orders.
 */
export async function sendWhatsAppToMerchant(order: Order) {
  const CALLMEBOT_API_KEY = process.env.NEXT_PUBLIC_CALLMEBOT_API_KEY;
  const MERCHANT_PHONE = process.env.NEXT_PUBLIC_MERCHANT_PHONE;
  
  if (!CALLMEBOT_API_KEY || !MERCHANT_PHONE) {
    console.error('CallMeBot credentials missing in environment variables');
    return false;
  }

  // Format the item list for the message
  const itemsList = order.items.map(item => 
    `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
  ).join('\n');
  
  const message = `🆕 *NUEVO PEDIDO* 🆕\n\n` +
    `*📋 Pedido No:* ${order.id}\n` +
    `*👤 Cliente:* ${order.customerName}\n` +
    `*📱 WhatsApp:* ${order.customerPhone}\n` +
    `*📍 Dirección:* ${order.customerAddress || 'A confirmar'}\n` +
    `*💰 Total:* $${order.total.toLocaleString()}\n\n` +
    `*📦 Detalles:*\n${itemsList}\n\n` +
    `_El cliente pagará al retirar/entrega_`;
  
  // CallMeBot API uses URL parameters for the phone and text
  const url = `https://api.callmebot.com/whatsapp.php?phone=${MERCHANT_PHONE}&text=${encodeURIComponent(message)}&apikey=${CALLMEBOT_API_KEY}`;
  
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log('WhatsApp notification status:', result);
    return true;
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return false;
  }
}
