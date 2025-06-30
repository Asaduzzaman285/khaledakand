
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Palette, Coffee } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Focus",
      description: "Creating beautiful user experiences"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Turning complex problems into simple solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Get to know me better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello there!</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. I love working with 
                modern technologies and bringing creative ideas to life.
              </p>
              <p className="text-muted-foreground mb-4">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest industry trends.
              </p>
              <p className="text-muted-foreground">
                I believe in continuous learning and am always excited to take on 
                new challenges that push me to grow as a developer.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <User size={80} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
