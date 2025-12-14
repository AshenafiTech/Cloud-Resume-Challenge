import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto container-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold gradient-text">Ashenafi Godana</h3>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer & Cloud Expert passionate about building scalable solutions 
                and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Projects</a></li>
                <li><a href="#certificates" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Certifications</a></li>
                <li><a href="#blogs" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="https://medium.com/@ashenafiGodana" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Medium Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Newsletter</a></li>
                <li><a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">LinkedIn</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/in/ashenafig/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border border-primary/20 transition-all duration-300 hover:scale-110" 
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/AshenafiTech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-10 h-10 bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg border border-secondary/20 transition-all duration-300 hover:scale-110" 
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://x.com/AshenafiGodana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-10 h-10 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-lg border border-accent/20 transition-all duration-300 hover:scale-110" 
                  title="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="mailto:ashenafigodanaj@gmail.com" 
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border border-primary/20 transition-all duration-300 hover:scale-110" 
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ashenafi Godana. Built with passion and modern technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
