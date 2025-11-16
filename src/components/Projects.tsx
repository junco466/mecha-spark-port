import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// IMPORTANTE: Reemplaza estas imágenes con tus fotos reales
// import peltonTurbine from "@/assets/pelton-turbine-coating.jpg";
// import coffeeProject from "@/assets/coffee-vision-project.jpg";
// import animatronicsProject from "@/assets/animatronics-project.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "pelton",
      title: t('projects.pelton.title'),
      company: t('projects.pelton.company'),
      description: t('projects.pelton.description'),
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      technologies: ["Industrial Robotics", "HVOF Coating", "Process Engineering", "Fixture Design"],
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
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
      technologies: ["Computer Vision", "Machine Learning", "Industrial Automation", "Quality Control"],
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
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
      technologies: ["Mechanical Design", "Electronics", "Animatronics", "Theatre Tech"],
      highlights: [
        t('projects.animatronics.highlight1'),
        t('projects.animatronics.highlight2'),
        t('projects.animatronics.highlight3'),
        t('projects.animatronics.highlight4')
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden hover:shadow-2xl transition-all border-slate-700 bg-slate-800"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                <div className="p-8">
                  <Badge className="mb-3 bg-orange-500 text-white hover:bg-orange-600">
                    {project.company}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      {t('projects.keyAchievements')}
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
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
                        className="border-slate-600 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project.id)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Camera className="mr-2 h-4 w-4" />
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
        <DialogContent className="max-w-4xl bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              {projects.find(p => p.id === selectedProject)?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Project gallery coming soon
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border border-slate-700">
            <div className="text-center text-slate-400 p-8">
              <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Project Gallery</p>
              <p className="text-sm mt-2">Add your project images here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;