import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wine-pour.jpg";
import WineGlassIcon from "./WineGlassIcon";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent">
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
              <span className="text-wine-gradient">d'Exception</span>
              <br />
              <span className="text-foreground">Pour Vous</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-lg"
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
                className="inline-flex items-center gap-2 bg-wine-gradient px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
              >
                Découvrir nos Vins →
              </a>
              <a
                href="#apropos"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-foreground/80 font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
              >
                ▷ En savoir plus
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-10 mt-14 pt-8 border-t border-border"
            >
              {[
                { value: "200+", label: "Références" },
                { value: "500+", label: "Clients satisfaits" },
                { value: "24/7", label: "Support disponible" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-wine-gradient">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Wine glass illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative">
              <WineGlassIcon className="w-48 h-72 text-accent/20" filled />
              <div className="absolute inset-0 blur-3xl bg-accent/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line-h" />
    </section>
  );
};

export default HeroSection;
