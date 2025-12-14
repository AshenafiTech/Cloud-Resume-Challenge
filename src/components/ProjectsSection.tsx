import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Intelligent Compliance Analysis for Financial Services",
      description: "Developed an NLP-powered platform to automate compliance document analysis for financial services. Utilizes advanced language models to extract, classify, and summarize regulatory requirements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
      tags: ["Python", "spaCy", "Transformers", "Streamlit", "Docker"],
      category: "NLP",
      subcategory: "COMPLIANCE",
      url: "https://github.com/AshenafiTech/Intelligent-Compliant-analysis-for-financial-services"
    },
    {
      title: "Customer Experience Analytics",
      description: "Comprehensive analytics platform for fintech applications. Tracks user behavior, engagement metrics, and customer journey optimization using advanced data processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      tags: ["Python", "Pandas", "Plotly", "Streamlit"],
      category: "ANALYTICS",
      subcategory: "FINTECH",
      url: "https://github.com/AshenafiTech/Customer-Experience-Analytics-for-Fintech-Apps"
    },
    {
      title: "End-to-End Insurance Analytics",
      description: "Analyzes historical car insurance claim data for AlphaCare Insurance Solutions to optimize marketing strategies and identify low-risk clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      tags: ["Python", "Jupyter", "DVC", "CI/CD"],
      category: "INSURANCE",
      subcategory: "ANALYTICS",
      url: "https://github.com/AshenafiTech/end-to-end-insurance-analytics"
    },
    {
      title: "Online Poll System",
      description: "Scalable backend API and web app for creating and managing online polls with real-time voting, secure authentication, and instant results.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
      tags: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
      category: "VOTING",
      subcategory: "REAL-TIME",
      url: "https://github.com/AshenafiTech/Online-Poll-System"
    },
    {
      title: "ALX Backend Python",
      description: "A comprehensive collection of backend Python projects and exercises from the ALX curriculum. Includes Django web apps, REST APIs, and messaging microservices.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&crop=center",
      tags: ["Python", "Django", "Unittest", "Docker", "CI/CD"],
      category: "PYTHON",
      subcategory: "BACKEND",
      url: "https://github.com/AshenafiTech/alx-backend-python"
    }
  ];

  return (
    <section id="projects" className="section-padding section-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(330_70%_60%_/_0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm bg-secondary/10 text-secondary border-secondary/20">
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight text-foreground">
              Building <span className="gradient-text-secondary">innovative solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my collection of projects spanning AI, DevOps, and modern development. 
              Each project represents a solution to real-world challenges.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="vibrant-card border-border/50 group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 text-xs font-mono text-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded border border-border/50">{project.category}</div>
                    <div className="absolute bottom-4 right-4 text-xs font-mono text-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded border border-border/50">{project.subcategory}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-border/50 text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                      View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-gradient group hover:scale-105 transition-all">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
