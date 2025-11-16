import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Cog, 
  Network, 
  Bot, 
  Wrench, 
  Database,
  Code2,
  Layers,
  Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  // Stack técnico agrupado por categorías
  const techStack = {
    software: [
      "Python", "JavaScript/TS", "React", "C++", "ROS"
    ],
    automation: [
      "PLC Programming", "SCADA", "HMI Design", "Ladder Logic"
    ],
    robotics: [
      "Robot Programming", "ABB", "FANUC", "Path Planning"
    ],
    integration: [
      "MQTT", "OPC-UA", "REST APIs", "Modbus", "Industrial Ethernet"
    ],
    tools: [
      "SolidWorks", "AutoCAD", "Fusion 360", "Git", "Docker"
    ]
  };

  const coreSkills = [
    {
      icon: Cpu,
      title: t('skills.robotics'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cog,
      title: t('skills.automation'),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Network,
      title: t('skills.iiot'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: t('skills.vision'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wrench,
      title: t('skills.mechanical'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: t('skills.plc'),
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* SECCIÓN DESTACADA: Software + Hardware Integration */}
        <Card className="max-w-5xl mx-auto mb-16 p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-0 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="p-4 rounded-xl bg-orange-500/20 backdrop-blur-sm">
                <Layers className="h-10 w-10 text-orange-400" />
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t('skills.featured.title')}
                </h3>
                <Zap className="h-6 w-6 text-orange-400" />
              </div>
              
              <p className="text-lg text-slate-300 mb-6">
                {t('skills.featured.description')}
              </p>

              {/* Tech Stack compacto */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    {t('skills.featured.development')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.software.map((tech) => (
                      <Badge key={tech} className="bg-slate-700 text-slate-200 border-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <Network className="h-4 w-4" />
                    {t('skills.featured.integration')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.integration.map((tech) => (
                      <Badge key={tech} className="bg-slate-700 text-slate-200 border-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Core Skills - SOLO ICONOS Y TÍTULOS (sin descripciones largas) */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {t('skills.core.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.title}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 group cursor-default"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-700 leading-tight">
                      {skill.title}
                    </h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tech Stack detallado - Compacto */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            {t('skills.tech.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-orange-500" />
                {t('skills.tech.automation')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.automation.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Bot className="h-5 w-5 text-blue-500" />
                {t('skills.tech.robotics')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.robotics.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-green-500" />
                {t('skills.tech.design')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;