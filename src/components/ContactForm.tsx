import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle, Linkedin, Github } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgvlbjgr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding section-bg-alt relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(270_70%_60%_/_0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(200_80%_55%_/_0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Let's <span className="gradient-text-secondary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to discuss cloud technologies? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">ashenafigodanaj@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/20">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Available for remote work</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="vibrant-card border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground mb-4">
                    I typically respond to messages within 24 hours. For urgent matters, 
                    feel free to reach out via LinkedIn.
                  </p>
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/30 hover:bg-primary/10">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </a>
                    <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-border/50 hover:border-secondary/30 hover:bg-secondary/10">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="vibrant-card border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-card border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-card border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      rows={5}
                      required
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <p className="text-green-500 font-medium">Message sent successfully!</p>
                      <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
                    </div>
                  ) : (
                    <Button type="submit" className="w-full btn-gradient group hover:scale-[1.02] transition-all" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
