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
            <p className="text-lg text-muted max-w-3xl mx-auto readable-width">
              Dive into my thoughts on technology, career development, and industry trends. 
              I write about practical solutions, lessons learned, and insights that help developers 
              grow in their careers and build better software.
            </p>
          </div>

          {/* Featured Posts Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Blog Card 1: EC2 */}
                <Card className="card-hover border-0 shadow-md bg-card">
                  <CardContent className="p-0">
                    <img src="/public/blog1.png" alt="Deploy Amazon EC2" className="rounded-t-xl w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm">Mar 2, 2024</span>
                      <a href="https://medium.com/@ashenafiGodana/deploy-amazon-ec2-elastic-compute-cloud-d02cd049ac10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 text-sm hover:underline">
                        <ExternalLink className="w-4 h-4" />
                        Read
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Deploying Amazon EC2 (Elastic Compute Cloud)</h3>
                    <p className="text-muted mb-4 leading-relaxed">Step-by-step guide to launching scalable virtual servers on AWS EC2, including setup, security, and best practices.</p>
                    <div className="flex items-center gap-2 mt-4">
                      <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                      <span className="font-semibold">Ashenafi Godana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            {/* Blog Card 2 */}
              <Card className="card-hover border-0 shadow-md bg-card">
                <CardContent className="p-0">
                  <img src="/public/blog2.png" alt="Deploying Highly Available Multi-Tier Applications" className="rounded-t-xl w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm">Mar 4, 2024</span>
                      <a href="https://medium.com/@ashenafiGodana/deploying-highly-available-multi-tier-applications-9760d4bb8db5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 text-sm hover:underline">
                        <ExternalLink className="w-4 h-4" />
                        Read
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Deploying Highly Available Multi-Tier Applications</h3>
                    <p className="text-muted mb-4 leading-relaxed">A practical guide to architecting and deploying resilient, scalable multi-tier apps on AWS using EC2, RDS, ELB, CloudFront, and more.</p>
                    <div className="flex items-center gap-2 mt-4">
                      <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                      <span className="font-semibold">Ashenafi Godana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            {/* Blog Card 3 */}
              <Card className="card-hover border-0 shadow-md bg-card">
                <CardContent className="p-0">
                      <img src="/serverless.webp" alt="Serverless Orchestration using AWS Step Functions" className="rounded-t-xl w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm">Mar 5, 2024</span>
                      <a href="https://medium.com/@ashenafiGodana/serverless-orchestration-using-aws-step-functions-3a3843454a61" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 text-sm hover:underline">
                        <ExternalLink className="w-4 h-4" />
                        Read
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Serverless Orchestration using AWS Step Functions</h3>
                    <p className="text-muted mb-4 leading-relaxed">Learn how to orchestrate microservices and automate workflows using AWS Step Functions, with real-world use cases and practical examples.</p>
                    <div className="flex items-center gap-2 mt-4">
                      <img src="/public/profile-image.jpg" alt="Ashenafi Godana" className="w-7 h-7 rounded-full" />
                      <span className="font-semibold">Ashenafi Godana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay updated</h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto readable-width">
                Subscribe to my newsletter to get the latest articles, insights, and updates 
                delivered directly to your inbox. No spam, just valuable content.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
                  required
                />
                <Button size="lg" type="submit" className="group">
                  Subscribe to my newsletter
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