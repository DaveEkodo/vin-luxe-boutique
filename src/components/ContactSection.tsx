import { motion } from "framer-motion";
import { MessageCircle, Facebook, MapPin, Wine, Grape, Star, Sparkles } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const FloatingElement = ({
  children,
  delay = 0,
  duration = 6,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -20, 0, 15, 0],
      x: [0, 10, -8, 5, 0],
      rotate: [0, 8, -5, 3, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const GlowOrb = ({ className, color }: { className: string; color: string }) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    style={{ background: color }}
    animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden bg-background">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px gradient-line-h" />

      {/* Glow orbs */}
      <GlowOrb className="w-[500px] h-[500px] top-10 -right-40" color="hsl(348 65% 48% / 0.12)" />
      <GlowOrb className="w-[400px] h-[400px] bottom-10 -left-32" color="hsl(43 85% 55% / 0.1)" />
      <GlowOrb className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="hsl(348 65% 48% / 0.06)" />

      {/* Floating elements */}
      <FloatingElement x={5} y={15} delay={0} duration={7}>
        <Wine size={20} className="opacity-15" style={{ color: "hsl(348 65% 48%)" }} />
      </FloatingElement>
      <FloatingElement x={90} y={20} delay={1.5} duration={8}>
        <Grape size={18} className="opacity-10" style={{ color: "hsl(43 85% 55%)" }} />
      </FloatingElement>
      <FloatingElement x={15} y={75} delay={2} duration={6}>
        <Star size={14} className="opacity-10" style={{ color: "hsl(43 85% 55%)" }} />
      </FloatingElement>
      <FloatingElement x={85} y={70} delay={3} duration={9}>
        <Sparkles size={16} className="opacity-10" style={{ color: "hsl(348 65% 48%)" }} />
      </FloatingElement>
      <FloatingElement x={50} y={10} delay={0.8} duration={7}>
        <Wine size={16} className="opacity-8" style={{ color: "hsl(43 85% 55%)" }} />
      </FloatingElement>
      <FloatingElement x={70} y={85} delay={2.5} duration={8}>
        <Grape size={14} className="opacity-10" style={{ color: "hsl(348 65% 48%)" }} />
      </FloatingElement>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(43 85% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 85% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 mx-auto mb-6 rounded-full bg-wine-gradient"
          />
          <p className="font-body text-xs tracking-[0.3em] text-accent uppercase font-semibold mb-4">
            CONTACTEZ-NOUS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Parlons de vos{" "}
            <span className="text-wine-gradient">envies</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Que ce soit pour une commande, un conseil ou un événement spécial, notre équipe est à votre écoute pour vous accompagner.
          </p>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-12 text-center mb-16 border border-border/50 overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(30 15% 12%), hsl(30 15% 8%))" }}
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, hsl(43 85% 55% / 0.5), transparent)" }} />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-full mb-6"
            style={{ background: "hsl(348 65% 48% / 0.15)" }}
          >
            <Wine size={28} style={{ color: "hsl(348 65% 48%)" }} />
          </motion.div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Prêt à commander vos vins ?
          </h3>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour découvrir notre sélection exclusive et passer votre commande en toute simplicité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-wine-gradient px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-accent-foreground font-semibold shadow-lg"
              style={{ boxShadow: "0 8px 30px hsl(348 65% 48% / 0.3)" }}
            >
              <MessageCircle size={18} />
              Commander sur WhatsApp
            </motion.a>
            <motion.a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-border/60 px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-foreground/80 font-semibold backdrop-blur-sm transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Facebook size={18} />
              Suivre sur Facebook
            </motion.a>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: WHATSAPP_URL,
              icon: MessageCircle,
              label: "WhatsApp",
              detail: "+237 690 411 527",
              color: "hsl(142 70% 45%)",
              bgColor: "hsl(142 70% 45% / 0.1)",
              delay: 0,
            },
            {
              href: FACEBOOK_URL,
              icon: Facebook,
              label: "Facebook",
              detail: "ANRI & CO",
              color: "hsl(221 75% 55%)",
              bgColor: "hsl(221 75% 55% / 0.1)",
              delay: 0.1,
            },
            {
              href: undefined,
              icon: MapPin,
              label: "Localisation",
              detail: "Cameroun",
              color: "hsl(348 65% 48%)",
              bgColor: "hsl(348 65% 48% / 0.1)",
              delay: 0.2,
            },
          ].map((card) => {
            const Wrapper = card.href ? motion.a : motion.div;
            return (
              <Wrapper
                key={card.label}
                {...(card.href ? { href: card.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay }}
                className="group relative flex flex-col items-center p-8 rounded-2xl text-center cursor-pointer border border-border/30 backdrop-blur-sm overflow-hidden"
                style={{ background: "hsl(30 15% 10% / 0.5)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(circle at center, ${card.bgColor}, transparent 70%)` }} />
                
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: card.bgColor, color: card.color }}
                >
                  <card.icon size={24} />
                </div>
                <h3 className="relative font-display text-base font-bold text-foreground mb-1">{card.label}</h3>
                <p className="relative font-body text-xs text-muted-foreground">{card.detail}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
