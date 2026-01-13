import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Bot, FileText, Mail, Calculator, MessageSquare, Brain, BarChart3, BookOpen, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Agentic AI', 'Chatbots', 'NLP', 'Data Analysis', 'Automation'];

const projects = [
  {
    title: 'User Activity Tracking & Productivity Analysis',
    category: 'Agentic AI',
    icon: BarChart3,
    description: 'Autonomous AI agent that integrates and analyzes user activity data from TimeDoctor and Jira to evaluate task productivity across projects and users.',
    details: [
      'Designed data pipeline to merge multi-source activity logs into SQL storage',
      'Employed DeepSeek Distill Llama 70B for contextual understanding',
      'Agent autonomously computes daily usage metrics and generates PDF summary reports',
    ],
    tags: ['DeepSeek', 'SQL', 'PDF Generation', 'Agentic AI'],
  },
  {
    title: 'RAG Chatbot with Multi-Source Document Intelligence',
    category: 'Agentic AI',
    icon: Bot,
    description: 'Retrieval-Augmented Generation AI agent leveraging GPT-3.5-turbo to autonomously answer user queries using multiple data sources.',
    details: [
      'Integrated FAISS for efficient document embedding and retrieval',
      'Implemented real-time cost-monitoring mechanism to track API token consumption',
      'Scalable, domain-adaptive system for synthesizing high-accuracy answers',
    ],
    tags: ['GPT-3.5', 'FAISS', 'RAG', 'LangChain'],
  },
  {
    title: 'Multi-Document Conversational Agent',
    category: 'Chatbots',
    icon: FileText,
    description: 'Interactive AI document agent using Streamlit, enabling users to engage in natural conversation with PDFs, DOCX, and Excel files through GPT-4o.',
    details: [
      'Integrated LangChain, PyPDF2, and Google Generative AI',
      'Implemented chat history tracking for persistent context',
      'Multi-modal document intelligence across multiple formats',
    ],
    tags: ['GPT-4o', 'Streamlit', 'LangChain', 'PyPDF2'],
  },
  {
    title: 'Context-Aware Email Response Generator',
    category: 'NLP',
    icon: Mail,
    description: 'Goal-directed AI agent that generates personalized email response suggestions by retrieving and analyzing historical email exchanges.',
    details: [
      'Retrieval-based system for contextual continuity',
      'Dynamically adapts replies based on prior interactions and tone',
      'Ensures coherent, human-like responses reflecting personalized context',
    ],
    tags: ['NLP', 'Email Automation', 'Context-Aware'],
  },
  {
    title: 'Excel Formula Automation App',
    category: 'Automation',
    icon: Calculator,
    description: 'Intelligent Excel automation agent using Llama 3.2, capable of interpreting natural language instructions and generating appropriate Excel formulas.',
    details: [
      'Processes user prompts and formulates accurate Excel logic',
      'Modifies spreadsheets in real-time',
      'End-to-end task automation with updated file returns',
    ],
    tags: ['Llama 3.2', 'Excel', 'Automation'],
  },
  {
    title: 'Domain-Specific Chatbot via LLM Fine-Tuning',
    category: 'Chatbots',
    icon: MessageSquare,
    description: 'Fine-tuned LLama-based conversational model using Low-Rank Adaptation (LoRA) to inject domain-specific intelligence.',
    details: [
      'Applied LoRA to target key transformer layers',
      'Significantly reduced training time and compute requirements',
      'Preserved model performance while preventing overfitting',
    ],
    tags: ['LLama', 'LoRA', 'Fine-tuning'],
  },
  {
    title: 'Multi-Product Chatbot Deployment',
    category: 'Chatbots',
    icon: Bot,
    description: 'Built and deployed chatbots for 4-5 different products using ChatGPT and custom data from various platforms.',
    details: [
      'Engineered high-quality prompts and fine-tuned parameters',
      'Created unified vector store for RAG across multiple products',
      'Deployed via Flask-based REST API with live endpoints',
    ],
    tags: ['ChatGPT', 'Flask', 'Vector Store', 'RAG'],
  },
  {
    title: 'Book Recommendation System',
    category: 'NLP',
    icon: BookOpen,
    description: 'Neural Collaborative Filtering-based recommendation system with BERT Clustering and Flask API Integration.',
    details: [
      'Implemented collaborative filtering with neural networks',
      'Used BERT for book clustering and similarity matching',
      'Deployed with Flask REST API',
    ],
    tags: ['BERT', 'Neural Networks', 'Flask', 'Recommendations'],
  },
  {
    title: 'Sentiment Analysis Application',
    category: 'NLP',
    icon: Brain,
    description: 'Advanced sentiment analysis application using LSTM neural networks for text classification.',
    details: [
      'Built LSTM-based deep learning model',
      'Processed and analyzed large text datasets',
      'Achieved high accuracy in sentiment classification',
    ],
    tags: ['LSTM', 'Deep Learning', 'Sentiment Analysis'],
  },
  {
    title: 'Malware Detection System',
    category: 'Data Analysis',
    icon: Shield,
    description: 'Assembly language opcodes classification using LSTM and DistilBERT to detect malware.',
    details: [
      'Classified assembly opcodes for malware detection',
      'Combined LSTM with DistilBERT for improved accuracy',
      'Security-focused AI application',
    ],
    tags: ['LSTM', 'DistilBERT', 'Security', 'Classification'],
  },
  {
    title: 'OCR Application with Llama 3.2',
    category: 'Automation',
    icon: Eye,
    description: 'Developed an OCR application utilizing Llama 3.2 405B to extract and process text with high accuracy.',
    details: [
      'High-accuracy text extraction from images',
      'Leveraged Llama 3.2 405B capabilities',
      'Automated document digitization',
    ],
    tags: ['Llama 3.2', 'OCR', 'Vision AI'],
  },
  {
    title: 'Urdu Memes Classification',
    category: 'NLP',
    icon: Brain,
    description: 'Urdu language memes classification using ML algorithms and FastText embeddings.',
    details: [
      'Processed Urdu language text data',
      'Applied FastText for word embeddings',
      'Multi-class classification of meme content',
    ],
    tags: ['FastText', 'Urdu NLP', 'Classification'],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">My Work</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A collection of AI-powered solutions I've built for clients across various industries.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? 'bg-primary text-primary-foreground' : ''}
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
                  className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300 group flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-3">
                    {project.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
