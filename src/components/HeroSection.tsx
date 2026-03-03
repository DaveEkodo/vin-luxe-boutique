import { motion } from "framer-motion";
import cellarImage from "@/assets/wine-cellar.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Wine cellar background */}
      <div className="absolute inset-0">
        <img src={cellarImage} alt="Cave à vin" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Warm ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-accent/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-[11px] tracking-[0.2em] uppercase text-primary">
              L'Excellence du Vin
            </span>
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
            className="font-elegant text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl"
          >
            ANRI & CO vous propose une collection raffinée de vins prestigieux,
            sélectionnés avec soin des meilleurs vignobles du monde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 bg-wine-gradient px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
            >
              Découvrir nos Vins →
            </a>
            <a
              href="#apropos"
              className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 backdrop-blur-sm px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-foreground/80 font-semibold transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10"
            >
              ▷ En savoir plus
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-10 mt-14 pt-8 border-t border-primary/15"
          >
            {[
              { value: "200+", label: "Références" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-gold-gradient">{stat.value}</p>
                <p className="font-body text-xs text-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line-h" />
    </section>
  );
};

export default HeroSection;