import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import CVViewer from "./CVViewer";
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
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled ? "glass-effect" : "bg-background/95 backdrop-blur-sm border-border/50"
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
              <span className="text-xl font-bold gradient-text transition duration-200 hover:brightness-125">Ashenafi</span>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</button>
            <button onClick={() => scrollToSection("certificates")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Certifications</button>
            <button onClick={() => scrollToSection("blogs")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</button>
            <CVViewer>
              <Button size="sm" className="medium-shadow hover:large-shadow transition-all duration-300">
                Resume
              </Button>
            </CVViewer>
            <ThemeToggle />
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 hover:bg-accent rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg z-50 md:hidden">
                <nav className="flex flex-col py-4">
                  <button 
                    onClick={() => {scrollToSection("about"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {scrollToSection("projects"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => {scrollToSection("certificates"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    Certifications
                  </button>
                  <button 
                    onClick={() => {scrollToSection("blogs"); setMenuOpen(false);}} 
                    className="px-6 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    Blog
                  </button>
                   <div className="px-6 py-3">
                     <CVViewer>
                       <Button 
                         size="sm" 
                         className="w-full"
                       >
                        Resume
                       </Button>
                     </CVViewer>
                   </div>
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