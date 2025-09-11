import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cloud, Mic, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentor & Content Creator",
      description: "I mentor students through cloud clubs and ALX programs, sharing knowledge through blogs and YouTube videos to help others grow in technology."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Backend Developer", 
      description: "I partner with companies to build robust, scalable backend and cloud solutions using modern technologies and best practices."
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Community Leader & Speaker",
      description: "Active in developer communities, I speak at tech events and lead initiatives that bring developers together to learn and grow."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Professional & Empathetic",
      description: "I combine technical expertise with emotional intelligence, bringing both professionalism and empathy to every project and interaction."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Passionate about <span className="gradient-text">Technology & Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a software engineering student with a passion for cloud technologies, backend development, 
              and building communities. Here's what defines my approach to technology and life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-effect border-0 hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
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