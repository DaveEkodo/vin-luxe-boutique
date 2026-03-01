import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wine-pour.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="wine-separator mb-6 justify-start">
              <span className="font-elegant text-lg tracking-[0.3em] text-accent uppercase italic">
                Depuis notre passion
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-foreground">Des Vins</span>
            <br />
            <span className="text-gold-gradient">d'Exception</span>
            <br />
            <span className="text-foreground">Pour Vous</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-elegant text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-lg italic"
          >
            ANRI & CO vous propose une collection raffinée de vins prestigieux,
            sélectionnés avec soin des meilleurs vignobles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 bg-accent hover:bg-wine-deep px-8 py-4 rounded-lg font-body text-sm tracking-[0.15em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine"
            >
              Découvrir nos Vins
            </a>
            <a
              href="#apropos"
              className="inline-flex items-center gap-2 border-2 border-primary/40 px-8 py-4 rounded-lg font-body text-sm tracking-[0.15em] uppercase text-foreground font-semibold transition-all duration-300 hover:border-primary hover:shadow-gold"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated wine drip decoration */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "120px" }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent/0 via-accent to-accent/0"
      />
    </section>
  );
};

export default HeroSection;
