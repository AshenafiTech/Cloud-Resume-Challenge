import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tech5ense-inspired background */}
      <div className="absolute inset-0 bg-background">
        {/* Dotted pattern background */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]" 
             style={{
               backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }}></div>
        
        {/* Tech accent elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-primary/[0.01]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            
            {/* Profile Image */}
            <div className="relative inline-block mb-8">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg mx-auto">
                <img
                  src={profileImage}
                  alt="Ashenafi Godana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-400 w-6 h-6 rounded-full border-4 border-background"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
              <span className="block text-foreground mb-2">Ashenafi Godana</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                Backend Developer & Cloud Engineer
              </span>
            </h1>

            {/* Status badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-medium text-foreground">AWS Cloud Captain</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Building scalable backend systems and cloud architectures that power the next generation of applications.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Specializing in AWS, Python, Kubernetes, and Infrastructure as Code. 
                Passionate about mentoring and sharing knowledge with the developer community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="text-base px-8 py-4 h-auto font-medium shadow-lg hover:shadow-xl transition-all duration-300" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-4 h-auto font-medium border-2" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashenafig/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href="https://github.com/AshenafiTech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;