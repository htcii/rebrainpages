import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningModes from "@/components/LearningModes";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed background orbs */}
      <div className="bg-orbs">
        <div className="bg-orb-cyan" />
        <div className="bg-orb-pink" />
      </div>

      <Navbar />
      <Hero />
      <LearningModes />
      <Features />
      <Pricing />
      <HowItWorks />
      <Download />
      <Footer />
    </>
  );
}
