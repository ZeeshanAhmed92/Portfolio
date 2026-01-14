// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

// const skillCategories = [
//   {
//     title: 'Programming Languages',
//     skills: [
//       { name: 'Python', level: 95 },
//       { name: 'SQL', level: 90 },
//       { name: 'HTML/CSS', level: 85 },
//       { name: 'JavaScript', level: 75 },
//     ],
//   },
//   {
//     title: 'AI/ML Technologies',
//     skills: [
//       { name: 'OpenAI API', level: 95 },
//       { name: 'Claude API', level: 92 },
//       { name: 'Google Gemini', level: 90 },
//       { name: 'CrewAI', level: 88 },
//       { name: 'n8n Automation', level: 85 },
//       { name: 'Google Cloud AI', level: 85 },
//       { name: 'Azure AI', level: 82 },
//     ],
//   },
//   {
//     title: 'Databases & Tools',
//     skills: [
//       { name: 'MongoDB', level: 88 },
//       { name: 'PostgreSQL', level: 85 },
//       { name: 'Vector Databases', level: 90 },
//       { name: 'Docker', level: 85 },
//     ],
//   },
//   {
//     title: 'Specializations',
//     skills: [
//       { name: 'GenAI Applications', level: 95 },
//       { name: 'Chatbot Development', level: 92 },
//       { name: 'Voice Assistants', level: 88 },
//       { name: 'Transcriptions', level: 90 },
//       { name: 'API Creation (Flask/FastAPI)', level: 92 },
//     ],
//   },
// ];

// const SkillBar = ({ name, level }: { name: string; level: number }) => {
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between mb-2">
//         <span className="text-sm font-medium">{name}</span>
//         <span className="text-sm text-muted-foreground">{level}%</span>
//       </div>
//       <div className="h-2 rounded-full bg-secondary overflow-hidden">
//         <div
//           className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
//           style={{ width: `${level}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// const SkillsSection = () => {
//   return (
//     <section id="skills" className="py-24 relative bg-secondary/30">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-primary font-mono text-sm tracking-wider uppercase">My Expertise</span>
//             <h2 className="text-3xl md:text-4xl font-bold mt-2">
//               Skills & <span className="text-gradient">Technologies</span>
//             </h2>
//             <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//               A comprehensive toolkit for building intelligent AI solutions, from foundational programming to advanced machine learning.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {skillCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <span className="w-2 h-2 bg-primary rounded-full" />
//                   {category.title}
//                 </h3>
//                 {category.skills.map((skill) => (
//                   <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//                 ))}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button variant="hero" asChild>
//               <Link to="/skills">
//                 View All Skills
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  Database, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core AI & Multimodal',
    icon: BrainCircuit,
    description: 'Expertise in generative models and sensory AI.',
    skills: [
      { name: 'LLM Architectures', level: 95 },
      { name: 'RAG Pipelines', level: 98 },
      { name: 'Vision Transformers', level: 85 },
      { name: 'STT / TTS Systems', level: 90 },
      { name: 'OCR', level: 95},
    ],
  },
  {
    icon: Terminal,
    title: 'Engineering Stack',
    description: 'The foundation of my production systems.',
    skills: [
      { name: 'Python (Expert)', level: 95 },
      { name: 'FastAPI / Flask', level: 90 },
      { name: 'Async Programming', level: 88 },
      { name: 'TypeScript/React', level: 80 },
      { name: 'HTML', level: 90 },
    ],
  },
  {
    icon: Database,
    title: 'Data & Vector Infra',
    description: 'Managing high-dimensional data at scale.',
    skills: [
      { name: 'Pinecone / Milvus / Faiss / Chroma', level: 92 },
      { name: 'PostgreSQL / NoSQL(MongoDB)', level: 85 },
      { name: 'Data Engineering', level: 88 },
      { name: 'Schema Mapping', level: 90 },
    ],
  },
  {
    icon: Layers,
    title: 'Agentic Frameworks',
    description: 'Orchestrating autonomous AI workflows.',
    skills: [
      { name: 'LangChain / LangGraph', level: 95 },
      { name: 'CrewAI / AutoGen', level: 92 },
      { name: 'n8n / Make Automation', level: 85 },
      { name: 'Docker / CI-CD', level: 82 },
    ],
  },
];

const SkillBadge = ({ name, level }: { name: string; level: number }) => (
  <div className="group relative">
    <div className="flex justify-between items-end mb-1.5">
      <span className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">
        {name}
      </span>
      <span className="text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        {level}%
      </span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary/50 via-primary to-cyan-400 rounded-full"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
              <Cpu className="w-3 h-3" /> Technical Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
              Expertise in <span className="text-gradient">Modern AI</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A specialized toolkit focused on building autonomous, multimodal, and enterprise-grade intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass rounded-3xl p-8 border-glow hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 italic">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
                
                <div className="mt-8 flex items-center gap-2 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] uppercase tracking-tighter text-muted-foreground">Verified Production Experience</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-6 p-2 pl-6 rounded-full glass border-glow">
              <span className="text-sm text-muted-foreground">Looking for my full technical CV?</span>
              <Button variant="hero" size="sm" className="rounded-full" asChild>
                <Link to="/skills" className="flex items-center gap-2">
                  View Full Stack <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;