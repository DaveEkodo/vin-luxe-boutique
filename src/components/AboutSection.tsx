import { motion } from "framer-motion";
import vineyardImg from "@/assets/vineyard.jpg";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img src={vineyardImg} alt="Vignoble" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-background rounded-xl p-6 shadow-gold border border-primary/20"
            >
              <p className="font-display text-3xl font-bold text-gold-gradient">10+</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Années d'expérience</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-elegant text-base tracking-[0.25em] text-accent uppercase mb-3">Notre Histoire</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold-gradient">À Propos</span>{" "}
              <span className="text-foreground">d'ANRI & CO</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">ANRI & CO</strong> est une entreprise spécialisée dans la
                distribution de vins d'exception et la prestation de services haut de gamme. Notre mission :
                rendre accessible les meilleurs crus du monde.
              </p>
              <p>
                Fondée par des passionnés du vin, nous sélectionnons chaque bouteille avec un soin méticuleux,
                en parcourant les plus prestigieux vignobles de France et d'ailleurs pour vous offrir une
                expérience gustative inoubliable.
              </p>
              <p>
                Notre expertise s'étend au-delà de la simple distribution — nous accompagnons nos clients dans
                la découverte et l'appréciation de chaque cru, pour que chaque verre raconte une histoire.
              </p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-accent">200+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">Références</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">500+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-accent">15+</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">Partenaires</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
