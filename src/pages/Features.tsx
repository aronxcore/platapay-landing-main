import { Header } from "@/components/Header";
import { Features as FeaturesSection } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-plata-dark">
      <Header />
      <main className="pt-16">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;