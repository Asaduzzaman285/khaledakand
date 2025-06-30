
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6a79c478-e914-41e9-b8ca-8a9c9b7a03d6.png" 
              alt="Khaled Akand"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Khaled Akand</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Deputy General Manager & Software Analyst
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            With 15+ years of expertise in IT and software development, specializing in ERP, 
            Decision Automation, and RPA. Passionate about streamlining processes and leveraging 
            cutting-edge technologies for business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover-scale" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/khaledakand/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="mailto:khaledcis007@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Mail size={24} />
            </a>
            <a href="tel:01685713940" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Phone size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
