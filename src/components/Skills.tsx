import { Card } from "@/components/ui/card";
import { Cpu, Cog, Network, Bot, Wrench, Database, Code2, Layers } from "lucide-react";

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
        
        {/* Featured: Software Development & Hardware Integration */}
        <Card className="max-w-5xl mx-auto mb-12 p-8 bg-gradient-to-br from-card to-accent/5 border-accent/20 shadow-lg animate-fade-in">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 rounded-xl bg-accent/10 inline-block">
                <Layers className="h-10 w-10 text-accent" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                Software Development & Hardware Integration
                <Code2 className="h-7 w-7 text-accent" />
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Expertise in developing software solutions that directly interface with and control physical systems, 
                providing <span className="text-accent font-semibold">full-stack, end-to-end automation solutions</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    Integration Expertise
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialization in creating <strong>seamless bidirectional communication</strong> between software systems 
                    (custom dashboards, cloud platforms, control logic) and physical hardware (robot arms, sensors, PLCs, 
                    industrial machinery), including real-time data acquisition and command execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    Web Development for Industry
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experience developing <strong>custom web-based interfaces and dashboards</strong> for remote monitoring, 
                    control, and visualization of industrial processes (IIoT applications), enabling data analysis and 
                    decision-making from any location.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Python</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">JavaScript/TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">REST APIs</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">MQTT/OPC-UA</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Real-time Systems</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Cloud Integration</span>
              </div>
            </div>
          </div>
        </Card>
        
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
