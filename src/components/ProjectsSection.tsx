import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Users, Calendar, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Widely acclaimed projects",
      description: "Join thousands who have benefitted from my projects, backed by thousands of positive reviews."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Latest tech trends solutions", 
      description: "Regular projects and innovations to keep you updated with the latest technological advancements."
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "Open source contributions",
      description: "All projects are open source and available for the community to learn and contribute."
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm">
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Building <span className="gradient-text">innovative solutions</span> for the future
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my collection of projects spanning AI, DevOps, and modern development. 
              Each project represents a solution to real-world challenges, showcasing innovative 
              approaches to complex technical problems.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Card 1: Credit Risk Model */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center" 
                    alt="Credit Risk Analytics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">ML MODEL</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">RISK ANALYSIS</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Credit Risk Model
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Advanced credit scoring solution for Bati Bank's buy-now-pay-later service. Transforms customer behavioral data into predictive risk signals using RFM analysis, supports regulatory compliance (Basel II), and balances model interpretability with performance. Features FastAPI ML service, MLflow MLOps, Docker deployment, and CI/CD automation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">FastAPI</Badge>
                    <Badge variant="outline" className="text-xs">MLflow</Badge>
                    <Badge variant="outline" className="text-xs">Docker</Badge>
                  </div>
                  <a href="https://github.com/AshenafiTech/credit-risk-model" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2: Customer Experience Analytics */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center" 
                    alt="Customer Experience Analytics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">ANALYTICS</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">FINTECH</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Customer Experience Analytics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive analytics platform for fintech applications. Tracks user behavior, engagement metrics, and customer journey optimization using advanced data processing and visualization techniques.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Pandas</Badge>
                    <Badge variant="outline" className="text-xs">Plotly</Badge>
                    <Badge variant="outline" className="text-xs">Streamlit</Badge>
                  </div>
                  <a href="https://github.com/AshenafiTech/Customer-Experience-Analytics-for-Fintech-Apps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop&crop=center" 
                    alt="Insurance Analytics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">INSURANCE</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">ANALYTICS</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    End-to-End Insurance Analytics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Analyzes historical car insurance claim data for AlphaCare Insurance Solutions (ACIS) to optimize marketing strategies and identify low-risk clients. Includes EDA, predictive modeling, and actionable insights for insurance business optimization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Jupyter</Badge>
                    <Badge variant="outline" className="text-xs">DVC</Badge>
                    <Badge variant="outline" className="text-xs">CI/CD</Badge>
                  </div>
                  <a href="https://github.com/AshenafiTech/end-to-end-insurance-analytics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            {/* Project Card 4: Online Poll System */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop&crop=center" 
                    alt="Online Voting and Poll System" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">VOTING</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">REAL-TIME</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Online Poll System
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Scalable backend API and web app for creating and managing online polls with real-time voting, secure authentication, and instant results. Features include poll management, analytics, guest and authenticated voting, optimized PostgreSQL database, and interactive API docs. Built for organizations, events, and communities needing robust decision-making tools.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Django REST Framework</Badge>
                    <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                    <Badge variant="outline" className="text-xs">Docker</Badge>
                    <Badge variant="outline" className="text-xs">Swagger</Badge>
                  </div>
                  <a href="https://github.com/AshenafiTech/Online-Poll-System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            {/* Project Card 5: ALX Backend Python */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&crop=center" 
                    alt="Python Backend Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">PYTHON</div>
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">BACKEND</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    ALX Backend Python
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A comprehensive collection of backend Python projects and exercises from the ALX curriculum. Includes Django web apps, custom middleware, REST APIs, unit and integration testing, decorators, generator-based data processing, and messaging microservices. Features Docker, CI/CD, and best practices for scalable backend engineering.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Django</Badge>
                    <Badge variant="outline" className="text-xs">Unittest</Badge>
                    <Badge variant="outline" className="text-xs">Docker</Badge>
                    <Badge variant="outline" className="text-xs">CI/CD</Badge>
                  </div>
                  <a href="https://github.com/AshenafiTech/alx-backend-python" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                    View on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group medium-shadow hover:large-shadow transition-all duration-300">
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