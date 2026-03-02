import { useState, useEffect } from "react";
import { ShoppingCart, Facebook, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Pourquoi Nous", href: "#pourquoi" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#accueil" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="ANRI & CO"
              className="h-11 w-11 rounded-full object-cover border border-accent/30 group-hover:border-accent transition-colors duration-300"
            />
            <div>
              <h1 className="font-display text-lg font-bold text-gold-gradient leading-tight">ANRI & CO</h1>
              <p className="font-body text-[8px] tracking-[0.3em] text-muted-foreground uppercase">Distribution de Vins</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="story-link font-body text-[11px] tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-wine"
            >
              <Facebook size={14} />
            </a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-gold"
            >
              <ShoppingCart size={14} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-wine-gradient px-5 py-2.5 rounded-full font-body text-[10px] tracking-[0.15em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
            >
              Commander
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
        {/* Bottom gradient line */}
        {scrolled && <div className="gradient-line-h" />}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-card border-l border-border p-8 flex flex-col"
            >
              <button onClick={() => setMobileOpen(false)} className="self-end mb-8 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-lg text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
