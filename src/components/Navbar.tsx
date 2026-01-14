// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Code2 } from 'lucide-react';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Skills', href: '/skills' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Articles', href: '/articles' },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'glass py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
//         >
//           <Code2 className="w-6 h-6 text-primary" />
//           <span className="text-gradient">Zeeshan Ahmed</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <Button
//               key={link.name}
//               variant="nav"
//               asChild
//               className={location.pathname === link.href ? 'text-primary' : ''}
//             >
//               <Link to={link.href}>{link.name}</Link>
//             </Button>
//           ))}
//           <Button
//             variant="hero"
//             size="sm"
//             className="ml-4"
//             asChild
//           >
//             <Link to="/contact">Hire Me</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X /> : <Menu />}
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-slide-up">
//           <div className="flex flex-col gap-2">
//             {navLinks.map((link) => (
//               <Button
//                 key={link.name}
//                 variant="ghost"
//                 className={`justify-start ${location.pathname === link.href ? 'text-primary' : ''}`}
//                 asChild
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Link to={link.href}>{link.name}</Link>
//               </Button>
//             ))}
//             <Button
//               variant="hero"
//               className="mt-2"
//               asChild
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <Link to="/contact">Hire Me</Link>
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Articles', href: '/articles' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-primary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-background border border-white/10 p-1.5 rounded-lg">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight">
              ZEESHAN<span className="text-primary"> AHMED</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center px-1 py-1 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-sm mr-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <Button
            variant="hero"
            size="sm"
            className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              Hire Me <Sparkles className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-xl border border-white/5 bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="glass rounded-3xl p-6 border-glow shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-semibold px-4 py-2 rounded-2xl transition-all ${
                    location.pathname === link.href 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5 my-2" />
              <Button
                variant="hero"
                className="w-full rounded-2xl py-6 text-lg"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;