import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WineCatalog from "@/components/WineCatalog";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WineCatalog />
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Index;
