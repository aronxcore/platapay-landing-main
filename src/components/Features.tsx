import { Card, CardContent } from "@/components/ui/card";
import { Shield, Smartphone, CreditCard, Send, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Enterprise-grade security for all your financial transactions"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all devices"
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    description: "Support for cards, e-wallets, and bank transfers"
  },
  {
    icon: Send,
    title: "Instant Transfers",
    description: "Real-time money transfers to anyone, anywhere"
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Easily manage your team and permissions"
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Detailed insights into your business performance"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-[#5a2c7f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-[#f5f5f5] max-w-2xl mx-auto">
            Everything you need to manage and grow your financial services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 rounded-xl bg-[#422360] border-2 border-[#7d4e9b]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[transparent] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-11 h-11 text-[#7fba59] mb-4" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#ffffff]">{feature.title}</h3>
                <p className="text-[#9f71b1]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};