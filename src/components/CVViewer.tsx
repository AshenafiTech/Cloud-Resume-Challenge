import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Eye, X } from "lucide-react";
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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Resume - Ashenafi Godana</DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 w-full">
          <iframe
            src="/assets/ashenafi-CV.pdf"
            className="w-full h-full border-0 rounded-lg"
            title="Ashenafi Godana CV"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVViewer;