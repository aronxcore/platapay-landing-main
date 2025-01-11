import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Contact = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const testimonials = [
    {
      name: "John Doe",
      role: "Business Owner",
      message: "PlataPay has transformed how we handle transactions. Excellent service!"
    },
    {
      name: "Sarah Smith",
      role: "Entrepreneur",
      message: "The best payment solution we've used. Highly recommended!"
    },
    {
      name: "Mike Johnson",
      role: "Store Manager",
      message: "Seamless integration and fantastic customer support."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#5a2c7f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#5a2c7f] backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f5f5f5] animate-fade-in">
          We're Here to Help
        </h2>

        {/* Contact Cards with Glass Effect */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-[#7d4e9b] bg-[#422360] backdrop-blur-lg shadow-lg hover:bg-[#301a49] transition-all duration-300">
            <div className="flex-none">
              <Phone className="w-9 h-9 text-[#7fba59] mb-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ffffff]">Phone</h3>
            <p className="text-[#9f71b1]">+63 917 539 7700</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-[#7d4e9b] bg-[#422360] backdrop-blur-lg shadow-lg hover:bg-[#301a49] transition-all duration-300">
            <div className="flex-none">
              <Mail className="w-10 h-10 text-[#7fba59] mb-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ffffff]">Email</h3>
            <p className="text-[#9f71b1]">compliance@innovatehub.ph</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-[#7d4e9b] bg-[#422360] backdrop-blur-lg shadow-lg hover:bg-[#301a49] transition-all duration-300">
            <div className="flex-none">
              <MapPin className="w-10 h-10 text-[#7fba59] mb-4" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#ffffff]">Address</h3>
            <p className="text-[#9f71b1]">
              RMCL Bldg., Bypass Road, Bayanan, San Pascual, Batangas City
            </p>
            </div>
        </div>

        {/* Auto-sliding Testimonials */}
        <div className="max-w-4xl mx-auto mb-12">
          <Carousel
            ref={emblaRef}
            className="w-full bg-[#301a49] backdrop-blur-lg rounded-xl p-6 border-2 border-[#7d4e9b]"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col justify-between items-center h-full text-center p-6">
                <p className="text-lg text-[#ffffff] mb-4 italic">
                  "{testimonial.message}"
                </p>
                <div>
                  <h4 className="font-bold text-xl text-[#7fba59]">{testimonial.name}</h4>
                  <p className="text-[#9f71b1]">{testimonial.role}</p>
                </div>
                </div>
              </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center">
          <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff] text-lg px-8 py-6 backdrop-blur-sm">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};