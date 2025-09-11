import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Youtube, Download, MapPin, Calendar, Award, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Modern minimal background */}
      <div className="absolute inset-0">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-primary/8 to-transparent rounded-full blur-3xl animate-pulse opacity-30" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
          <ChevronDown className="w-6 h-6 text-foreground/60 relative z-10 hover:text-primary transition-colors duration-300" />
        </div>
      </div>
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Sidebar - Mobile-first responsive design */}
          <aside className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className={`flex flex-col items-center lg:items-start w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="relative group mb-8">
                <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-primary/20 medium-shadow hover:scale-105 transition-all duration-500 relative">
                  <img
                    src={profileImage}
                    alt="Ashenafi Godana - Backend Developer & Cloud Engineer"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Status badges */}
              <div className="flex flex-col gap-4 mb-8 w-full items-center lg:items-start">
                <div className="flex items-center gap-3 px-4 py-2 glass-effect rounded-xl">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">AWS Cloud Captain</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 glass-effect rounded-xl">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-center lg:text-left mb-8 leading-relaxed max-w-sm">
                Let's talk about code, AI, and the cloud. Building the future, one solution at a time.
              </p>
              
              {/* Contact links */}
              <div className="flex flex-col gap-3 items-center lg:items-start w-full">
                <a href="mailto:ashenafigodanaj@gmail.com" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content - Professional layout */}
          <main className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {/* Professional greeting badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                👋 Hello, I'm
              </Badge>
            </div>
            
            {/* Hero title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">Ashenafi Godana</span>
            </h1>
            
            {/* Professional subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 leading-relaxed">
              Backend Developer & Cloud Engineer
            </h2>
            
            {/* Professional description */}
            <div className="mb-10 max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I help teams and organizations design and build scalable backend and cloud solutions. I specialize in AWS, Python, Kubernetes, Infrastructure as Code, and CI/CD, with a strong foundation in machine learning, cloud architecture, and software engineering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                As an <span className="text-primary font-semibold">AWS Cloud Captain</span>, I lead cloud 
                communities and empower others to grow in cloud technologies.
              </p>
            </div>
            
            {/* Professional CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group medium-shadow hover:large-shadow transition-all duration-300 hover:scale-105" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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