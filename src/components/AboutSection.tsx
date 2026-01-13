import { Brain, Cpu, Database, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Brain, text: 'AI/ML Expert' },
  { icon: Cpu, text: 'LLM Specialist' },
  { icon: Database, text: 'Data Engineer' },
  { icon: Sparkles, text: 'GenAI Developer' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl glass border-glow overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
                      <Brain className="w-16 h-16 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-6">
                      {highlights.map((item, index) => (
                        <div
                          key={index}
                          className="glass rounded-xl p-4 border-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                        >
                          <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>

            {/* Right Side - Content */}
            <div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Transforming Ideas into{' '}
                <span className="text-gradient">Intelligent Solutions</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate AI/ML Engineer with over 4 years of hands-on experience 
                  in developing cutting-edge artificial intelligence solutions. My expertise 
                  spans across the entire AI development lifecycle, from conceptualization 
                  to deployment.
                </p>
                <p>
                  I specialize in building GenAI applications, intelligent chatbots, 
                  voice assistants, and custom AI systems that solve real-world business 
                  challenges. My work includes developing SQL assistants for complex 
                  database queries, transcription systems, and AI-powered report 
                  generation tools.
                </p>
                <p>
                  Having collaborated with 30+ clients across diverse industries, I bring 
                  a unique blend of technical excellence and business understanding to 
                  every project. I'm passionate about leveraging LLMs, machine learning 
                  algorithms, and deep learning to create solutions that drive measurable impact.
                </p>
              </div>

              {/* Tech Stack Preview */}
              <div className="mt-8 flex flex-wrap gap-3">
                {['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'SQL', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass border-glow text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
