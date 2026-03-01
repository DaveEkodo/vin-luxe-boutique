import { motion } from "framer-motion";
import { MessageCircle, Facebook, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-base tracking-[0.25em] text-accent uppercase mb-3">Restons en contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Nous </span>
            <span className="text-gold-gradient">Contacter</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Une question, une commande spéciale ? N'hésitez pas à nous joindre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group flex flex-col items-center p-8 rounded-xl bg-background border border-border hover:border-green-500/30 transition-all duration-400 hover:shadow-lg cursor-pointer text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-600 mb-4 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:scale-110">
              <MessageCircle size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="font-body text-sm text-muted-foreground">+237 690 411 527</p>
            <p className="font-body text-xs text-green-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Cliquer pour discuter →
            </p>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col items-center p-8 rounded-xl bg-background border border-border hover:border-blue-500/30 transition-all duration-400 hover:shadow-lg cursor-pointer text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 mb-4 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
              <Facebook size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Facebook</h3>
            <p className="font-body text-sm text-muted-foreground">ANRI & CO</p>
            <p className="font-body text-xs text-blue-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Suivez-nous →
            </p>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col items-center p-8 rounded-xl bg-background border border-border text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Localisation</h3>
            <p className="font-body text-sm text-muted-foreground">Cameroun</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
