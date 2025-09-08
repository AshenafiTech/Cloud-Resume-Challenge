import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import BlogsSection from "@/components/BlogsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <main>
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        <section id="certificates" className="scroll-mt-20">
          <CertificatesSection />
        </section>
        <section id="blogs" className="scroll-mt-20">
          <BlogsSection />
        </section>
        <section id="testimonials" className="scroll-mt-20">
          <TestimonialsSection />
        </section>
        <section id="contact" className="scroll-mt-20">
          <ContactForm />
        </section>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
