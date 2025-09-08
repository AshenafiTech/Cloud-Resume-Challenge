import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  // Placeholder certificates - you can replace these with actual certificate data
  const certificates = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
  logo: "/src/assets/saa.png",
      url: "https://www.credly.com/badges/4a22375b-7c9f-4130-a62e-e11c076b18af"
    },
    {
      name: "Google Cloud Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      year: "2023", 
      logo: "/src/assets/gcpml.png",
      url: "https://www.credly.com/badges/70948327-60d9-4d85-9775-f55f3d4b3466"
    },
    {
      name: "Kubernetes and Cloud Native Associate",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
  logo: "/src/assets/kcna.png",
      url: "https://www.credly.com/badges/bf0837f8-096c-4efb-8963-00062f8def9e"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2022",
      logo: "/src/assets/ccp.jpg",
      url: "#"
    },
    {
      name: "AWS Cloud Captain",
      issuer: "Amazon Web Services",
      year: "2022",
  logo: "/src/assets/awscaptain.jpg",
      url: "https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3"
    },
    {
      name: "Kubernetes and Cloud Native Essentials",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
  logo: "/src/assets/kcnaessentials.jpg",
      url: "https://www.credly.com/badges/9abbb7d1-5d70-450e-a4f9-eabb1f025c8a"
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
            {certificates.map((cert, index) => {
              const logo = (
                <div className="w-28 h-28 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.name} logo`}
                    className={
                      cert.name === "AWS Certified Solutions Architect – Associate"
                        ? "w-full h-full object-cover scale-150 translate-x-1"
                        : cert.name === "Google Cloud Professional Machine Learning Engineer" || cert.name === "AWS Certified Cloud Practitioner"
                        ? "w-full h-full object-contain scale-90"
                        : cert.name === "Kubernetes and Cloud Native Associate"
                        ? "w-full h-full object-contain scale-90"
                        : cert.name === "AWS Cloud Captain"
                        ? "w-full h-full object-contain scale-100"
                        : "w-full h-full object-contain scale-90"
                    }
                    style={{ padding: 0 }}
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
              );
              const info = (
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm leading-tight">{cert.name}</h3>
                  <p className="text-xs text-secondary">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </div>
              );
              const hoverLink = (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                  <span className="text-primary font-semibold text-sm">Verify</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              );
              const cardContent = (
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {logo}
                    {info}
                    {hoverLink}
                  </div>
                </CardContent>
              );
              if (cert.url && cert.url !== "#") {
                return (
                  <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      {cardContent}
                    </Card>
                  </a>
                );
              } else {
                return (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    {cardContent}
                  </Card>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;