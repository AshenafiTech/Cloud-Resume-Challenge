import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import blog1Image from "@/assets/blog1.png";
import blog2Image from "@/assets/blog2.png";

const BlogsSection = () => {
  const blogs = [
    {
      title: "Deploying Amazon EC2: A Complete Guide",
      description: "Step-by-step walkthrough for launching scalable virtual servers on AWS EC2, covering security best practices and cost optimization.",
      image: blog1Image,
      url: "https://medium.com/@ashenafiGodana/deploy-amazon-ec2-elastic-compute-cloud-d02cd049ac10",
      readTime: "8 min read"
    },
    {
      title: "Highly Available Multi-Tier Architecture",
      description: "Architecting resilient applications on AWS using EC2, RDS, ELB, and CloudFront with practical implementation patterns.",
      image: blog2Image,
      url: "https://medium.com/@ashenafiGodana/deploying-highly-available-multi-tier-applications-9760d4bb8db5",
      readTime: "12 min read"
    },
    {
      title: "Serverless with AWS Step Functions",
      description: "Orchestrating microservices and automating workflows using Step Functions with real-world use cases and best practices.",
      image: null,
      url: "https://medium.com/@ashenafiGodana/serverless-orchestration-using-aws-step-functions-3a3843454a61",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blogs" className="section-padding section-bg">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="section-header">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Blog</p>
            <h2 className="section-title">
              Technical Writing & Insights
            </h2>
            <p className="section-subtitle">
              Sharing knowledge on cloud architecture, DevOps practices, and software engineering through practical, actionable articles.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {blogs.map((blog, index) => (
              <a 
                key={index} 
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="professional-card hover-lift h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                      {blog.image ? (
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground mb-2">{blog.readTime}</p>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {blog.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://medium.com/@ashenafiGodana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View All Articles on Medium
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;