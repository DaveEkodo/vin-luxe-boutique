import { useState } from "react";
import { motion } from "framer-motion";
import { wines } from "@/data/wines";
import WineCard from "./WineCard";

const categories = ["Tous", "Rouge", "Blanc", "Rosé", "Champagne"] as const;

const WineCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const filteredWines = activeCategory === "Tous" ? wines : wines.filter((w) => w.category === activeCategory);

  return (
    <section id="catalogue" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-base tracking-[0.25em] text-accent uppercase mb-3">Notre Cave</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">La </span>
            <span className="text-gold-gradient">Collection</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Explorez nos crus d'exception et ajoutez vos favoris au panier.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-accent bg-accent text-accent-foreground shadow-wine"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent bg-background"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredWines.map((wine, i) => (
            <WineCard key={wine.id} wine={wine} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineCatalog;
