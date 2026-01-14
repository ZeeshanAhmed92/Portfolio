// import { Code2, Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="py-8 border-t border-border/50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2">
//             <Code2 className="w-5 h-5 text-primary" />
//             <span className="font-semibold text-gradient">AI Engineer</span>
//           </div>
          
//           <p className="text-sm text-muted-foreground flex items-center gap-1">
//             © {currentYear} All rights reserved. Built with{' '}
//             <Heart className="w-4 h-4 text-primary fill-primary" /> and AI
//           </p>
          
//           <div className="flex gap-4 text-sm text-muted-foreground">
//             <a href="#" className="hover:text-primary transition-colors">Privacy</a>
//             <a href="#" className="hover:text-primary transition-colors">Terms</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Twitter, Mail, Globe, Shield, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Articles', href: '/articles' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com', icon: Github },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    ]
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 overflow-hidden bg-background">
      {/* Subtle Bottom Glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Global Presence Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-primary/30 transition-all">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                  Based in Pakistan • Serving Worldwide
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Delivering high-performance AI solutions and autonomous agentic workflows to 
              partners across North America, Europe, and the Middle East.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                Trusted by 30+ Global Clients
              </span>
            </div>
          </div>

          {/* Site Map Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Site Map</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Me Column */}
          <div className="md:col-span-4 space-y-6 md:text-right flex flex-col md:items-end">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Connect Me</h4>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a 
                href="mailto:hello@zeeshan.ai" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center justify-end gap-2"
              >
                zeeshan.ahmed1179@gmail.com
                <Mail className="w-4 h-4 text-primary" />
              </a>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Typically responds within 1 hour
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
            <span>© {currentYear} All Rights Reserved</span>
          </div>
          
          <div className="flex items-center gap-8 order-last md:order-none">
            <Link to="/privacy" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] text-muted-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/5 border border-primary/10">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-mono text-primary/80 tracking-tighter uppercase font-bold">
              Global AI Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;