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
              Building innovative solutions for the future.
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Explore my collection of projects spanning AI, DevOps, and modern development. 
              Each project represents a solution to real-world challenges, showcasing innovative 
              approaches to complex technical problems.
            </p>
          </div>

          {/* Project Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
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