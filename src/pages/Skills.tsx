import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Markdown', level: 85 },
    ],
  },
  {
    title: 'AI/ML Technologies',
    skills: [
      { name: 'LLM Fine-tuning', level: 95 },
      { name: 'TensorFlow/PyTorch', level: 90 },
      { name: 'LangChain', level: 92 },
      { name: 'OpenAI API', level: 95 },
      { name: 'Claude API', level: 92 },
      { name: 'Google Gemini', level: 90 },
      { name: 'CrewAI', level: 88 },
      { name: 'n8n Automation', level: 85 },
      { name: 'Google Cloud AI', level: 85 },
      { name: 'Azure AI', level: 82 },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Vector Databases', level: 90 },
      { name: 'Redis', level: 80 },
      { name: 'Docker', level: 85 },
    ],
  },
  {
    title: 'Specializations',
    skills: [
      { name: 'GenAI Applications', level: 95 },
      { name: 'Chatbot Development', level: 92 },
      { name: 'Voice Assistants', level: 88 },
      { name: 'Transcriptions', level: 90 },
      { name: 'API Creation (Flask/FastAPI)', level: 92 },
    ],
  },
];

const tools = [
  'Google Colab', 'VS Code', 'Streamlit', 'Power BI', 'Excel', 
  'Flask', 'FastAPI', 'Hugging Face', 'OpenCV', 'NLTK', 
  'SpaCy', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Plotly'
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">My Expertise</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Skills & <span className="text-gradient">Technologies</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A comprehensive toolkit for building intelligent AI solutions, from foundational programming to advanced machine learning.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {category.title}
                  </h3>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="glass rounded-2xl p-8 border-glow">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-secondary text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
