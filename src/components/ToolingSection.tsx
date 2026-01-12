import {
  Cloud,
  CloudCog,
  Boxes,
  Network,
  Database,
  Wind,
  PanelsTopLeft,
  Atom,
  Zap,
  Pi,
  Code2,
  Braces
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const toolCategories = [
  {
    title: "Languages",
    tools: [
      { name: "Python", Icon: Pi },
      { name: "JavaScript", Icon: Code2 },
      { name: "TypeScript", Icon: Braces },
      { name: "Go", Icon: Code2 },
      { name: "C#", Icon: Braces }
    ]
  },
  {
    title: "Frameworks & Libraries",
    tools: [
      { name: "React", Icon: Atom },
      { name: "Node.js", Icon: Boxes },
      { name: "FastAPI", Icon: Zap },
      { name: "Django", Icon: PanelsTopLeft },
      { name: ".NET", Icon: PanelsTopLeft }
    ]
  },
  {
    title: "Cloud & DevOps",
    tools: [
      { name: "AWS", Icon: Cloud },
      { name: "GCP", Icon: CloudCog },
      { name: "Docker", Icon: Boxes },
      { name: "Kubernetes", Icon: Network }
    ]
  },
  {
    title: "Data",
    tools: [
      { name: "PostgreSQL", Icon: Database },
      { name: "MongoDB", Icon: Database },
      { name: "DynamoDB", Icon: Database }
    ]
  }
];

const ToolingSection = () => {
  return (
    <section id="skills" className="section-padding section-bg">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-5">
            <Badge variant="secondary" className="text-sm">Tooling</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Tooling I <span className="gradient-text">ship with</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dependable stack across languages, frameworks, platforms, and data stores to build and operate production systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {toolCategories.map((category) => (
              <Card
                key={category.title}
                className="glass-effect border border-border/70 shadow-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary/70" aria-hidden="true" />
                    <span>{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-background/80 border border-border/70 text-sm text-muted-foreground hover:border-primary/30 transition-colors"
                      >
                        <tool.Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        <span className="font-medium">{tool.name}</span>
                      </div>
                    ))}
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

export default ToolingSection;
