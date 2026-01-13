import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('#hero')}
          className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <Code2 className="w-6 h-6 text-primary" />
          <span className="text-gradient">AI Engineer</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="nav"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </Button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="ml-4"
            onClick={() => scrollToSection('#contact')}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-slide-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection(link.href)}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="hero"
              className="mt-2"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
