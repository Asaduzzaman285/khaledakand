
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Easy.com.bd",
      description: "Comprehensive e-commerce platform for the Bangladeshi market with advanced features and payment integration.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://easy.com.bd/",
      type: "E-Commerce Platform",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "SSLCommerz Payment Gateway",
      description: "Leading payment gateway solution in Bangladesh, processing millions of transactions securely.",
      technologies: ["PHP", "Laravel", "MySQL", "REST API", "Payment Processing"],
      liveUrl: "https://www.sslcommerz.com",
      type: "Fintech Solution",
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "Cineplex BD Ticketing System",
      description: "Movie ticket booking platform with real-time seat selection and payment processing capabilities.",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Payment Gateway"],
      liveUrl: "https://ticket.cineplexbd.com",
      type: "Ticketing Platform",
      gradient: "from-blue-900 to-slate-800"
    }
  ];

  const certifications = [
    {
      title: "MongoDB Certified Developer, Associate (C100DEV)",
      issuer: "Tecognize Training",
      year: "2021",
      gradient: "from-blue-900 to-slate-800"
    },
    {
      title: "Google Mobile Sites Certification",
      issuer: "Google USA",
      year: "2017-2018",
      description: "Mobile Web Development",
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "BSc in Computing And Information Systems",
      issuer: "London Metropolitan University",
      year: "2005-2009",
      description: "First Class, Major in Web Development",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects & Accomplishments</h2>
            <p className="text-xl text-muted-foreground">
              Showcase of professional work and achievements
            </p>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-800 to-slate-700 bg-clip-text text-transparent">Major Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover-scale group colorful-shadow border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader className="bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`text-xs bg-gradient-to-r ${project.gradient} text-white border-0`}>
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-slate-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="text-xs bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className={`w-full bg-gradient-to-r ${project.gradient} text-white border-0 hover:scale-105 transition-all`} asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-900 to-slate-700 bg-clip-text text-transparent">Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                  <CardHeader className="bg-white">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-r ${cert.gradient} p-2 rounded-full`}>
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground mt-1">
                          {cert.issuer}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">{cert.year}</p>
                        {cert.description && (
                          <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
