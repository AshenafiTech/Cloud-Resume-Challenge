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
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/8"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-r from-primary/8 to-transparent rounded-full blur-3xl animate-pulse opacity-30" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-gradient-to-l from-primary/6 to-transparent rounded-full blur-3xl animate-pulse opacity-20" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile-first centered layout */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row lg:gap-16">
            
            {/* Profile Section - Compact for mobile */}
            <div className={`flex flex-col items-center lg:items-start mb-12 lg:mb-0 lg:w-80 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* Profile Image */}
              <div className="relative group mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-3 border-primary/20 medium-shadow hover:scale-105 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Ashenafi Godana - Backend Developer & Cloud Engineer"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Status & Contact - Streamlined */}
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <div className="flex items-center gap-2 px-3 py-1.5 glass-effect rounded-lg">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium">AWS Cloud Captain</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 glass-effect rounded-lg">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Available for projects</span>
                </div>

                {/* Quick contact links */}
                <div className="flex gap-4 mt-2">
                  <a href="mailto:ashenafigodanaj@gmail.com" className="p-2 glass-effect rounded-lg hover:bg-primary/10 transition-colors group">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="p-2 glass-effect rounded-lg hover:bg-primary/10 transition-colors group">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="p-2 glass-effect rounded-lg hover:bg-primary/10 transition-colors group">
                    <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content - Enhanced hierarchy */}
            <div className={`flex-1 max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* Greeting */}
              <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium mb-6">
                👋 Hello, I'm
              </Badge>
              
              {/* Hero title - Responsive typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight tracking-tight">
                <span className="gradient-text">Ashenafi Godana</span>
              </h1>
              
              {/* Subtitle with key specializations */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground mb-6 leading-relaxed">
                Backend Developer & Cloud Engineer
              </h2>
              
              {/* Core value proposition - Concise */}
              <div className="mb-8 space-y-4">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  I design and build scalable backend solutions using <span className="text-primary font-semibold">AWS</span>, 
                  <span className="text-primary font-semibold"> Python</span>, and <span className="text-primary font-semibold">Kubernetes</span>. 
                  Specializing in cloud architecture, Infrastructure as Code, and CI/CD pipelines.
                </p>
                
                <p className="text-sm lg:text-base text-muted-foreground">
                  As an <span className="text-primary font-semibold">AWS Cloud Captain</span>, I lead communities and help teams scale their cloud journey.
                </p>
              </div>
              
              {/* Key skills highlight */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium glass-effect rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* CTA - Simplified */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="group medium-shadow hover:large-shadow transition-all duration-300 hover:scale-105" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
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