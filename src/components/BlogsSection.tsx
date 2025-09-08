import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, ExternalLink } from "lucide-react";
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
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Blog & Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
              Sharing <span className="gradient-text">insights and knowledge</span> with the developer community
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Dive into my thoughts on technology, career development, and industry trends. 
              I write about practical solutions, lessons learned, and insights that help developers 
              grow in their careers and build better software.
            </p>
          </div>

          {/* Featured Posts Grid */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {/* Blog Card 1: EC2 */}
                <Card className="border border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] rounded-2xl bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                        <img src={blog1Image} alt="Deploy Amazon EC2" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                      <h3 className="text-xl font-bold mb-1 text-foreground">Deploying Amazon EC2 (Elastic Compute Cloud)</h3>
                      <p className="text-foreground/70 mb-2">Step-by-step guide to launching scalable virtual servers on AWS EC2, including setup, security, and best practices.</p>
                      <a href="https://medium.com/@ashenafiGodana/deploy-amazon-ec2-elastic-compute-cloud-d02cd049ac10" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:underline mt-2">
                        Read More <span className="text-primary text-lg">&rarr;</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

            {/* Blog Card 2 */}
              <Card className="border border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] rounded-2xl bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img src={blog2Image} alt="Deploying Highly Available Multi-Tier Applications" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold mb-1 text-foreground">Deploying Highly Available Multi-Tier Applications</h3>
                    <p className="text-foreground/70 mb-2">A practical guide to architecting and deploying resilient, scalable multi-tier apps on AWS using EC2, RDS, ELB, CloudFront, and more.</p>
                    <a href="https://medium.com/@ashenafiGodana/deploying-highly-available-multi-tier-applications-9760d4bb8db5" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:underline mt-2">
                      Learn More <span className="text-primary text-lg">&rarr;</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

            {/* Blog Card 3 */}
              <Card className="border border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] rounded-2xl bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl">⚡</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold mb-1 text-foreground">Serverless Orchestration using AWS Step Functions</h3>
                    <p className="text-foreground/70 mb-2">Learn how to orchestrate microservices and automate workflows using AWS Step Functions, with real-world use cases and practical examples.</p>
                    <a href="https://medium.com/@ashenafiGodana/serverless-orchestration-using-aws-step-functions-3a3843454a61" target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:underline mt-2">
                      Read More <span className="text-primary text-lg">&rarr;</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
          </div>

          {/* CTA Card */}
          <Card className="glass-effect subtle-shadow rounded-2xl border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay updated</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
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