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

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Project Card 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/project1.png" alt="AI Chatbot Platform" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">May 10, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>5</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Chatbot Platform</h3>
                  <p className="text-secondary mb-4">A scalable chatbot platform for customer support, powered by natural language processing and machine learning.</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Ashenafi Godana</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/project2.png" alt="Cloud Automation Toolkit" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">Apr 22, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cloud Automation Toolkit</h3>
                  <p className="text-secondary mb-4">Automate cloud infrastructure provisioning and management with a suite of open source tools.</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Ashenafi Godana</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/project3.png" alt="DevOps Dashboard" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">Mar 15, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>4</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">DevOps Dashboard</h3>
                  <p className="text-secondary mb-4">Monitor CI/CD pipelines, cloud resources, and system health in one unified dashboard.</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Ashenafi Godana</span>
                  </div>
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