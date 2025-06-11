import BehindTheScreen from "@/components/BehindTheScreen";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import LinedBackground from "@/components/ui/LinedBackground";


export default function Home() {
  return (
    <div className="relative w-full h-full flex items-center justify-center ">
      <LinedBackground />
      <main className="relative w-full z-10">
        <Navbar />
        <HeroSection />
        <BehindTheScreen />
        <ProjectsHighlight />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
