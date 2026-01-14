// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Briefcase, Calendar, MapPin } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Senior AI Engineer',
//     company: 'Consultancyoutfit',
//     location: 'Remote',
//     period: '2024 - Present',
//     type: 'Full-time',
//     description: [
//       'Leading AI projects from concept to deployment, ensuring seamless integration',
//       'Developing and optimizing machine learning models for AI-driven solutions',
//       'Integrating AI technologies into business processes, focusing on NLP and text analysis',
//       'Designing scalable AI systems and automated data preprocessing pipelines',
//       'Monitoring model performance and continuously improving algorithms',
//       'Mentoring junior engineers and conducting code reviews',
//     ],
//   },
//   {
//     title: 'AI Engineer',
//     company: 'Code Maze',
//     location: 'Remote',
//     period: '2020 - 2024',
//     type: 'Full-time',
//     description: [
//       'Developed and tested machine learning models for various AI applications',
//       'Conducted research on emerging AI technologies to enhance project outcomes',
//       'Collaborated with teams to integrate AI models into production environments',
//       'Analyzed large datasets to generate actionable insights and support decision making',
//       'Developed automated reports and dashboards to track key business metrics',
//       'Built chatbots and voice assistants using GPT, LangChain, and custom fine-tuned models',
//     ],
//   },
//   {
//     title: 'Data Analyst',
//     company: 'Freelance / Contract',
//     location: 'Pakistan',
//     period: '2018 - 2020',
//     type: 'Freelance',
//     description: [
//       'Created interactive dashboards and reports using Power BI for data-driven decisions',
//       'Performed data analysis using Python, Pandas, and SQL',
//       'Developed automated reporting solutions to streamline business processes',
//       'Collaborated with cross-functional teams to improve data quality and reporting processes',
//       'Provided data-driven recommendations to optimize operational efficiency',
//       'Built ETL pipelines for data extraction and transformation',
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <section className="py-24 pt-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-16">
//               <span className="text-primary font-mono text-sm tracking-wider uppercase">Career Path</span>
//               <h1 className="text-4xl md:text-5xl font-bold mt-2">
//                 Work <span className="text-gradient">Experience</span>
//               </h1>
//               <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//                 Over 6 years of experience in data analysis, machine learning, and AI engineering.
//               </p>
//             </div>

//             {/* Timeline */}
//             <div className="relative">
//               {/* Timeline Line */}
//               <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

//               {experiences.map((exp, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-12 md:mb-16 ${
//                     index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-0'
//                   }`}
//                 >
//                   {/* Timeline Dot */}
//                   <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

//                   {/* Content */}
//                   <div
//                     className={`ml-8 md:ml-0 ${
//                       index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                     }`}
//                   >
//                     <div className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300">
//                       {/* Header */}
//                       <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                         <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
//                           {exp.type}
//                         </span>
//                         <h3 className="text-xl font-bold">{exp.title}</h3>
//                         <p className="text-primary font-medium">{exp.company}</p>
                        
