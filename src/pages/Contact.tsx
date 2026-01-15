import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zeeshan.ahmed1179@gmail.com',
    href: 'mailto:zeeshan.ahmed1179@gmail.com',
    color: 'text-blue-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 333 8812245',
    href: 'tel:+923338812245',
    color: 'text-green-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Rawalpindi, Pakistan',
    href: '#',
    color: 'text-red-500',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zeeshanahmed2015/',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/ZeeshanAhmed92',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent Successfully!',
      description: "I've received your message and will respond within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-3 h-3" /> Available for New Projects
                </span>
                <h1 className="text-5xl md:text-7xl font-black mt-2 tracking-tighter">
                  Let's Build <span className="text-gradient">The Future</span>
                </h1>
                <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  Whether you have a question about AI Agents, LLMs, or just want to say hi, my inbox is always open.
                </p>
              </motion.div>
            </header>

            <div className="grid lg:grid-cols-5 gap-12 items-start">
              
              {/* Contact Info (Column 1 & 2) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="glass rounded-[2.5rem] p-10 border-glow relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                    <div className="space-y-8">
                      {contactInfo.map((info, index) => (
                        <a
                          key={index}
                          href={info.href}
                          className="flex items-center gap-5 group transition-all"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                            <p className="text-lg font-semibold group-hover:text-primary transition-colors">{info.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Social Profiles</h3>
                      <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 group"
                          >
                            <social.icon className="w-6 h-6" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Availability Card */}
                <div className="glass rounded-[2rem] p-8 border-glow bg-primary/[0.02] flex items-center gap-6">
                    <div className="relative">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute inset-0" />
                        <div className="w-4 h-4 bg-green-500 rounded-full relative" />
                    </div>
                    <div>
                        <p className="font-bold text-sm uppercase tracking-tight">Current Status</p>
                        <p className="text-muted-foreground text-sm">Open to freelance AI/ML opportunities</p>
                    </div>
                </div>
              </motion.div>

              {/* Contact Form (Column 3, 4, & 5) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="glass rounded-[2.5rem] p-10 md:p-12 border-glow relative">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    Estimate Your Project
                  </h2>
                  <p className="text-muted-foreground mb-10">Send me a detailed message and I'll get back to you with a roadmap.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                        <Input
                          placeholder="Zeeshan Ahmed"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-14 bg-secondary/30 border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-14 bg-secondary/30 border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Subject</label>
                      <Input
                        placeholder="AI Automation / LLM Training / Data Science"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-14 bg-secondary/30 border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                      <Textarea
                        placeholder="Please describe your project goals, timeline, and technical requirements..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-secondary/30 border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all resize-none p-5"
                      />
                    </div>
                    
                    <Button 
                        type="submit" 
                        variant="hero" 
                        className="w-full h-16 text-lg font-bold rounded-2xl group overflow-hidden relative"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                             Send <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;