// import Navbar from '@/components/Navbar';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import ServicesSection from '@/components/ServicesSection';
// import SkillsSection from '@/components/SkillsSection';
// import LatestProjectsSection from '@/components/LatestProjectsSection';
// import ClientReviewsSection from '@/components/ClientReviewsSection';
// import BlogSection from '@/components/BlogSection';
// import Footer from '@/components/Footer';
// import SocialSidebar from '@/components/SocialSidebar';
// import FloatingContactButton from '@/components/FloatingContactButton';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <SocialSidebar />
//       <FloatingContactButton />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ServicesSection />
//         <SkillsSection />
//         <LatestProjectsSection />
//         <ClientReviewsSection />
//         <BlogSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import LatestProjectsSection from '@/components/LatestProjectsSection';
import ClientReviewsSection from '@/components/ClientReviewsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import FloatingContactButton from '@/components/FloatingContactButton';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      <SocialSidebar />
      <FloatingContactButton />
      
      <main className="relative">
        <HeroSection />
        
        <div className="space-y-0 relative">
          <AboutSection />
          
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          
          <ServicesSection />
          <SkillsSection />
          
          {/* Visual depth background for social proof */}
          <div className="bg-primary/[0.02] relative">
            <LatestProjectsSection />
            <ClientReviewsSection />
          </div>
          
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;