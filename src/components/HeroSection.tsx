import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wine.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-elegant text-lg md:text-xl tracking-[0.3em] text-primary mb-4 uppercase">
            Distribution de Vins d'Exception
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]">
            <span className="text-gold-gradient">L'Art du Vin</span>
            <br />
            <span className="text-foreground">à Votre Portée</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Découvrez notre sélection raffinée de vins prestigieux, soigneusement choisis pour sublimer chaque instant.
          </p>
          <a
            href="#catalogue"
            className="inline-block bg-gold-gradient px-10 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Explorer la Collection
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