//                         <div className={`flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground ${
//                           index % 2 === 0 ? 'md:justify-end' : ''
//                         }`}>
//                           <span className="flex items-center gap-1">
//                             <Calendar className="w-4 h-4" />
//                             {exp.period}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <MapPin className="w-4 h-4" />
//                             {exp.location}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                         {exp.description.map((item, i) => (
//                           <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
//                             <span className={`w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0 ${
//                               index % 2 === 0 ? 'md:order-last' : ''
//                             }`} />
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Experience;


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, MapPin, CheckCircle2, Globe, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior AI Engineer',
    company: 'Consultancyoutfit',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Full-time',
    isPresent: true,
    description: [
      'Leading end-to-end AI project lifecycles from architecture to production deployment.',
      'Developing high-performance GRPO training pipelines for Qwen and DeepSeek models.',
      'Architecting multi-agentic workflows using LangGraph and CrewAI for enterprise automation.',
      'Optimizing real-time Computer Vision systems including YOLOv8 and custom OCR pipelines.',
      'Mentoring specialized engineering teams and establishing MLOps best practices.',
    ],
  },
  {
    title: 'AI & Data Consultant',
    company: 'Freelance / Self-Employed',
    location: 'Global',
    period: '2023 - Present',
    type: 'Freelance',
    isPresent: true,
    description: [
      'Designing custom GenAI solutions for international clients, focusing on RAG and LLM fine-tuning.',
      'Building specialized transcription and translation engines (Hindi, Bengali, Urdu).',
      'Implementing automated productivity tracking agents integrated with Jira and TimeDoctor.',
      'Delivering scalable data pipelines and visual intelligence dashboards for diverse industries.',
    ],
  },
  {
    title: 'AI Engineer',
    company: 'Code Maze',
    location: 'Remote',
    period: '2020 - 2024',
    type: 'Full-time',
    isPresent: false,
    description: [
      'Engineered and fine-tuned domain-specific LLMs using LoRA and QLoRA techniques.',
      'Built interactive chatbots and voice assistants using GPT-4, LangChain, and Whisper.',
      'Conducted SOTA research to integrate emerging AI models into production environments.',
      'Analyzed massive datasets to generate actionable insights and support strategic decisions.',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Freelance / Contract',
    location: 'Pakistan',
    period: '2018 - 2020',
    type: 'Full-time',
    isPresent: false,
    description: [
      'Developed end-to-end ETL pipelines for automated data extraction and transformation.',
      'Built interactive executive dashboards using Power BI and SQL for real-time monitoring.',
      'Optimized operational efficiency through Python-based predictive data modeling.',
      'Collaborated across departments to enhance data quality and reporting accuracy.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative overflow-hidden">
        {/* Modern Tech Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] -z-20" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[130px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[130px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <header className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-4">
                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                    <Globe className="w-3 h-3" /> Career Roadmap
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mt-2 tracking-tighter">
                  Experience <span className="text-gradient">& Growth</span>
                </h1>
                <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-light">
                  Currently scaling <span className="text-yellow-500 font-medium italic">Active Projects</span> while building on 6+ years of data and AI foundations.
                </p>
              </motion.div>
            </header>

            {/* Timeline Wrapper */}
            <div className="relative">
              {/* Timeline Stem */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500 via-primary/20 to-transparent transform -translate-x-1/2 hidden md:block" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative mb-20 flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`hidden md:flex absolute left-1/2 w-12 h-12 -translate-x-1/2 bg-background border-2 rounded-2xl items-center justify-center z-10 shadow-glow transition-all duration-500 ${
                    exp.isPresent ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'border-primary/30'
                  }`}>
                     {exp.isPresent ? (
                       <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                     ) : (
                       <Briefcase className="w-5 h-5 text-muted-foreground" />
                     )}
                  </div>

                  {/* Side Placeholder */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className={`glass p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group relative ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    } ${
                      exp.isPresent 
                      ? 'border-yellow-500/40 bg-yellow-500/[0.02] hover:border-yellow-500' 
                      : 'border-white/5 hover:border-primary/40'
                    }`}>
                      
                      {/* Badge Section */}
                      <div className={`flex items-center gap-3 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`px-4 py-1 text-[10px] font-black tracking-widest uppercase rounded-full border ${
                          exp.isPresent 
                          ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' 
                          : 'bg-primary/10 text-primary border-primary/20'
                        }`}>
                          {exp.type} {exp.isPresent && "• Active"}
                        </span>
                        {exp.isPresent && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse" />}
                      </div>

                      <div className={`mb-8 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                        <h3 className={`text-3xl font-extrabold tracking-tight transition-colors ${exp.isPresent ? 'text-yellow-500' : 'group-hover:text-primary'}`}>
                          {exp.title}
                        </h3>
                        <p className={`font-bold text-xl mt-1 ${exp.isPresent ? 'text-white' : 'text-primary/90'}`}>
                          {exp.company}
                        </p>
                        
                        <div className={`flex flex-wrap gap-4 mt-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider ${
                          index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                        }`}>
                          <span className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${exp.isPresent ? 'bg-yellow-500/10 text-yellow-500' : 'bg-secondary/30 text-primary'}`}>
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg">
                            <MapPin className="w-4 h-4 text-primary" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements List */}
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex gap-4 text-sm md:text-base text-muted-foreground/90 leading-relaxed ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'text-left'
                          }`}>
                            <div className="mt-1.5 shrink-0">
                                <CheckCircle2 className={`w-5 h-5 ${exp.isPresent ? 'text-yellow-500' : 'text-primary'}`} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;