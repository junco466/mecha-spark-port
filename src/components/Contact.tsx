import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          {t('contact.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.title')}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('contact.subtitle')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t('contact.email')}</div>
                      <span>your.email@example.com</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t('contact.phone')}</div>
                      <span>+XX XXX XXX XXXX</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Location</div>
                      <span>Your Location</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-6">Professional Networks</h3>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full justify-start bg-primary hover:opacity-90 text-primary-foreground transition-all hover:scale-105"
                    size="lg"
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    {t('contact.linkedin')}
                  </Button>
                  
                  <Button 
                    className="w-full justify-start bg-accent hover:opacity-90 text-accent-foreground transition-all hover:scale-105"
                    size="lg"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    {t('contact.email')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
