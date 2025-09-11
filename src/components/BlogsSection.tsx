import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, ExternalLink, ArrowRight } from "lucide-react";
import blog1Image from "@/assets/blog1.png";
import blog2Image from "@/assets/blog2.png";

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
    <section id="blogs" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm">
              Blog & Articles
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Sharing <span className="gradient-text">insights and knowledge</span> with the developer community
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive into my thoughts on technology, career development, and industry trends. 
              I write about practical solutions, lessons learned, and insights that help developers 
              grow in their careers and build better software.
            </p>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Blog Card 1: EC2 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src={blog1Image} 
                    alt="Deploy Amazon EC2" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Deploying Amazon EC2 (Elastic Compute Cloud)
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Step-by-step guide to launching scalable virtual servers on AWS EC2, including setup, security, and best practices.
                  </p>
                  <a 
                    href="https://medium.com/@ashenafiGodana/deploy-amazon-ec2-elastic-compute-cloud-d02cd049ac10" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all group"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 2 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src={blog2Image} 
                    alt="Deploying Highly Available Multi-Tier Applications" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Deploying Highly Available Multi-Tier Applications
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A practical guide to architecting and deploying resilient, scalable multi-tier apps on AWS using EC2, RDS, ELB, CloudFront, and more.
                  </p>
                  <a 
                    href="https://medium.com/@ashenafiGodana/deploying-highly-available-multi-tier-applications-9760d4bb8db5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all group"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 3 */}
            <Card className="glass-effect border-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="text-5xl">⚡</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Serverless Orchestration using AWS Step Functions
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Learn how to orchestrate microservices and automate workflows using AWS Step Functions, with real-world use cases and practical examples.
                  </p>
                  <a 
                    href="https://medium.com/@ashenafiGodana/serverless-orchestration-using-aws-step-functions-3a3843454a61" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all group"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="glass-effect border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to my newsletter to get the latest articles, insights, and updates 
                delivered directly to your inbox. No spam, just valuable content for developers.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full backdrop-blur-sm"
                  required
                />
                <Button size="lg" type="submit" className="group whitespace-nowrap medium-shadow hover:large-shadow">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;