import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgentNetwork } from "@/components/AgentNetwork";
import { AgentSignIn } from "@/components/AgentSignIn";
import { TopUpRequest } from "@/components/TopUpRequest";
import { AdminPaymentModes } from "@/components/AdminPaymentModes";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Wallet } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const [isAdmin, setIsAdmin] = useState(false); // TODO: Implement proper admin authentication
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/application-form");
  };

  return (
    <div className="min-h-screen bg-[#5a2c7f]">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-[#301a49]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff] animate-fade-in">
                Join Our Agent Network
              </h1>
              <p className="text-xl text-[#f5f5f5] mb-8 animate-fade-in">
                Be part of our growing community of financial service providers
              </p>
                <Button 
                className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-lg px-8 py-6"
                onClick={handleButtonClick}
                >
                Apply Now <ArrowRight className="ml-2" />
                </Button>
            </div>
          </div>
        </section>

        {/* Agent Sign In & Top Up Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <AgentSignIn />
              <TopUpRequest />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#ffffff]">
              Benefits of Being an Agent
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b] shadow-plata-xl transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Growing Income</h3>
                <p className="text-[#f5f5f5]">
                  Earn competitive commissions on every transaction you process
                </p>
              </div>
              
              <div className="bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b] shadow-plata-xl transition-all duration-300">
                <Users className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Community Impact</h3>
                <p className="text-[#f5f5f5]">
                  Provide essential financial services to your local community
                </p>
              </div>
              
              <div className="bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b] shadow-plata-xl transition-all duration-300">
                <Wallet className="w-12 h-12 text-[#7fba59] mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Business Growth</h3>
                <p className="text-[#f5f5f5]">
                  Expand your business with our comprehensive support system
                </p>
              </div>
            </div>
          </div>
        </section>

        <AgentNetwork />

        {/* Admin Section */}
        {isAdmin && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <AdminPaymentModes />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Agents;