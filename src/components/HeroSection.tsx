import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text leading-tight">
                Teaching millions how to code and helping businesses scale.
              </h1>
              
              <div className="space-y-4 text-lg text-secondary max-w-xl">
                <p>
                  <span className="font-medium">Your Name</span> is the Field CTO at{" "}
                  <a href="#" className="text-primary hover:underline">Company</a>, where they focus on cloud-native
                  technologies and AI, helping companies modernize their infrastructure and adopt
                  innovative solutions. They are also the founder of{" "}
                  <a href="#" className="text-primary hover:underline">Community Name</a>, a community initiative
                  where they mentor individuals in tech.
                </p>
                
                <p>
                  Their educational content on{" "}
                  <a href="#" className="text-primary hover:underline">YouTube</a> has been
                  watched by millions. A passionate advocate for open source, they regularly speak
                  at industry conferences on cloud, AI, and developer growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group"
                >
                  <ChevronDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  <a href="#about">Know more</a>
                </Button>
                <Button 
                  size="lg"
                  className="group"
                >
                  <a href="#contact" className="flex items-center">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;