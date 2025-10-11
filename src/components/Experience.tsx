import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Rocket, Factory } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      icon: GraduationCap,
      title: t('experience.educator.title'),
      organization: t('experience.educator.organization'),
      period: t('experience.educator.period'),
      type: "Teaching",
      description: t('experience.educator.description'),
      achievements: [
        t('experience.educator.achievement1'),
        t('experience.educator.achievement2'),
        t('experience.educator.achievement3'),
      ]
    },
    {
      icon: Rocket,
      title: t('experience.cofounder.title'),
      organization: t('experience.cofounder.organization'),
      period: t('experience.cofounder.period'),
      type: "Entrepreneurship",
      description: t('experience.cofounder.description'),
      achievements: [
        t('experience.cofounder.achievement1'),
        t('experience.cofounder.achievement2'),
        t('experience.cofounder.achievement3'),
        t('experience.cofounder.achievement4'),
      ]
    },
    {
      icon: Factory,
      title: t('experience.plant.title'),
      organization: t('experience.plant.organization'),
      period: t('experience.plant.period'),
      type: "Industry",
      description: t('experience.plant.description'),
      achievements: [
        t('experience.plant.achievement1'),
        t('experience.plant.achievement2'),
        t('experience.plant.achievement3'),
        t('experience.plant.achievement4'),
      ]
    },
    {
      icon: Briefcase,
      title: t('experience.automation.title'),
      organization: t('experience.automation.organization'),
      period: t('experience.automation.period'),
      type: "Industry",
      description: t('experience.automation.description'),
      achievements: [
        t('experience.automation.achievement1'),
        t('experience.automation.achievement2'),
        t('experience.automation.achievement3'),
        t('experience.automation.achievement4'),
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          {t('experience.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          {t('experience.subtitle')}
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
                      <h4 className="text-sm font-semibold text-foreground mb-2">{t('experience.keyContributions')}</h4>
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
