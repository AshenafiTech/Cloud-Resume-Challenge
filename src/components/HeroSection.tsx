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
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 221, 102, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 221, 102, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0
        }}></div>
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/3 via-transparent to-pink-500/3"></div>
        
        {/* Animated grid patterns */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 30s linear infinite reverse'
          }}></div>
        </div>
        
        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-16 left-8 w-6 h-6 bg-gradient-to-br from-primary/30 to-primary/10 rotate-45 animate-float shadow-lg"></div>
        <div className="absolute top-32 right-16 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-full animate-float shadow-lg" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 rotate-45 animate-float shadow-lg" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-16 right-8 w-7 h-7 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-full animate-float shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-cyan-500/40 to-cyan-500/15 rotate-45 animate-float shadow-lg" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-br from-pink-500/30 to-pink-500/10 rounded-full animate-float shadow-lg" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/4 right-1/2 w-3 h-3 bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 rotate-45 animate-float shadow-lg" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-gradient-to-br from-indigo-500/30 to-indigo-500/10 rounded-full animate-float shadow-lg" style={{animationDelay: '7s'}}></div>
        
        {/* Large gradient orbs with enhanced effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl animate-pulse opacity-60" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-gradient-to-l from-blue-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse opacity-60" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{animationDuration: '8s', animationDelay: '4s'}}></div>
        
        {/* Tech-themed floating elements with enhanced graphics */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full animate-ping shadow-lg" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500/50 to-emerald-500/20 rounded-full animate-ping shadow-lg" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <div className="w-2 h-2 bg-gradient-to-br from-blue-500/50 to-blue-500/20 rounded-full animate-ping shadow-lg" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute top-3/4 right-1/2">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-purple-500/50 to-purple-500/20 rounded-full animate-ping shadow-lg" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="absolute top-1/4 left-3/4">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-cyan-500/50 to-cyan-500/20 rounded-full animate-ping shadow-lg" style={{animationDelay: '5s'}}></div>
        </div>
        
        {/* Flowing particle trails */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float" style={{top: '10%', left: '5%', animationDuration: '15s', animationDelay: '0s'}}></div>
          <div className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float" style={{top: '20%', left: '15%', animationDuration: '18s', animationDelay: '2s'}}></div>
          <div className="absolute w-1 h-1 bg-emerald-500/20 rounded-full animate-float" style={{top: '30%', left: '25%', animationDuration: '20s', animationDelay: '4s'}}></div>
          <div className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-float" style={{top: '40%', left: '35%', animationDuration: '22s', animationDelay: '6s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-500/20 rounded-full animate-float" style={{top: '50%', left: '45%', animationDuration: '16s', animationDelay: '8s'}}></div>
          <div className="absolute w-1 h-1 bg-pink-500/20 rounded-full animate-float" style={{top: '60%', left: '55%', animationDuration: '19s', animationDelay: '10s'}}></div>
          <div className="absolute w-1 h-1 bg-yellow-500/20 rounded-full animate-float" style={{top: '70%', left: '65%', animationDuration: '17s', animationDelay: '12s'}}></div>
          <div className="absolute w-1 h-1 bg-indigo-500/20 rounded-full animate-float" style={{top: '80%', left: '75%', animationDuration: '21s', animationDelay: '14s'}}></div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
          <ChevronDown className="w-6 h-6 text-foreground/60 relative z-10 hover:text-primary transition-colors duration-300" />
        </div>
      </div>
      <div className="container mx-auto px-4 pt-0 pb-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className={`flex flex-col items-center md:items-start w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mb-6 hover:scale-110 transition-all duration-500 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-blue-500/20 to-emerald-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 via-transparent to-cyan-500/20 rounded-full group-hover:animate-spin" style={{animationDuration: '10s'}}></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10 group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/10 group-hover:to-primary/20 transition-all duration-500"></div>
              </div>
              {/* Colorful Status Tags */}
              <div className="flex flex-col gap-3 mb-6 w-full items-center md:items-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400/15 to-yellow-400/5 rounded-lg border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-sm font-medium text-foreground/80">AWS Cloud Captain</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/15 to-emerald-500/5 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  <span className="text-sm font-medium text-foreground/80">Available for work</span>
                </div>
              </div>
              
              <p className="text-foreground/80 text-base text-center md:text-left mb-6 leading-relaxed">Let's talk about code, AI, and the cloud.</p>
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
            {/* Badge */}
            <div className="mb-4">
              <Badge className="px-4 py-2 text-base font-semibold bg-background text-foreground shadow">👋 Hello, I'm</Badge>
            </div>
            {/* Large Name - Gradient */}
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-none tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Ashenafi Godana
            </h1>
            {/* Role/Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8">
              Backend Developer & Cloud Engineer
            </h2>
            {/* Description */}
            <div className="mb-10 max-w-2xl">
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                I help teams and organizations build scalable backend and cloud solutions. Specializing in AWS, Python, Kubernetes, Infrastructure as Code, and CI/CD.<br />
                  As an <span className="text-blue-400 font-semibold">AWS Cloud Captain</span>, I lead cloud communities and empower others to grow in cloud technologies.
              </p>
            </div>
            
            {/* CTA Buttons - Kunal Style */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            

          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;