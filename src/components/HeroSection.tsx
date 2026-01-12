import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = ["Software Engineer", "DevOps Engineer"];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      if (displayText !== roles[0]) setDisplayText(roles[0]);
      return;
    }

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
  }, [displayText, isDeleting, currentRoleIndex, prefersReducedMotion]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)_/_0.22)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)_/_0.22)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,black_45%,transparent_100%)]" />
      <div className="absolute -top-32 -left-10 h-80 w-80 rounded-full bg-primary/18 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/14 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto container-padding relative z-10 flex-1 flex flex-col justify-center">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-3 text-base">Hello, I'm</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Ashenafi Godana
          </h1>

          <div className="h-12 md:h-14 mb-6 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-medium text-primary">
              {prefersReducedMotion ? roles[0] : displayText}
              {!prefersReducedMotion && <span className="animate-blink text-primary/60">|</span>}
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            I build production-ready backend services, cloud platforms, and reliable delivery pipelines that move business metrics.
          </p>

          <p className="text-base text-muted-foreground/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            Currently focused on cloud automation, CI/CD, and operational excellence so teams ship fast.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Backend systems", "Cloud automation", "CI/CD"]
              .map((item) => (
                <span key={item} className="badge-subtle">
                  {item}
                </span>
              ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-primary text-primary-foreground hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-border bg-card hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="mailto:ashenafigodanaj@gmail.com"
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashenafig/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href="https://github.com/AshenafiTech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;