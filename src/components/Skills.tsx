import { Card } from "@/components/ui/card";
import { Cpu, Cog, Network, Bot, Wrench, Database } from "lucide-react";

const skills = [
  {
    category: "Industrial Robotics",
    icon: Bot,
    items: [
      "Robot Arm Programming & Operation",
      "Industrial Machinery Integration",
      "Automated Manufacturing Systems",
      "Safety & Compliance Standards"
    ]
  },
  {
    category: "CNC Operation",
    icon: Cog,
    items: [
      "CNC Machine Programming",
      "G-code Development",
      "Precision Manufacturing",
      "Quality Control & Optimization"
    ]
  },
  {
    category: "IIoT & Smart Systems",
    icon: Network,
    items: [
      "Industrial Variable Monitoring",
      "Bidirectional Communication Systems",
      "Data-Driven Decision Making",
      "Real-time Analytics & Reporting"
    ]
  },
  {
    category: "Computer Vision",
    icon: Cpu,
    items: [
      "Image Classification Systems",
      "Defect Detection",
      "Quality Inspection Automation",
      "Machine Learning Integration"
    ]
  },
  {
    category: "Technical Skills",
    icon: Wrench,
    items: [
      "PLC Programming",
      "System Integration",
      "CAD/CAM Software",
      "Technical Documentation"
    ]
  },
  {
    category: "Data & Analytics",
    icon: Database,
    items: [
      "Process Optimization",
      "Performance Metrics",
      "Predictive Maintenance",
      "Data Visualization"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Core Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Comprehensive skill set spanning robotics, automation, and industrial IoT solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.category}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li 
                      key={item}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
