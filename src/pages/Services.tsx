// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Bot, Brain, Code, Database, FileText, Mic, Settings, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     icon: Bot,
//     title: 'AI Chatbots & Assistants',
//     description: 'Custom conversational AI solutions powered by latest LLMs including GPT-4, Claude, and open-source models. Build intelligent chatbots that understand context and deliver exceptional user experiences.',
//     features: ['Customer Support Automation', 'Sales & Lead Generation Bots', 'FAQ & Knowledge Base Assistants', 'Multi-platform Integration'],
//     color: 'from-cyan-500 to-blue-500'
//   },
//   {
//     icon: Mic,
//     title: 'Voice Assistants',
//     description: 'End-to-end voice AI solutions with speech recognition, natural language understanding, and text-to-speech. Create voice-enabled applications that feel natural and intuitive.',
//     features: ['Custom Voice Commands', 'IVR System Development', 'Voice Analytics & Insights', 'Multi-language Support'],
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     icon: Brain,
//     title: 'LLM Training & Fine-tuning',
//     description: 'Custom model training and fine-tuning for domain-specific applications. Optimize LLMs for your unique use case with improved accuracy and reduced costs.',
//     features: ['Custom Dataset Preparation', 'LoRA & QLoRA Fine-tuning', 'Domain Adaptation', 'Performance Benchmarking'],
//     color: 'from-orange-500 to-red-500'
//   },
//   {
//     icon: Database,
//     title: 'SQL & Data Assistants',
//     description: 'Natural language to SQL conversion, automated reporting, and intelligent data analysis tools. Transform how your team interacts with data.',
//     features: ['Text-to-SQL Conversion', 'Automated Data Reports', 'Business Intelligence Integration', 'Real-time Data Insights'],
//     color: 'from-green-500 to-emerald-500'
//   },
//   {
//     icon: FileText,
//     title: 'AI Report Generation',
//     description: 'Automated report generation in multiple formats including Excel, CSV, JSON, and PDF with AI-powered insights and analysis.',
//     features: ['Multi-format Export', 'Custom Report Templates', 'Scheduled Generation', 'AI-Powered Analysis'],
//     color: 'from-blue-500 to-indigo-500'
//   },
//   {
//     icon: Code,
//     title: 'API Development',
//     description: 'Robust and scalable AI API development using Flask and FastAPI with proper documentation, testing, and deployment pipelines.',
//     features: ['RESTful API Design', 'FastAPI/Flask Implementation', 'API Documentation', 'Rate Limiting & Security'],
//     color: 'from-yellow-500 to-orange-500'
//   },
//   {
//     icon: Zap,
//     title: 'Workflow Automation',
//     description: 'AI-powered automation using CrewAI, n8n, and custom pipelines for business process optimization and efficiency gains.',
//     features: ['CrewAI Agent Systems', 'n8n Workflow Design', 'Process Automation', 'Integration Services'],
//     color: 'from-pink-500 to-rose-500'
//   },
//   {
//     icon: Settings,
//     title: 'AI Integration & Deployment',
//     description: 'Seamless integration of AI solutions into existing systems with Docker deployment on cloud platforms like Google Cloud and Azure.',
//     features: ['Docker Containerization', 'Cloud Deployment', 'CI/CD Pipelines', 'Monitoring & Scaling'],
//     color: 'from-teal-500 to-cyan-500'
//   }
// ];

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">What I Do</span>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2">
//                 My <span className="text-gradient">Services</span>
//               </h1>
//               <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//                 Comprehensive AI/ML solutions tailored to transform your business with cutting-edge technology and proven expertise
//               </p>
//             </div>

//             {/* Services Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="group glass rounded-2xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-300"
//                 >
//                   <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
//                   <div className="p-8">
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
//                       <service.icon className="w-8 h-8 text-white" />
//                     </div>

//                     <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
//                       {service.title}
//                     </h3>

//                     <p className="text-muted-foreground mb-6">
//                       {service.description}
//                     </p>

