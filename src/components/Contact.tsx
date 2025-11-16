import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-slate-700 bg-slate-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {t('contact.email')}
                    </div>
                    <a 
                      href="mailto:jsbalbin466@gmail.com"
                      className="hover:text-orange-400 transition-colors"
                    >
                      jsbalbin466@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {t('contact.phone')}
                    </div>
                    <a 
                      href="tel:+573136435245"
                      className="hover:text-blue-400 transition-colors"
                    >
                      +57 313 643 5245
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {t('contact.location')}
                    </div>
                    <span>Medellín, Colombia</span>
                  </div>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-col justify-center space-y-4">
                <Button 
                  className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/juan-sebastian-balbin-arenas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    {t('contact.button.linkedin')}
                  </a>
                </Button>
                
                <Button 
                  className="w-full justify-start bg-orange-500 hover:bg-orange-600 text-white transition-all hover:scale-105"
                  size="lg"
                  asChild
                >
                  <a href="mailto:jsbalbin466@gmail.com">
                    <Mail className="mr-3 h-5 w-5" />
                    {t('contact.button.email')}
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;