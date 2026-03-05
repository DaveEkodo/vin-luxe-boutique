import { motion } from "framer-motion";
import { Wine, Truck, Star, GlassWater, PartyPopper, Handshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wine,
    title: "Distribution de Vins",
    description: "Sélection et livraison de vins premium issus des meilleurs vignobles pour particuliers et professionnels.",
    color: "from-[hsl(348,65%,48%)] to-[hsl(348,70%,28%)]",
  },
  {
    icon: GlassWater,
    title: "Dégustation Privée",
    description: "Organisez des séances de dégustation sur mesure avec notre sommelier pour découvrir de nouveaux crus.",
    color: "from-[hsl(43,85%,55%)] to-[hsl(43,70%,40%)]",
    featured: true,
  },
  {
    icon: PartyPopper,
    title: "Événements & Réceptions",
    description: "Service traiteur vinicole pour vos événements : mariages, anniversaires, cocktails d'entreprise.",
    color: "from-[hsl(348,55%,62%)] to-[hsl(348,65%,48%)]",
  },
  {
    icon: Star,
    title: "Conseil Personnalisé",
    description: "Accompagnement expert pour choisir les vins parfaits selon vos goûts et vos occasions.",
    color: "from-[hsl(43,90%,70%)] to-[hsl(43,85%,55%)]",
  },
  {
    icon: Truck,
    title: "Livraison à Domicile",
    description: "Service de livraison rapide et soigné pour que vos vins arrivent dans les meilleures conditions.",
    color: "from-[hsl(348,65%,48%)] to-[hsl(43,85%,55%)]",
    featured: true,
  },
  {
    icon: Handshake,
    title: "Partenariats B2B",
    description: "Solutions de distribution pour restaurants, hôtels et cavistes avec des conditions privilégiées.",
    color: "from-[hsl(43,85%,55%)] to-[hsl(348,65%,48%)]",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "hsl(var(--light-bg))" }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30 blur-[120px]" style={{ background: "hsl(348 65% 48% / 0.15)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-30 blur-[100px]" style={{ background: "hsl(43 85% 55% / 0.12)" }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(30 20% 15%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 20% 15%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 mx-auto mb-6 rounded-full bg-wine-gradient"
          />
          <p
            className="font-body text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "hsl(348 65% 48%)" }}
          >
            NOS SERVICES
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "hsl(var(--light-text))" }}
          >
            L'excellence à votre{" "}
            <span className="text-wine-gradient">service</span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "hsl(var(--light-text-muted))" }}
          >
            De la sélection à la livraison, nous vous accompagnons avec passion pour sublimer chaque moment autour du vin.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-8 cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "hsl(var(--light-card))",
                border: "1px solid hsl(var(--light-card-border))",
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "linear-gradient(135deg, hsl(348 65% 48% / 0.03), hsl(43 85% 55% / 0.05))"
              }} />

              {/* Number */}
              <span
                className="absolute top-6 right-6 font-display text-5xl font-bold opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                style={{ color: "hsl(var(--light-text))" }}
              >
                0{i + 1}
              </span>

              {/* Icon */}
              <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                <service.icon size={24} />
              </div>

              <h3
                className="relative z-10 font-display text-xl font-bold mb-3 transition-colors duration-300"
                style={{ color: "hsl(var(--light-text))" }}
              >
                {service.title}
              </h3>

              <p
                className="relative z-10 font-body text-sm leading-relaxed mb-4"
                style={{ color: "hsl(var(--light-text-muted))" }}
              >
                {service.description}
              </p>

              <div className="relative z-10 flex items-center gap-2 font-body text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" style={{ color: "hsl(348 65% 48%)" }}>
                Découvrir <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
