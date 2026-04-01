import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { wines } from "@/data/wines";
import WineCard from "@/components/WineCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const categories = ["Tous", "Rouge", "Blanc", "Rosé", "Champagne"] as const;
const WINES_PER_PAGE = 6;

const CataloguePage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredWines = useMemo(() => {
    let result = wines;
    if (activeCategory !== "Tous") {
      result = result.filter((w) => w.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.origin.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  const totalPages = Math.ceil(filteredWines.length / WINES_PER_PAGE);
  const paginatedWines = filteredWines.slice(
    (currentPage - 1) * WINES_PER_PAGE,
    currentPage * WINES_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen" style={{ background: 'hsl(0 0% 100%)' }}>
      <Navbar />
      <CartDrawer />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.3em] text-accent uppercase font-semibold mb-3">
              NOTRE CAVE
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(30 15% 15%)' }}>
              La <span className="text-gold-gradient">Collection</span>
            </h1>
            <p className="font-body text-sm max-w-lg mx-auto" style={{ color: 'hsl(30 10% 45%)' }}>
              Explorez nos crus d'exception et ajoutez vos favoris au panier.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 space-y-6"
          >
            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Rechercher un vin, une région..."
                className="w-full pl-11 pr-4 py-3 rounded-full border font-body text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                style={{ borderColor: 'hsl(30 10% 85%)', background: 'hsl(0 0% 97%)', color: 'hsl(30 15% 15%)', }}
                
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <SlidersHorizontal
                size={16}
                className="text-muted-foreground self-center mr-2"
              />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`font-body text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-accent bg-accent text-accent-foreground shadow-wine"
                      : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent bg-card"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="font-body text-xs text-muted-foreground mb-6 text-center">
            {filteredWines.length} vin{filteredWines.length !== 1 ? "s" : ""} trouvé
            {filteredWines.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          {paginatedWines.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedWines.map((wine, i) => (
                <WineCard key={wine.id} wine={wine} index={i} from="catalogue" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-xl text-muted-foreground">
                Aucun vin trouvé
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Essayez un autre terme de recherche ou filtre.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="font-body text-xs tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:border-accent/40 hover:text-accent bg-card transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Précédent
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`font-body text-xs w-10 h-10 rounded-full border transition-all duration-300 ${
                      currentPage === page
                        ? "border-accent bg-accent text-accent-foreground shadow-wine"
                        : "border-border text-muted-foreground hover:border-accent/40 hover:text-accent bg-card"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="font-body text-xs tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:border-accent/40 hover:text-accent bg-card transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CataloguePage;
