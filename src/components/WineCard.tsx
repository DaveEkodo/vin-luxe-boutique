import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Wine } from "@/data/wines";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface WineCardProps {
  wine: Wine;
  index: number;
}

const WineCard = ({ wine, index }: WineCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(wine);
    toast.success(`${wine.name} ajouté au panier`, {
      style: { background: "hsl(0 0% 7%)", color: "hsl(43 30% 90%)", border: "1px solid hsl(43 20% 18%)" },
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-gold"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-secondary">
        <img
          src={wine.image}
          alt={wine.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute top-3 left-3 rounded-sm bg-accent/90 px-3 py-1 font-body text-[10px] tracking-[0.15em] uppercase text-accent-foreground font-semibold">
          {wine.category}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-body text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-1">
          {wine.origin} · {wine.year}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{wine.name}</h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {wine.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">{formatPrice(wine.price)}</span>
          <button
            onClick={handleAdd}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground transition-transform hover:scale-110 active:scale-95"
            aria-label={`Ajouter ${wine.name} au panier`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WineCard;
