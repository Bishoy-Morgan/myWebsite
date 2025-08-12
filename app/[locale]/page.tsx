import HeroSection from "@/components/HeroSection";
import BehindTheScreen from "@/components/BehindTheScreen";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HighlightProject from "@/components/HighlightProject";


export default function Home() {
  return (
      <main className="relative w-full">
        <HeroSection />
        <BehindTheScreen />
        <HighlightProject />
        <CTA />
        <Footer />
      </main>
  );
}
