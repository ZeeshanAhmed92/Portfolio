import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Building Production-Ready RAG Applications with LangChain',
    excerpt: 'A comprehensive guide to building scalable Retrieval-Augmented Generation systems for enterprise applications.',
    category: 'AI Development',
    date: 'Jan 10, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
  },
  {
    title: 'Fine-tuning LLMs: Best Practices and Common Pitfalls',
    excerpt: 'Learn the essential techniques for fine-tuning large language models effectively while avoiding common mistakes.',
    category: 'Machine Learning',
    date: 'Jan 5, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop'
  },
  {
    title: 'Voice AI in 2025: Trends and Technologies',
    excerpt: 'Exploring the latest advancements in voice assistant technology and what to expect in the coming year.',
    category: 'Voice AI',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest <span className="text-gradient">Articles</span>
            </h2>
          </div>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 md:mt-0"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group glass rounded-2xl overflow-hidden border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  to="/articles"
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
    </section>
  );
};

export default BlogSection;
