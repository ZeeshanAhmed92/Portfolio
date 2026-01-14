import { Bot, Brain, Code, Database, FileText, Mic, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: 'Custom conversational AI solutions powered by latest LLMs including GPT-4, Claude, and open-source models.',
    features: ['Customer Support Bots', 'Sales Assistants', 'FAQ Automation']
  },
  {
    icon: Mic,
    title: 'Voice Assistants',
    description: 'End-to-end voice AI solutions with speech recognition, natural language understanding, and text-to-speech.',
    features: ['Voice Commands', 'IVR Systems', 'Voice Analytics']
  },
  {
    icon: Brain,
    title: 'LLM Training & Fine-tuning',
    description: 'Custom model training and fine-tuning for domain-specific applications with optimal performance.',
    features: ['Custom Datasets', 'Domain Adaptation', 'Performance Optimization']
  },
  {
    icon: Database,
    title: 'SQL & Data Assistants',
    description: 'Natural language to SQL conversion, automated reporting, and intelligent data analysis tools.',
    features: ['Text-to-SQL', 'Auto Reports', 'Data Insights']
  },
  {
    icon: FileText,
    title: 'AI Report Generation',
    description: 'Automated report generation in multiple formats including Excel, CSV, JSON, and PDF with AI insights.',
    features: ['Excel/CSV Export', 'Custom Templates', 'Scheduled Reports']
  },
  {
    icon: Code,
    title: 'API Development',
    description: 'Robust and scalable AI API development using Flask, FastAPI with proper documentation and testing.',
    features: ['RESTful APIs', 'FastAPI/Flask', 'API Documentation']
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'AI-powered automation using CrewAI, n8n, and custom pipelines for business process optimization.',
    features: ['CrewAI Agents', 'n8n Workflows', 'Process Automation']
  },
  {
    icon: Settings,
    title: 'AI Integration & Deployment',
    description: 'Seamless integration of AI solutions into existing systems with Docker deployment on cloud platforms.',
    features: ['Docker Deployment', 'Cloud Integration', 'CI/CD Pipelines']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI/ML solutions tailored to transform your business with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
