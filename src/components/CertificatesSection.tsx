import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import saaImage from "@/assets/saa.png";
import gcpmlImage from "@/assets/gcpml.png";
import kcnaImage from "@/assets/kcna.png";
import ccpImage from "@/assets/ccp.jpg";
import awscaptainImage from "@/assets/awscaptain.jpg";
import kcnaessentialsImage from "@/assets/kcnaessentials.jpg";

const CertificatesSection = () => {
  const certificates = [
    {
      name: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
      logo: saaImage,
      url: "https://www.credly.com/badges/4a22375b-7c9f-4130-a62e-e11c076b18af"
    },
    {
      name: "GCP Professional ML Engineer",
      issuer: "Google Cloud",
      year: "2024", 
      logo: gcpmlImage,
      url: "https://www.credly.com/badges/70948327-60d9-4d85-9775-f55f3d4b3466"
    },
    {
      name: "Kubernetes & Cloud Native Associate",
      issuer: "CNCF",
      year: "2025",
      logo: kcnaImage,
      url: "https://www.credly.com/badges/bf0837f8-096c-4efb-8963-00062f8def9e"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      logo: ccpImage,
      url: "https://www.credly.com/badges/f9bf2795-60df-40e6-85f4-d94a48d43c35"
    },
    {
      name: "AWS Cloud Captain",
      issuer: "Amazon Web Services",
      year: "2025",
      logo: awscaptainImage,
      url: "https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3"
    },
    {
      name: "Kubernetes & Cloud Native Essentials",
      issuer: "CNCF",
      year: "2025",
      logo: kcnaessentialsImage,
      url: "https://www.credly.com/badges/9abbb7d1-5d70-450e-a4f9-eabb1f025c8a"
    }
  ];

  return (
    <section id="certificates" className="section-padding section-bg-alt">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="section-header">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Certifications</p>
            <h2 className="section-title">
              Validated Cloud Expertise
            </h2>
            <p className="section-subtitle">
              Industry-recognized certifications demonstrating proven expertise across major cloud platforms and technologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <a 
                key={index} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <Card className="professional-card hover-lift h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-md bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img 
                          src={cert.logo} 
                          alt={`${cert.name}`}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground/70">{cert.year}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;