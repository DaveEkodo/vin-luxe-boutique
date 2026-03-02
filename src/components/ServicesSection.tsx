import { motion } from "framer-motion";
import { Wine, Truck, Star, GlassWater, PartyPopper, Handshake } from "lucide-react";

const services = [
  {
    icon: Wine,
    title: "Distribution de Vins",
    description: "Sélection et livraison de vins premium issus des meilleurs vignobles pour particuliers et professionnels.",
  },
  {
    icon: GlassWater,
    title: "Dégustation Privée",
    description: "Organisez des séances de dégustation sur mesure avec notre sommelier pour découvrir de nouveaux crus.",
    featured: true,
  },
  {
    icon: PartyPopper,
    title: "Événements & Réceptions",
    description: "Service traiteur vinicole pour vos événements : mariages, anniversaires, cocktails d'entreprise.",
  },
  {
    icon: Star,
    title: "Conseil Personnalisé",
    description: "Accompagnement expert pour choisir les vins parfaits selon vos goûts et vos occasions.",
  },
  {
    icon: Truck,
    title: "Livraison à Domicile",
    description: "Service de livraison rapide et soigné pour que vos vins arrivent dans les meilleures conditions.",
    featured: true,
  },
  {
    icon: Handshake,
    title: "Partenariats B2B",
    description: "Solutions de distribution pour restaurants, hôtels et cavistes avec des conditions privilégiées.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px gradient-line-h" />
      <div className="absolute bottom-0 left-0 w-full h-px gradient-line-h" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] text-accent uppercase font-semibold mb-3">NOS SERVICES</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Des solutions vinicoles{" "}
            <span className="text-wine-gradient">adaptées à vos besoins</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Découvrez notre gamme complète de services pour sublimer votre expérience vinicole.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glow-card wine-card-reveal group p-8 rounded-xl cursor-default ${service.featured ? 'border-accent/20' : ''}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-wine">
                <service.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              {service.featured && (
                <p className="font-body text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  En savoir plus →
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
