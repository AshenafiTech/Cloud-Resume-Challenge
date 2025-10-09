import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CVViewer from "./CVViewer";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Youtube, Download, MapPin, Calendar, Award, Mail, Eye, Cloud, Database, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16 md:pt-0">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-accent/20 via-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl animate-pulse opacity-40" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Sidebar - Enhanced with color */}
          <aside className="w-full lg:w-80 flex flex-col">
            <div className={`flex flex-col w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="relative group mb-12">
                <div className="absolute -inset-1 gradient-bg rounded-lg opacity-20 group-hover:opacity-40 blur transition-all duration-500"></div>
                <div className="relative w-48 h-48 overflow-hidden rounded-lg">
                  <img
                    src={profileImage}
                    alt="Ashenafi Godana Kumbi - Software Engineer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <a 
                  href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-sm text-primary hover:bg-primary/20 transition-all group cursor-pointer"
                >
                  <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-sans font-medium">AWS Cloud Captain</span>
                </a>
              </div>
              
              <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
                Let's talk about code, AI, and the cloud. Building the future, one solution at a time.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:ashenafigodanaj@gmail.com" className="text-sm hover:text-primary transition-colors group font-sans flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors group font-sans flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors group font-sans flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content - Bold with vibrant accents */}
          <main className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter uppercase">
              <span className="gradient-text">Ashenafi Godana Kumbi</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-10 leading-tight tracking-tight">
              Software Engineer with Cloud Expertise
            </h2>
            
            {/* Vibrant interest cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
              <div className="group p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all hover:scale-105 cursor-default">
                <Cloud className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-sans font-bold text-sm mb-2">Cloud Infrastructure</h3>
                <p className="text-xs text-muted-foreground">Platform Engineering</p>
              </div>
              
              <div className="group p-6 rounded-lg bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-all hover:scale-105 cursor-default">
                <Database className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-sans font-bold text-sm mb-2">Data Pipelines</h3>
                <p className="text-xs text-muted-foreground">Analytics Systems</p>
              </div>
              
              <div className="group p-6 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all hover:scale-105 cursor-default">
                <Sparkles className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-sans font-bold text-sm mb-2">AI Integration</h3>
                <p className="text-xs text-muted-foreground">Machine Learning</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              I design and build robust data pipelines, backend APIs, and cloud-native solutions—empowering organizations to unlock insights and scale with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <CVViewer>
                <Button size="lg" className="group font-sans font-bold">
                  Work with Me
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CVViewer>
              <Button 
                variant="outline" 
                size="lg"
                className="font-sans font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;