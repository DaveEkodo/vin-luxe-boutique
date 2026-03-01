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
    toast.success(`${wine.name} ajouté au panier`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-background border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-gold"
    >
      {/* Image with wine pour overlay on hover */}
      <div className="relative h-72 overflow-hidden bg-secondary">
        <img
          src={wine.image}
          alt={wine.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Wine pour effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Animated wine drip on hover */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-0 bg-gradient-to-b from-accent via-accent/80 to-transparent rounded-full transition-all duration-700 group-hover:h-24 opacity-0 group-hover:opacity-70" />
        
        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-lg bg-background/90 backdrop-blur-sm px-3 py-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-accent font-bold border border-accent/20">
          {wine.category}
        </span>
        
        {/* Year badge */}
        <span className="absolute top-4 right-4 rounded-lg bg-background/90 backdrop-blur-sm px-3 py-1.5 font-display text-sm text-primary font-semibold">
          {wine.year}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
          {wine.origin}
        </p>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {wine.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {wine.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-display text-xl font-bold text-gold-gradient">{formatPrice(wine.price)}</span>
          <button
            onClick={handleAdd}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-wine active:scale-95"
            aria-label={`Ajouter ${wine.name} au panier`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WineCard;
