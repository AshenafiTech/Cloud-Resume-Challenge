import CVViewer from "./CVViewer";
import { Award, Mail, Linkedin, Github, Code2, Cloud, Database } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0 bg-background">
      {/* Subtle professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      
      {/* Subtle accent elements */}
      <div className="absolute top-32 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="hero-title mb-6 text-foreground">
              Ashenafi Godana
            </h1>

            <h2 className="hero-subtitle font-bold text-muted-foreground mb-8">
              Software Engineer with Cloud Expertise
            </h2>

            <p className="hero-lead max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's talk about code, AI, and the cloud. Building the future, one solution at a time.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <a 
                href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <Award className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-sans text-sm">AWS Cloud Captain</span>
              </a>
              <a 
                href="mailto:ashenafigodanaj@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-sans text-sm">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ashenafig/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/AshenafiTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-sans text-sm">GitHub</span>
              </a>
            </div>

            {/* CTA */}
            <CVViewer>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-sans font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                Work with Me
              </button>
            </CVViewer>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Code2 className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">Backend Development/Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build robust backend systems and RESTful APIs with modern frameworks. 
                Architect and deploy scalable cloud infrastructure on AWS and GCP, implementing CI/CD pipelines and containerized solutions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Cloud className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">Python Development and Automation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Develop efficient Python applications and automation scripts. 
                Build tools that streamline workflows, automate repetitive tasks, and integrate systems for improved productivity.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Database className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
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