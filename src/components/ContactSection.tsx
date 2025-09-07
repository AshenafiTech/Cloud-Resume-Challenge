import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Youtube, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Get in touch
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's work together
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Drop me a message and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or idea..." 
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full group">
                    Send message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
                  <div className="space-y-4">
                    <p className="text-secondary">
                      I'm always excited to connect with fellow developers, entrepreneurs, 
                      and tech enthusiasts. Whether you have a question, want to collaborate, 
                      or just want to say hi, feel free to reach out!
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Response time</h4>
                  <p className="text-sm text-secondary">
                    I typically respond to messages within 24-48 hours. 
                    For urgent matters, feel free to reach out on social media.
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