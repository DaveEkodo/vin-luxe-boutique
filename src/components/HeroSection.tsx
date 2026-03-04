import { motion } from "framer-motion";
import cellarImage from "@/assets/wine-cellar.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wine cellar background */}
      <div className="absolute inset-0">
        <img src={cellarImage} alt="Cave à vin" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,8%)]/80 via-[hsl(30,20%,8%)]/60 to-[hsl(30,20%,8%)]/90" />
      </div>

      {/* Warm ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
        />

        {/* Logo large & bold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <img
            src={logo}
            alt="ANRI & CO"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-primary/40 shadow-[0_0_60px_-10px_hsl(43_85%_55%/0.4)]"
          />
        </motion.div>

        {/* Brand name - big & ornamental */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide"
        >
          <span className="text-gold-gradient drop-shadow-[0_4px_30px_hsl(43_85%_55%/0.3)]">ANRI</span>
          <span className="text-white/90 mx-2 md:mx-4">&</span>
          <span className="text-gold-gradient drop-shadow-[0_4px_30px_hsl(43_85%_55%/0.3)]">CO</span>
        </motion.h1>

        {/* Decorative separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-4 my-5"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60" />
          <div className="w-2 h-2 rotate-45 border border-primary/60" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-elegant text-xl md:text-2xl text-white/70 tracking-[0.15em] uppercase mb-10"
        >
          L'élégance du vin, la passion du goût
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <a
            href="#catalogue"
            className="inline-flex items-center gap-2 bg-wine-gradient px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-white font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
          >
            Découvrir nos Vins
          </a>
          <a
            href="#apropos"
            className="inline-flex items-center gap-2 border border-white/25 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-white/80 font-semibold transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/10"
          >
            En savoir plus
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex gap-10 md:gap-16 pt-8 border-t border-white/10"
        >
          {[
            { value: "200+", label: "Références" },
            { value: "500+", label: "Clients satisfaits" },
            { value: "24/7", label: "Support disponible" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">{stat.value}</p>
              <p className="font-body text-xs text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line-h" />
    </section>
  );
};

export default HeroSection;
