import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [
  {
    src: "/public/lovable-uploads/infographics/platapayFB0.jpg",
    alt: "Feature 1",
  },
  {
    src: "/public/lovable-uploads/infographics/platapayFB1.jpg",
    alt: "Feature 2",
  },
  {
    src: "/public/lovable-uploads/infographics/platapayFB2.jpg",
    alt: "Feature 3",
  },
  {
    src: "/public/lovable-uploads/infographics/platapayFB3.jpg",
    alt: "Feature 4",
  },
  {
    src: "/public/lovable-uploads/infographics/platapayFB4.jpg",
    alt: "Feature 5",
  },
];

export const FeaturesSlider = () => {
  const plugin = useRef(
    AutoPlay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="features" className="py-20 bg-[#301a49]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Why Choose PlataPay?
          </h2>
          <p className="text-xl text-[#f5f5f5] max-w-2xl mx-auto mb-15">
            Everything you need to manage your money in one place
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
            <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2">
              <div className="py-2 px-2 rounded-xl border-2 border-[transparent] flex items-center justify-center transition-all duration-300 h-full">
              <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg object-cover border-2 border-[#9f71b1]"
              loading="lazy"
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