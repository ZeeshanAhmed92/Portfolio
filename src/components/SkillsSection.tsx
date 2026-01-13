import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    title: 'AI/ML Technologies',
    skills: [
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">My Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent AI solutions, from foundational programming to advanced machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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

          <div className="text-center mt-12">
            <Button variant="hero" asChild>
              <Link to="/skills">
                View All Skills
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
