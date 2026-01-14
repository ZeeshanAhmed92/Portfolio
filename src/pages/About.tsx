// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Code2, Brain, Database, Cloud, Sparkles } from 'lucide-react';

// const highlights = [
//   {
//     icon: Brain,
//     title: 'AI & Machine Learning',
//     description: 'Expert in ML/DL models, Neural Networks, Transformers, LLMs (GPT, Llama, BERT), and Hugging Face.',
//   },
//   {
//     icon: Code2,
//     title: 'Programming',
//     description: 'Proficient in Python, SQL, HTML/CSS, with expertise in TensorFlow, PyTorch, and LangChain.',
//   },
//   {
//     icon: Database,
//     title: 'Databases',
//     description: 'Experienced with MongoDB, PostgreSQL, Vector Databases, and SQL databases for AI applications.',
//   },
//   {
//     icon: Cloud,
//     title: 'Cloud & APIs',
//     description: 'Skilled in Google Cloud, Azure, OpenAI API, Claude API, Docker deployment, and n8n automation.',
//   },
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">Get To Know Me</span>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2">
//                 About <span className="text-gradient">Zeeshan Ahmed</span>
//               </h1>
//             </div>

//             {/* Main Content */}
//             <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//               {/* Image/Visual - Your Photo Goes Here */}
//               <div className="relative">
//                 <div className="aspect-square rounded-3xl glass border-glow overflow-hidden">
//                   {/* Replace this placeholder with your actual photo */}
//                   <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center p-8">
//                     <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 border-4 border-primary/20">
//                       <Sparkles className="w-20 h-20 text-primary" />
//                     </div>
//                     <h2 className="text-3xl font-bold text-gradient mb-2">Zeeshan Ahmed</h2>
//                     <p className="text-muted-foreground text-lg">Senior AI Engineer</p>
//                     <p className="text-sm text-primary mt-2">Pakistan</p>
//                   </div>
//                   {/* To add your photo, replace the above div with:
//                   <img 
//                     src="/your-photo.jpg" 
//                     alt="Zeeshan Ahmed" 
//                     className="w-full h-full object-cover"
//                   />
//                   */}
//                 </div>
//                 <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/20 rounded-3xl blur-2xl" />
//               </div>

//               {/* Bio */}
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold">
//                   A Passionate <span className="text-gradient">AI/ML Engineer</span> from Pakistan
//                 </h2>
                
//                 <p className="text-muted-foreground leading-relaxed">
//                   I'm a results-driven AI Engineer with 6+ years of experience specializing in machine learning, 
//                   deep learning, and artificial intelligence. I'm proficient in designing, developing, and 
//                   deploying innovative AI solutions to tackle real-world challenges.
//                 </p>
                
//                 <p className="text-muted-foreground leading-relaxed">
//                   Skilled in building and fine-tuning ML/DL models, translating complex data into actionable insights, 
//                   and utilizing Power BI to create interactive dashboards that support data-driven decisions. 
//                   Dedicated to advancing AI through research, practical applications, and collaborative efforts 
//                   in academia and industry.
//                 </p>

//                 <div className="grid grid-cols-2 gap-4 pt-4">
//                   <div className="glass rounded-xl p-4 border-glow">
//                     <p className="text-3xl font-bold text-gradient">6+</p>
//                     <p className="text-sm text-muted-foreground">Years Experience</p>
//                   </div>
//                   <div className="glass rounded-xl p-4 border-glow">
//                     <p className="text-3xl font-bold text-gradient">30+</p>
//                     <p className="text-sm text-muted-foreground">Happy Clients</p>
//                   </div>
//                   <div className="glass rounded-xl p-4 border-glow">
//                     <p className="text-3xl font-bold text-gradient">50+</p>
//                     <p className="text-sm text-muted-foreground">Projects Completed</p>
//                   </div>
//                   <div className="glass rounded-xl p-4 border-glow">
//                     <p className="text-3xl font-bold text-gradient">B.E.</p>
//                     <p className="text-sm text-muted-foreground">Electrical Engineering</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Highlights */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {highlights.map((item, index) => (
//                 <div
//                   key={index}
//                   className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300"
//                 >
//                   <item.icon className="w-10 h-10 text-primary mb-4" />
//                   <h3 className="font-semibold mb-2">{item.title}</h3>
//                   <p className="text-sm text-muted-foreground">{item.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Education & Certifications */}
//             <div className="mt-16 grid md:grid-cols-2 gap-8">
//               <div className="glass rounded-2xl p-8 border-glow">
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <span className="w-2 h-2 bg-primary rounded-full" />
//                   Education
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="font-semibold">Bachelor's in Electrical Engineering</p>
//                     <p className="text-muted-foreground">University of Engineering and Technology, Taxila</p>
//                     <p className="text-sm text-primary">2011 - 2015 | CGPA: 3.54/4</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="glass rounded-2xl p-8 border-glow">
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <span className="w-2 h-2 bg-primary rounded-full" />
//                   Certifications
//                 </h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
//                     <span className="text-muted-foreground">Data Scientist Professional Using Python, DataCamp</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
//                     <span className="text-muted-foreground">Data Analyst using SQL, DataCamp</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
//                     <span className="text-muted-foreground">Data Analyst using Power BI, DataCamp</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;


// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Code2, Brain, Database, Cloud, Sparkles, Award, Globe, Rocket, ShieldCheck } from 'lucide-react';
// import { motion } from 'framer-motion';

// const highlights = [
//   {
//     icon: Brain,
//     title: 'AI & Machine Learning',
//     description: 'Expert in RAG systems, Neural Networks, Transformers, and LLMs (GPT-4, Claude, Llama 3) using Hugging Face.',
//   },
//   {
//     icon: Code2,
//     title: 'Core Engineering',
//     description: 'Advanced Python architecture, SQL optimization, and production-grade AI pipelines with LangChain & PyTorch.',
//   },
//   {
//     icon: Database,
//     title: 'Data Architecture',
//     description: 'Enterprise-scale Vector Databases (Pinecone, Weaviate), PostgreSQL, and complex data modeling.',
//   },
//   {
//     icon: Cloud,
//     title: 'Cloud & Automation',
//     description: 'Architecting scalable AI deployments on Azure/GCP, Docker containerization, and agentic workflows with n8n.',
//   },
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative overflow-hidden">
//         {/* Decorative Background Elements */}
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-20">
//               <motion.span 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
//               >
//                 <Globe className="w-3 h-3" /> Senior AI Engineer
//               </motion.span>
//               <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight">
//                 About <span className="text-gradient">Zeeshan Ahmed</span>
//               </h1>
//             </div>

//             {/* Main Content */}
//             <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
//               {/* Image with Sparkle Circle Effect */}
//               <div className="relative group mx-auto lg:mx-0">
//                 <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
//                   {/* Rotating Sparkle Ring */}
//                   <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
//                   <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                  
//                   {/* Floating Icons around circle */}
//                   <Sparkles className="absolute top-10 right-10 w-8 h-8 text-primary animate-pulse" />
//                   <Rocket className="absolute bottom-20 -left-5 w-6 h-6 text-primary/40" />

//                   {/* Main Profile Circle */}
//                   <div className="absolute inset-4 rounded-full glass border-glow overflow-hidden z-10 p-2">
//                     <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
//                       {/* TO ADD YOUR PHOTO: 
//                           Replace the <Brain /> tag with:
//                           <img src="/your-photo.jpg" alt="Zeeshan" className="w-full h-full object-cover" />
//                       */}
//                       <Brain className="w-32 h-32 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Glow Effect */}
//                 <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl opacity-50" />
//               </div>

//               {/* Bio & Professional Narrative */}
//               <div className="space-y-8 pt-4">
//                 <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
//                   <span className="w-8 h-[1px] bg-primary" />
//                   Innovation & Excellence
//                 </div>
                
//                 <h2 className="text-3xl font-bold leading-tight">
//                   Architecting the Future of <span className="text-gradient">Agentic Workflows</span> & Generative Intelligence
//                 </h2>
                
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   I am a results-driven AI Engineer with over 6 years of experience in the trenches of 
//                   Machine Learning and Artificial Intelligence. I specialize in taking complex, 
//                   unstructured data and transforming it into high-precision autonomous systems.
//                 </p>
                
//                 <p className="text-muted-foreground leading-relaxed">
//                   My methodology centers on bridging the gap between cutting-edge research and 
//                   production-ready deployment. Whether it's fine-tuning LLMs for domain-specific 
//                   intelligence or building real-time multimodal vision pipelines, my goal is always 
//                   to drive measurable ROI for my global partners.
//                 </p>

//                 {/* KPI Grid */}
//                 <div className="grid grid-cols-2 gap-4 pt-4">
//                   {[
//                     { val: '6+', lab: 'Years Experience' },
//                     { val: '30+', lab: 'Global Clients' },
//                     { val: '50+', lab: 'AI Deployments' },
//                     { val: '98%', lab: 'Client Retention' }
//                   ].map((stat, i) => (
//                     <div key={i} className="glass rounded-2xl p-5 border-glow group hover:border-primary/40 transition-all">
//                       <p className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform">{stat.val}</p>
//                       <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.lab}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Core Capabilities */}
//             <div className="mb-24">
//                <div className="flex flex-col items-center mb-12">
//                   <h3 className="text-2xl font-bold mb-2">Core Capabilities</h3>
//                   <div className="h-1 w-20 bg-primary rounded-full" />
//                </div>
//                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {highlights.map((item, index) => (
//                   <div
//                     key={index}
//                     className="glass rounded-3xl p-8 border-glow hover:border-primary/30 transition-all duration-500 group"
//                   >
//                     <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
//                       <item.icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="font-bold text-lg mb-3">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Professional Background & Certifications */}
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="glass rounded-[2rem] p-10 border-glow relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-8 opacity-5">
//                    <Award className="w-24 h-24" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
//                   <span className="p-2 rounded-lg bg-primary/20"><ShieldCheck className="w-5 h-5 text-primary" /></span>
//                   Certified Expertise
//                 </h3>
//                 <ul className="space-y-6">
//                   {[
//                     { title: 'Data Scientist Professional', org: 'Using Python, DataCamp' },
//                     { title: 'Advanced Data Analyst', org: 'SQL & Database Systems' },
//                     { title: 'Business Intelligence Expert', org: 'Power BI Analytics' }
//                   ].map((cert, i) => (
//                     <li key={i} className="group cursor-default">
//                       <p className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.title}</p>
//                       <p className="text-sm text-muted-foreground">{cert.org}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="glass rounded-[2rem] p-10 border-glow bg-primary/[0.02]">
//                 <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
//                   <span className="p-2 rounded-lg bg-primary/20"><Globe className="w-5 h-5 text-primary" /></span>
//                   Academic Foundation
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
//                     <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Graduate Honors</p>
//                     <p className="text-lg font-bold">University of Engineering and Technology</p>
//                     <p className="text-muted-foreground text-sm mb-4">Taxila, Pakistan</p>
//                     <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
//                       CGPA: 3.54 / 4.00
//                     </div>
//                   </div>
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

