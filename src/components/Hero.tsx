import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-14 md:py-20" style={{
      background: 'radial-gradient(900px 400px at 50% -20%, rgba(177, 92, 255, 0.24), transparent 60%)'
    }}>
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Hero Copy */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automate customer conversations.
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-accent bg-clip-text text-transparent">
                Book more — 24/7.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[60ch]">
              Soaria.AI is a premium AI receptionist that answers calls and chats, checks real-time availability, and books, reschedules, or cancels appointments with precision.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0"
                onClick={() => scrollToSection('contact')}
              >
                Book a demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-border/60"
                onClick={() => scrollToSection('features')}
              >
                See features
              </Button>
            </div>
            <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Voice & Chat
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Calendar-aware
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Secure by design
              </li>
            </ul>
          </div>

          {/* Hero Art - Chat Demo */}
          <div 
            className="rounded-2xl border border-white/12 p-6 shadow-2xl"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-4">
              <div 
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: 'radial-gradient(circle, hsl(var(--accent)), hsl(var(--secondary)) 60%)' }}
              />
              <span className="font-semibold">Eve · AI Receptionist</span>
            </div>
            
            <div className="space-y-3">
              <ChatBubble type="bot">
                Hi! I can help you book, reschedule, or cancel. Which service are you looking for?
              </ChatBubble>
              <ChatBubble type="user">
                Swedish massage
              </ChatBubble>
              <ChatBubble type="bot">
                Great! I will have you down for a 55 minute service. What date works for you?
              </ChatBubble>
              <ChatBubble type="user">
                This Friday
              </ChatBubble>
              <ChatBubble type="bot">
                Here are open times: 1:30pm, 3:00pm, 4:30pm. Which would you like?
              </ChatBubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatBubble = ({ type, children }: { type: 'bot' | 'user'; children: React.ReactNode }) => {
  const isBot = type === 'bot';
  
  return (
    <div className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-11 h-11 rounded-full flex items-center justify-center border border-accent/25 bg-background/50 shadow-lg">
          <MessageSquare className="w-5 h-5 text-accent" />
        </div>
      )}
      <div 
        className={`max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isBot 
            ? 'bg-secondary/10 border border-secondary/40' 
            : 'bg-card border border-border ml-auto'
        }`}
      >
        {children}
      </div>
      {!isBot && (
        <div className="w-11 h-11 rounded-full border border-white/20 bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg" />
      )}
    </div>
  );
};
