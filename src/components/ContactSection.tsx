import { motion } from "framer-motion";
import { MessageCircle, Facebook, MapPin } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px gradient-line-h" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-card rounded-2xl p-12 text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à commander vos vins ?
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour découvrir notre sélection et passer votre commande.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-wine-gradient px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:shadow-wine hover:scale-105"
            >
              Commander sur WhatsApp
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 rounded-full font-body text-sm tracking-[0.1em] uppercase text-foreground/80 font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
            >
              ♡ WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-card group flex flex-col items-center p-8 rounded-xl text-center cursor-pointer"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 mb-4 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-1">WhatsApp</h3>
            <p className="font-body text-xs text-muted-foreground">+237 690 411 527</p>
          </motion.a>

          <motion.a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glow-card group flex flex-col items-center p-8 rounded-xl text-center cursor-pointer"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
              <Facebook size={24} />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-1">Facebook</h3>
            <p className="font-body text-xs text-muted-foreground">ANRI & CO</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glow-card flex flex-col items-center p-8 rounded-xl text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-1">Localisation</h3>
            <p className="font-body text-xs text-muted-foreground">Cameroun</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
