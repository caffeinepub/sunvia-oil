import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { Navbar } from "./components/Navbar";
import { PackagingSection } from "./components/PackagingSection";
import { PrivateLabelSection } from "./components/PrivateLabelSection";
import { ProductSpecs } from "./components/ProductSpecs";
import { QualitySection } from "./components/QualitySection";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ProductSpecs />
        <PackagingSection />
        <PrivateLabelSection />
        <ApplicationsSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
