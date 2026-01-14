import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle, ShieldCheck, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Flag from 'react-world-flags';

const reviews = [
  {
    name: 'Bijen Upadhyay',
    countryName: 'Nepal',
    countryCode: 'NP', // Use standard ISO codes
    content: 'Zeeshan is a professional expert in AI. He tutored me on complex concepts with immense clarity, ensuring I grasped both theory and practical application. His dedication went beyond lectures—providing coding assistance at all hours. Truly a productive and insightful mentorship.',
    rating: 5,
    initials: 'BP',
    project: 'AI Mentorship & Practical Engineering'
  },
  {
    name: 'Rituk Sharma',
    countryName: 'India',
    countryCode: 'IN', // Use standard ISO codes
    content: 'Delivered exactly what we needed—on time and with meticulous attention to detail. Zeeshan proactively suggested improvements that significantly enhanced the final assistant. His communication and smart problem-solving make him a top-tier choice for any IT project.',
    rating: 5,
    initials: 'RS',
    project: 'Multimodal AI Restaurant Operations'
  },
  {
    name: 'Black Mozarella',
    countryName: 'United Kingdom',
    countryCode: 'GB', // Use standard ISO codes
    content: 'An outstanding experience. Zeeshans technical expertise in AI security made the entire process seamless. He delivered a top-quality solution ahead of schedule and provided valuable insights that improved our final results. He is the most reliable AI engineer I’ve worked with.',
    rating: 5,
    initials: 'BM',
    project: 'AI Model Data Security & Privacy'
  },
  {
    name: 'Karim Jivani',
    countryName: 'Bangladesh',
    countryCode: 'BD', // Use standard ISO codes
    content: 'Zeeshan brought a deep understanding of AI to the project. His attention to detail and dedication moved the needle for us. He went above and beyond the initial scope—I would happily collaborate with him again!',
    rating: 5,
    initials: 'KJ',
    project: 'Audio Transcription & Automated Reporting'
  },
  {
    name: 'Chaytanya Kumar',
    countryName: 'United States',
    countryCode: 'US', // Use standard ISO codes
    content: 'Zeeshan exceeded expectations with timely delivery and proactive communication. He explained core model choices with impressive fluency, leaving no stone unturned. Highly recommended for anyone seeking high-impact projects in Data Science & ML! 👍',
    rating: 5,
    initials: 'CK',
    project: 'Multimodal PDF RAG Application'
  },
  {
    name: 'Duane Donelly',
    countryName: 'South Africa',
    countryCode: 'ZA', // Use standard ISO codes
    content: 'Working with Zeeshan was an absolute pleasure. He demonstrated a deep understanding of what was required and brought a level of professionalism and technical skill that truly impressed me. Not only did he deliver a high-quality chatbot solution, but he also completed the project ahead of schedule. Communication throughout was clear, prompt, and solution-focused. He took initiative, anticipated potential challenges, and offered smart suggestions that improved the final outcome. He worked with speed without ever compromising quality.',
    rating: 5,
    initials: 'DD',
    project: 'Intent-Driven AI Routing Architecture'
  },
  {
    name: 'Ahmed',
    countryName: 'Egypt',
    countryCode: 'EG', // Use standard ISO codes
    content: 'It was nice to work with him, good communication, work was beyond expectations, gave more revisions than mentioned and give a quick response. Stringly recommend him',
    rating: 5,
    initials: 'A',
    project: 'Implementing Custom ML Algorithms and Tuning LLM on Data'
  },
  {
    name: 'Andre Arkham',
    countryName: 'Germany',
    countryCode: 'DE', // Use standard ISO codes
    content: 'So far the most polite and proactive service I experienced. So much attention to detail. Exceptionally forthcoming and understanding. Provides a lot of valuable information. Very recommendable.',
    rating: 5,
    initials: 'AA',
    project: 'Performing Text Classification and Topic Modelling'
  },
  {
    name: 'Iqra Noor',
    countryName: 'Pakistan',
    countryCode: 'PK', // Use standard ISO codes
    content: 'The task was well-executed, and the results are promising. Thank you for your understanding and patience.',
    rating: 5,
    initials: 'IN',
    project: 'Text Classification on Urdu Memes Data Using ML Algorithms and Transformer'
  },
  {
    name: 'Aris Beleris',
    countryName: 'Greece',
    countryCode: 'GR',
    content: 'Very good cooperation, professional work! I recommend him for sure.',
    rating: 5,
    initials: 'AB',
    project: 'HDFS Logs Classification System'
  }
];

const ClientReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleStep = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  return (
    <section id="reviews" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> Global Partner Network
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Trusted <span className="text-gradient">Worldwide</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative min-h-[550px] md:min-h-[480px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 50 : -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden shadow-2xl">
                  <Quote className="absolute -top-6 -right-6 w-48 h-48 text-primary/[0.03] rotate-12 pointer-events-none" />
                  
                  <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-center">
                    {/* Left Side: Identity */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-xl">
                                {reviews[currentIndex].initials}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-background border border-white/10 p-2 rounded-xl shadow-xl">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                            </div>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-foreground mb-1">
                          {reviews[currentIndex].name}
                        </h4>

                        {/* Fiverr Style Flag + Full Country Name */}
                        <div className="flex items-center gap-2 text-muted-foreground mb-6">
                           <div className="w-5 shadow-sm overflow-hidden rounded-sm flex items-center">
                              <Flag code={reviews[currentIndex].countryCode} />
                           </div>
                           <span className="text-sm font-medium tracking-wide text-gray-400">{reviews[currentIndex].countryName}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                            <span className="ml-2 text-xs font-bold text-yellow-500">5.0 RATING</span>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 w-full">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5" /> Project Domain
                            </p>
                            <p className="text-sm font-semibold leading-relaxed text-foreground/90">{reviews[currentIndex].project}</p>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-7">
                      <div className="mb-6 opacity-20">
                        <Quote className="w-12 h-12 text-primary" />
                      </div>
                      <blockquote className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
                        "{reviews[currentIndex].content}"
                      </blockquote>
                      <div className="mt-10 flex items-center gap-4 opacity-30">
                         <div className="h-px w-12 bg-primary" />
                         <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Verified Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-16 gap-8">
              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={() => handleStep(-1)} className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-primary transition-all group">
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleStep(1)} className="w-14 h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-primary transition-all group">
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentIndex ? 'w-12 bg-primary' : 'w-3 bg-white/10'
                    }`}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;