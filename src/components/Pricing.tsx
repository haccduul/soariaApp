import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "$299",
      unit: "/mo",
      features: [
        "Single location",
        "Voice or chat",
        "Calendar sync",
        "Email support"
      ],
      cta: "Talk to sales",
      featured: false
    },
    {
      name: "Growth",
      price: "$499",
      unit: "/mo",
      features: [
        "Voice + chat + SMS",
        "Multi-calendar routing",
        "Reschedule & cancel flows",
        "Priority support"
      ],
      cta: "Get started",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      unit: "",
      features: [
        "SLA & SSO",
        "Advanced analytics",
        "Onboarding & training",
        "Dedicated CSM"
      ],
      cta: "Contact us",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Simple pricing</h2>
        
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-6 flex flex-col gap-4 border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards] hover:border-accent/45 hover:shadow-[0_0_28px_0_rgba(177,92,255,0.55)] hover:-translate-y-1 transition-all duration-300 ${
                plan.featured ? 'border-transparent' : ''
              }`}
              style={{
                background: plan.featured 
                  ? 'linear-gradient(var(--card), var(--card)) padding-box, linear-gradient(135deg, rgba(59,42,166,0.6), rgba(177,92,255,0.6)) border-box'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {plan.featured && (
                <div 
                  className="absolute -top-3 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))' }}
                >
                  Most popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-extrabold">
                {plan.price}
                {plan.unit && <span className="text-sm text-muted-foreground">{plan.unit}</span>}
              </p>
              
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.featured ? "default" : "outline"}
                className={plan.featured 
                  ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0" 
                  : "border-border/60"}
                onClick={scrollToContact}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
