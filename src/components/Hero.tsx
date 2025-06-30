
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & Designer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about turning ideas into reality through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Mail size={24} />
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
