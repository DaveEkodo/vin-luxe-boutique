import { Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground/[0.03]">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ANRI & CO" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <h3 className="font-display text-lg font-bold text-gold-gradient">ANRI & CO</h3>
              <p className="font-body text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Distribution de Vins & Services</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-green-500 hover:text-green-600 transition-all"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} ANRI & CO — Distribution de Vins et Prestation de Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
