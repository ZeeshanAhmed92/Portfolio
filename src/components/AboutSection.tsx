import { Brain, Cpu, Database, Sparkles, CheckCircle2, Workflow, Lightbulb, BarChart3, Rocket } from 'lucide-react';

const highlights = [
  { icon: Brain, text: 'AI/ML Expert' },
  { icon: Cpu, text: 'LLM & Multimodal' },
  { icon: Database, text: 'Data Architect' },
  { icon: Sparkles, text: 'GenAI Specialist' },
];

const processes = [
  { 
    icon: Lightbulb, 
    title: 'Discovery & Multimodal Strategy', 
    desc: 'Defining the tech stack across LLMs, Vision models, or Speech-to-Text (STT/TTS) based on your specific data inputs.' 
  },
  { 
    icon: Workflow, 
    title: 'Architecture & Pipeline Design', 
    desc: 'Designing RAG systems, vector stores, and real-time media processing pipelines for low-latency Voice and Vision AI.' 
  },
  { 
    icon: BarChart3, 
    title: 'Iterative Development & RLHF', 
    desc: 'Building with LangChain/CrewAI, fine-tuning Vision Transformers, and optimizing Speech models with human-in-the-loop testing.' 
  },
  { 
    icon: Rocket, 
    title: 'Deployment & Continuous Monitoring', 
    desc: 'Cloud-scale deployment with focus on latency optimization for real-time AI and robust monitoring for model drift.' 
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <div className="aspect-square rounded-3xl glass border-glow overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center w-full px-6">
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
                      <Brain className="w-12 h-12 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {highlights.map((item, index) => (
                        <div key={index} className="glass rounded-xl p-4 border-glow transition-all duration-300">
                          <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <p className="text-xs font-semibold tracking-wide uppercase opacity-80">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">Expertise & Vision</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">
                Bridging the Gap Between <span className="text-gradient">Data and Intelligence</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am a Senior AI/ML Engineer dedicated to architecting production-ready ecosystems. 
                  With a deep focus on <span className="text-foreground font-semibold">Generative AI</span>, 
                  I help businesses transition from simple automation to autonomous, context-aware intelligence.
                </p>
                <p>
                  My philosophy centers on <span className="text-foreground font-semibold">Engineering Excellence</span>: 
                  ensuring that AI solutions are not just smart, but also scalable, cost-effective, and 
                  aligned with core business objectives across <span className="text-foreground font-semibold">Vision, Speech, and Text</span>.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  My Engineering Lifecycle
                </h3>
                <div className="grid gap-4">
                  {processes.map((p, i) => (
                    <div key={i} className="group p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <p.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{p.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;