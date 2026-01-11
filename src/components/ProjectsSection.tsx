import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Compliance Analysis Platform",
      description: "NLP-powered system automating regulatory document analysis for financial services. Reduced manual review time by 70% through intelligent extraction and classification.",
      tags: ["Python", "Transformers", "Streamlit", "Docker"],
      impact: "70% faster document processing",
      url: "https://github.com/AshenafiTech/Intelligent-Compliant-analysis-for-financial-services"
    },
    {
      title: "Customer Experience Analytics",
      description: "Analytics platform tracking user behavior and engagement for fintech applications. Enabled data-driven decisions improving user retention by 25%.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit"],
      impact: "25% improved retention",
      url: "https://github.com/AshenafiTech/Customer-Experience-Analytics-for-Fintech-Apps"
    },
    {
      title: "Insurance Risk Analytics",
      description: "End-to-end data pipeline analyzing car insurance claims to identify low-risk clients and optimize marketing strategies with ML predictions.",
      tags: ["Python", "Jupyter", "DVC", "CI/CD"],
      impact: "Optimized client targeting",
      url: "https://github.com/AshenafiTech/end-to-end-insurance-analytics"
    },
    {
      title: "Real-time Polling System",
      description: "Scalable backend for online polls with secure authentication, real-time voting, and instant results visualization for thousands of concurrent users.",
      tags: ["Django", "PostgreSQL", "Docker", "REST API"],
      impact: "Scalable to 10K+ users",
      url: "https://github.com/AshenafiTech/Online-Poll-System"
    },
    {
      title: "Backend Development Portfolio",
      description: "Comprehensive collection of production-ready backend projects including REST APIs, microservices, and messaging systems from ALX curriculum.",
      tags: ["Python", "Django", "Docker", "CI/CD"],
      impact: "20+ completed modules",
      url: "https://github.com/AshenafiTech/alx-backend-python"
    }
  ];

  return (
    <section id="projects" className="section-padding section-bg">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="section-header">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Projects</p>
            <h2 className="section-title">
              Work That Delivers Results
            </h2>
            <p className="section-subtitle">
              Selected projects showcasing expertise in cloud architecture, AI/ML, and backend development. 
              Each solution addresses real business challenges with measurable outcomes.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {projects.map((project, index) => (
              <Card key={index} className="professional-card hover-lift group">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Impact Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.impact}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="btn-secondary">
                View All Projects on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;