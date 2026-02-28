import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AboutSection } from "./components/AboutSection";
import { AdminPage } from "./components/AdminPage";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { ImportFacilitationSection } from "./components/ImportFacilitationSection";
import { Navbar } from "./components/Navbar";
import { PackagingSection } from "./components/PackagingSection";
import { PrivateLabelSection } from "./components/PrivateLabelSection";
import { ProductSpecs } from "./components/ProductSpecs";
import { QualitySection } from "./components/QualitySection";
import { WhatsAppButton } from "./components/WhatsAppButton";

// Root layout (shared providers/toaster)
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-right" />
      <Outlet />
    </>
  ),
});

// Main website route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ProductSpecs />
        <PackagingSection />
        <PrivateLabelSection />
        <ImportFacilitationSection />
        <ApplicationsSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  ),
});

// Admin route
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
