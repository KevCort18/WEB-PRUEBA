
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
      {/* Main content area - no horizontal padding on main to allow HeroSection to be full-width */}
      <main className="flex-grow py-5 flex flex-col items-center w-full">
        <HeroSection /> {/* HeroSection's root is w-full, will span its parent (main) */}
        {/* This div provides padding and max-width for the content SECTIONS below the hero */}
        <div className="flex flex-col max-w-[960px] w-full mx-auto px-4 sm:px-10 lg:px-20 xl:px-40">
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
