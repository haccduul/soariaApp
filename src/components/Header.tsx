import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import soariaLogo from "@/assets/Soaria White.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-3 z-50 mx-auto max-w-[1100px] px-6">
      <div
        className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 px-6 py-3.5"
        style={{
          background: "rgba(15, 15, 26, 0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={soariaLogo}
            alt="Soaria.AI"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          <NavLink onClick={() => scrollToSection("solutions")}>
            Solutions
          </NavLink>
          <NavLink onClick={() => scrollToSection("how")}>
            How it works
          </NavLink>
          <NavLink onClick={() => scrollToSection("features")}>
            Features
          </NavLink>
          <NavLink onClick={() => scrollToSection("pricing")}>
            Pricing
          </NavLink>
          <Button
            variant="outline"
            className="ml-2 border-border/60 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:text-white transition-all"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-white/12 bg-white/5 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="absolute top-full right-6 mt-2 min-w-[210px] flex flex-direction-column gap-1.5 p-2.5 rounded-2xl border border-white/12 shadow-2xl md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              backdropFilter: "blur(18px)",
            }}
          >
            <MobileNavLink onClick={() => scrollToSection("solutions")}>
              Solutions
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("how")}>
              How it works
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("features")}>
              Features
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("pricing")}>
              Pricing
            </MobileNavLink>
            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="relative px-3 py-2 rounded-lg text-sm font-medium text-foreground/95 hover:bg-white/5 transition-all group"
  >
    {children}
    <span className="absolute left-3 right-3 bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </button>
);

const MobileNavLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/6 transition-colors"
  >
    {children}
  </button>
);
