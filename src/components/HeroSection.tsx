import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-background">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/[0.02]"></div>
        
        {/* Minimal geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/[0.02] rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary/[0.03] rounded-full blur-xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px),linear-gradient(hsl(var(--primary))_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">
            
            {/* Profile Section */}
            <div className={`lg:col-span-2 flex flex-col items-center lg:items-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <img
                    src={profileImage}
                    alt="Ashenafi Godana - Backend Developer & Cloud Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle status indicator */}
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-background shadow-sm animate-pulse"></div>
              </div>
              
              {/* Status badges */}
              <div className="flex flex-col gap-3 mb-8 w-full max-w-xs">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-card rounded-lg border border-border/50 shadow-sm">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">AWS Cloud Captain</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 bg-card rounded-lg border border-border/50 shadow-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Available for work</span>
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <a 
                  href="mailto:ashenafigodanaj@gmail.com" 
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/ashenafig/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/AshenafiTech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              
              {/* Main heading */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none mb-4">
                  <span className="block text-foreground">Ashenafi</span>
                  <span className="block gradient-text">Godana</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground leading-tight">
                  Backend Developer & Cloud Engineer
                </h2>
              </div>
              
              {/* Description */}
              <div className="mb-12 space-y-6 max-w-2xl">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I help teams and organizations build scalable backend and cloud solutions. 
                  Specializing in AWS, Python, Kubernetes, and Infrastructure as Code.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  As an AWS Cloud Captain, I mentor developer communities and share expertise 
                  through technical content and hands-on guidance.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-4 h-auto font-medium shadow-sm hover:shadow-md transition-all duration-200" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-4 h-auto font-medium" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;