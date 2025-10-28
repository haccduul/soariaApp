import { Card } from "@/components/ui/card";

export const WhySoaria = () => {
  const benefits = [
    {
      title: "Premium conversation design",
      description: "On-brand voice and tone that feel like your best receptionist."
    },
    {
      title: "Calendar-accurate",
      description: "Real-time availability, buffers, and conflict handling."
    },
    {
      title: "Fast integration",
      description: "Connect your booking stack without any heavy lifting."
    },
    {
      title: "Human support",
      description: "Responsive onboarding and ongoing optimization."
    }
  ];

  return (
    <section id="why" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Soaria</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards] transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
