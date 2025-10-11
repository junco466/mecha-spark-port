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
      <div className="relative z-10 container mx-auto px-6 py-8 md:py-14 text-left animate-fade-in mt-24 max-w-5xl">

        <div className=" flex flex-wrap grid-hero md:grid md:grid-cols-[200px_1fr] gap-16 items-start">

          {/* Photo Placeholder */}
          <div className="mx-auto md:mx-0 my-auto justify-center hidden md:block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/30 flex items-center justify-center overflow-hidden">
              <div className="text-center text-muted-foreground p-4">
                <p className="text-sm font-medium">{t('ui.photoPlaceholder')}</p>
                <p className="text-xs mt-1">{t('ui.uploadPhoto')}</p>
              </div>
            </div>
          </div>

          <div className=" text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl">
              {t('hero.desc')}
            </p>
          </div>
        </div>

        <div className="buttons grid grid-rows-2 gap-2">

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105 hover:bg-muted-foreground hover:text-primary-foreground hover:border-2 hover:border-primary-foreground"
              onClick={() => scrollToSection("projects")}
            >
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" border-2 border-primary-foreground text-primary hover:bg-muted-foreground hover:text-primary-foreground transition-all"
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

      </div>

    </section>
  );
};

export default Hero;
