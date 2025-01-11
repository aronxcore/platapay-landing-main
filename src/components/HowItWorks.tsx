import { ClipboardCheck, LayoutDashboard, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Sign Up",
    description: "Easy onboarding for agents and merchants"
  },
  {
    icon: LayoutDashboard,
    title: "Access Services",
    description: "Manage transactions via the comprehensive dashboard"
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Earn through commissions and expand services"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 bg-[#5a2c7f]">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff]">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6"
        >
          <div className="w-16 h-16 bg-[#422360] rounded-full flex items-center justify-center mb-6">
          <step.icon className="w-8 h-8 text-[#7fba59]" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#ffffff]">
          {step.title}
          </h3>
          <p className="text-[#f5f5f5]">{step.description}</p>
        </div>
        ))}
      </div>
      </div>
    </section>
  );
};
