// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const skillCategories = [
//   {
//     title: 'Programming Languages',
//     skills: [
//       { name: 'Python', level: 95 },
//       { name: 'SQL', level: 90 },
//       { name: 'HTML/CSS', level: 85 },
//       { name: 'JavaScript', level: 75 },
//       { name: 'Markdown', level: 85 },
//     ],
//   },
//   {
//     title: 'AI/ML Technologies',
//     skills: [
//       { name: 'LLM Fine-tuning', level: 95 },
//       { name: 'TensorFlow/PyTorch', level: 90 },
//       { name: 'LangChain', level: 92 },
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
//       { name: 'Redis', level: 80 },
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

// const tools = [
//   'Google Colab', 'VS Code', 'Streamlit', 'Power BI', 'Excel', 
//   'Flask', 'FastAPI', 'Hugging Face', 'OpenCV', 'NLTK', 
//   'SpaCy', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Plotly'
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

// const Skills = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative bg-secondary/30">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">My Expertise</span>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2">
//                 Skills & <span className="text-gradient">Technologies</span>
//               </h1>
//               <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//                 A comprehensive toolkit for building intelligent AI solutions, from foundational programming to advanced machine learning.
//               </p>
//             </div>

//             {/* Skills Grid */}
//             <div className="grid md:grid-cols-2 gap-8 mb-16">
//               {skillCategories.map((category, index) => (
//                 <div
//                   key={index}
//                   className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300"
//                 >
//                   <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-primary rounded-full" />
//                     {category.title}
//                   </h3>
//                   {category.skills.map((skill) => (
//                     <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {/* Tools Section */}
//             <div className="glass rounded-2xl p-8 border-glow">
//               <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-primary rounded-full" />
//                 Tools & Platforms
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {tools.map((tool) => (
//                   <span
//                     key={tool}
//                     className="px-4 py-2 rounded-full bg-secondary text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Skills;


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cpu, Eye, Mic, Code2, Binary, Workflow } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML & Core Intelligence',
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'GRPO Training (Qwen/DeepSeek Models)', level: 92 },
      { name: 'LLM Fine-tuning (LoRA/QLoRA)', level: 95 },
      { name: 'RAG Architecture & Optimization', level: 94 },
      { name: 'Agentic Workflows (LangGraph/CrewAI)', level: 90 },
      { name: 'Prompt Engineering & RLHF', level: 96 },
    ],
  },
  {
    title: 'Computer Vision & Vision AI',
    icon: <Eye className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: 'Object Detection (YOLOv8/v10)', level: 92 },
      { name: 'Vision-Language Models (VLM)', level: 88 },
      { name: 'Structured OCR (Surya/LayoutLM)', level: 90 },
      { name: 'Image Classification & Segmenting', level: 94 },
      { name: 'OpenCV & Medical Imaging', level: 85 },
    ],
  },
  {
    title: 'Voice & Multimodal AI',
    icon: <Mic className="w-6 h-6 text-purple-500" />,
    skills: [
      { name: 'Speech-to-Text (Whisper/Deepgram)', level: 95 },
      { name: 'Text-to-Speech (ElevenLabs/VITS)', level: 92 },
      { name: 'Multilingual NLP (Urdu/Hindi/Bengali)', level: 90 },
      { name: 'Real-time Audio Streams', level: 85 },
      { name: 'Audio Fingerprinting & Search', level: 88 },
    ],
  },
  {
    title: 'Architecture & Deployment',
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    skills: [
      { name: 'Python (FastAPI/Flask)', level: 95 },
      { name: 'Vector Databases (Pinecone/Milvus)', level: 90 },
      { name: 'MLOps (Docker/CI/CD)', level: 85 },
      { name: 'Cloud Infra (GCP/Azure/AWS)', level: 82 },
      { name: 'High-Performance Inference', level: 88 },
    ],
  },
];

const tools = [
  'Hugging Face', 'PyTorch', 'TensorFlow', 'Deepgram', 'ElevenLabs', 
  'LangChain', 'LangGraph', 'CrewAI', 'n8n', 'Surya OCR', 'ONNX', 
  'TensorRT', 'Pinecone', 'FAISS', 'MongoDB', 'PostgreSQL', 'Streamlit', 
  'Weights & Biases', 'vLLM', 'Docker', 'Kubernetes'
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-6 group">
    <div className="flex justify-between mb-2">
      <span className="text-xs font-bold uppercase tracking-widest text-foreground/70 group-hover:text-primary transition-colors">
        {name}
      </span>
      <span className="text-xs font-mono text-primary/80">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary/50 overflow-hidden border border-white/5 relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-blue-500"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Modern Animated Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Expertise Matrix
                </span>
                <h1 className="text-5xl md:text-7xl font-black mt-2 tracking-tighter">
                  The <span className="text-gradient">Tech Stack</span>
                </h1>
                <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  A specialized engine for <span className="text-foreground font-medium">Multimodal Intelligence</span>, bridging GenAI, Computer Vision, and high-performance engineering.
                </p>
              </motion.div>
            </header>

            {/* Technical Visual - RLHF/GRPO Flow */}
            

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {skillCategories.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="glass group rounded-[2rem] p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-10 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                        {category.icon}
                    </div>
                    {category.title}
                  </h3>
                  
                  <div className="relative z-10">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specialized Architecture Diagram */}
            <div className="mb-20 text-center">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-muted-foreground">Orchestration & Deployment Layer</h4>
                
            </div>

            {/* Tools Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-[3rem] p-12 border-glow bg-gradient-to-b from-primary/[0.03] to-transparent"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Binary className="w-8 h-8 text-primary" />
                    Ecosystem & Frameworks
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">Core tools used to deploy production-grade AI systems.</p>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-6 py-3 rounded-2xl bg-secondary/30 border border-white/5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;