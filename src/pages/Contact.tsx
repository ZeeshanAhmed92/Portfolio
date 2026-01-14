// import { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const contactInfo = [
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'zeeshan.ahmed1179@gmail.com',
//     href: 'mailto:zeeshan.ahmed1179@gmail.com',
//   },
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '+92 333 8812245',
//     href: 'tel:+923338812245',
//   },
//   {
//     icon: MapPin,
//     label: 'Location',
//     value: 'Rawalpindi, Pakistan',
//     href: '#',
//   },
// ];

// const socialLinks = [
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/zeeshanahmed2015/',
//   },
//   {
//     icon: Github,
//     label: 'GitHub',
//     href: 'https://github.com/ZeeshanAhmed92',
//   },
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Message Sent!',
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">Get In Touch</span>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2">
//                 Let's <span className="text-gradient">Connect</span>
//               </h1>
//               <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//                 Have a project in mind or want to collaborate? I'd love to hear from you!
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <div className="glass rounded-2xl p-8 border-glow">
//                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                   <MessageSquare className="w-6 h-6 text-primary" />
//                   Send a Message
//                 </h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm font-medium mb-2 block">Name</label>
//                       <Input
//                         placeholder="Your name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         required
//                         className="bg-secondary/50 border-border/50 focus:border-primary"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium mb-2 block">Email</label>
//                       <Input
//                         type="email"
//                         placeholder="your@email.com"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         required
//                         className="bg-secondary/50 border-border/50 focus:border-primary"
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="text-sm font-medium mb-2 block">Subject</label>
//                     <Input
//                       placeholder="Project inquiry"
//                       value={formData.subject}
//                       onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                       required
//                       className="bg-secondary/50 border-border/50 focus:border-primary"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="text-sm font-medium mb-2 block">Message</label>
//                     <Textarea
//                       placeholder="Tell me about your project..."
//                       rows={5}
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       required
//                       className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
//                     />
//                   </div>
                  
