import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, Brain, Code, Database, FileText, Mic, Settings, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: 'Custom conversational AI solutions powered by latest LLMs including GPT-4, Claude, and open-source models. Build intelligent chatbots that understand context and deliver exceptional user experiences.',
    features: ['Customer Support Automation', 'Sales & Lead Generation Bots', 'FAQ & Knowledge Base Assistants', 'Multi-platform Integration'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Mic,
    title: 'Voice Assistants',
    description: 'End-to-end voice AI solutions with speech recognition, natural language understanding, and text-to-speech. Create voice-enabled applications that feel natural and intuitive.',
    features: ['Custom Voice Commands', 'IVR System Development', 'Voice Analytics & Insights', 'Multi-language Support'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    title: 'LLM Training & Fine-tuning',
    description: 'Custom model training and fine-tuning for domain-specific applications. Optimize LLMs for your unique use case with improved accuracy and reduced costs.',
    features: ['Custom Dataset Preparation', 'LoRA & QLoRA Fine-tuning', 'Domain Adaptation', 'Performance Benchmarking'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Database,
    title: 'SQL & Data Assistants',
    description: 'Natural language to SQL conversion, automated reporting, and intelligent data analysis tools. Transform how your team interacts with data.',
    features: ['Text-to-SQL Conversion', 'Automated Data Reports', 'Business Intelligence Integration', 'Real-time Data Insights'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FileText,
    title: 'AI Report Generation',
    description: 'Automated report generation in multiple formats including Excel, CSV, JSON, and PDF with AI-powered insights and analysis.',
    features: ['Multi-format Export', 'Custom Report Templates', 'Scheduled Generation', 'AI-Powered Analysis'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Code,
    title: 'API Development',
    description: 'Robust and scalable AI API development using Flask and FastAPI with proper documentation, testing, and deployment pipelines.',
    features: ['RESTful API Design', 'FastAPI/Flask Implementation', 'API Documentation', 'Rate Limiting & Security'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'AI-powered automation using CrewAI, n8n, and custom pipelines for business process optimization and efficiency gains.',
    features: ['CrewAI Agent Systems', 'n8n Workflow Design', 'Process Automation', 'Integration Services'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Settings,
    title: 'AI Integration & Deployment',
    description: 'Seamless integration of AI solutions into existing systems with Docker deployment on cloud platforms like Google Cloud and Azure.',
    features: ['Docker Containerization', 'Cloud Deployment', 'CI/CD Pipelines', 'Monitoring & Scaling'],
    color: 'from-teal-500 to-cyan-500'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">What I Do</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                My <span className="text-gradient">Services</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Comprehensive AI/ML solutions tailored to transform your business with cutting-edge technology and proven expertise
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group glass rounded-2xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <div className="glass rounded-2xl p-8 border-glow max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help transform your business with AI-powered solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;