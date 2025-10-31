import { Button } from "@/components/ui/button";
import soariaLogo from "@/assets/Soaria White.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/60 py-8 mt-12">
      <div className="container mx-auto px-6 max-w-[1100px]">
        {/* mobile: stacked + centered, md+: 2 cols */}
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[1.4fr_1fr] md:items-center md:text-left">
          {/* Left column: Logo, tagline, CTA */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img
                src={soariaLogo}
                alt="Soaria.AI"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Elevate your business with Soaria.
            </p>
            <div className="flex flex-col gap-3 max-w-xs mx-auto md:mx-0">
              <Button
                variant="outline"
                className="border-white/12 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:text-white"
                asChild
              >
                <a href="mailto:contact@soaria.ai">contact@soaria.ai</a>
              </Button>
              <p className="text-xs text-muted-foreground">
                © {currentYear} Soaria.AI. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right column: Navigation */}
          <nav className="flex flex-wrap gap-4 justify-center md:justify-end">
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("how")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
