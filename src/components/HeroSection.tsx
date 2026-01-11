import { Mail, Linkedin, Github, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = ["Software Engineer", "Cloud Architect", "AI Engineer", "DevOps Specialist"];

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Django", icon: "🎸" },
  { name: "AWS", icon: "☁️" },
  { name: "GCP", icon: "🌐" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TailwindCSS", icon: "🎨" },
];

const ToolsMarquee = () => {
  const duplicatedTools = [...tools, ...tools];
  
  return (
    <div className="w-full overflow-hidden py-6 border-t border-border">
      <div className="flex animate-marquee">
        {duplicatedTools.map((tool, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 px-4 py-2 rounded-md bg-muted/50 border border-border hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{tool.icon}</span>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tool.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 300 : 2500;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      <div className="container mx-auto container-padding relative z-10 flex-1 flex flex-col justify-center">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          
          {/* Greeting */}
          <p className="text-muted-foreground mb-4 text-base">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Ashenafi Godana
          </h1>

          {/* Dynamic Role */}
          <div className="h-12 md:h-14 mb-6 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-medium text-primary">
              {displayText}
              <span className="animate-blink text-primary/60">|</span>
            </span>
          </div>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            I design and build scalable cloud infrastructure and intelligent systems 
            that solve real business problems. Focused on AWS, AI/ML, and modern backend development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:ashenafigodanaj@gmail.com" 
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashenafig/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a 
              href="https://github.com/AshenafiTech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Tools Marquee */}
      <div className="relative z-10 mt-auto">
        <ToolsMarquee />
      </div>
    </section>
  );
};

export default HeroSection;