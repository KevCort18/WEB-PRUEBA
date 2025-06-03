
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AgileApproachSection } from '@/components/sections/AgileApproachSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow flex flex-col items-center w-full">
        <HeroSection />
        <div className="flex flex-col max-w-[960px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MissionSection />
          <SolutionsSection />
          <AgileApproachSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
