import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zeeshan.ahmed1179@gmail.com',
    href: 'mailto:zeeshan.ahmed1179@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 333 8812245',
    href: 'tel:+923338812245',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Rawalpindi, Pakistan',
    href: '#',
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass rounded-2xl p-8 border-glow">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-8 border-glow">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 group hover:text-primary transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8 border-glow">
                  <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all group"
                      >
                        <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8 border-glow bg-gradient-to-br from-primary/10 to-transparent">
                  <h3 className="text-xl font-bold mb-2">Ready to start a project?</h3>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss your AI/ML requirements and build something amazing together.
                  </p>
                  <Button variant="hero" asChild>
                    <a href="mailto:zeeshan.ahmed1179@gmail.com">
                      <Mail className="w-4 h-4" />
                      Email Me Directly
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
