import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import coating_video_1 from "@/assets/coating_video_1.mp4";
import coating_video_2 from "@/assets/coating_video_2.mp4";
import roladora_video_2 from "@/assets/roladora_video_2.mp4";
import foto from "@/assets/foto.jpg";



const Hero = () => {

  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage();

  useEffect(() => {
    if (!api) return

    // valor inicial
    setCurrent(api.selectedScrollSnap())

    // actualizar cuando cambie el slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Configura aquí tus videos
  const videos = [
    {
      url: coating_video_1,
      titulo: "Coating System",
    },
    {
      url: coating_video_2,
      titulo: "Industrial Robot",
    },
    {
      url: roladora_video_2,
      titulo: "Automation Process",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradiente radial para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-blue-500/5"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid gap-5 items-center mb-10">

          {/*---------- PRESENTACION PERSONAL FOTO PERSONAL ----------*/}
          <div className="order-first text-center mt-5 mb-5">
            <div className="relative group mx-auto w-64 h-64 flex items-center justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur opacity-25"></div>
              <img 
                src={foto} 
                alt="Professional headshot"
                className="relative rounded-2xl border-2 border-slate-700 w-60 h-60 object-cover"
              />
            </div>
            
            <h2 className="text-white m-5 text-3xl">
              Juan Camilo Sepúlveda
            </h2>

            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xl font-medium m-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              {t('hero.badge')}
            </div>

            {/* Social links compactos */}
            <div className="flex gap-16 justify-center pt-4">
              <a
                href="https://www.linkedin.com/in/juan-camilo-sepúlveda-balbín-21b98b207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500/20 border border-slate-700 hover:border-orange-500/30 transition-all"
              >
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-orange-400" />
              </a>
              <a
                href="mailto:jsbalbin466@gmail.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500/20 border border-slate-700 hover:border-orange-500/30 transition-all"
              >
                <Mail className="h-5 w-5 text-slate-400 hover:text-orange-400" />
              </a>
            </div>
          </div>
          {/*-------------------------------------------------------------------*/}

          {/* ----------COLUMNA IZQUIERDA - TEXTO CONCISO ----------*/}
          <div className="text-center space-y-6 mt-40 mb-40">

            {/* Título potente - UNA LÍNEA */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {t('hero.title2')}
              </span>
            </h1>

            {/* Subtítulo - UNA LÍNEA */}
            <h2 className="text-xl md:text-2xl text-slate-300 font-light">
              {t('hero.subtitle')}
            </h2>

            {/* Descripción MUY corta */}
            <p className="text-base justify-center m-auto text-slate-400 max-w-lg">
              {t('hero.description')}
            </p>

            {/* CTAs - Máximo 2 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                {t('hero.cta.projects')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-800 hover:bg-slate-800 font-semibold px-8"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                {t('hero.cta.contact')}
              </Button>
            </div>

          </div>
          {/*-------------------------------------------------------------------*/}

          {/*---------- COLUMNA DERECHA - CARRUSEL DE VIDEOS ----------*/}
          <div className="order-last mt-5 mb-5">
            <Carousel className="w-full max-w-3xl mx-auto" setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group">
                      {/* Marco con efecto glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                      
                      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                        <video
                          className="w-full aspect-video object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={video.url} type="video/mp4" />
                        </video>
                        
                        {/* Overlay con título */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white text-sm font-semibold">
                            {video.titulo}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-slate-800/80 border-slate-700 hover:bg-slate-700" />
              <CarouselNext className="right-2 bg-slate-800/80 border-slate-700 hover:bg-slate-700" />
            </Carousel>

            {/* Indicadores minimalistas */}
            <div className="flex justify-center gap-2 mt-6">
              {videos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  className={
                    "h-1 w-8 rounded-full transition-colors " +
                    (i === current ? "bg-orange-500" : "bg-slate-700")
                  }
                />
              ))}
            </div>
          </div>
          {/*-------------------------------------------------------------------*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;