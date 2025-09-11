import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Youtube, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/AshenafiGodana", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ashenafig/", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/AshenafiTech", label: "GitHub" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:ashenafigodanaj@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm">
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Drop me a message and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-effect border-0">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-semibold mb-8">Send me a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      className="h-12 bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or idea..." 
                      rows={6}
                      className="bg-background/50 backdrop-blur-sm border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full group medium-shadow hover:large-shadow transition-all duration-300">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="glass-effect border-0">
                <CardContent className="p-8 lg:p-10">
                  <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm always excited to connect with fellow developers, entrepreneurs, 
                      and tech enthusiasts. Whether you have a question, want to collaborate, 
                      or just want to say hi, feel free to reach out!
                    </p>
                    <div className="grid grid-cols-5 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 group"
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardContent className="p-6 lg:p-8">
                  <h4 className="font-semibold mb-3 text-lg">Quick Response</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I typically respond to messages within 24-48 hours. 
                    For urgent matters, feel free to reach out directly on LinkedIn or email.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;