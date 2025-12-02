import CVViewer from "./CVViewer";
import { Award, Mail, Linkedin, Github, Code2, Cloud, Database } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-public-speaking.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Public speaking background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/70"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="hero-title mb-6 text-white font-bold">
              Your guide through the Cloud
            </h1>

            <p className="hero-lead max-w-3xl mx-auto mb-12 leading-relaxed text-white/90 text-xl">
              I help businesses and teams achieve their digital objectives with confidence and clarity through cloud engineering and software development.
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-primary rounded-full font-sans font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Ready to Innovate?
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
              >
                <Award className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm text-white">AWS Cloud Captain</span>
              </a>
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
              >
                <Mail className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm text-white">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ashenafig/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm text-white">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AshenafiTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
              >
                <Github className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm text-white">GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;