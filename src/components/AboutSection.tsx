import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cloud, Mic, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Backend Developer", 
      description: "I partner with companies to build robust, scalable backend and cloud solutions using modern technologies and best practices.",
      gradient: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
      borderColor: "border-secondary/20"
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Community Leader & Speaker",
      description: "Active in developer communities, I speak at tech events and lead initiatives that bring developers together to learn and grow.",
      gradient: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
      borderColor: "border-accent/20"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentor & Content Creator",
      description: "I have mentored students through cloud clubs and the ALX Cloud Computing Program, sharing knowledge through blogs and YouTube videos to help others grow in technology.",
      gradient: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Professional & Empathetic",
      description: "I combine technical expertise with emotional intelligence, bringing both professionalism and empathy to every project and interaction.",
      gradient: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 section-bg-alt relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(270_70%_60%_/_0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(200_80%_55%_/_0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="text-sm bg-primary/10 text-primary border-primary/20">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight text-foreground">
              Passionate about <span className="gradient-text">Technology & Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a software engineering student with a passion for cloud technologies, backend development, 
              and building communities. Here's what defines my approach to technology and life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className={`vibrant-card border ${highlight.borderColor} hover:scale-[1.02] transition-all duration-300 group overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-50`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-card rounded-xl flex items-center justify-center ${highlight.iconColor} border border-border group-hover:scale-110 transition-all duration-300`}>
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
