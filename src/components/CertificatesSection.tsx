import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  // Placeholder certificates - you can replace these with actual certificate data
  const certificates = [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2024",
      logo: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
      url: "#"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023", 
      logo: "https://images.credly.com/size/340x340/images/394dfaaf-7c46-4a39-8cb3-80999644e33e/image.png",
      url: "#"
    },
    {
      name: "Kubernetes Certified Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      logo: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
      url: "#"
    },
    {
      name: "Microsoft Azure Architect Expert",
      issuer: "Microsoft",
      year: "2022",
      logo: "https://images.credly.com/size/340x340/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png", 
      url: "#"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      year: "2022",
      logo: "https://images.credly.com/size/340x340/images/021d2b84-b8d1-4abb-9b64-3ae5b20b3f13/Docker-Certified-Associate.png",
      url: "#"
    },
    {
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp", 
      year: "2021",
      logo: "https://images.credly.com/size/340x340/images/85b9cfc4-257a-4742-878c-4f7ab4a2631b/image.png",
      url: "#"
    }
  ];

  return (
    <section id="certificates" className="section-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Professional Certifications & Achievements
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Demonstrating expertise across cloud platforms, DevOps tools, and modern technologies 
              through industry-recognized certifications and continuous learning.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Certificate Logo */}
                    <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-md flex items-center justify-center overflow-hidden">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-primary/10 rounded flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm leading-tight">{cert.name}</h3>
                      <p className="text-xs text-secondary">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>

                    {/* Hover Link */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12">
            <p className="text-sm text-secondary">
              Click on any certificate to view the credential details and verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;