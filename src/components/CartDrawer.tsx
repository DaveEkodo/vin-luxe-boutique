import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "237690411527";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "🍷 *Nouvelle Commande - ANRI & CO*\n\n";
    items.forEach((item, i) => {
      message += `${i + 1}. *${item.wine.name}* (${item.wine.category})\n`;
      message += `   Quantité: ${item.quantity} × ${formatPrice(item.wine.price)}\n`;
      message += `   Sous-total: ${formatPrice(item.wine.price * item.quantity)}\n\n`;
    });
    message += `━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: ${formatPrice(totalPrice)}*\n\n`;
    message += `Merci de confirmer ma commande.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md border-l border-border bg-card flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-5">
              <h2 className="font-display text-xl font-bold text-gold-gradient">Votre Panier</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <p className="font-elegant text-lg italic">Votre panier est vide</p>
                  <p className="font-body text-xs mt-2">Explorez notre collection pour commencer</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.wine.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 rounded-sm border border-border p-3"
                  >
                    <img src={item.wine.image} alt={item.wine.name} className="h-20 w-16 rounded-sm object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-semibold text-foreground truncate">{item.wine.name}</h4>
                      <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{item.wine.category}</p>
                      <p className="font-body text-sm text-primary font-semibold mt-1">{formatPrice(item.wine.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.wine.id, item.quantity - 1)} className="h-7 w-7 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.wine.id, item.quantity + 1)} className="h-7 w-7 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                          <Plus size={12} />
                        </button>
                        <button onClick={() => removeFromCart(item.wine.id)} className="ml-auto h-7 w-7 flex items-center justify-center rounded-sm text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">Total</span>
                  <span className="font-display text-2xl font-bold text-gold-gradient">{formatPrice(totalPrice)}</span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-sm font-body text-sm tracking-[0.1em] uppercase font-semibold transition-colors"
                >
                  <MessageCircle size={20} />
                  Commander via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
