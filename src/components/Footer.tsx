import { Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ANRI & CO" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <h3 className="font-display text-xl font-bold text-gold-gradient">ANRI & CO</h3>
                <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Distribution de Vins</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Distribution de vins et prestation de services. Des crus d'exception sélectionnés avec soin pour votre plaisir.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#catalogue" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Catalogue</a></li>
              <li><a href="#about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">À Propos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Nous Contacter</h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={16} /> +237 690 411 527
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={16} /> Suivez-nous sur Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} ANRI & CO — Distribution de Vins et Prestation de Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
