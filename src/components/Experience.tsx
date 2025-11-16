
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      color: "from-purple-500 to-pink-500",
      keyAchievement: t('experience.educator.achievement')
    },
    {
      icon: Rocket,
      title: t('experience.cofounder.title'),
      organization: t('experience.cofounder.organization'),
      period: t('experience.cofounder.period'),
      color: "from-blue-500 to-cyan-500",
      keyAchievement: t('experience.cofounder.achievement')
    },
    {
      icon: Factory,
      title: t('experience.plant.title'),
      organization: t('experience.plant.organization'),
      period: t('experience.plant.period'),
      color: "from-orange-500 to-red-500",
      keyAchievement: t('experience.plant.achievement')
    },
    {
      icon: Briefcase,
      title: t('experience.automation.title'),
      organization: t('experience.automation.organization'),
      period: t('experience.automation.period'),
      color: "from-green-500 to-emerald-500",
      keyAchievement: t('experience.automation.achievement')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline vertical */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={exp.title}
                    className={`relative flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Icono central */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Espaciador para móvil */}
                    <div className="w-20 md:hidden"></div>

                    {/* Espaciador para desktop */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Tarjeta de contenido */}
                    <Card
                      className={`flex-1 md:w-1/2 p-6 border-slate-200 hover:shadow-lg transition-all ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <Badge className={`mb-2 bg-gradient-to-r ${exp.color} text-white border-0`}>
                            {exp.period}
                          </Badge>
                          <h3 className="text-xl font-bold text-slate-900">
                            {exp.title}
                          </h3>
                          <p className="text-orange-600 font-semibold mt-1">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Solo 1 achievement key, más compacto */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {exp.keyAchievement}
                      </p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;