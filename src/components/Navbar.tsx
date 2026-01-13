import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <Code2 className="w-6 h-6 text-primary" />
          <span className="text-gradient">Zeeshan Ahmed</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="nav"
              asChild
              className={location.pathname === link.href ? 'text-primary' : ''}
            >
              <Link to={link.href}>{link.name}</Link>
            </Button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="ml-4"
            asChild
          >
            <Link to="/contact">Hire Me</Link>
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
                className={`justify-start ${location.pathname === link.href ? 'text-primary' : ''}`}
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ))}
            <Button
              variant="hero"
              className="mt-2"
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