//                   <Button type="submit" variant="hero" className="w-full">
//                     <Send className="w-4 h-4" />
//                     Send Message
//                   </Button>
//                 </form>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-6">
//                 <div className="glass rounded-2xl p-8 border-glow">
//                   <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
//                   <div className="space-y-6">
//                     {contactInfo.map((info, index) => (
//                       <a
//                         key={index}
//                         href={info.href}
//                         className="flex items-center gap-4 group hover:text-primary transition-colors"
//                       >
//                         <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                           <info.icon className="w-5 h-5 text-primary" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-muted-foreground">{info.label}</p>
//                           <p className="font-medium">{info.value}</p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="glass rounded-2xl p-8 border-glow">
//                   <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                  
//                   <div className="flex gap-4">
//                     {socialLinks.map((social, index) => (
//                       <a
//                         key={index}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all group"
//                       >
//                         <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="glass rounded-2xl p-8 border-glow bg-gradient-to-br from-primary/10 to-transparent">
//                   <h3 className="text-xl font-bold mb-2">Ready to start a project?</h3>
//                   <p className="text-muted-foreground mb-4">
//                     Let's discuss your AI/ML requirements and build something amazing together.
//                   </p>
//                   <Button variant="hero" asChild>
//                     <a href="mailto:zeeshan.ahmed1179@gmail.com">
//                       <Mail className="w-4 h-4" />
//                       Email Me Directly
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Sparkles, Clock } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const contactInfo = [
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'zeeshan.ahmed1179@gmail.com',
//     href: 'mailto:zeeshan.ahmed1179@gmail.com',
//     color: 'text-blue-500',
//   },
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '+92 333 8812245',
//     href: 'tel:+923338812245',
//     color: 'text-emerald-500',
//   },
//   {
//     icon: MapPin,
//     label: 'Location',
//     value: 'Rawalpindi, Pakistan',
//     href: '#',
//     color: 'text-orange-500',
//   },
// ];

// const socialLinks = [
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/zeeshanahmed2015/',
//   },
//   {
//     icon: Github,
//     label: 'GitHub',
//     href: 'https://github.com/ZeeshanAhmed92',
//   },
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Message Sent!',
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen bg-background selection:bg-primary/30">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative overflow-hidden">
//         {/* Professional Background Accents */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-6xl mx-auto">
            
//             {/* Header Section */}
//             <div className="text-center mb-20">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
//                   <Sparkles className="w-3 h-3" /> Let's Build the Future
//                 </span>
//                 <h1 className="text-5xl md:text-7xl font-black mt-2 tracking-tighter">
//                   Get in <span className="text-gradient">Touch</span>
//                 </h1>
//                 <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
//                   Ready to deploy production-grade AI? Whether it's LLMs, Computer Vision, or Automation, I'm here to help you scale.
//                 </p>
//               </motion.div>
//             </div>

//             <div className="grid lg:grid-cols-5 gap-12 items-start">
              
//               {/* Sidebar: Contact Info & Socials (2 Columns) */}
//               <div className="lg:col-span-2 space-y-6">
//                 <motion.div 
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="glass rounded-[2rem] p-8 border-glow relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 p-6 opacity-10">
//                     <MessageSquare className="w-20 h-20 text-primary" />
//                   </div>
                  
//                   <h2 className="text-2xl font-bold mb-8">Contact Info</h2>
                  
//                   <div className="space-y-8">
//                     {contactInfo.map((info, index) => (
//                       <a
//                         key={index}
//                         href={info.href}
//                         className="flex items-center gap-5 group"
//                       >
//                         <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
//                           <info.icon className="w-5 h-5" />
//                         </div>
//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
//                           <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>

//                   <div className="mt-12 pt-8 border-t border-white/5">
//                     <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Social Ecosystem</p>
//                     <div className="flex gap-4">
//                       {socialLinks.map((social, index) => (
//                         <a
//                           key={index}
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all group"
//                         >
//                           <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Response Time Card */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="glass rounded-[2rem] p-6 border-glow flex items-center gap-4 bg-primary/[0.03]"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
//                     <Clock className="w-5 h-5" />
//                   </div>
//                   <p className="text-sm font-medium">Average response time: <span className="text-primary font-bold">~4 Hours</span></p>
//                 </motion.div>
//               </div>

//               {/* Contact Form (3 Columns) */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="lg:col-span-3 glass rounded-[2.5rem] p-8 md:p-12 border-glow shadow-2xl shadow-primary/5"
//               >
//                 <form onSubmit={handleSubmit} className="space-y-8">
//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div className="space-y-2">
//                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
//                       <Input
//                         placeholder="Zeeshan Ahmed"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         required
//                         className="h-14 bg-secondary/30 border-white/5 focus:border-primary/50 rounded-xl px-6 text-base"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
//                       <Input
//                         type="email"
//                         placeholder="hello@example.com"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         required
//                         className="h-14 bg-secondary/30 border-white/5 focus:border-primary/50 rounded-xl px-6 text-base"
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Subject</label>
//                     <Input
//                       placeholder="e.g. AI Agent Development"
//                       value={formData.subject}
//                       onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                       required
//                       className="h-14 bg-secondary/30 border-white/5 focus:border-primary/50 rounded-xl px-6 text-base"
//                     />
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message Detail</label>
//                     <Textarea
//                       placeholder="Briefly describe your requirements..."
//                       rows={6}
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       required
//                       className="bg-secondary/30 border-white/5 focus:border-primary/50 rounded-2xl px-6 py-4 text-base resize-none"
//                     />
//                   </div>
                  
//                   <Button type="submit" variant="hero" className="w-full h-16 text-lg font-black tracking-widest uppercase rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
//                     <Send className="w-5 h-5" />
//                     Dispatch Message
//                   </Button>
//                 </form>
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

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