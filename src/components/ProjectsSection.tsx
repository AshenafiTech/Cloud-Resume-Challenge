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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Building <span className="gradient-text">innovative solutions</span> for the future.
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Explore my collection of projects spanning AI, DevOps, and modern development. 
              Each project represents a solution to real-world challenges, showcasing innovative 
              approaches to complex technical problems.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Project Card 1 */}
            <Card className="glass-effect subtle-shadow hover-lift rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  <div className="text-white text-5xl z-10">🤖</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI Chatbot Platform</h3>
                  <p className="text-foreground/70 mb-4">A scalable chatbot platform for customer support, powered by natural language processing and machine learning.</p>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="glass-effect subtle-shadow hover-lift rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 via-teal-500/20 to-blue-500/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10"></div>
                  <div className="text-white text-5xl z-10">☁️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cloud Automation Toolkit</h3>
                  <p className="text-foreground/70 mb-4">Automate cloud infrastructure provisioning and management with a suite of open source tools.</p>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="glass-effect subtle-shadow hover-lift rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10"></div>
                  <div className="text-white text-5xl z-10">📊</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">DevOps Dashboard</h3>
                  <p className="text-foreground/70 mb-4">Monitor CI/CD pipelines, cloud resources, and system health in one unified dashboard.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="group">
              View projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;