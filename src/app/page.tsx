import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import WholesaleSection from "@/components/sections/WholesaleSection";
import PanIndia from "@/components/sections/PanIndia";
import CultureSection from "@/components/sections/CultureSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        style={{ background: "var(--color-jaggery)", color: "var(--color-white-warm)" }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <BrandStory />
        <ProductShowcase />
        <Benefits />
        <HowItWorks />
        <WhoIsItFor />
        <WholesaleSection />
        <PanIndia />
        <CultureSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
