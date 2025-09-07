import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, ExternalLink } from "lucide-react";

const BlogsSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Technical deep dives",
      description: "In-depth articles exploring complex technical concepts and real-world solutions."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Career insights",
      description: "Practical advice for developers looking to advance their careers and skills."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Industry trends",
      description: "Analysis of emerging technologies and their impact on the developer ecosystem."
    }
  ];

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Blog & Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
              Sharing insights and knowledge with the developer community
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Dive into my thoughts on technology, career development, and industry trends. 
              I write about practical solutions, lessons learned, and insights that help developers 
              grow in their careers and build better software.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay updated</h3>
              <p className="text-secondary mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter to get the latest articles, insights, and updates 
                delivered directly to your inbox. No spam, just valuable content.
              </p>
              <Button size="lg" className="group">
                Read latest articles
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;