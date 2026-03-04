import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wine, Grape, Star, ChevronDown, Award, Truck, ShieldCheck } from "lucide-react";
import cellarImage from "@/assets/wine-cellar.jpg";
import logo from "@/assets/logo.jpeg";

const FloatingElement = ({
  children,
  delay = 0,
  duration = 6,
  x = 0,
  y = -20,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.7, 0.4, 0.7, 0],
      y: [0, y, 0, y / 2, 0],
      x: [0, x, 0, -x / 2, 0],
      rotate: [0, 5, -5, 3, 0],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
);

const GlowOrb = ({
  color,
  size,
  top,
  left,
  delay = 0,
}: {
  color: string;
  size: string;
  top: string;
  left: string;
  delay?: number;
}) => (
  <motion.div
    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute rounded-full blur-[100px] pointer-events-none"
    style={{ background: color, width: size, height: size, top, left }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="accueil" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Parallax wine cellar background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={cellarImage} alt="Cave à vin luxueuse ANRI & CO" className="h-[140%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,8%)]/75 via-[hsl(30,20%,8%)]/45 to-[hsl(30,20%,8%)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(348,65%,48%)]/8 via-transparent to-[hsl(43,85%,55%)]/8" />
      </motion.div>

      {/* Glow orbs */}
      <GlowOrb color="hsl(348 65% 48%)" size="400px" top="10%" left="10%" />
      <GlowOrb color="hsl(43 85% 55%)" size="350px" top="60%" left="70%" delay={2} />
      <GlowOrb color="hsl(348 55% 62%)" size="250px" top="35%" left="45%" delay={4} />

      {/* Floating elements */}
      <FloatingElement delay={0} duration={8} x={15} y={-25} className="top-[12%] left-[8%]">
        <Wine size={28} className="text-accent/30" />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={7} x={-10} y={-20} className="top-[18%] right-[12%]">
        <Grape size={24} className="text-primary/35" />
      </FloatingElement>
      <FloatingElement delay={3} duration={9} x={20} y={-15} className="bottom-[30%] left-[12%]">
        <Star size={16} className="text-primary/25" />
      </FloatingElement>
      <FloatingElement delay={2} duration={6} x={-15} y={-30} className="top-[50%] right-[6%]">
        <Wine size={20} className="text-accent/25" />
      </FloatingElement>
      <FloatingElement delay={4} duration={10} x={10} y={-18} className="bottom-[22%] right-[18%]">
        <Grape size={18} className="text-primary/20" />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={7} x={-8} y={-22} className="top-[70%] left-[5%]">
        <Star size={12} className="text-primary/15" />
      </FloatingElement>
      <FloatingElement delay={1} duration={12} x={5} y={-10} className="top-[25%] left-[30%]">
        <div className="w-3 h-3 rounded-full bg-primary/15" />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={10} x={-12} y={-15} className="top-[55%] right-[28%]">
        <div className="w-2 h-2 rounded-full bg-accent/20" />
      </FloatingElement>

      {/* Main content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 container mx-auto px-4 pt-28 pb-20 flex flex-col items-center text-center">
        
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8"
        >
          <Award size={14} className="text-primary" />
          <span className="font-body text-[11px] tracking-[0.15em] uppercase text-primary font-medium">
            Distributeur de vins d'exception depuis 2014
          </span>
        </motion.div>

        {/* Logo with animated ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] rounded-full border border-dashed border-primary/20"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-20px] rounded-full bg-primary/10 blur-xl"
          />
          <img
            src={logo}
            alt="ANRI & CO"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_80px_-10px_hsl(43_85%_55%/0.5)] relative z-10"
          />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wider leading-none mb-2"
        >
          <span className="text-gold-gradient drop-shadow-[0_4px_40px_hsl(43_85%_55%/0.4)]">ANRI</span>
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-foreground/80 mx-3 md:mx-5 font-elegant text-4xl md:text-5xl lg:text-6xl align-middle"
          >
            &
          </motion.span>
          <span className="text-gold-gradient drop-shadow-[0_4px_40px_hsl(43_85%_55%/0.4)]">CO</span>
        </motion.h1>

        {/* Decorative separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center gap-3 my-5"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rotate-45 border border-accent/60 bg-accent/10"
          />
          <div className="w-10 h-px bg-accent/40" />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
          />
          <div className="w-10 h-px bg-primary/40" />
          <motion.div
            animate={{ rotate: [360, 180, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rotate-45 border border-primary/60 bg-primary/10"
          />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Main description - rich text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto mb-4"
        >
          <p className="font-elegant text-2xl md:text-3xl lg:text-4xl text-foreground/70 tracking-[0.1em] leading-relaxed">
            Votre partenaire privilégié en{" "}
            <span className="text-wine-gradient font-semibold">vins d'exception</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="font-body text-sm md:text-base text-foreground/45 max-w-xl mx-auto leading-relaxed mb-4"
        >
          De la sélection rigoureuse à la livraison soignée, nous vous accompagnons 
          dans la découverte des meilleurs crus. Chaque bouteille raconte une histoire, 
          chaque saveur est une invitation au voyage.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-elegant text-lg md:text-xl text-accent/50 tracking-[0.12em] italic mb-10"
        >
          « L'élégance du vin, la passion du goût »
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <a
            href="#catalogue"
            className="group relative inline-flex items-center gap-3 bg-wine-gradient px-10 py-4 rounded-full font-body text-sm tracking-[0.12em] uppercase text-foreground font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-10px_hsl(348_65%_48%/0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Wine size={16} />
              Découvrir nos Vins
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#apropos"
            className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 backdrop-blur-md px-10 py-4 rounded-full font-body text-sm tracking-[0.12em] uppercase text-foreground/70 font-semibold transition-all duration-500 hover:border-primary/50 hover:text-foreground hover:bg-primary/10 hover:shadow-[0_0_40px_-10px_hsl(43_85%_55%/0.3)]"
          >
            Notre Histoire
          </a>
        </motion.div>

        {/* Trust indicators - 3 pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-3xl mb-10"
        >
          {[
            { icon: ShieldCheck, title: "Qualité Certifiée", desc: "Vins sélectionnés avec rigueur auprès des meilleurs domaines" },
            { icon: Truck, title: "Livraison Soignée", desc: "Expédition rapide et emballage premium pour chaque commande" },
            { icon: Award, title: "Expertise 10+ ans", desc: "Une décennie de passion au service des amateurs de vin" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center px-5 py-5 rounded-2xl border border-foreground/8 bg-background/20 backdrop-blur-lg group"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <item.icon size={18} />
              </motion.div>
              <h3 className="font-display text-sm font-bold text-foreground/90 mb-1">{item.title}</h3>
              <p className="font-body text-[11px] text-foreground/40 leading-relaxed text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 pt-6 border-t border-foreground/8"
        >
          {[
            { value: "200+", label: "Références" },
            { value: "500+", label: "Clients satisfaits" },
            { value: "10+", label: "Années d'expérience" },
            { value: "24/7", label: "Support disponible" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">{stat.value}</p>
              <p className="font-body text-[10px] text-foreground/35 mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-foreground/25">Défiler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} className="text-primary/35" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gradient-line-h" />
        <div className="h-20 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
