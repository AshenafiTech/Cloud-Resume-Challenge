import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-foreground">Ashenafi</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Certifications
          </a>
          <a 
            href="#blogs" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Blogs
          </a>
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;