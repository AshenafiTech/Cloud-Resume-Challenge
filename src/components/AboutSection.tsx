import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Users, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud & Backend Engineering", 
      description: "Building robust, scalable backend solutions with AWS, GCP, and modern frameworks. Certified Solutions Architect with hands-on production experience."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using NLP, computer vision, and predictive analytics. Google Cloud Professional ML Engineer certified."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Technical Leadership",
      description: "AWS Cloud Captain leading developer communities. Speaker at tech events, mentoring the next generation of cloud practitioners."
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Knowledge Sharing",
      description: "Technical writer on Medium covering cloud architecture patterns. Creating educational content to help others grow in technology."
    }
  ];

  return (
    <section id="about" className="section-padding section-bg-alt">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="section-header">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">About Me</p>
            <h2 className="section-title">
              Turning Complex Problems into Elegant Solutions
            </h2>
            <p className="section-subtitle">
              Software Engineering student with a track record of building production systems 
              and leading technical communities. Here's what I bring to the table.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="professional-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;