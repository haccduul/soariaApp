import { useEffect, useRef } from "react";

export const NeuralBackground = () => {
  const shapesRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const shapes = shapesRef.current?.querySelectorAll('.shape');
      shapes?.forEach((shape, i) => {
        const speed = (i + 1) * 0.25;
        (shape as HTMLElement).style.transform = `translateY(${y * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateLines = () => {
      const lines = linesRef.current?.querySelectorAll('.neural-line');
      lines?.forEach((line, i) => {
        setTimeout(() => {
          (line as HTMLElement).style.opacity = '1';
          (line as HTMLElement).style.transform = 'scaleX(1.08)';
          setTimeout(() => {
            (line as HTMLElement).style.opacity = '0.2';
            (line as HTMLElement).style.transform = 'scaleX(0.6)';
          }, 220);
        }, i * 250);
      });
    };

    const interval = setInterval(animateLines, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Pulsing gradient background */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(1200px 800px at 15% 85%, rgba(59, 42, 166, 0.35), transparent 60%),
            radial-gradient(1200px 800px at 85% 15%, rgba(177, 92, 255, 0.35), transparent 60%),
            radial-gradient(1000px 600px at 50% 40%, rgba(177, 92, 255, 0.20), transparent 55%),
            linear-gradient(180deg, #07070d, #0c0c14 40%, #07070d)
          `,
          animation: 'bgPulse 14s ease-in-out infinite',
        }}
      />

      {/* Floating geometric shapes */}
      <div ref={shapesRef} className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div 
          className="shape absolute w-[100px] h-[100px] left-[10%] border border-accent/25"
          style={{ animation: 'floatShape 22s linear infinite 0s' }}
        />
        <div 
          className="shape absolute w-[60px] h-[60px] left-[70%] border border-accent/25 rounded-full"
          style={{ animation: 'floatShape 22s linear infinite -6s' }}
        />
        <div 
          className="shape absolute w-[80px] h-[80px] left-[30%] border border-accent/25 rotate-45"
          style={{ animation: 'floatShape 22s linear infinite -12s' }}
        />
        <div 
          className="shape absolute w-[120px] h-[120px] left-[50%] border border-accent/25"
          style={{ animation: 'floatShape 22s linear infinite -18s' }}
        />
      </div>

      {/* Neural lines */}
      <div ref={linesRef} className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="neural-line absolute left-0 w-full h-[1px] top-[22%] opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)',
            transform: 'scaleX(0.6)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
        />
        <div 
          className="neural-line absolute left-0 w-full h-[1px] top-[42%] opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--secondary)), transparent)',
            transform: 'scaleX(0.6)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
        />
        <div 
          className="neural-line absolute left-0 w-full h-[1px] top-[64%] opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
            transform: 'scaleX(0.6)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
        />
      </div>
    </>
  );
};
