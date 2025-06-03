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
      {/* Adjusted padding to match HTML's px-40, reduced to px-10 for typical screen, py-5 */}
      <main className="flex-grow px-4 sm:px-10 lg:px-20 xl:px-40 py-5 flex justify-center">
        <div className="flex flex-col max-w-[960px] flex-1">
          <HeroSection />
          {/* Removed space-y, individual sections will handle their padding */}
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
