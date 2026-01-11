import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto container-padding py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="font-semibold text-foreground mb-3">Ashenafi Godana</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software Engineer & Cloud Architect building scalable solutions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-foreground transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("projects")} className="hover:text-foreground transition-colors">
                    Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("certificates")} className="hover:text-foreground transition-colors">
                    Certifications
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("blogs")} className="hover:text-foreground transition-colors">
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://medium.com/@ashenafiGodana" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Connect</h4>
              <div className="flex gap-2">
                <a 
                  href="https://www.linkedin.com/in/ashenafig/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                </a>
                <a 
                  href="https://github.com/AshenafiTech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 text-muted-foreground" />
                </a>
                <a 
                  href="https://x.com/AshenafiGodana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground" />
                </a>
                <a 
                  href="mailto:ashenafigodanaj@gmail.com" 
                  className="p-2 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ashenafi Godana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;