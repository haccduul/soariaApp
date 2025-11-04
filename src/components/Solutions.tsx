import { Card } from "@/components/ui/card";

export const Solutions = () => {
  const solutions = [
    {
      title: "Spas & Salons",
      description: "Service-aware durations, intake questions, and real-time conflict checks with your existing calendar."
    },
    {
      title: "Restaurants & Hospitality",
      description: "Table and party-size logic, SMS confirmations, and integrations with popular booking platforms."
    },
    {
      title: "Home & Field Services",
      description: "Route-time buffers, multi-technician calendars, and rescheduling that minimize no-shows."
    }
  ];

  return (
    <section id="solutions" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for service businesses</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[70ch]">
          From spas and salons to restaurants and home services, Soaria.AI integrates with your tools to keep calendars accurate and customers delighted.
        </p>
        
        <div className="grid md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="p-6 border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards] hover:border-accent/45 hover:shadow-[0_0_28px_0_rgba(177,92,255,0.55)] transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
