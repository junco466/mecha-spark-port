import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import coffeeProject from "@/assets/coffee-vision-project.jpg";

const projects = [
  {
    title: "Coffee Bean Vision Classification System",
    company: "ASIMOV ROBOTICS S.A.",
    description: "Developed an advanced computer vision classification system to automate coffee bean quality control. The system analyzes and separates coffee beans based on roast color and identifies defects, significantly improving processing efficiency and quality consistency.",
    image: coffeeProject,
    technologies: ["Computer Vision", "Machine Learning", "Industrial Automation", "Quality Control", "Image Processing"],
    highlights: [
      "Real-time classification of coffee beans by roast level",
      "Automated defect detection reducing manual inspection time by 75%",
      "Integration with industrial conveyor systems",
      "Data analytics dashboard for quality metrics"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Innovation in action: Real-world solutions that transform industrial processes
        </p>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-all border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <Badge className="mb-3 bg-accent text-accent-foreground">
                      {project.company}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-accent/30 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
