import { Mail, Linkedin, Github, Sparkles, Cloud, Brain, Code2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "AWS Cloud Captain", "AI Enthusiast", "DevOps Engineer"];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(270_70%_60%_/_0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(330_70%_60%_/_0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(200_80%_55%_/_0.1),transparent_50%)]"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Building the future with AI & Cloud</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h1 className="hero-title mb-6 text-foreground">
              <span className="block gradient-text min-h-[1.2em]">
                {displayText}<span className="animate-pulse">|</span>
              </span>
              <span className="block mt-2 text-muted-foreground text-2xl md:text-3xl font-normal">
                AI & Cloud Expert
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
              Crafting intelligent solutions at the intersection of artificial intelligence, 
              cloud architecture, and modern software engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 btn-gradient text-primary-foreground rounded-full font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Let's Collaborate
              </button>
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-muted text-foreground border border-border rounded-full font-semibold hover:bg-muted/80 hover:border-primary/30 transition-all inline-flex items-center gap-2"
              >
                View Projects
              </button>
            </div>

            {/* Expertise Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-foreground">
                <Brain className="w-5 h-5 text-secondary" />
                <span className="font-medium">Machine Learning</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent/10 border border-accent/20 text-foreground">
                <Cloud className="w-5 h-5 text-accent" />
                <span className="font-medium">Cloud Architecture</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Full-Stack Development</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-primary transition-all group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-foreground font-medium">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ashenafig/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-secondary/30 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                <span className="text-sm text-foreground font-medium">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AshenafiTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-accent/30 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="text-sm text-foreground font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
