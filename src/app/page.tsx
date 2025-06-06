import Header from '@/components/portfolio/header';
import HeroSection from '@/components/portfolio/hero-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import EducationSection from '@/components/portfolio/education-section';
import ResumeTailorSection from '@/components/portfolio/resume-tailor-section';
import ContactSection from '@/components/portfolio/contact-section';
import Footer from '@/components/portfolio/footer';
import { PageContainer } from '@/components/portfolio/container';

export default function HomePage() {
  return (
    <PageContainer>
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ResumeTailorSection />
        <ContactSection />
      </div>
      <Footer />
    </PageContainer>
  );
}
