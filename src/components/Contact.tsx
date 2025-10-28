import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = Object.fromEntries(formData.entries());

    // Honeypot check
    if (data.website) {
      toast({ title: "Thanks! We'll reach out shortly." });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
      return;
    }

    // Add metadata
    data._meta = {
      page: window.location.href,
      ts: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://jimmyjohn.app.n8n.cloud/webhook/contact-soaira', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast({ title: "Thanks! We'll reach out shortly." });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      // Fallback to mailto
      const subject = encodeURIComponent('Soaria.AI — Contact');
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:contact@soaria.ai?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's talk</h2>
        
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start">
          <Card 
            className="p-8 border-white/12 shadow-lg"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              backdropFilter: 'blur(18px)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field */}
              <div className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden">
                <Label htmlFor="website">Website</Label>
                <Input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Your name" 
                  required 
                  className="bg-input border-border/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="you@company.com" 
                  required 
                  className="bg-input border-border/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  type="text" 
                  name="company" 
                  id="company"
                  placeholder="Business name" 
                  className="bg-input border-border/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">What would you like to accomplish?</Label>
                <Textarea 
                  name="message" 
                  id="message"
                  rows={5} 
                  placeholder="Tell us about your goals…" 
                  className="bg-input border-border/60 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0"
              >
                {isSubmitting ? 'Sending…' : 'Send'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
