// import { Bot, Brain, Code, Database, FileText, Mic, Settings, Zap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     icon: Bot,
//     title: 'AI Chatbots & Assistants',
//     description: 'Custom conversational AI solutions powered by latest LLMs including GPT-4, Claude, and open-source models.',
//     features: ['Customer Support Bots', 'Sales Assistants', 'FAQ Automation']
//   },
//   {
//     icon: Mic,
//     title: 'Voice Assistants',
//     description: 'End-to-end voice AI solutions with speech recognition, natural language understanding, and text-to-speech.',
//     features: ['Voice Commands', 'IVR Systems', 'Voice Analytics']
//   },
//   {
//     icon: Brain,
//     title: 'LLM Training & Fine-tuning',
//     description: 'Custom model training and fine-tuning for domain-specific applications with optimal performance.',
//     features: ['Custom Datasets', 'Domain Adaptation', 'Performance Optimization']
//   },
//   {
//     icon: Database,
//     title: 'SQL & Data Assistants',
//     description: 'Natural language to SQL conversion, automated reporting, and intelligent data analysis tools.',
//     features: ['Text-to-SQL', 'Auto Reports', 'Data Insights']
//   },
//   {
//     icon: FileText,
//     title: 'AI Report Generation',
//     description: 'Automated report generation in multiple formats including Excel, CSV, JSON, and PDF with AI insights.',
//     features: ['Excel/CSV Export', 'Custom Templates', 'Scheduled Reports']
//   },
//   {
//     icon: Code,
//     title: 'API Development',
//     description: 'Robust and scalable AI API development using Flask, FastAPI with proper documentation and testing.',
//     features: ['RESTful APIs', 'FastAPI/Flask', 'API Documentation']
//   },
//   {
//     icon: Zap,
//     title: 'Workflow Automation',
//     description: 'AI-powered automation using CrewAI, n8n, and custom pipelines for business process optimization.',
//     features: ['CrewAI Agents', 'n8n Workflows', 'Process Automation']
//   },
//   {
//     icon: Settings,
//     title: 'AI Integration & Deployment',
//     description: 'Seamless integration of AI solutions into existing systems with Docker deployment on cloud platforms.',
//     features: ['Docker Deployment', 'Cloud Integration', 'CI/CD Pipelines']
//   }
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
//             Services
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             What I <span className="text-gradient">Offer</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive AI/ML solutions tailored to transform your business with cutting-edge technology
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group glass rounded-2xl p-6 border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                 <service.icon className="w-7 h-7 text-primary" />
//               </div>

//               <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
//                 {service.title}
//               </h3>

//               <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
//                 {service.description}
//               </p>

//               <ul className="space-y-1">
//                 {service.features.map((feature, i) => (
//                   <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
//                     <span className="w-1 h-1 rounded-full bg-primary" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
//           >
//             Discuss Your Project
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { Bot, Brain, Code, Database, FileText, Mic, Settings, Zap, ArrowRight, CheckCircle2, Eye, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bot,
    title: 'Advanced RAG Systems',
    description: 'Transforming proprietary data into intelligent, context-aware AI assistants that eliminate hallucinations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', // Image like Projects/Blogs
    techStack: ['GPT-4o', 'LangChain', 'Pinecone'],
    features: ['Document Intelligence', 'Semantic Search', 'Citations']
  },
  {
    icon: Volume2,
    title: 'Voice AI (STT & TTS)',
    description: 'Human-like voice experiences featuring real-time Speech-to-Text and high-fidelity Text-to-Speech synthesis.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    techStack: ['Whisper v3', 'ElevenLabs', 'Vapi'],
    features: ['Low-latency Streaming', 'Sentiment Detection', 'Natural Prosody']
  },
  {
    icon: Eye,
    title: 'Computer Vision Solutions',
    description: 'Automated visual inspection, object detection, and image analysis using cutting-edge Vision Transformers.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    techStack: ['YOLOv10', 'Vision Transformers', 'PyTorch'],
    features: ['Real-time Detection', 'OCR & Document Parsing', 'Video Analytics']
  },
  {
    icon: Zap,
    title: 'Autonomous AI Agents',
    description: 'Multi-agent systems that collaborate to perform complex, multi-step business tasks with minimal human intervention.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    techStack: ['CrewAI', 'AutoGen', 'n8n'],
    features: ['Self-Correction Loops', 'Tool-use Integration', 'Task Planning']
  },
  {
    icon: Database,
    title: 'Data & SQL Assistants',
    description: 'Empowering teams to query complex databases using natural language through specialized text-to-SQL agents.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    techStack: ['Pandas AI', 'SQLAlchemy', 'PostgreSQL'],
    features: ['Schema Mapping', 'Automated Reporting', 'Data Insights']
  },
  {
    icon: Settings,
    title: 'AI Infrastructure & Ops',
    description: 'Production-grade deployment and monitoring of AI models with focus on scalability and cost-optimization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    techStack: ['Docker', 'AWS/Azure', 'Terraform'],
    features: ['Scalable Inference', 'Model Monitoring', 'CI/CD Pipelines']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">My Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Production-Grade <span className="text-gradient">AI Engineering</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From real-time voice and vision to context-aware RAG systems, I build intelligent architectures that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group glass rounded-3xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
              {/* Service Image - Styled like Project/Blog cards */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl">
                     <service.icon className="w-6 h-6 text-primary" />
                   </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map(tech => (
                      <span key={tech} className="text-[10px] px-2 py-1 rounded bg-primary/5 border border-primary/10 text-primary font-mono font-bold tracking-tighter uppercase italic">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
          >
            Start Your AI Transformation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;