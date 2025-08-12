import HeroSection from "@/components/HeroSection";
import BehindTheScreen from "@/components/BehindTheScreen";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HighlightProject from "@/components/HighlightProject";
// import Projects from "@/components/Projects";


export default function Home() {
  return (
      <main className="relative w-full">
        <HeroSection />
        <BehindTheScreen />
        <HighlightProject />
        {/* <Projects /> */}
        <CTA />
        <Footer />
      </main>
  );
}
