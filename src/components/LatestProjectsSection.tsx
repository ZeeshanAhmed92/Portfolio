import { ArrowRight, Bot, Brain, FileText, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const latestProjects = [
  {
    title: 'Enterprise AI Chatbot',
    category: 'Chatbot',
    description: 'Multi-lingual customer support chatbot with 95% resolution rate using GPT-4 and RAG architecture.',
    tech: ['GPT-4', 'LangChain', 'FastAPI', 'PostgreSQL'],
    icon: Bot,
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop'
  },
  {
    title: 'Voice Assistant Platform',
    category: 'Voice AI',
    description: 'Real-time voice assistant with custom wake word detection and multi-language support.',
    tech: ['Whisper', 'ElevenLabs', 'WebRTC', 'Python'],
    icon: Mic,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
  },
  {
    title: 'Automated Report Generator',
    category: 'Automation',
    description: 'AI-powered system generating custom Excel, CSV, and PDF reports from natural language queries.',
    tech: ['OpenAI', 'Pandas', 'ReportLab', 'FastAPI'],
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    title: 'LLM Fine-tuning Pipeline',
    category: 'ML Training',
    description: 'Custom fine-tuning pipeline for domain-specific LLMs with automated evaluation and deployment.',
    tech: ['PyTorch', 'LoRA', 'Weights & Biases', 'Docker'],
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
  }
];

const LatestProjectsSection = () => {
  return (
    <section id="latest-projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
              Latest Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Recent <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 md:mt-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-primary-foreground px-3 py-1 rounded-full bg-primary/90">
                    {project.category}
                  </span>
                </div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
