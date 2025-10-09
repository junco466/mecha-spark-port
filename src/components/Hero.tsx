import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-robotics.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--primary) / 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
          Industrial Automation | Robotics | IIoT Solutions
        </p>
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          4+ years transforming industrial processes through cutting-edge automation and robotics technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            {t('hero.cta')}
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('contact.title')}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce inline-flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm mb-2">{t('nav.about')}</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
