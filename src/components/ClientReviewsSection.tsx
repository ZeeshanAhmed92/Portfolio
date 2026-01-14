import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechVentures Inc.',
    content: 'Zeeshan delivered an exceptional AI chatbot that transformed our customer service. His expertise in NLP and attention to detail exceeded our expectations.',
    rating: 5,
    image: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, DataFlow AI',
    content: 'Working with Zeeshan on our voice assistant project was a game-changer. His deep knowledge of speech recognition and AI integration is remarkable.',
    rating: 5,
    image: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateTech',
    content: 'The custom AI reporting system Zeeshan built saved us countless hours. His ability to understand complex requirements and deliver elegant solutions is impressive.',
    rating: 5,
    image: 'ER'
  },
  {
    name: 'David Kim',
    role: 'CEO, SmartAnalytics',
    content: 'Zeeshan\'s work on our commercial ad detection system was outstanding. He delivered on time and the accuracy exceeded industry standards.',
    rating: 5,
    image: 'DK'
  },
  {
    name: 'Lisa Thompson',
    role: 'Director, HealthAI Solutions',
    content: 'The LLM fine-tuning project Zeeshan completed for us revolutionized our medical documentation process. Highly recommend his services!',
    rating: 5,
    image: 'LT'
  }
];

const ClientReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by 30+ clients worldwide for delivering exceptional AI solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Review Card */}
            <div className="glass rounded-3xl p-8 md:p-12 border-glow relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                  "{reviews[currentIndex].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {reviews[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-primary/30 hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
