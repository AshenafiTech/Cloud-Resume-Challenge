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

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Card 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/blog1.png" alt="Kubernetes Deployment Strategies" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">Jul 31, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Kubernetes Deployment Strategies Explained</h3>
                  <p className="text-secondary mb-4">Use cases, trade-offs, and answers to real interview scenarios</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Vishakha Sadhwani" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Vishakha Sadhwani</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/blog2.png" alt="Cloud Engineer Roadmap" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">Jun 19, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>4</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cloud Engineer Roadmap</h3>
                  <p className="text-secondary mb-4">How to start, what to learn, and the resources to help you build real-world cloud skills</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Vishakha Sadhwani" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Vishakha Sadhwani</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl bg-card">
              <CardContent className="p-0">
                <img src="/public/blog3.png" alt="3 Skills that's working insanely well in Cloud/DevOps" className="rounded-t-xl w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">Aug 03, 2025</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.5 2.01 4.5 4.5S10.04 12 7.5 12c-1.74 0-3.41-1.01-4.5-2.09"/></svg>2</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">3 Skills that's working insanely well in Cloud/DevOps</h3>
                  <p className="text-secondary mb-4">|| SPECIAL EDITION ||</p>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/public/profile-image.jpg" alt="Vishakha Sadhwani" className="w-7 h-7 rounded-full" />
                    <span className="font-semibold">Vishakha Sadhwani</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay updated</h3>
              <p className="text-secondary mb-6 max-w-2xl mx-auto">
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