//                     <ul className="space-y-2 mb-6">
//                       {service.features.map((feature, i) => (
//                         <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="text-center mt-16">
//               <div className="glass rounded-2xl p-8 border-glow max-w-2xl mx-auto">
//                 <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
//                 <p className="text-muted-foreground mb-6">
//                   Let's discuss how I can help transform your business with AI-powered solutions.
//                 </p>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
//                 >
//                   Get In Touch
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Services;


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Bot, Brain, Code, Database, FileText, Mic, Settings, 
  Zap, ArrowRight, CheckCircle2, Eye, MessageSquareText 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    icon: MessageSquareText,
    title: 'Generative AI & LLM Solutions',
    // High-quality AI chip/data visual
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    description: 'Specializing in RAG (Retrieval-Augmented Generation) and custom LLM applications. I build systems that process your private data to provide context-aware, accurate answers.',
    features: ['Custom RAG Pipelines', 'Context-Aware Chatbots', 'Enterprise Knowledge Bases', 'Prompt Engineering'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Mic,
    title: 'Voice AI (STT & TTS)',
    // Waveform/Sound visual
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    description: 'Implementation of high-fidelity Speech-to-Text and Text-to-Speech systems using Whisper and ElevenLabs to create emotive voice agents.',
    features: ['Whisper STT Implementation', 'ElevenLabs TTS Integration', 'Emotive Voice Assistants', 'Real-time Audio Processing'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Eye,
    title: 'Computer Vision & OCR',
    // Cyberpunk/Vision visual
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    description: 'Advanced visual intelligence using YOLO and Vision-Language Models. Automating document analysis, object detection, and visual inspection.',
    features: ['Object Detection & Tracking', 'Document OCR Systems', 'Vision-Language Models', 'Automated Visual QC'],
    color: 'from-rose-500 to-orange-500'
  },
  {
    icon: Brain,
    title: 'Fine-tuning & Optimization',
    // Neural network/Brain visual
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop',
    description: 'Custom model adaptation via LoRA and QLoRA techniques to outperform generic models while reducing latency and costs.',
    features: ['Domain-Specific Adaptation', 'LoRA / QLoRA Training', 'Model Quantization', 'Inference Optimization'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Database,
    title: 'SQL & Data Intelligence',
    // Servers/Data visual
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop',
    description: 'Turning natural language into complex SQL queries. Empowering teams to query databases and generate insights using conversational AI.',
    features: ['Text-to-SQL Engines', 'Vector Database Setup', 'Natural Language Analytics', 'Automated Data Cleansing'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Agentic Workflow Automation',
    // Automation/Circuit visual
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    description: 'Orchestrating autonomous AI agents using CrewAI and LangGraph to research, plan, and execute complex business tasks autonomously.',
    features: ['CrewAI Multi-Agent Systems', 'LangGraph Orchestration', 'n8n AI Workflows', 'Autonomous Task Agents'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Code,
    title: 'Robust AI API Development',
    // Coding/Terminal visual
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop',
    description: 'Building production-ready, scalable backends using FastAPI and Flask. Wrapping AI models in high-performance Dockerized APIs.',
    features: ['FastAPI Backend Design', 'Docker Containerization', 'RESTful AI Services', 'Asynchronous Processing'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Settings,
    title: 'MLOps & Deployment',
    // Satellite/Cloud visual
    image: 'https://images.unsplash.com/photo-1451187530230-b237f2043392?q=80&w=1000&auto=format&fit=crop',
    description: 'Scaling AI from prototype to production on Google Cloud, Azure, and AWS with full monitoring and horizontal scaling.',
    features: ['Cloud Architecture', 'CI/CD for AI Models', 'Performance Monitoring', 'GPU/CPU Scaling'],
    color: 'from-teal-500 to-cyan-500'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono text-xs tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20"
              >
                Expertise & Offerings
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight">
                Multimodal <span className="text-gradient">AI Services</span>
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 flex flex-col"
                >
                  {/* Service Image Header */}
                  <div className="h-52 overflow-hidden relative bg-muted">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-80"
                      onError={(e) => {
                        // Fallback if image fails
                        e.currentTarget.src = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  
                  <div className="p-10 pt-0 relative flex-grow">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl -translate-y-1/2 border-4 border-background relative z-20`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="-mt-4">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-20 text-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                >
                  Start A Project Discussion
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;