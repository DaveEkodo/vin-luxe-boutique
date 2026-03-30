import { motion } from "framer-motion";
import { Globe, Users, Award, Settings } from "lucide-react";
import vineyardImg from "@/assets/vineyard.jpg";

const features = [
  { icon: Globe, title: "Présence internationale", desc: "Vins importés des meilleurs vignobles du monde entier" },
  { icon: Users, title: "Équipe d'experts", desc: "Sommeliers et œnologues qualifiés à votre service" },
  { icon: Award, title: "Passion & Excellence", desc: "Une jeune entreprise animée par la passion des vins d'exception" },
  { icon: Settings, title: "Sur mesure", desc: "Sélection personnalisée selon vos goûts et occasions" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px gradient-line-h" />
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-body text-xs tracking-[0.3em] text-accent uppercase font-semibold mb-3">QUI SOMMES-NOUS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Votre partenaire vinicole de{" "}
              <span className="text-wine-gradient">confiance</span>
            </h2>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">ANRI & CO</strong> est une entreprise spécialisée dans la
                distribution de vins d'exception. Notre mission : rendre accessible les meilleurs crus du monde
                pour particuliers et professionnels.
              </p>
              <p>
                Fondée par des passionnés, nous sélectionnons chaque bouteille avec soin
                en parcourant les plus prestigieux vignobles de France et d'ailleurs.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {["Sélection rigoureuse des meilleurs crus", "Accompagnement personnalisé", "Livraison soignée et rapide", "Service événementiel haut de gamme"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Mission box */}
            <div className="mt-10 p-6 glow-card rounded-xl">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Notre Mission</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Nous œuvrons pour démocratiser l'accès aux grands vins, en offrant une expérience
                d'achat premium et un service irréprochable à chacun de nos clients.
              </p>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glow-card p-6 rounded-xl group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
