import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior AI Engineer',
    company: 'Consultancyoutfit',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Full-time',
    description: [
      'Leading AI projects from concept to deployment, ensuring seamless integration',
      'Developing and optimizing machine learning models for AI-driven solutions',
      'Integrating AI technologies into business processes, focusing on NLP and text analysis',
      'Designing scalable AI systems and automated data preprocessing pipelines',
      'Monitoring model performance and continuously improving algorithms',
      'Mentoring junior engineers and conducting code reviews',
    ],
  },
  {
    title: 'AI Engineer',
    company: 'Code Maze',
    location: 'Remote',
    period: '2020 - 2024',
    type: 'Full-time',
    description: [
      'Developed and tested machine learning models for various AI applications',
      'Conducted research on emerging AI technologies to enhance project outcomes',
      'Collaborated with teams to integrate AI models into production environments',
      'Analyzed large datasets to generate actionable insights and support decision making',
      'Developed automated reports and dashboards to track key business metrics',
      'Built chatbots and voice assistants using GPT, LangChain, and custom fine-tuned models',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Freelance / Contract',
    location: 'Pakistan',
    period: '2018 - 2020',
    type: 'Freelance',
    description: [
      'Created interactive dashboards and reports using Power BI for data-driven decisions',
      'Performed data analysis using Python, Pandas, and SQL',
      'Developed automated reporting solutions to streamline business processes',
      'Collaborated with cross-functional teams to improve data quality and reporting processes',
      'Provided data-driven recommendations to optimize operational efficiency',
      'Built ETL pipelines for data extraction and transformation',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Career Path</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Work <span className="text-gradient">Experience</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Over 6 years of experience in data analysis, machine learning, and AI engineering.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-0'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300">
                      {/* Header */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        
                        <div className={`flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className={`w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0 ${
                              index % 2 === 0 ? 'md:order-last' : ''
                            }`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
