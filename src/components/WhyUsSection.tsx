import { motion } from "framer-motion";
import { ShieldCheck, Gem, Heart, Clock } from "lucide-react";

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
    text: "Des centaines de clients satisfaits nous font confiance pour leurs événements et leurs plaisirs quotidiens.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="pourquoi" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px gradient-line-h" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] text-accent uppercase font-semibold mb-3">POURQUOI NOUS CHOISIR</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            La confiance méritée par{" "}
            <span className="text-wine-gradient">l'excellence</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Nous nous engageons à fournir des vins de qualité supérieure, avec une attention particulière portée à votre satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card group p-6 rounded-xl text-center"
            >
              {/* Stat badge */}
              <div className="inline-flex items-baseline gap-1 mb-5 px-3 py-1 rounded-full border border-border bg-secondary">
                <span className="font-display text-lg font-bold text-wine-gradient">{reason.stat}</span>
                <span className="font-body text-[10px] text-muted-foreground">{reason.statLabel}</span>
              </div>

              <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                <reason.icon size={24} />
              </div>

              <h3 className="font-display text-base font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
