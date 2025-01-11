import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-[#5a2c7f] relative overflow-hidden">
      {/* Animated circular overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#4b276c] rounded-full animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#4b276c] rounded-full animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 md:mb-8">
              <img 
                src="/lovable-uploads/2ea0f2a8-30d6-4dc7-a90c-64114f4b68d7.png" 
                alt="PlataPay Full Logo" 
                className="w-48 sm:w-64 md:w-80 mx-auto lg:mx-0"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#ffffff]">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="text-lg md:text-xl text-[#f5f5f5] mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Your partner in secure and seamless financial transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-xl px-6 md:px-8 py-5 md:py-6 transition-all duration-300">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="text-xl px-6 md:px-8 py-5 md:py-6 font-bold bg-[#517f3a] border-2 border-[#3b5f2d] text-[#ffffff] hover:bg-[#7fba59]"
              >
                Explore Features
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full px-4 sm:px-8 md:px-0">
            <img 
              src="/lovable-uploads/152bfcda-b4c8-472b-88be-0beb60dba5c5.png"
              alt="PlataPay App Interface"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto animate-float shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};