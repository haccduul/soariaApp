import { Card } from "@/components/ui/card";

export const KPIs = () => {
  const kpis = [
    {
      value: "0.5s",
      label: "avg response time"
    },
    {
      value: "24/7",
      label: "availability"
    },
    {
      value: "10-20%",
      label: "revenue growth"
    },
    {
      value: "+30%",
      label: "booking increase"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <Card
              key={index}
              className="p-5 text-center border-white/12 shadow-lg opacity-0 animate-[fadeInUp_0.7s_ease_forwards]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                backdropFilter: 'blur(18px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-1">
                {kpi.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {kpi.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
