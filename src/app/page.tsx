
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
      {/* Adjusted main to stack children vertically and center them */}
      <main className="flex-grow px-4 sm:px-10 lg:px-20 xl:px-40 py-5 flex flex-col items-center">
        <HeroSection /> {/* HeroSection is now a direct child of main */}
        {/* This div constrains the rest of the content */}
        <div className="flex flex-col max-w-[960px] flex-1 w-full">
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
