import { Card } from "@/components/ui/card";
import { Cpu, Cog, Network, Bot, Wrench, Database, Code2, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Cpu,
      title: t('skills.robotics'),
      description: t('skills.robotics.desc'),
    },
    {
      icon: Cog,
      title: t('skills.automation'),
      description: t('skills.automation.desc'),
    },
    {
      icon: Network,
      title: t('skills.iiot'),
      description: t('skills.iiot.desc'),
    },
    {
      icon: Bot,
      title: t('skills.vision'),
      description: t('skills.vision.desc'),
    },
    {
      icon: Wrench,
      title: t('skills.mechanical'),
      description: t('skills.mechanical.desc'),
    },
    {
      icon: Database,
      title: t('skills.plc'),
      description: t('skills.plc.desc'),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          {t('skills.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          {t('skills.subtitle')}
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
                {t('skills.software.title')}
                <Code2 className="h-7 w-7 text-accent" />
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t('skills.software.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    {t('skills.software.integration')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('skills.software.integration.desc')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    {t('skills.software.web')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('skills.software.web.desc')}
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
                key={skill.title}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
