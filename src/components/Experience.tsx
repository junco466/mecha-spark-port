import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Robotics & Technology Educator",
    organization: "Education Sector",
    period: "Current",
    type: "Teaching",
    description: "Teaching children about robotics, technology, and systems. Developing curriculum and hands-on learning experiences that introduce the next generation to engineering concepts.",
    achievements: [
      "Created engaging robotics curriculum for young learners",
      "Simplified complex engineering concepts for educational purposes",
      "Fostered interest in STEM fields among students"
    ]
  },
  {
    icon: Rocket,
    title: "Co-Founder & Engineer",
    organization: "ASIMOV ROBOTICS S.A.",
    period: "4 Years",
    type: "Entrepreneurship",
    description: "Participated in startup focused on innovative technological solutions for industrial applications. Led development of computer vision systems and automation projects.",
    achievements: [
      "Developed computer vision classification system for coffee industry",
      "Implemented IIoT solutions for industrial monitoring",
      "Collaborated on multiple automation projects",
      "Contributed to business development and technical strategy"
    ]
  },
  {
    icon: Briefcase,
    title: "Industrial Automation Engineer",
    organization: "Manufacturing Sector",
    period: "4+ Years Total",
    type: "Industry",
    description: "Extensive hands-on experience with industrial robotics, CNC machines, and IIoT implementations across various manufacturing environments.",
    achievements: [
      "Programmed and operated industrial robot arms",
      "Optimized CNC machining processes",
      "Implemented data-driven decision systems",
      "Managed industrial equipment maintenance and upgrades"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Professional Journey
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          From industrial automation to education, driving innovation at every stage
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={exp.title}
                className="p-6 md:p-8 hover:shadow-lg transition-all border-border animate-slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-lg bg-accent/10 inline-block">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex gap-3 mt-2 md:mt-0">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li 
                            key={achievement}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
