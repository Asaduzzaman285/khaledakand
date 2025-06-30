
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-800/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/6a79c478-e914-41e9-b8ca-8a9c9b7a03d6.png" 
                alt="Khaled Akand"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white/30 shadow-2xl colorful-shadow backdrop-blur-sm"
              />
              <div className="absolute inset-0 w-48 h-48 rounded-full mx-auto colorful-border opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="gradient-text bg-white">Khaled Akand</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
            Deputy General Manager & Software Analyst
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            With 15+ years of expertise in IT and software development, specializing in ERP, 
            Decision Automation, and RPA. Passionate about streamlining processes and leveraging 
            cutting-edge technologies for business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale bg-white text-blue-900 hover:bg-white/90 shadow-lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover-scale border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/khaledakand/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors hover-scale bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <Linkedin size={24} />
            </a>
            <a href="mailto:khaledcis007@gmail.com" className="text-white/80 hover:text-white transition-colors hover-scale bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <Mail size={24} />
            </a>
            <a href="tel:01685713940" className="text-white/80 hover:text-white transition-colors hover-scale bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <Phone size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-white/80" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
