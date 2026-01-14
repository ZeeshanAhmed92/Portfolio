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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <FloatingContactButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <LatestProjectsSection />
        <ClientReviewsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
