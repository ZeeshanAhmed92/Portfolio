import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/zeeshanahmed',
    label: 'GitHub',
    delay: '0s'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/zeeshanahmed',
    label: 'LinkedIn',
    delay: '0.1s'
  },
  {
    icon: Mail,
    href: 'mailto:zeeshan@example.com',
    label: 'Email',
    delay: '0.2s'
  }
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Semi-circle background */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-2xl" />
        
        {/* Social links container */}
        <div className="relative flex flex-col items-center gap-4 pl-4">
          {/* Vertical line top */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/50" />
          
          {/* Social icons */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: social.delay }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Vertical line bottom */}
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          
          {/* Follow me text */}
          <div className="writing-vertical text-xs text-muted-foreground tracking-widest uppercase">
            Follow Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
