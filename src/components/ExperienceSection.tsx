import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior AI/ML Engineer',
    company: 'Freelance / Contract',
    period: '2022 - Present',
    description: 'Leading AI development projects for 30+ clients globally. Building GenAI applications, LLM-powered chatbots, voice assistants, and custom ML solutions. Specializing in enterprise-grade AI implementations.',
    achievements: [
      'Delivered 50+ successful AI projects',
      'Built custom LLM training pipelines',
      'Developed voice AI solutions for healthcare',
      'Created AI-powered analytics platforms',
    ],
  },
  {
    title: 'ML Engineer',
    company: 'Tech Startup',
    period: '2021 - 2022',
    description: 'Developed machine learning models for predictive analytics and natural language processing. Led the development of automated data processing pipelines and AI-driven reporting systems.',
    achievements: [
      'Reduced data processing time by 70%',
      'Built NLP models for sentiment analysis',
      'Implemented real-time ML predictions',
      'Automated report generation systems',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Analytics Firm',
    period: '2020 - 2021',
    description: 'Applied machine learning algorithms to solve business problems. Worked on computer vision projects, including commercial ads detection from videos and image classification systems.',
    achievements: [
      'Developed video content analysis system',
      'Built commercial ads detection model',
      'Created automated data extraction tools',
      'Improved model accuracy by 35%',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Career Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              4+ years of building intelligent solutions that make a difference.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-auto ${index % 2 === 0 ? 'md:right-0 md:-mr-3' : 'md:left-0 md:-ml-3'} top-0 w-6 h-6 rounded-full bg-primary border-4 border-background z-10 -ml-3`}>
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                </div>

                <div className="glass rounded-2xl p-6 border-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-mono">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-left">{exp.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
