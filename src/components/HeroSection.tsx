import { Mail, Linkedin, Github, Sparkles, Cloud, Brain, Code2, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "AWS Cloud Captain", "AI Enthusiast", "DevOps Engineer"];

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "FastAPI", icon: "🚀" },
  { name: "Django", icon: "🎸" },
  { name: "AWS", icon: "☁️" },
  { name: "GCP", icon: "🌐" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⚙️" },
];

const ToolsMarquee = () => {
  // Duplicate tools for seamless loop
  const duplicatedTools = [...tools, ...tools];
  
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-marquee">
        {duplicatedTools.map((tool, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 px-6 py-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group cursor-default"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tool.name}</span>
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Subtle gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Minimal grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)_/_0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto container-padding relative z-10 flex-1 flex flex-col justify-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
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
          <div className="text-center">
            <div className="mb-4">
              <span className="text-lg md:text-xl text-muted-foreground font-medium">Hello, I'm Ashenafi</span>
            </div>
            
            <h1 className="hero-title mb-6">
              <span className="block text-foreground mb-2">I'm a</span>
              <span className="relative inline-block min-w-[280px] md:min-w-[450px]">
                <span className="gradient-text">{displayText}</span>
                <span className="animate-blink text-primary">|</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground">
              Crafting intelligent solutions at the intersection of 
              <span className="text-secondary font-medium"> artificial intelligence</span>, 
              <span className="text-primary font-medium"> cloud architecture</span>, and 
              <span className="text-accent font-medium"> modern engineering</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
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
                className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-semibold hover:bg-muted hover:border-primary/30 transition-all inline-flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                View Projects
              </button>
            </div>

            {/* Expertise Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                <span className="font-medium">Full-Stack Dev</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
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

      {/* Tools Marquee */}
      <div className="relative z-10 mt-auto pb-8">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground font-medium">Technologies I work with</span>
        </div>
        <ToolsMarquee />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;