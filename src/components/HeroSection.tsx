import CVViewer from "./CVViewer";
import { Award, Mail, Linkedin, Github, Sparkles, Code2, Cloud, Database } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
      
      {/* Animated accent elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-sans text-primary">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-secondary">
              Ashenafi Godana
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-8 leading-tight tracking-tight">
              Software Engineer with Cloud Expertise
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's talk about code, AI, and the cloud. Building the future, one solution at a time.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all group backdrop-blur-sm"
              >
                <Award className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm">AWS Cloud Captain</span>
              </a>
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ashenafig/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all group backdrop-blur-sm"
              >
                <Linkedin className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AshenafiTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground/10 border border-foreground/20 hover:bg-foreground/20 transition-all group backdrop-blur-sm"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm">GitHub</span>
              </a>
            </div>

            {/* CTA */}
            <CVViewer>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-sans font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Work with Me
              </button>
            </CVViewer>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all group hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">Backend Development/Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build robust backend systems and RESTful APIs with modern frameworks. 
                Architect and deploy scalable cloud infrastructure on AWS and GCP, implementing CI/CD pipelines and containerized solutions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-secondary/50 transition-all group hover-lift">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Cloud className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">Python Development and Automation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Develop efficient Python applications and automation scripts. 
                Build tools that streamline workflows, automate repetitive tasks, and integrate systems for improved productivity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/50 transition-all group hover-lift">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">Data Pipelines / Analytics Systems</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create robust ETL workflows and real-time data processing systems. 
                Transform raw data into actionable insights through modern analytics platforms and data warehousing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;