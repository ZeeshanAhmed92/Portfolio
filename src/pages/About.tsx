import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Brain, Sparkles, Globe, ShieldCheck, Mic, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    description: 'Specializing in RAG architectures, Agentic workflows (CrewAI, LangGraph), and fine-tuning LLMs like GPT-4, Claude 3.5, and Llama 3 for enterprise-grade precision.',
  },
  {
    icon: Mic,
    title: 'STT & TTS (Voice AI)',
    description: 'Expertise in Whisper, ElevenLabs, and Deepgram for real-time speech-to-text and emotive text-to-speech, building human-like voice assistants and transcription engines.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Implementing vision-language models (GPT-4o, Claude 3.5 Vision) and YOLO for object detection, OCR, and automated visual inspection systems.',
  },
  {
    icon: Code2,
    title: 'AI Engineering',
    description: 'Production-ready Python backends, FastAPI integration, and developing natural language interfaces for complex business logic and databases.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
              >
                <Globe className="w-3 h-3" /> Senior AI Engineer
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight">
                About <span className="text-gradient">Zeeshan Ahmed</span>
              </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
              
              {/* Image Container */}
              <div className="relative group mx-auto lg:mx-0">
                <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                  {/* Rotating Animated Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-10 z-20"
                  >
                  </motion.div>

                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full glass border-glow overflow-hidden z-10 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                      <img 
                        src="/Portfolio/Profile_image.jpg" 
                        alt="Zeeshan Ahmed" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl opacity-50" />
              </div>

              {/* Bio */}
              <div className="space-y-8 pt-4">
                <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
                  <span className="w-8 h-[1px] bg-primary" />
                  Multimodal AI Specialist
                </div>
                
                <h2 className="text-3xl font-bold leading-tight">
                  Bridging the gap between <span className="text-gradient">Human Language</span> and Machine Intelligence.
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With over 6 years of experience, I build intelligent systems that can see, hear, and talk. My focus is on creating autonomous agentic workflows that replace manual data entry and decision-making with high-precision AI.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My technical stack is built for the production era. I don't just build wrappers; I architect end-to-end multimodal pipelines that leverage state-of-the-art vision models and voice synthesis to provide truly immersive and efficient user experiences for global clients.
                </p>

                {/* KPI Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { val: '6+', lab: 'Years Experience' },
                    { val: '30+', lab: 'Global Clients' },
                    { val: '50+', lab: 'Projects Delivered' },
                    { val: '12h', lab: 'Avg. Response Time' }
                  ].map((stat, i) => (
                    <div key={i} className="glass rounded-2xl p-5 border-glow group hover:border-primary/40 transition-all">
                      <p className="text-3xl font-bold text-gradient">{stat.val}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.lab}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expanded Capabilities Section */}
            <div className="mb-24">
              <div className="flex flex-col items-center mb-12 text-center">
                <h3 className="text-2xl font-bold mb-2">Technical Capabilities</h3>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass rounded-3xl p-8 border-glow hover:border-primary/30 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-[2rem] p-10 border-glow relative overflow-hidden">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/20"><ShieldCheck className="w-5 h-5 text-primary" /></span>
                  Specializations
                </h3>
                <ul className="space-y-6">
                  {[
                    { title: 'Generative AI Specialist', org: 'Custom RAG & LLM Workflows' },
                    { title: 'Multimodal Architect', org: 'STT / TTS / Vision Integration' },
                    { title: 'Data Scientist Professional', org: 'Advanced Analytics (DataCamp)' }
                  ].map((cert, i) => (
                    <li key={i}>
                      <p className="font-bold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.org}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-[2rem] p-10 border-glow bg-primary/[0.02]">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-primary/20"><Globe className="w-5 h-5 text-primary" /></span>
                  Academic Foundation
                </h3>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Graduate Honors</p>
                  <p className="text-lg font-bold">University of Engineering and Technology</p>
                  <p className="text-muted-foreground text-sm mb-4">Taxila, Pakistan</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                    CGPA: 3.54 / 4.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;