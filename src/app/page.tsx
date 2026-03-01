import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/components/home/contactSec";
import Hero from "@/components/home/hero";
import Services from "@/components/home/homeservice";
import RepresentativeSection from "@/components/home/representativeSection";
import StepsSection from "@/components/home/stepsSection";
import { ChevronRight, Zap, Trophy, Target } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <Hero />

      <Services />

      {/* WHY CHOOSE US SECTION */}
      <StepsSection />

      <RepresentativeSection />

      <ContactSection />
    </main>
  );
}
