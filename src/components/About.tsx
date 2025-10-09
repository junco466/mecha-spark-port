import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
            {t('about.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {t('about.subtitle')}
          </p>
          
          <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                {t('about.intro')}
              </p>
              
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t('about.passion')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">{t('about.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">{t('about.systems')}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
