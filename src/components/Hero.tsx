import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-robotics.jpg";
import coating_video_1 from "@/assets/coating_video_1.mp4";
import coating_video_2 from "@/assets/coating_video_2.mp4";
import roladora_video_2 from "@/assets/roladora_video_2.mp4";

// PASO 1: Define tus 4 videos con tiempos de inicio y fin
const videos = [
  {
    url: coating_video_1,
    titulo: "Coating 1",
    inicio: 10, // Empieza en segundo 10
    fin: 20, // Termina en segundo 20
  },
  {
    url: coating_video_2,
    titulo: "Coating 2",
    inicio: 5,
    fin: 15,
  },
  {
    url: roladora_video_2,
    titulo: "Roladora 2",
    inicio: 5,
    fin: 15,
  },
];

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // PASO 2: Función para controlar el tiempo del video
  const handleVideoTimeUpdate = (video, e) => {
    const videoElement = e.target;

    // Si el video llega al tiempo final, lo regresa al inicio
    if (videoElement.currentTime >= video.fin) {
      videoElement.currentTime = video.inicio;
    }
  };

  // PASO 3: Función cuando el video carga, para empezar en el segundo correcto
  const handleVideoLoaded = (video, e) => {
    const videoElement = e.target;
    videoElement.currentTime = video.inicio; // Empieza en el segundo que defines
  };

  return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--primary) / 0.95)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 animate-fade-in mt-16 s max-w-7xl">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="text-center md:text-justify order-2 md:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-4">
              {t("hero.subtitle")}
            </p>
            <p className="text-base text-primary-foreground/80 mb-8">
              {t("hero.desc")}
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-around mb-12">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:opacity-90 hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                {t("hero.cta")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-secondary hover:bg-accent hover:text-accent-foreground transition-all"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                {t("contact.title")}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection("about")}
              className="hidden md:flex flex-col items-center m-auto text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
              aria-label="Scroll to content"
            >
              <span className="text-sm mb-2">{t("nav.about")}</span>
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>

          {/* Columna Derecha - Carrusel de Videos */}
          <div className="order-1 md:order-2">
            <Carousel 
              className="w-full max-w-lg mx-auto"
              opts={{ loop: true }}
            >
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border-2 border-primary-foreground/20">
                      {/* Video */}
                      <video 
                        className="w-full aspect-video object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={(e) => handleVideoTimeUpdate(video, e)}
                        onLoadedMetadata={(e) => handleVideoLoaded(video, e)}
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                      
                      {/* Título del video */}
                      <div className="bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white text-sm md:text-base font-semibold">
                          {video.titulo}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Indicadores de video */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <div 
                  key={i} 
                  className="h-1.5 w-8 rounded-full bg-primary-foreground/30"
                />
              ))}
            </div>
          </div>

        </div>

        {/* Scroll Indicator Mobile */}
        <div className="md:hidden flex justify-center mt-12">
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
            aria-label="Scroll to content"
          >
            <span className="text-sm mb-2">{t("nav.about")}</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;