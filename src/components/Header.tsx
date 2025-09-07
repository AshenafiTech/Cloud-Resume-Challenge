import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
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
            href="#courses" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Courses
          </a>
          <a 
            href="#certificates" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Certificates
          </a>
          <a 
            href="#sponsorships" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sponsorships
          </a>
          <Button variant="default" size="sm">
            Get in touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;