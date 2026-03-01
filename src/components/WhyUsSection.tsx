import { motion } from "framer-motion";
import { ShieldCheck, Gem, Heart, Leaf, Clock, Award } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Qualité Premium",
    text: "Chaque vin est rigoureusement sélectionné pour sa qualité exceptionnelle.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie d'Authenticité",
    text: "Tous nos vins sont certifiés et proviennent de domaines reconnus.",
  },
  {
    icon: Heart,
    title: "Passion & Expertise",
    text: "Notre équipe de passionnés vous guide dans vos choix vinicoles.",
  },
  {
    icon: Clock,
    title: "Livraison Rapide",
    text: "Recevez vos commandes dans les meilleurs délais et conditions.",
  },
  {
    icon: Leaf,
    title: "Sélection Responsable",
    text: "Nous privilégions les domaines engagés dans une viticulture durable.",
  },
  {
    icon: Award,
    title: "Prix Compétitifs",
    text: "Des vins d'exception à des prix justes, accessibles à tous les budgets.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="pourquoi" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-base tracking-[0.25em] text-accent uppercase mb-3">La différence</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Pourquoi </span>
            <span className="text-gold-gradient">Nous Choisir</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            ANRI & CO se distingue par son engagement envers l'excellence et la satisfaction client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-5 p-6 rounded-xl bg-background/80 border border-border hover:border-primary/30 transition-all duration-400 hover:shadow-gold"
            >
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <reason.icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
