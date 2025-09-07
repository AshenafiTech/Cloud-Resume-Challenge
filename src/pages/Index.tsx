import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
  <section id="about" className="scroll-mt-20">
          <HeroSection />
        </section>
  <section>
          <ProjectsSection />
        </section>
  <section>
          <CertificatesSection />
        </section>
  <section>
          <BlogsSection />
        </section>
  <section>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
