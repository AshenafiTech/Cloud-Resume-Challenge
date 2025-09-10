import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Youtube, Download, MapPin, Calendar, Award } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Creative Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-emerald-500/20 rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-500/30 rotate-45 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-pink-500/20 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
        
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        
        {/* Tech-themed floating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-1 h-1 bg-emerald-500/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <div className="w-1 h-1 bg-blue-500/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-foreground/50" />
      </div>
      <div className="container mx-auto px-4 pt-0 pb-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className={`flex flex-col items-center md:items-start w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mb-6 hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Colorful Status Tags */}
              <div className="flex flex-col gap-3 mb-6 w-full items-center md:items-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-foreground/80">AWS Cloud Captain</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/8 rounded-lg border border-emerald-500/15">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground/80">Available for work</span>
                </div>
              </div>
              
              <p className="text-foreground/80 text-base text-center md:text-left mb-6 leading-relaxed">Let's talk about code, AI, and the cloud. Always open to new opportunities and collaborations.</p>
              <div className="flex flex-col gap-3 items-center md:items-start w-full">
                <a href="mailto:ashenafigodanaj@gmail.com" className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                  {/* Email SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 0l8 8 8-8" /></svg>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                  {/* LinkedIn SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  Linkedin
                </a>
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors">
                  {/* GitHub SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
                  Github
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content - Kunal Style */}
          <main className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {/* Large Name - Kunal Style */}
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-none tracking-tight">
              <span className="gradient-text">Ashenafi Godana</span>
            </h1>
            
            {/* Role/Title - Clean and Bold */}
            <h2 className="text-2xl md:text-4xl font-bold text-foreground/90 mb-8">
              Backend Developer & Cloud Engineer
            </h2>
            
            {/* Description - Concise like Kunal's */}
            <div className="mb-10 max-w-2xl space-y-4">
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                I help teams and organizations build scalable backend and cloud solutions tailored to their needs. I specialize in designing and implementing cloud architectures using AWS, Python, Kubernetes, and Infrastructure as Code.
              </p>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                As an AWS Cloud Captain, I lead and mentor a community of students in cloud computing by organizing events, sharing resources, and guiding peers in learning AWS technologies. I share my expertise through blogs, videos, and mentoring in developer communities, helping others grow and succeed in tech.
              </p>
            </div>
            
            {/* CTA Buttons - Kunal Style */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

            </div>
            

          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;