import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#301a49]">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-[#5a2c7f]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff] animate-fade-in">
                About PlataPay
              </h1>
              <p className="text-xl text-[#f5f5f5] mb-8 animate-fade-in">
                Empowering communities through innovative financial solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-xl bg-[#422360] border-2 border-[#7d4e9b] hover:bg-[#5a2c7f] transition-all duration-300">
                <Target className="w-12 h-12 text-[#7fba59] mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">Our Mission</h2>
                <p className="text-[#f5f5f5]">
                  To provide accessible, secure, and innovative financial services that empower individuals and businesses to achieve their financial goals.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-[#422360] border-2 border-[#7d4e9b] hover:bg-[#5a2c7f] transition-all duration-300">
                <Award className="w-12 h-12 text-[#7fba59] mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">Our Vision</h2>
                <p className="text-[#f5f5f5]">
                  To be the leading financial technology platform that transforms how communities access and manage their finances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-[#5a2c7f]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7fba59] mb-2">80K+</div>
                <div className="text-[#f5f5f5]">Active Agents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7fba59] mb-2">1M+</div>
                <div className="text-[#f5f5f5]">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7fba59] mb-2">100+</div>
                <div className="text-[#f5f5f5]">Partner Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#7fba59] mb-2">24/7</div>
                <div className="text-[#f5f5f5]">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;