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
            {/* Project Card 1 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative">
                  <div className="text-4xl z-10">🤖</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    AI Chatbot Platform
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A scalable chatbot platform for customer support, powered by natural language processing and machine learning.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">NLP</Badge>
                    <Badge variant="outline" className="text-xs">AWS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center relative">
                  <div className="text-4xl z-10">☁️</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Cloud Automation Toolkit
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Automate cloud infrastructure provisioning and management with a suite of open source tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Terraform</Badge>
                    <Badge variant="outline" className="text-xs">AWS</Badge>
                    <Badge variant="outline" className="text-xs">Docker</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center relative">
                  <div className="text-4xl z-10">📊</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    DevOps Dashboard
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Monitor CI/CD pipelines, cloud resources, and system health in one unified dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">K8s</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="group medium-shadow hover:large-shadow transition-all duration-300">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;