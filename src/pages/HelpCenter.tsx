import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Send, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const HelpCenter = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{ type: 'user' | 'bot', content: string }[]>([]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatMessages([...chatMessages, { type: 'user', content: message }]);
    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        content: "Thanks for your message! Our support team will get back to you soon." 
      }]);
    }, 1000);
    setMessage("");
  };

  const handleLiveSupport = () => {
    toast({
      title: "Live Support",
      description: "A support agent will connect with you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-plata-dark">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-plata-dark to-plata-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
                How can we help you?
              </h1>
              
              {/* FAQ Section */}
              <div className="mb-12 bg-plata-card rounded-lg p-6 shadow-plata-xl backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-6 text-white">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">How do I top up my account?</AccordionTrigger>
                    <AccordionContent className="text-plata-light">
                      You can top up your account by going to your dashboard and clicking on the "Top Up" button. 
                      Follow the instructions to complete your payment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">What payment methods are accepted?</AccordionTrigger>
                    <AccordionContent className="text-plata-light">
                      We accept various payment methods including bank transfers, credit cards, and digital wallets. 
                      Check the payment modes section in your dashboard for all available options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">How long does verification take?</AccordionTrigger>
                    <AccordionContent className="text-plata-light">
                      Verification typically takes 24-48 hours. We'll notify you via email once your account is verified.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Chat Support Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-plata-card rounded-lg p-6 shadow-plata-xl backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    Chat Support
                  </h2>
                  <div className="h-64 overflow-y-auto mb-4 space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-plata-primary ml-auto max-w-[80%]'
                            : 'bg-plata-secondary mr-auto max-w-[80%]'
                        }`}
                      >
                        <p className="text-white">{msg.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-plata-input text-white"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} className="bg-plata-primary hover:bg-plata-secondary">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Live Support Section */}
                <div className="bg-plata-card rounded-lg p-6 shadow-plata-xl backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                    <HeadphonesIcon className="h-6 w-6" />
                    Live Support
                  </h2>
                  <p className="text-plata-light mb-6">
                    Need immediate assistance? Connect with one of our support agents for real-time help.
                  </p>
                  <Button 
                    onClick={handleLiveSupport}
                    className="w-full bg-plata-primary hover:bg-plata-secondary"
                  >
                    Connect with Support Agent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;