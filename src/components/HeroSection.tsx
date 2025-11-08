import CVViewer from "./CVViewer";
import {
  Award,
  Mail,
  Linkedin,
  Github,
  Code2,
  Cloud,
  Database,
  ChevronsDown,
} from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0 bg-gradient-to-b from-background to-muted/5">
      {/* Decorative blurred shapes + subtle SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#g1)" />
        </svg>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>

          {/* Left: Headline + CTAs */}
          <div className="py-8">
            <div className="flex items-start gap-6">
              {/* Vertical social / contact */}
              <aside className="hidden md:flex flex-col items-center gap-4 text-muted-foreground">
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ashenafigodanaj@gmail.com" aria-label="Email" className="hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <div className="w-px h-16 bg-border mt-2" />
              </aside>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  <span className="block text-foreground">Ashenafi Godana</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-400 text-3xl sm:text-4xl font-semibold mt-2">Cloud-native Engineer • AI-enabled Apps • Data Pipelines</span>
                </h1>

                <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                  I design and build resilient cloud systems and data platforms. I help teams ship faster with clean code, automated pipelines, and pragmatic architecture.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <CVViewer>
                    <button className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/95 transition-shadow shadow-md">
                      Hire / Download CV
                    </button>
                  </CVViewer>

                  <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg text-sm hover:bg-muted/20 transition">
                    View Projects
                  </a>

                  <a href="https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg text-sm">
                    <Award className="w-4 h-4" />
                    AWS Certified
                  </a>
                </div>

                <div className="mt-8 text-sm text-muted-foreground">
                  <strong className="text-foreground">Available for:</strong> contract roles · cloud architecture · data engineering
                </div>
              </div>
            </div>
          </div>

          {/* Right: Spotlight card with expertise + illustration */}
          <div className="py-8 flex items-center justify-center">
            <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-tr from-card/80 to-background/50 border border-border shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">What I build</h4>
                  <p className="text-sm text-muted-foreground">Cloud-native services, data pipelines, and developer tooling.</p>
                </div>
              </div>

              <ul className="grid gap-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Cloud Architecture</div>
                    <div className="text-xs text-muted-foreground">AWS, GCP, IaC, containers</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Data & ETL</div>
                    <div className="text-xs text-muted-foreground">Streaming, warehousing, transformations</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Certifications</div>
                    <div className="text-xs text-muted-foreground">AWS Cloud Captain</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 text-xs text-muted-foreground">Want a tailored proposal? Click "Hire / Download CV" and I’ll send a short plan for your project.</div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronsDown className="w-6 h-6 animate-bounce" />
            <span className="text-xs mt-1">Scroll</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;