import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                I am a <span className="font-semibold text-primary">Mechatronics Engineer</span> with four years of industry experience specializing in <span className="font-semibold">industrial automation, robotics, and IIoT</span> (Industrial Internet of Things).
              </p>
              
              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My expertise bridges the gap between mechanical systems, electronics, and intelligent software solutions, enabling industries to achieve unprecedented levels of efficiency and precision.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                Currently, I work in <span className="font-semibold">education</span>, teaching children about robotics, technology, and systems. This role highlights my ability to clearly communicate complex concepts and my commitment to developing the next generation of engineers.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Core Specializations</div>
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
