import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
  <div className="container mx-auto px-4 pt-0 pb-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-lg mb-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground text-base text-center md:text-left mb-4">Let’s talk about code! Reach out via the links below.</p>
              <div className="flex flex-col gap-2 items-center md:items-start w-full">
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

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground text-center mb-2">
              Hi! I'm Ashenafi Godana <span className="inline-block">👋</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary text-center max-w-2xl mb-6">
              I am a software engineering major graduating in June 2027.<br />
              I invite you to explore my blogs, projects, and community activities.
            </p>

            {/* About cards horizontally */}
            <div className="w-full py-12 flex flex-row flex-wrap gap-8 justify-center">
              <div className="flex items-start space-x-4 min-w-[250px] max-w-xs">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span><svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-3-3.87"/><path d="M9 20H4v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Backend Developer</h3>
                  <p className="text-muted-foreground leading-relaxed">Building robust APIs, scalable systems, and efficient server-side solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 min-w-[250px] max-w-xs">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span><svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.5 17.5a5 5 0 0 0-9 0"/><path d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l-.7.7M21 12h-1M4 12H3m16.66 7.66l-.7-.7M4.34 4.34l-.7-.7"/></svg></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Cloud Engineer</h3>
                  <p className="text-muted-foreground leading-relaxed">Designing and managing cloud infrastructure for modern applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 min-w-[250px] max-w-xs">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span><svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M12 22V8m7 7a7 7 0 0 1-14 0"/></svg></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Community leader & keynote speaker</h3>
                  <p className="text-muted-foreground leading-relaxed">Renowned for exceptional community leadership and engaging as a speaker at global tech conferences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 min-w-[250px] max-w-xs">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span><svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C7.5 21 2 17.5 2 12.5C2 8.5 6 5 12 5C18 5 22 8.5 22 12.5C22 17.5 16.5 21 12 21Z"/><path d="M12 11v2"/><circle cx="12" cy="14" r="1"/></svg></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Empathy and professionalism</h3>
                  <p className="text-muted-foreground leading-relaxed">Known for a unique blend of empathetic understanding and professional acumen in their approach to work and life.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;