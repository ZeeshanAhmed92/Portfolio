import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const stats = [
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for freelance work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm an{' '}
            <span className="text-gradient glow-text">AI/ML Engineer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Building intelligent solutions with 4+ years of experience in GenAI applications, 
            chatbots, voice assistants, and custom AI systems that transform businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection('#projects')}>
              View My Work
              <ArrowDown className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection('#contact')}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 border-glow card-glow">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection('#about')}
          className="w-10 h-16 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 hover:border-primary transition-colors"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
