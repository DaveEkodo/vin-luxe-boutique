import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WineCatalog from "@/components/WineCatalog";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import WineScrollAnimation from "@/components/WineScrollAnimation";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WineScrollAnimation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WineCatalog />
      <WhyUsSection />
      <ContactSection />
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Index;
