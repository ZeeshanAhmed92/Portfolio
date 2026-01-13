import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Bot, Mic, Database, FileSpreadsheet, Video, Brain } from 'lucide-react';

const categories = ['All', 'GenAI', 'Chatbots', 'Voice AI', 'Data & Analytics', 'Computer Vision'];

const projects = [
  {
    title: 'Enterprise AI Chatbot',
    category: 'Chatbots',
    description: 'Built an intelligent customer service chatbot using LLMs that handles 10,000+ daily conversations with 95% resolution rate.',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    icon: Bot,
  },
  {
    title: 'Voice Assistant Platform',
    category: 'Voice AI',
    description: 'Developed a voice-enabled AI assistant for healthcare that processes patient queries and schedules appointments.',
    tech: ['Python', 'Whisper', 'TTS', 'WebSocket'],
    icon: Mic,
  },
  {
    title: 'SQL Query Assistant',
    category: 'GenAI',
    description: 'Created an AI system that converts natural language to complex SQL queries, supporting multiple database dialects.',
    tech: ['Python', 'LangChain', 'PostgreSQL', 'MongoDB'],
    icon: Database,
  },
  {
    title: 'AI Report Generator',
    category: 'Data & Analytics',
    description: 'Built automated report generation system that creates custom Excel, CSV, and JSON reports from raw data using AI.',
    tech: ['Python', 'Pandas', 'OpenAI', 'FastAPI'],
    icon: FileSpreadsheet,
  },
  {
    title: 'Commercial Ads Detection',
    category: 'Computer Vision',
    description: 'Developed a video analysis system that detects and classifies commercial advertisements in broadcast content.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'YOLO'],
    icon: Video,
  },
  {
    title: 'LLM Fine-tuning Pipeline',
    category: 'GenAI',
    description: 'Built an end-to-end pipeline for training and fine-tuning large language models for domain-specific applications.',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'LoRA'],
    icon: Brain,
  },
  {
    title: 'Transcription Service',
    category: 'Voice AI',
    description: 'Created a real-time audio transcription service with speaker diarization and multi-language support.',
    tech: ['Python', 'Whisper', 'Diarization', 'FastAPI'],
    icon: Mic,
  },
  {
    title: 'RAG Knowledge Base',
    category: 'GenAI',
    description: 'Implemented a Retrieval-Augmented Generation system for enterprise knowledge management and Q&A.',
    tech: ['Python', 'LangChain', 'Pinecone', 'OpenAI'],
    icon: Brain,
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of AI/ML projects that showcase my expertise in building intelligent solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'hero' : 'heroOutline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
