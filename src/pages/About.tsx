import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Brain, Database, Cloud, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Expert in ML/DL models, Neural Networks, Transformers, LLMs (GPT, Llama, BERT), and Hugging Face.',
  },
  {
    icon: Code2,
    title: 'Programming',
    description: 'Proficient in Python, SQL, HTML/CSS, with expertise in TensorFlow, PyTorch, and LangChain.',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Experienced with MongoDB, PostgreSQL, Vector Databases, and SQL databases for AI applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud & APIs',
    description: 'Skilled in Google Cloud, Azure, OpenAI API, Claude API, Docker deployment, and n8n automation.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Get To Know Me</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                About <span className="text-gradient">Zeeshan Ahmed</span>
              </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image/Visual - Your Photo Goes Here */}
              <div className="relative">
                <div className="aspect-square rounded-3xl glass border-glow overflow-hidden">
                  {/* Replace this placeholder with your actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center p-8">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 border-4 border-primary/20">
                      <Sparkles className="w-20 h-20 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gradient mb-2">Zeeshan Ahmed</h2>
                    <p className="text-muted-foreground text-lg">Senior AI Engineer</p>
                    <p className="text-sm text-primary mt-2">Pakistan</p>
                  </div>
                  {/* To add your photo, replace the above div with:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Zeeshan Ahmed" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/20 rounded-3xl blur-2xl" />
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">
                  A Passionate <span className="text-gradient">AI/ML Engineer</span> from Pakistan
                </h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm a results-driven AI Engineer with 6+ years of experience specializing in machine learning, 
                  deep learning, and artificial intelligence. I'm proficient in designing, developing, and 
                  deploying innovative AI solutions to tackle real-world challenges.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in building and fine-tuning ML/DL models, translating complex data into actionable insights, 
                  and utilizing Power BI to create interactive dashboards that support data-driven decisions. 
                  Dedicated to advancing AI through research, practical applications, and collaborative efforts 
                  in academia and industry.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass rounded-xl p-4 border-glow">
                    <p className="text-3xl font-bold text-gradient">6+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="glass rounded-xl p-4 border-glow">
                    <p className="text-3xl font-bold text-gradient">30+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="glass rounded-xl p-4 border-glow">
                    <p className="text-3xl font-bold text-gradient">50+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="glass rounded-xl p-4 border-glow">
                    <p className="text-3xl font-bold text-gradient">B.E.</p>
                    <p className="text-sm text-muted-foreground">Electrical Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border-glow card-glow hover:border-primary/30 transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 border-glow">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Bachelor's in Electrical Engineering</p>
                    <p className="text-muted-foreground">University of Engineering and Technology, Taxila</p>
                    <p className="text-sm text-primary">2011 - 2015 | CGPA: 3.54/4</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border-glow">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">Data Scientist Professional Using Python, DataCamp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">Data Analyst using SQL, DataCamp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">Data Analyst using Power BI, DataCamp</span>
                  </li>
                </ul>
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