// export default About;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Brain, Database, Cloud, Sparkles, Award, Globe, Rocket, ShieldCheck, Mic, Eye, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    description: 'Specializing in RAG architectures, Agentic workflows (CrewAI, LangGraph), and fine-tuning LLMs like GPT-4, Claude 3.5, and Llama 3 for enterprise-grade precision.',
  },
  {
    icon: Mic,
    title: 'STT & TTS (Voice AI)',
    description: 'Expertise in Whisper, ElevenLabs, and Deepgram for real-time speech-to-text and emotive text-to-speech, building human-like voice assistants and transcription engines.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Implementing vision-language models (GPT-4o, Claude 3.5 Vision) and YOLO for object detection, OCR, and automated visual inspection systems.',
  },
  {
    icon: Code2,
    title: 'AI Engineering',
    description: 'Production-ready Python backends, FastAPI integration, and developing natural language interfaces for complex business logic and databases.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
              >
                <Globe className="w-3 h-3" /> Senior AI Engineer
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight">
                About <span className="text-gradient">Zeeshan Ahmed</span>
              </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
              
              {/* Image Container */}
              <div className="relative group mx-auto lg:mx-0">
                <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                  {/* Rotating Animated Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-10 z-20"
                  >
                    <Sparkles className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full glass border-glow overflow-hidden z-10 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                      <img 
                        src="1725453430802.jpg?w=800&h=800&fit=crop" 
                        alt="Zeeshan Ahmed" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl opacity-50" />
              </div>

              {/* Bio */}
              <div className="space-y-8 pt-4">
                <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
                  <span className="w-8 h-[1px] bg-primary" />
                  Multimodal AI Specialist
                </div>
                
                <h2 className="text-3xl font-bold leading-tight">
                  Bridging the gap between <span className="text-gradient">Human Language</span> and Machine Intelligence.
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With over 6 years of experience, I build intelligent systems that can see, hear, and talk. My focus is on creating autonomous agentic workflows that replace manual data entry and decision-making with high-precision AI.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My technical stack is built for the production era. I don't just build wrappers; I architect end-to-end multimodal pipelines that leverage state-of-the-art vision models and voice synthesis to provide truly immersive and efficient user experiences for global clients.
                </p>

                {/* KPI Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { val: '6+', lab: 'Years Experience' },
                    { val: '30+', lab: 'Global Clients' },
                    { val: '50+', lab: 'Projects Delivered' },
                    { val: '12h', lab: 'Avg. Response Time' }
                  ].map((stat, i) => (
                    <div key={i} className="glass rounded-2xl p-5 border-glow group hover:border-primary/40 transition-all">
                      <p className="text-3xl font-bold text-gradient">{stat.val}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.lab}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expanded Capabilities Section */}
            <div className="mb-24">
              <div className="flex flex-col items-center mb-12 text-center">
                <h3 className="text-2xl font-bold mb-2">Technical Capabilities</h3>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass rounded-3xl p-8 border-glow hover:border-primary/30 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-[2rem] p-10 border-glow relative overflow-hidden">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/20"><ShieldCheck className="w-5 h-5 text-primary" /></span>
                  Specializations
                </h3>
                <ul className="space-y-6">
                  {[
                    { title: 'Generative AI Specialist', org: 'Custom RAG & LLM Workflows' },
                    { title: 'Multimodal Architect', org: 'STT / TTS / Vision Integration' },
                    { title: 'Data Scientist Professional', org: 'Advanced Analytics (DataCamp)' }
                  ].map((cert, i) => (
                    <li key={i}>
                      <p className="font-bold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.org}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-[2rem] p-10 border-glow bg-primary/[0.02]">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/20"><Globe className="w-5 h-5 text-primary" /></span>
                  Academic Foundation
                </h3>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Graduate Honors</p>
                  <p className="text-lg font-bold">University of Engineering and Technology</p>
                  <p className="text-muted-foreground text-sm mb-4">Taxila, Pakistan</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    CGPA: 3.54 / 4.00
                  </div>
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

export default About;