import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import blog1Image from "@/assets/blog1.png";
import blog2Image from "@/assets/blog2.png";

const BlogsSection = () => {
  const blogs = [
    {
      title: "Deploying Amazon EC2 (Elastic Compute Cloud)",
      description: "Step-by-step guide to launching scalable virtual servers on AWS EC2, including setup, security, and best practices.",
      image: blog1Image,
      url: "https://medium.com/@ashenafiGodana/deploy-amazon-ec2-elastic-compute-cloud-d02cd049ac10"
    },
    {
      title: "Deploying Highly Available Multi-Tier Applications",
      description: "A practical guide to architecting and deploying resilient, scalable multi-tier apps on AWS using EC2, RDS, ELB, CloudFront, and more.",
      image: blog2Image,
      url: "https://medium.com/@ashenafiGodana/deploying-highly-available-multi-tier-applications-9760d4bb8db5"
    },
    {
      title: "Serverless Orchestration using AWS Step Functions",
      description: "Learn how to orchestrate microservices and automate workflows using AWS Step Functions, with real-world use cases.",
      image: null,
      url: "https://medium.com/@ashenafiGodana/serverless-orchestration-using-aws-step-functions-3a3843454a61"
    }
  ];

  return (
    <section id="blogs" className="section-padding section-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(330_70%_60%_/_0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm bg-primary/10 text-primary border-primary/20">
              Blog & Articles
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight text-foreground">
              Sharing <span className="gradient-text">insights and knowledge</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive into my thoughts on technology, career development, and industry trends. 
              I write about practical solutions and lessons learned.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogs.map((blog, index) => (
              <Card key={index} className="vibrant-card border-border/50 group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    {blog.image ? (
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-5xl">⚡</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {blog.description}
                    </p>
                    <a 
                      href={blog.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm"
                    >
                      Read Article <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="vibrant-card border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to my newsletter to get the latest articles, insights, and updates 
                delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                  required
                />
                <Button size="lg" type="submit" className="btn-gradient group whitespace-nowrap hover:scale-105 transition-all">
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
