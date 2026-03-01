import { useState } from "react";
import { motion } from "framer-motion";
import { wines } from "@/data/wines";
import WineCard from "./WineCard";

const categories = ["Tous", "Rouge", "Blanc", "Rosé", "Champagne"] as const;

const WineCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredWines = activeCategory === "Tous" ? wines : wines.filter((w) => w.category === activeCategory);

  return (
    <section id="catalogue" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-base tracking-[0.3em] text-primary uppercase mb-3">Notre Sélection</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
            La Collection
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Des crus d'exception sélectionnés avec passion pour satisfaire les palais les plus exigeants.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWines.map((wine, i) => (
            <WineCard key={wine.id} wine={wine} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineCatalog;
