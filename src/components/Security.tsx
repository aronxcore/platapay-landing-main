import { Shield, Lock, Clock } from "lucide-react";

export const Security = () => {
  return (
    <section className="py-20 bg-[#301a49]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Your Security, Our Priority
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <Shield className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">BSP Compliant</h3>
            <p className="text-[#9f71b1]">
              Fully compliant with Bangko Sentral ng Pilipinas (BSP) regulations
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <Lock className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">Advanced Security</h3>
            <p className="text-[#9f71b1]">
              State-of-the-art fraud detection and data encryption systems
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
            <Clock className="w-11 h-11 text-[#7fba59] mb-4" />
            <h3 className="text-lg font-bold mb-3 text-[#ffffff]">24/7 Monitoring</h3>
            <p className="text-[#9f71b1]">
              Round-the-clock monitoring for secure transactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};