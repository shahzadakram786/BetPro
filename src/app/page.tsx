import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactSection from '@/components/home/contactSec';
import Hero from '@/components/home/hero';
import Services from '@/components/home/homeservice';
import RepresentativeSection from '@/components/home/representativeSection';
import StepsSection from '@/components/home/stepsSection';
import { ChevronRight, Zap, Trophy, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative w-full min-h-150 flex flex-col items-center justify-center bg-brand-black overflow-hidden px-4 py-20">
          <Hero/>
        
        </section> 
         <Services/>

        {/* WHY CHOOSE US SECTION */}
        <StepsSection/>

        <RepresentativeSection/>

      <ContactSection/>
      </main>

        {/* FOOTER */}
        <Footer />
    </div>
  );
}