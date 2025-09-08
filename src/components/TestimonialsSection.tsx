import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "Tech Corp",
      content: "Ashenafi's expertise in cloud architecture and his ability to explain complex concepts clearly made our project a huge success.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer", 
      company: "CloudTech",
      content: "Working with Ashenafi was incredible. His knowledge of AWS and automation tools helped streamline our entire deployment process.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "Ashenafi's community leadership and mentoring skills are exceptional. He helped our team adopt cloud-native practices seamlessly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What <span className="gradient-text">People Say</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Feedback from colleagues and community members I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/70">{testimonial.role} at {testimonial.company}</p>
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

export default TestimonialsSection;