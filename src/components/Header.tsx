import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Your Name</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Certificates
          </a>
          <a 
            href="#blogs" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blogs
          </a>
          <Button variant="default" size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;