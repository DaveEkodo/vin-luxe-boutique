import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Gem, Heart, Clock } from "lucide-react";
import wineService from "@/assets/wine-service.jpg";

const reasons = [
  {
    icon: Gem,
    stat: "100%",
    statLabel: "Qualité",
    title: "Qualité Premium",
    text: "Chaque vin est rigoureusement sélectionné pour sa qualité exceptionnelle et son authenticité.",
  },
  {
    icon: ShieldCheck,
    stat: "10+",
    statLabel: "Années",
    title: "Expertise reconnue",
    text: "Une décennie d'expérience dans la sélection et la distribution de vins d'exception.",
  },
  {
    icon: Clock,
    stat: "24/7",
    statLabel: "Disponibilité",
    title: "Suivi permanent",
    text: "Notre équipe est disponible jour et nuit pour répondre à vos questions et commandes.",
  },
  {
    icon: Heart,
    stat: "500+",
    statLabel: "Clients",
    title: "Satisfaction garantie",
    text: "Des centaines de clients satisfaits nous font confiance pour leurs événements et plaisirs quotidiens.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="pourquoi" className="py-28 px-4 relative overflow-hidden" style={{ background: "hsl(40 30% 97%)" }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(43 85% 55% / 0.3), transparent)" }} />

      {/* Subtle background accents for white */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-10" style={{ background: "hsl(348 65% 48% / 0.15)" }} />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10" style={{ background: "hsl(43 85% 55% / 0.1)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Two-column layout: image + content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={wineService}
                alt="Service vinicole ANRI & CO"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 backdrop-blur-xl rounded-xl p-5 border border-white/10"
                style={{ background: "hsl(30 15% 15% / 0.8)" }}
              >
                <div className="flex items-center justify-between">
                  {reasons.map((r, i) => (
                    <div key={r.stat} className="text-center">
                      <p className="font-display text-2xl font-bold text-gold-gradient">{r.stat}</p>
                      <p className="font-body text-[10px] text-white/60 uppercase tracking-wider">{r.statLabel}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "hsl(348 65% 48% / 0.4)" }} />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "hsl(43 85% 55% / 0.4)" }} />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-12 h-1 mb-6 rounded-full bg-wine-gradient origin-left"
            />
            <p className="font-body text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "hsl(348 65% 48%)" }}>
              POURQUOI NOUS CHOISIR
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "hsl(30 15% 15%)" }}>
              La confiance méritée par{" "}
              <span className="text-wine-gradient">l'excellence</span>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-10 max-w-md" style={{ color: "hsl(30 10% 40%)" }}>
              Nous nous engageons à fournir des vins de qualité supérieure, avec une attention particulière portée à votre satisfaction et à l'authenticité de chaque bouteille.
            </p>

            {/* Reasons list */}
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300" style={{ background: "transparent" }}
                  whileHover={{ backgroundColor: "hsl(40 30% 93%)" }}
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110" style={{ background: "hsl(348 65% 48% / 0.1)", color: "hsl(348 65% 48%)" }}>
                    <reason.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold mb-1 transition-colors duration-300" style={{ color: "hsl(30 15% 15%)" }}>
                      {reason.title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
                      {reason.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
