import { Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const FACEBOOK_URL = "https://www.facebook.com/share/1AzwoxtcCp/?mibextid=wwXIfr";
const WHATSAPP_URL = "https://wa.me/237690411527";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ANRI & CO" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <h3 className="font-display text-lg font-bold text-gold-gradient">ANRI & CO</h3>
                <p className="font-body text-[8px] tracking-[0.2em] uppercase text-muted-foreground">Distribution de Vins</p>
              </div>
            </div>
            <p className="font-body text-xs leading-relaxed mb-4 text-muted-foreground">
              Votre partenaire vinicole de confiance au Cameroun.
            </p>
            <div className="flex gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-green-500 hover:text-green-400 transition-all">
                <MessageCircle size={14} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-500 hover:text-blue-400 transition-all">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4" style={{ color: 'hsl(30 15% 15%)' }}>Liens rapides</h4>
            <div className="space-y-2">
              {["Accueil", "À propos", "Services", "Catalogue"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '').replace('à', 'a')}`} className="block font-body text-xs hover:text-accent transition-colors" style={{ color: 'hsl(30 10% 40%)' }}>{l}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold mb-4" style={{ color: 'hsl(30 15% 15%)' }}>Nos services</h4>
            <div className="space-y-2">
              {["Distribution de vins", "Dégustation privée", "Événements", "Conseil personnalisé", "Livraison"].map((s) => (
                <p key={s} className="font-body text-xs" style={{ color: 'hsl(30 10% 40%)' }}>{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold mb-4" style={{ color: 'hsl(30 15% 15%)' }}>Contact</h4>
            <div className="space-y-2">
              <p className="font-body text-xs" style={{ color: 'hsl(30 10% 40%)' }}>📍 Cameroun</p>
              <p className="font-body text-xs" style={{ color: 'hsl(30 10% 40%)' }}>📞 +237 690 411 527</p>
              <p className="font-body text-xs" style={{ color: 'hsl(30 10% 40%)' }}>💬 WhatsApp disponible</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 text-center">
          <p className="font-body text-[10px]" style={{ color: 'hsl(30 10% 50%)' }}>
            © {new Date().getFullYear()} ANRI & CO — Distribution de Vins et Prestation de Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
