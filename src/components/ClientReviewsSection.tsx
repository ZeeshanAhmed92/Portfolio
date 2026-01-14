// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const reviews = [
//   {
//     name: 'Sarah Johnson',
//     role: 'CTO, TechVentures Inc.',
//     content: 'Zeeshan delivered an exceptional AI chatbot that transformed our customer service. His expertise in NLP and attention to detail exceeded our expectations.',
//     rating: 5,
//     image: 'SJ'
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Founder, DataFlow AI',
//     content: 'Working with Zeeshan on our voice assistant project was a game-changer. His deep knowledge of speech recognition and AI integration is remarkable.',
//     rating: 5,
//     image: 'MC'
//   },
//   {
//     name: 'Emily Rodriguez',
//     role: 'Product Manager, InnovateTech',
//     content: 'The custom AI reporting system Zeeshan built saved us countless hours. His ability to understand complex requirements and deliver elegant solutions is impressive.',
//     rating: 5,
//     image: 'ER'
//   },
//   {
//     name: 'David Kim',
//     role: 'CEO, SmartAnalytics',
//     content: 'Zeeshan\'s work on our commercial ad detection system was outstanding. He delivered on time and the accuracy exceeded industry standards.',
//     rating: 5,
//     image: 'DK'
//   },
//   {
//     name: 'Lisa Thompson',
//     role: 'Director, HealthAI Solutions',
//     content: 'The LLM fine-tuning project Zeeshan completed for us revolutionized our medical documentation process. Highly recommend his services!',
//     rating: 5,
//     image: 'LT'
//   }
// ];

// const ClientReviewsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const goToPrevious = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   const goToNext = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//   };

//   return (
//     <section id="reviews" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
//             Client Reviews
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             What My <span className="text-gradient">Clients Say</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Trusted by 30+ clients worldwide for delivering exceptional AI solutions
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Review Card */}
//             <div className="glass rounded-3xl p-8 md:p-12 border-glow relative overflow-hidden">
//               <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              
//               <div className="relative z-10">
//                 <div className="flex items-center gap-1 mb-6">
//                   {[...Array(reviews[currentIndex].rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-primary text-primary" />
//                   ))}
//                 </div>

//                 <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
//                   "{reviews[currentIndex].content}"
//                 </p>

//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-lg">
//                     {reviews[currentIndex].image}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">{reviews[currentIndex].name}</h4>
//                     <p className="text-sm text-muted-foreground">{reviews[currentIndex].role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex items-center justify-center gap-4 mt-8">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={goToPrevious}
//                 className="rounded-full border-primary/30 hover:bg-primary/10"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </Button>

//               <div className="flex items-center gap-2">
//                 {reviews.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       setIsAutoPlaying(false);
//                       setCurrentIndex(index);
//                     }}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex
//                         ? 'w-8 bg-primary'
//                         : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={goToNext}
//                 className="rounded-full border-primary/30 hover:bg-primary/10"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientReviewsSection;

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechVentures Inc.',
    content: 'Zeeshan delivered an exceptional AI chatbot that transformed our customer service. His expertise in NLP and attention to detail exceeded our expectations.',
    rating: 5,
    initials: 'SJ',
    project: 'Enterprise RAG System'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, DataFlow AI',
    content: 'Working with Zeeshan on our voice assistant project was a game-changer. His deep knowledge of speech recognition and AI integration is remarkable.',
    rating: 5,
    initials: 'MC',
    project: 'Voice AI Integration'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateTech',
    content: 'The custom AI reporting system Zeeshan built saved us countless hours. His ability to understand complex requirements and deliver elegant solutions is impressive.',
    rating: 5,
    initials: 'ER',
    project: 'Document Intelligence'
  },
];

const ClientReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

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
    <section id="reviews" className="py-32 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3 h-3" /> 100% Client Satisfaction
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real feedback from partners who have integrated my AI solutions into their core production workflows.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4">
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute w-full"
              >
                <div className="glass rounded-[2rem] p-8 md:p-16 border-glow shadow-2xl relative overflow-hidden">
                  <Quote className="absolute -top-4 -left-4 w-32 h-32 text-primary/5 -rotate-12 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-tighter">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        Verified Project: {reviews[currentIndex].project}
                      </div>
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-tight mb-12 italic">
                      "{reviews[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center justify-between border-t border-white/5 pt-8">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {reviews[currentIndex].initials}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground">
                            {reviews[currentIndex].name}
                          </h4>
                          <p className="text-sm text-primary font-medium tracking-wide">
                            {reviews[currentIndex].role}
                          </p>
                        </div>
                      </div>
                      
                      {/* Placeholder for Client Company Logo */}
                      <div className="hidden md:block opacity-20 grayscale brightness-200">
                        <div className="h-8 w-24 bg-white/50 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Professional Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8">
             <div className="flex gap-3">
               <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleStep(-1)}
                  className="w-12 h-12 rounded-2xl border-white/10 glass hover:border-primary/50 transition-all group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleStep(1)}
                  className="w-12 h-12 rounded-2xl border-white/10 glass hover:border-primary/50 transition-all group"
                >
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
                      index === currentIndex
                        ? 'w-12 bg-primary'
                        : 'w-3 bg-white/10 hover:bg-white/20'
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