import { CartItem } from './types';
import { formatPrice, getColorName } from './data';

export const generateWhatsAppMessage = (cartItems: CartItem[]): string => {
  const baseMessage = "¡Hola! Me interesa realizar una compra en Sport Year:\n\n";
  
  const itemsText = cartItems.map(item => {
    const { product, color, size, quantity } = item;
    const colorName = getColorName(color);
    const total = product.price * quantity;
    
    return `📦 *${product.name}*
🏷️ Código: ${product.id}
🎨 Color: ${colorName}
📏 Talla: ${size}
🔢 Cantidad: ${quantity}
💰 Precio: ${formatPrice(total)}
🔗 Link: ${window.location.origin}#producto-${product.id}

`;
  }).join('');
  
  const totalAmount = cartItems.reduce((sum, item) => 
    sum + (item.product.price * item.quantity), 0
  );
  
  const footer = `💳 *Total del pedido: ${formatPrice(totalAmount)}*

¡Espero su confirmación para proceder con el pedido! 🏃‍♂️⚡`;
  
  return baseMessage + itemsText + footer;
};

export const openWhatsApp = (message: string, phoneNumber: string = "573001234567"): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

export const handleWhatsAppCheckout = (cartItems: CartItem[]): void => {
  if (cartItems.length === 0) {
    return;
  }
  
  const message = generateWhatsAppMessage(cartItems);
  openWhatsApp(message);
};