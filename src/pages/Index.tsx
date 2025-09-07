import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import CertificatesSection from "@/components/CertificatesSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <CertificatesSection />
        <SponsorshipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
