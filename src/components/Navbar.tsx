import { ShoppingCart, Facebook } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="ANRI & CO" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <h1 className="font-display text-lg font-bold text-gold-gradient leading-tight">ANRI & CO</h1>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Distribution de Vins</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#catalogue" className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase">
            Catalogue
          </a>
          <a href="#about" className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase">
            À Propos
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Facebook size={18} />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
