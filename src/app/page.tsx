import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LearningModes from "@/components/LearningModes";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <LearningModes />
      <HowItWorks />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
