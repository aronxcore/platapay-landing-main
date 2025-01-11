import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Apple, Store } from "lucide-react";

const screenshots = [
  "/lovable-uploads/ad06a672-cc46-4f08-97da-f994b25609d9.png",
  "/lovable-uploads/2f587b3c-6d48-499b-93b7-dcf303ab24a1.png",
  "/lovable-uploads/8ea43649-8aee-4a36-a492-49a00a4f67b5.png",
  "/lovable-uploads/c92e6b63-9422-4d96-b485-5e83490f88b2.png",
  "/lovable-uploads/7c19d5c2-b5bd-447e-a981-3ff766c87503.png",
  "/lovable-uploads/f3740ae6-a4c9-482a-9272-6b7a49e33477.png",
  "/lovable-uploads/86f9b369-9e42-4349-bf99-942f3112ed5e.png"
];

export const MobileAppSection = () => {
  const plugin = useRef(AutoPlay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="py-20 bg-[#5a2c7f] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Download Our Mobile App
          </h2>
          <p className="text-xl text-[#f5f5f5] max-w-2xl mx-auto">
            Experience seamless digital payments on the go with our mobile app
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#ffffff]">
                Your Financial Freedom at Your Fingertips
              </h3>
                <ul className="space-y-4 text-[#f5f5f5]">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#2e1844] rounded-full"></span>
                  Secure and fast transactions
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#2e1844] rounded-full"></span>
                  Easy bill payments
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#2e1844] rounded-full"></span>
                  Send money instantly
                </li>
                </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-lg px-8 py-6 backdrop-blur-sm">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-lg px-8 py-6 backdrop-blur-sm">
                  <Store className="mr-2 h-5 w-5" />
                  Play Store
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* iPhone Frame */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[14px] border-black shadow-2xl">
              {/* Screen */}
              <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-[#5a2c7f]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-10"></div>
                
                {/* Screenshots Carousel */}
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[plugin.current]}
                  className="w-full h-full"
                >
                    <CarouselContent className="-ml-0">
                    {screenshots.map((screenshot, index) => (
                      <CarouselItem key={index} className="w-full h-full pl-0">
                      <img
                        src={screenshot}
                        alt={`App Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};