import { Mail, Linkedin, Github, Sparkles, Cloud, Brain, Code2, Zap, Server, Database, Cpu, Terminal, GitBranch, Layers } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const roles = ["Software Engineer", "AWS Cloud Captain", "AI Enthusiast", "DevOps Engineer"];

// Floating tech icons configuration
const floatingIcons = [
  { Icon: Cloud, color: "text-secondary", size: 32, delay: 0 },
  { Icon: Brain, color: "text-accent", size: 28, delay: 1 },
  { Icon: Server, color: "text-primary", size: 26, delay: 2 },
  { Icon: Database, color: "text-secondary", size: 24, delay: 3 },
  { Icon: Cpu, color: "text-accent", size: 30, delay: 4 },
  { Icon: Terminal, color: "text-primary", size: 28, delay: 5 },
  { Icon: GitBranch, color: "text-secondary", size: 26, delay: 6 },
  { Icon: Layers, color: "text-accent", size: 24, delay: 7 },
];

// Particle component
const Particles = () => {
  const particleCount = 50;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

// Orbiting icon component
const OrbitingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        {floatingIcons.map(({ Icon, color, size, delay }, index) => {
          const angle = (360 / floatingIcons.length) * index;
          const radius = 280 + (index % 2) * 80;
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `orbit ${20 + delay * 2}s linear infinite`,
                animationDelay: `${delay * -2}s`,
              }}
            >
              <div
                className={`${color} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                  animation: `counter-rotate ${20 + delay * 2}s linear infinite, pulse-icon 3s ease-in-out infinite`,
                  animationDelay: `${delay * -2}s, ${delay * 0.5}s`,
                }}
              >
                <div className="p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg">
                  <Icon size={size} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Dynamic mesh gradients with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,hsl(270_70%_60%_/_0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,hsl(330_70%_60%_/_0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(200_80%_55%_/_0.15),transparent_40%)]"></div>
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Animated floating orbs with glow */}
      <div 
        className="absolute top-10 left-[5%] w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-float opacity-60"
        style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
      ></div>
      <div 
        className="absolute bottom-10 right-[5%] w-96 h-96 bg-gradient-to-tr from-accent/25 to-primary/20 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-secondary/25 to-accent/15 rounded-full blur-3xl animate-float opacity-40"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Orbiting tech icons */}
      <OrbitingIcons />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)_/_0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-pulse"></div>
      
      {/* Glowing center ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/10 animate-pulse-glow pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-secondary/10 animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Animated badge */}
          <div className="flex justify-center mb-8">
            <div className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 text-foreground text-sm font-medium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shimmer"></div>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="relative z-10">Building the future with AI & Cloud</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            {/* Animated role title */}
            <div className="mb-4">
              <span className="text-lg md:text-xl text-muted-foreground font-medium">Hello, I'm Ashenafi</span>
            </div>
            
            <h1 className="hero-title mb-6">
              <span className="block text-foreground mb-2">I'm a</span>
              <span className="relative inline-block min-w-[300px] md:min-w-[500px]">
                <span className="gradient-text">{displayText}</span>
                <span className="animate-blink text-primary">|</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-muted-foreground">
              Crafting intelligent solutions at the intersection of 
              <span className="text-secondary font-medium"> artificial intelligence</span>, 
              <span className="text-primary font-medium"> cloud architecture</span>, and 
              <span className="text-accent font-medium"> modern engineering</span>.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 rounded-full font-semibold text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_100%] animate-gradient-x"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-secondary via-primary to-accent bg-[length:200%_100%] animate-gradient-x"></div>
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Let's Collaborate
                </span>
              </button>
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground border border-border/50 rounded-full font-semibold hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Code2 className="w-5 h-5 group-hover:text-primary transition-colors" />
                View Projects
              </button>
            </div>

            {/* Animated expertise pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { icon: Brain, label: "Machine Learning", color: "secondary" },
                { icon: Cloud, label: "Cloud Architecture", color: "accent" },
                { icon: Code2, label: "Full-Stack Dev", color: "primary" },
              ].map(({ icon: Icon, label, color }, index) => (
                <div 
                  key={label}
                  className={`group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-${color}/10 border border-${color}/20 text-foreground hover:bg-${color}/20 hover:border-${color}/40 transition-all duration-300 hover:scale-105 cursor-default`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-5 h-5 text-${color} group-hover:animate-bounce`} />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Social Links with hover effects */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "mailto:ashenafigodanaj@gmail.com", icon: Mail, label: "Email", hoverColor: "primary" },
                { href: "https://www.linkedin.com/in/ashenafig/", icon: Linkedin, label: "LinkedIn", hoverColor: "secondary", external: true },
                { href: "https://github.com/AshenafiTech", icon: Github, label: "GitHub", hoverColor: "accent", external: true },
              ].map(({ href, icon: Icon, label, hoverColor, external }) => (
                <a 
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-${hoverColor}/50 hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${hoverColor}/10`}
                >
                  <Icon className={`w-5 h-5 text-muted-foreground group-hover:text-${hoverColor} transition-colors`} />
                  <span className="text-sm text-foreground font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll-down"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;