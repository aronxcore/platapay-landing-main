import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    quote: "PlataPay has transformed how I manage my small business payments.",
    author: "Maria Santos",
    role: "Small Business Owner"
  },
  {
    quote: "Being a PlataPay agent has opened new opportunities for my community.",
    author: "Juan dela Cruz",
    role: "PlataPay Agent"
  },
  {
    quote: "The platform's security and ease of use are unmatched.",
    author: "Ana Reyes",
    role: "Enterprise Client"
  },
  {
    quote: "The integration process was seamless and the support team was excellent.",
    author: "Miguel Castro",
    role: "Tech Integration Manager"
  },
  {
    quote: "PlataPay has made financial services accessible to our rural community.",
    author: "Elena Bautista",
    role: "Community Leader"
  }
];

export const TestimonialsSlider = () => {
  const plugin = useRef(
    AutoPlay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-[#5a2c7f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff]">
          What Our Users Say
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#301a49] p-5 rounded-xl border-2 border-[#7d4e9b] backdrop-blur-sm mx-2">
                  <Quote className="w-9 h-9 text-[#9f71b1] mb-4" />
                  <p className="text-[#ffffff] mb-4 text-lg leading-relaxed">{testimonial.quote}</p>
                  <div>
                  <p className="font-bold text-lg text-[#7fba59]">{testimonial.author}</p>
                  <p className="text-[#7d4e9b]">{testimonial.role}</p>
                  </div>
                </div>
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};