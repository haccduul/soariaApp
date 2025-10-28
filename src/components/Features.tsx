import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Lock, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendar intelligence",
      description: "Understands durations, buffers, business hours, and prevents conflicts across multiple calendars."
    },
    {
      icon: MessageCircle,
      title: "Omnichannel",
      description: "Voice, web chat, and SMS with consistent logic and unified analytics."
    },
    {
      icon: Lock,
      title: "Secure & compliant",
      description: "Role-based access, audit logs, and data retention policies that fit your business."
    },
    {
      icon: Zap,
      title: "Easy integrations",
      description: "Soaria connects with your existing calendar or booking software — no heavy lifting required."
    }
  ];

  return (
    <section id="features" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Premium features</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards] hover:border-accent/45 hover:shadow-[0_0_28px_0_rgba(177,92,255,0.55)] hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <feature.icon className="w-10 h-10 mb-4 text-accent drop-shadow-[0_6px_16px_rgba(177,92,255,0.35)]" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
