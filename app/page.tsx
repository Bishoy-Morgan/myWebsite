'use client'

import HeroSection from "@/components/HeroSection";
import BehindTheScreen from "@/components/BehindTheScreen";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";


export default function Home() {
  return (
      <main className="relative w-full z-10">
        <HeroSection />
        <BehindTheScreen />
        <Projects />
        <CTA />
        <Footer />
      </main>
  );
}
