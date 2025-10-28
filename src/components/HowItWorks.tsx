import { Card } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect your calendars & systems",
      description: "Plug into Google Calendar and your booking platform or CRM. Soaria syncs availability in real time."
    },
    {
      number: "2",
      title: "Tailor your conversation flows",
      description: "We encode your services, durations, intake, and policies so Eve responds exactly like your best receptionist."
    },
    {
      number: "3",
      title: "Go live on phone, web, and SMS",
      description: "Forward your main line or add a chat widget. Every conversation is tracked with outcomes and analytics."
    }
  ];

  return (
    <section id="how" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How it works</h2>
        
        <div className="grid gap-5">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative pl-20 p-6 border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards] hover:border-accent/45 hover:shadow-[0_0_28px_0_rgba(177,92,255,0.55)] transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div 
                className="absolute left-6 top-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))' }}
              >
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
