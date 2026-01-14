import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Building Production-Ready RAG Applications with LangChain',
    excerpt: 'A comprehensive guide to building scalable Retrieval-Augmented Generation systems for enterprise applications. Learn best practices for vector databases, chunking strategies, and prompt engineering.',
    category: 'AI Development',
    date: 'Jan 10, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
  },
  {
    title: 'Fine-tuning LLMs: Best Practices and Common Pitfalls',
    excerpt: 'Learn the essential techniques for fine-tuning large language models effectively while avoiding common mistakes. Covers LoRA, QLoRA, and full fine-tuning approaches.',
    category: 'Machine Learning',
    date: 'Jan 5, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop'
  },
  {
    title: 'Voice AI in 2025: Trends and Technologies',
    excerpt: 'Exploring the latest advancements in voice assistant technology and what to expect in the coming year. From Whisper to ElevenLabs and beyond.',
    category: 'Voice AI',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
  },
  {
    title: 'Building Scalable AI APIs with FastAPI',
    excerpt: 'A deep dive into creating production-grade AI APIs using FastAPI. Covers async processing, model serving, and deployment strategies.',
    category: 'API Development',
    date: 'Dec 20, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
  },
  {
    title: 'CrewAI: Building Multi-Agent AI Systems',
    excerpt: 'How to leverage CrewAI for building collaborative AI agent systems that can handle complex tasks through teamwork.',
    category: 'AI Agents',
    date: 'Dec 15, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
  },
  {
    title: 'Docker Best Practices for ML Model Deployment',
    excerpt: 'Essential Docker patterns for deploying machine learning models in production. Includes multi-stage builds and optimization tips.',
    category: 'DevOps',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop'
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Blog</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Latest <span className="text-gradient">Articles</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on AI, machine learning, and software development
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group glass rounded-2xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;