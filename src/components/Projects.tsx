import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Image } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import coffeeProject from "@/assets/coffee-vision-project.jpg";
import peltonTurbine from "@/assets/pelton-turbine-coating.jpg";
import animatronicsProject from "@/assets/animatronics-project.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "pelton",
      title: t('projects.pelton.title'),
      company: t('projects.pelton.company'),
      description: t('projects.pelton.description'),
      image: peltonTurbine,
      technologies: ["Industrial Robotics", "HVOF Coating", "Process Engineering", "Fixture Design", "Quality Control", "CAD/CAM"],
      highlights: [
        t('projects.pelton.highlight1'),
        t('projects.pelton.highlight2'),
        t('projects.pelton.highlight3'),
        t('projects.pelton.highlight4')
      ]
    },
    {
      id: "coffee",
      title: t('projects.coffee.title'),
      company: t('projects.coffee.company'),
      description: t('projects.coffee.description'),
      image: coffeeProject,
      technologies: ["Computer Vision", "Machine Learning", "Industrial Automation", "Quality Control", "Image Processing"],
      highlights: [
        t('projects.coffee.highlight1'),
        t('projects.coffee.highlight2'),
        t('projects.coffee.highlight3'),
        t('projects.coffee.highlight4')
      ]
    },
    {
      id: "animatronics",
      title: t('projects.animatronics.title'),
      company: t('projects.animatronics.company'),
      description: t('projects.animatronics.description'),
      image: animatronicsProject,
      technologies: ["Mechanical Design", "Electronics", "Animatronics", "Theatre Tech", "Fabrication", "Control Systems"],
      highlights: [
        t('projects.animatronics.highlight1'),
        t('projects.animatronics.highlight2'),
        t('projects.animatronics.highlight3'),
        t('projects.animatronics.highlight4')
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          {t('projects.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
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
                    <h4 className="text-sm font-semibold text-foreground mb-3">{t('projects.keyAchievements')}</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  <Button
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Image className="mr-2 h-4 w-4" />
                    {t('projects.viewGallery')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Gallery */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {projects.find(p => p.id === selectedProject)?.title}
            </DialogTitle>
            <DialogDescription>
              {t('projects.galleryPlaceholder')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                <Image className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">{t('projects.galleryPlaceholder')}</p>
                <p className="text-sm">Project photos and technical diagrams will be displayed here</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
