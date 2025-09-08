import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/20 transition-all duration-300 ${
      isScrolled ? "glass-effect backdrop-blur-md" : "bg-background/80"
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-foreground">Ashenafi</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            About
          </button>

          <button 
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("certificates")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Certifications
          </button>
          <button 
            onClick={() => scrollToSection("blogs")}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Blogs
          </button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </Button>
          <ThemeToggle />
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;