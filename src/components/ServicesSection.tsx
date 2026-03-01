import { motion } from "framer-motion";
import { Wine, Truck, Star, GlassWater, PartyPopper, Handshake } from "lucide-react";
import wineServiceImg from "@/assets/wine-service.jpg";

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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]">
        <img src={wineServiceImg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-base tracking-[0.25em] text-accent uppercase mb-3">Ce que nous offrons</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nos </span>
            <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Une gamme complète de services pour sublimer votre expérience vinicole.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="wine-card-reveal group bg-background rounded-xl p-8 border border-border transition-all duration-500 hover:border-accent/30 hover:shadow-wine cursor-default"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                <service.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
