import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              aria-label="Go to Hero Section"
              className="focus:outline-none bg-transparent border-none p-0 cursor-pointer"
              style={{ lineHeight: 1 }}
            >
              <span className="text-xl font-bold gradient-text transition duration-200 hover:opacity-80">Ashenafi</span>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Certifications</button>
            <button onClick={() => scrollToSection("blogs")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 btn-gradient text-primary-foreground rounded-full font-medium hover:scale-105 transition-all"
            >
              Contact
            </button>
            <ThemeToggle />
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-foreground hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden" 
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-lg z-50 md:hidden">
                <nav className="flex flex-col py-4">
                  <button 
                    onClick={() => {scrollToSection("about"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {scrollToSection("projects"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => {scrollToSection("certificates"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Certifications
                  </button>
                  <button 
                    onClick={() => {scrollToSection("blogs"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Blog
                  </button>
                  <button 
                    onClick={() => {scrollToSection("contact"); setMenuOpen(false);}} 
                    className="mx-6 mt-2 mb-4 px-5 py-2 btn-gradient text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all text-center"
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
