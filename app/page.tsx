'use client'

import HeroSection from "@/components/HeroSection";
import BehindTheScreen from "@/components/BehindTheScreen";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <main className="relative w-full z-10">
        <HeroSection />
        <BehindTheScreen />
        <ProjectsHighlight />
        <CTA />
        <Footer />
      </main>
  );
}
