import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-[#5a2c7f]">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-[#301a49]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">
                Get in Touch
              </h1>
              <p className="text-xl text-[#f5f5f5] mb-8">
                We're here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b]">
                <div>
                  <label htmlFor="name" className="block text-[#ffffff] mb-2">Name</label>
                  <Input id="name" className="bg-[#f5f5f5] border-[#7d4e9b]" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#ffffff] mb-2">Email</label>
                  <Input id="email" type="email" className="bg-[#f5f5f5] border-[#7d4e9b]" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#ffffff] mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    className="bg-[#f5f5f5] border-[#7d4e9b] min-h-[150px]" 
                    required 
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full font-bold bg-[#7fba59] hover:bg-[#517f3a] text-white text-lg px-8 py-6 backdrop-blur-sm"
                >  {/*bg- border-2 border-[transparent] hover:bg- text-[#ffffff] text-lg  "*/}
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;