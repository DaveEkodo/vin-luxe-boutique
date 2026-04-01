import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, MapPin, Calendar, Wine } from "lucide-react";
import { wines } from "@/data/wines";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const WineDetail = () => {
  const { id } = useParams();
  const wine = wines.find((w) => w.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from || "home";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!wine) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Vin introuvable</h1>
          <Link to="/" className="text-accent hover:underline font-body">← Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(wine);
    toast.success(`${wine.name} ajouté au panier`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

  // Get related wines (same category, exclude current)
  const relatedWines = wines.filter((w) => w.category === wine.category && w.id !== wine.id).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(0 0% 100%)' }}>
      <Navbar />
      <CartDrawer />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => navigate(from === "catalogue" ? "/catalogue" : "/#catalogue")}
              className="inline-flex items-center gap-2 font-body text-sm transition-colors mb-8" style={{ color: 'hsl(30 10% 45%)' }}
            >
              <ArrowLeft size={16} /> {from === "catalogue" ? "Retour au catalogue" : "Retour à l'accueil"}
            </button>
          </motion.div>

          {/* Wine detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] glow-card"
            >
              <img
                src={wine.image}
                alt={wine.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full backdrop-blur-sm px-4 py-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-accent font-bold border border-accent/20" style={{ background: 'hsl(0 0% 97%)' }}>
                {wine.category}
              </span>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5" style={{ color: 'hsl(30 10% 45%)' }}>
                  <MapPin size={14} />
                  <span className="font-body text-xs">{wine.origin}</span>
                </div>
                <div className="flex items-center gap-1.5" style={{ color: 'hsl(30 10% 45%)' }}>
                  <Calendar size={14} />
                  <span className="font-body text-xs">{wine.year}</span>
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(30 15% 15%)' }}>
                {wine.name}
              </h1>

              <p className="font-elegant text-lg mb-6 leading-relaxed" style={{ color: 'hsl(30 10% 35%)' }}>
                {wine.description}
              </p>

              <div className="flex items-center gap-6 mb-8 pb-8" style={{ borderBottomColor: 'hsl(30 10% 85%)', borderBottomWidth: '1px' }}>
                <span className="font-display text-3xl font-bold text-gold-gradient">
                  {formatPrice(wine.price)}
                </span>
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 bg-wine-gradient px-6 py-3 rounded-full font-body text-sm tracking-[0.1em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
                >
                  <Plus size={16} /> Ajouter au panier
                </button>
              </div>

              {/* Story */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wine size={18} className="text-accent" />
                  <h2 className="font-display text-xl font-bold" style={{ color: 'hsl(30 15% 15%)' }}>L'Histoire de ce vin</h2>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-[1.8]">
                  {wine.story}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Related wines */}
          {relatedWines.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="gradient-line-h mb-12" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Vous aimerez aussi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedWines.map((w) => (
                  <Link key={w.id} to={`/vin/${w.id}`} className="glow-card rounded-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img src={w.image} alt={w.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1">{w.origin}</p>
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors">{w.name}</h3>
                      <p className="font-display text-sm font-bold text-gold-gradient mt-2">{formatPrice(w.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WineDetail;