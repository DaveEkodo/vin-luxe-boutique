import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wine, Grape, Star, ChevronDown } from "lucide-react";
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
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
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
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.15, 0.35, 0.15],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute rounded-full blur-[100px] pointer-events-none`}
    style={{
      background: color,
      width: size,
      height: size,
      top,
      left,
    }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax wine cellar background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={cellarImage} alt="Cave à vin" className="h-[130%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,8%)]/70 via-[hsl(30,20%,8%)]/40 to-[hsl(30,20%,8%)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(348,65%,48%)]/10 via-transparent to-[hsl(43,85%,55%)]/10" />
      </motion.div>

      {/* Animated glow orbs */}
      <GlowOrb color="hsl(348 65% 48%)" size="400px" top="10%" left="10%" delay={0} />
      <GlowOrb color="hsl(43 85% 55%)" size="350px" top="60%" left="70%" delay={2} />
      <GlowOrb color="hsl(348 55% 62%)" size="300px" top="40%" left="50%" delay={4} />

      {/* Floating wine-themed elements */}
      <FloatingElement delay={0} duration={8} x={15} y={-25} className="top-[15%] left-[8%]">
        <Wine size={28} className="text-accent/40" />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={7} x={-10} y={-20} className="top-[20%] right-[12%]">
        <Grape size={24} className="text-primary/40" />
      </FloatingElement>
      <FloatingElement delay={3} duration={9} x={20} y={-15} className="bottom-[30%] left-[15%]">
        <Star size={16} className="text-primary/30" />
      </FloatingElement>
      <FloatingElement delay={2} duration={6} x={-15} y={-30} className="top-[45%] right-[8%]">
        <Wine size={20} className="text-accent/30" />
      </FloatingElement>
      <FloatingElement delay={4} duration={10} x={10} y={-18} className="bottom-[25%] right-[20%]">
        <Grape size={18} className="text-primary/25" />
      </FloatingElement>
      <FloatingElement delay={0.5} duration={7} x={-8} y={-22} className="top-[65%] left-[5%]">
        <Star size={12} className="text-primary/20" />
      </FloatingElement>

      {/* Floating decorative circles */}
      <FloatingElement delay={1} duration={12} x={5} y={-10} className="top-[25%] left-[25%]">
        <div className="w-3 h-3 rounded-full bg-primary/20 backdrop-blur-sm" />
      </FloatingElement>
      <FloatingElement delay={3.5} duration={10} x={-12} y={-15} className="top-[55%] right-[25%]">
        <div className="w-2 h-2 rounded-full bg-accent/25" />
      </FloatingElement>
      <FloatingElement delay={5} duration={8} x={8} y={-12} className="bottom-[40%] left-[40%]">
        <div className="w-4 h-4 rounded-full border border-primary/15" />
      </FloatingElement>

      {/* Main content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
        {/* Ornamental top corner */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-40 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
        />

        {/* Logo with animated ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative mb-8"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] rounded-full border border-dashed border-primary/25"
          />
          {/* Pulsing outer glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-20px] rounded-full bg-primary/10 blur-xl"
          />
          <img
            src={logo}
            alt="ANRI & CO"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_80px_-10px_hsl(43_85%_55%/0.5)] relative z-10"
          />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider leading-none"
        >
          <span className="text-gold-gradient drop-shadow-[0_4px_40px_hsl(43_85%_55%/0.4)]">ANRI</span>
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-foreground/80 mx-3 md:mx-5 font-elegant text-5xl md:text-6xl lg:text-7xl align-middle"
          >
            &
          </motion.span>
          <span className="text-gold-gradient drop-shadow-[0_4px_40px_hsl(43_85%_55%/0.4)]">CO</span>
        </motion.h1>

        {/* Decorative diamond separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center gap-3 my-6"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-accent/50" />
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2.5 h-2.5 rotate-45 border border-accent/60 bg-accent/10"
          />
          <div className="w-12 h-px bg-accent/40" />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
          />
          <div className="w-12 h-px bg-primary/40" />
          <motion.div
            animate={{ rotate: [360, 180, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-2.5 h-2.5 rotate-45 border border-primary/60 bg-primary/10"
          />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/60 tracking-[0.2em] uppercase mb-3"
        >
          L'élégance du vin
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-elegant text-lg md:text-xl text-accent/60 tracking-[0.15em] italic mb-12"
        >
          La passion du goût
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-5 mb-16"
        >
          <a
            href="#catalogue"
            className="group relative inline-flex items-center gap-3 bg-wine-gradient px-10 py-4 rounded-full font-body text-sm tracking-[0.12em] uppercase text-foreground font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-10px_hsl(348_65%_48%/0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Wine size={16} />
              Découvrir nos Vins
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <a
            href="#apropos"
            className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 backdrop-blur-md px-10 py-4 rounded-full font-body text-sm tracking-[0.12em] uppercase text-foreground/70 font-semibold transition-all duration-500 hover:border-primary/50 hover:text-foreground hover:bg-primary/10 hover:shadow-[0_0_40px_-10px_hsl(43_85%_55%/0.3)]"
          >
            En savoir plus
          </a>
        </motion.div>

        {/* Stats with floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {[
            { value: "200+", label: "Références", icon: Wine },
            { value: "500+", label: "Clients satisfaits", icon: Star },
            { value: "24/7", label: "Support disponible", icon: Grape },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative flex flex-col items-center px-8 py-5 rounded-2xl border border-foreground/10 bg-background/30 backdrop-blur-lg group cursor-default"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
              >
                <stat.icon size={16} className="text-primary/50 mb-2" />
              </motion.div>
              <p className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">{stat.value}</p>
              <p className="font-body text-[10px] text-foreground/40 mt-1 tracking-wider uppercase">{stat.label}</p>
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.span
          className="font-body text-[9px] tracking-[0.3em] uppercase text-foreground/30"
        >
          Défiler
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-primary/40" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient lines */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gradient-line-h" />
        <div className="h-20 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
