import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, CreditCard, Send } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#5a2c7f]">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-[#301a49]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff] animate-fade-in">
                Our Services
              </h1>
              <p className="text-xl text-[#f5f5f5] mb-8 animate-fade-in">
                Comprehensive financial solutions for every need
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-[#422360] border-2 border-[#7d4e9b] transition-all duration-300">
                <Wallet className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-lg font-bold mb-4 text-[#ffffff]">Digital Wallet</h3>
                <p className="text-[#f5f5f5] mb-6">
                  Secure and convenient digital wallet for all your transactions
                </p>
                <Button variant="ghost" className="text-[#7fba59] bg-[#5a2c7f] hover:bg-[#2e1844] hover:text-[#517f3a]">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="p-8 rounded-xl bg-[#422360] border-2 border-[#7d4e9b] transition-all duration-300">
                <CreditCard className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-lg font-bold mb-4 text-[#ffffff]">Bill Payments</h3>
                <p className="text-[#f5f5f5] mb-6">
                  Pay your bills quickly and securely through our platform
                </p>
                <Button variant="ghost" className="text-[#7fba59] bg-[#5a2c7f] hover:bg-[#2e1844] hover:text-[#517f3a]">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="p-8 rounded-xl bg-[#422360] border-2 border-[#7d4e9b] transition-all duration-300">
                <Send className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-lg font-bold mb-4 text-[#ffffff]">Money Transfer</h3>
                <p className="text-[#f5f5f5] mb-6">
                  Send money locally and internationally with ease
                </p>
                <Button variant="ghost" className="text-[#7fba59] bg-[#5a2c7f] hover:bg-[#2e1844] hover:text-[#517f3a]">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default Services;