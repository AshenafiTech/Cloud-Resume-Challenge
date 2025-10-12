import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CVViewer from "./CVViewer";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Youtube, Download, MapPin, Calendar, Award, Mail, Eye } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16 md:pt-0">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Sidebar - Minimal design */}
          <aside className="w-full lg:w-80 flex flex-col">
            <div className={`flex flex-col w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="relative group mb-12">
                <div className="w-48 h-48 overflow-hidden relative">
                  <img
                    src={profileImage}
                    alt="Ashenafi Godana Kumbi - Software Engineer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <a 
                  href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group cursor-pointer"
                >
                  <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-sans">AWS Cloud Captain</span>
                </a>
              </div>
              
              <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
                Let's talk about code, AI, and the cloud. Building the future, one solution at a time.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:ashenafigodanaj@gmail.com" className="text-sm hover:text-primary transition-colors group font-sans">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors group font-sans">
                  LinkedIn
                </a>
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors group font-sans">
                  GitHub
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content - Bold minimal layout */}
          <main className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
              Ashenafi Godana Kumbi
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-8 leading-tight tracking-tight">
              Software Engineer with Cloud Expertise
            </h2>
            
            <div className="mb-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What I Do</h3>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <p className="font-semibold mb-1">Backend Development/Cloud Solutions</p>
                    <p className="text-muted-foreground">
                      Build robust backend systems and RESTful APIs with modern frameworks. 
                      Architect and deploy scalable cloud infrastructure on AWS and GCP, implementing CI/CD pipelines and containerized solutions for reliable, production-ready applications.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Python Development and Automation</p>
                    <p className="text-muted-foreground">
                      Develop efficient Python applications and automation scripts. 
                      Build tools that streamline workflows, automate repetitive tasks, and integrate systems for improved productivity.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Data Pipelines / Analytics Systems</p>
                    <p className="text-muted-foreground">
                      Create robust ETL workflows and real-time data processing systems. 
                      Transform raw data into actionable insights through modern analytics platforms and data warehousing solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <CVViewer>
                <button className="text-lg hover:text-primary transition-colors font-sans underline">
                  Work with Me
                </button>
              </CVViewer>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;