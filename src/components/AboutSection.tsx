import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cloud, Mic, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Content creator and mentor",
      description: "I have mentored students through cloud clubs and ALX programmes, and I share my knowledge by writing blogs and making YouTube videos."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud and backend developer", 
      description: "Work with companies to build robust backend and cloud solutions."
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Community leader & speaker",
      description: "Active in developer communities and have spoken at local and online tech events."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Empathy and professionalism",
      description: "I bring a unique balance of empathy and professional expertise to both my work and everyday life."
    }
  ];

  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Passionate about <span className="gradient-text">Technology & Community</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              I'm a software engineering student with a passion for cloud technologies, backend development, 
              and building communities. Here's what defines my approach to technology and life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-border/40 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{highlight.description}</p>
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