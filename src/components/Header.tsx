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
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled ? "glass-effect" : "bg-background/95 backdrop-blur-sm border-border/50"
    }`}>
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold gradient-text">Ashenafi</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("certificates")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection("blogs")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </button>
            <Button 
              size="sm" 
              className="medium-shadow hover:large-shadow transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;