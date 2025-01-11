import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AgentNetwork } from "@/components/AgentNetwork";
import { Security } from "@/components/Security";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FeaturesSlider } from "@/components/FeaturesSlider";
import { IntegrationsSlider } from "@/components/IntegrationsSlider";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { MobileAppSection } from "@/components/MobileAppSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturesSlider />
        <HowItWorks />
        <IntegrationsSlider />
        <MobileAppSection />
        <AgentNetwork />
        <TestimonialsSlider />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;