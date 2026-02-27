import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { AboutSection } from "./components/AboutSection";
import { ProductSpecs } from "./components/ProductSpecs";
import { PackagingSection } from "./components/PackagingSection";
import { PrivateLabelSection } from "./components/PrivateLabelSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { QualitySection } from "./components/QualitySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
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
