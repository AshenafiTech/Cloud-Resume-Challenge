import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Mail, Phone, Globe, MapPin } from "lucide-react";
import { useState } from "react";

interface CVViewerProps {
  children: React.ReactNode;
}

const CVViewer = ({ children }: CVViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/ashenafi-CV.pdf';
    link.download = 'Ashenafi-Godana-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">Resume - Ashenafi Godana</DialogTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto space-y-6 py-4">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Ashenafi Kumbi</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +251967882900
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                ashenafigodanaj@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/ashenafig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  LinkedIn
                </a>
                <span className="mx-1">|</span>
                <a
                  href="https://github.com/AshenafiTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  GitHub
                </a>
                <span className="mx-1">|</span>
                <a
                  href="https://ashenafigodana.com"  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Addis Ababa University, Addis Ababa, Ethiopia</h3>
                <p className="text-muted-foreground">B.Sc. in Software Engineering, July 2027</p>
                <p className="text-sm text-muted-foreground">
                  Relevant Courses: Software Engineering, Relational Databases, Object-oriented programming, 
                  Data Structure and Algorithms, Computer Network and Security, Computer Architecture and Organization.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">ALX Africa, Addis Ababa, Ethiopia</h3>
                <p className="text-muted-foreground">Cloud Engineering, Backend Development, DevOps, Aug 2025</p>
                <p className="text-sm text-muted-foreground">
                  Relevant Courses: Cloud Computing, Backend Development, Databases, Containerization, 
                  Cloud Architecture, Cloud Solutions, Network and Security, DevOps, MicroServices.
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">AWS Cloud Captain</h3>
                    <p className="text-muted-foreground">AWS Cloud Clubs, Addis Ababa, Ethiopia</p>
                  </div>
                  <Badge variant="secondary">May 2025 - Present</Badge>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Built and led a community of 300+ members, fostering collaboration through events, workshops, and mentorship</li>
                  <li>• Organized and facilitated workshops and tutorials, mentoring students on cloud architecture design</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Student Ambassador and AWS Cloud Mentor</h3>
                    <p className="text-muted-foreground">ALX Ethiopia, Addis Ababa, Ethiopia</p>
                  </div>
                  <Badge variant="secondary">April 2025 - Present</Badge>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Represented the ALX community at Addis Ababa University, promoting programs in cloud computing</li>
                  <li>• Engaged and supported 50+ students, guiding them through enrollment and onboarding</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Machine Learning Engineer Intern</h3>
                    <p className="text-muted-foreground">iCog Labs, Addis Ababa, Ethiopia</p>
                  </div>
                  <Badge variant="secondary">July 2024 - Sept 2024</Badge>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Developed and tested AI and machine learning prototypes using Python and MeTTa</li>
                  <li>• Collaborated with multidisciplinary team of researchers, designing experiments and analyzing results</li>
                  <li>• Produced well-documented scripts, modules, and technical reports</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Intelligent Compliance Analysis for Financial Services</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Developed AI-powered platform automating compliance analysis using advanced NLP and RAG techniques</li>
                  <li>• Implemented scalable data processing pipelines with FAISS-based vector search</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">End-to-End Insurance Analytics</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Built analytics pipeline for car insurance data including cleaning, analysis, and ML modeling</li>
                  <li>• Automated KPI reporting and segmentation using Python (pandas, scikit-learn, seaborn)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a
                href="https://cloud.google.com/certification/machine-learning-engineer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="outline">Google Cloud: Professional Machine Learning Engineer</Badge>
              </a>
              <a
                href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="outline">SAA-C03: AWS Certified Solutions Architect- Associate</Badge>
              </a>
              <a
                href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="outline">CLF-C02: AWS Certified Cloud Practitioner</Badge>
              </a>
              <a
                href="https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-associate-kcna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="outline">KCNA: Kubernetes and Cloud Native Associate</Badge>
              </a>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-primary border-b pb-2">Skills</h2>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">Programming Languages:</h4>
                <p className="text-sm text-muted-foreground">Python, JavaScript, TypeScript, SQL & NoSQL, Bash, HTML, CSS</p>
              </div>
              <div>
                <h4 className="font-medium text-sm">Frameworks and Tools:</h4>
                <p className="text-sm text-muted-foreground">Django, FastAPI, AWS, Google Cloud, Docker, CI/CD, MLflow, ML Frameworks</p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVViewer;