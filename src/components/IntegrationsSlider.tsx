import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";

const partners = [
  { name: "Sun", logo: "/lovable-uploads/95a8f98f-4210-4b1f-8648-04e980656b53.png" },
  { name: "TM", logo: "/lovable-uploads/e66ddfe9-a61d-43fa-b8aa-e0ecb5c849e7.png" },
  { name: "Smart", logo: "/lovable-uploads/095deba5-e2ca-4866-8e37-61611e5d5aa7.png" },
  { name: "GoMo", logo: "/lovable-uploads/df7d3b42-992a-4147-aa12-9f3559d9df44.png" },
  { name: "Dito", logo: "/lovable-uploads/be2a4af5-8856-4408-86f9-56e7ba16c616.png" },
  { name: "Globe", logo: "/lovable-uploads/87bdde82-6de1-4fb0-8ec3-1f0a9cca740e.png" },
  { name: "TNT", logo: "/lovable-uploads/e01f36ad-f482-431e-b859-d934b00a76bd.png" },
  { name: "Visa", logo: "/lovable-uploads/fd06dacb-1c6b-4cc8-ab19-43ae0bb6aa4f.png" },
  { name: "Apple Pay", logo: "/lovable-uploads/60d4c49c-3c54-45c7-a9c3-ed3f7fa89ac7.png" },
  { name: "Google Pay", logo: "/lovable-uploads/f63506bd-da45-4dec-aa4e-e9a090a19ba2.png" },
  { name: "Meralco", logo: "/lovable-uploads/4cb4d120-15a7-47dc-ab50-6942fc8521b3.png" },
  { name: "CTI", logo: "/lovable-uploads/073477fd-1cff-4b23-aba1-5b9c6c029a6f.png" },
  { name: "ECPay", logo: "/lovable-uploads/4821d622-e2f9-4faf-9693-757f6db91e2e.png" },
  { name: "QRPh", logo: "/lovable-uploads/ae4c607f-187e-4a80-99cd-3ce4f4f80c21.png" },
  { name: "Maya", logo: "/lovable-uploads/f9161c10-1147-4b24-b2fa-92eae4ece57d.png" },
];

export const IntegrationsSlider = () => {
  const plugin = useRef(
    AutoPlay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-[#301a49]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Seamless Integrations with Trusted Partners
          </h2>
          <p className="text-xl text-[#f5f5f5] max-w-2xl mx-auto">
            Our partnerships with leading financial institutions and service providers simplify your payment processes
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className={cn(
                  "p-6 rounded-xl bg-[#ffffff] border-2 border-[#7d4e9b]",
                  "transition-all duration-300",
                  "flex items-center justify-center backdrop-blur-sm"
                )}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};