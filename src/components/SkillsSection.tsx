import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-bg">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-5 mb-14">
            <Badge variant="secondary" className="text-sm">Skills & Technologies</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Breadth across the stack with depth in cloud, backend, and delivery practices for production systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                tabIndex={0}
                className="glass-effect border border-border/70 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-3">
                    {category.icon && (
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <category.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold leading-tight">{category.title}</h3>
                      {category.highlight && (
                        <p className="text-sm text-muted-foreground mt-1">{category.highlight}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium leading-none">{skill.name}</span>
                              {skill.description && (
                                <Badge variant="outline" className="text-xs font-normal px-2 py-1 border-border">
                                  {skill.description}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuetext={`${skill.level}%`}
                        />
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

export default SkillsSection;