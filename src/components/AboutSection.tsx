import { Card, CardContent } from "@/components/ui/card";
import { Users, Cloud, Mic, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Educator and mentor",
      description: "Has educated thousands of developers, sharing in-depth knowledge and expertise in tech."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud consultant", 
      description: "Provides insightful consultancy to companies embarking on their cloud journeys."
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Community leader & keynote speaker",
      description: "Renowned for exceptional community leadership and engaging as a speaker at global tech conferences."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Empathy and professionalism",
      description: "Known for a unique blend of empathetic understanding and professional acumen in their approach to work and life."
    }
  ];

  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
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