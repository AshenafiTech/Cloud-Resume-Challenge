import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Your Name</h3>
              <p className="text-sm text-muted-foreground">
                Passionate educator and tech professional helping millions learn to code and scale their businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#certificates" className="hover:text-primary transition-colors">Certificates</a></li>
                <li><a href="#blogs" className="hover:text-primary transition-colors">Blogs</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Podcast</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;