import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "2025",
      title: "AWS Certified Cloud Practitioner",
      type: "Certification",
      description: "Achieved AWS Cloud Practitioner certification, demonstrating foundational cloud knowledge",
      location: "Amazon Web Services"
    },
    {
      year: "2024",
      title: "Google Cloud ML Engineer",
      type: "Certification", 
      description: "Earned Professional Machine Learning Engineer certification from Google Cloud",
      location: "Google Cloud"
    },
    {
      year: "2024",
      title: "AWS Solutions Architect Associate",
      type: "Certification",
      description: "Obtained AWS Solutions Architect Associate certification",
      location: "Amazon Web Services"
    },
    {
      year: "2023",
      title: "Started Software Engineering",
      type: "Education",
      description: "Began pursuing Software Engineering degree with focus on cloud technologies",
      location: "University"
    },
    {
      year: "2022",
      title: "AWS Cloud Captain",
      type: "Achievement",
      description: "Recognized as AWS Cloud Captain for community contributions",
      location: "Amazon Web Services"
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">Journey</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Key milestones in my technology and education journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8 group">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                
                <Card className="ml-16 glass-effect border-0 group-hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <Badge variant="outline" className="w-fit mb-2 sm:mb-0">{item.year}</Badge>
                      <Badge variant="secondary" className="w-fit">{item.type}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 mb-3">{item.description}</p>
                    
                    <div className="flex items-center text-sm text-foreground/60">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;