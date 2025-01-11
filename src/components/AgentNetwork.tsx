import { Users, DollarSign, HeartHandshake, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

export const AgentNetwork = () => {
  return (
    <section className="py-20 bg-[#301a49]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Join Our 80,000+ Strong Agent Network
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <DollarSign className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">Earn Commissions</h3>
            <p className="text-[#9f71b1]">Earn commissions on every transaction</p>
          </div>
          
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <HeartHandshake className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">Serve Your Community</h3>
            <p className="text-[#9f71b1]">Provide essential financial services to your community</p>
          </div>
          
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <GraduationCap className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">Training & Support</h3>
            <p className="text-[#9f71b1]">Access comprehensive training and ongoing support</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-lg px-8 py-6 backdrop-blur-sm">
            Become an Agent
          </Button>
        </div>
      </div>
    </section>
  );
};