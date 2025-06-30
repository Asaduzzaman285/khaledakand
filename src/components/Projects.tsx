
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
      type: "E-Commerce Platform"
    },
    {
      title: "SSLCommerz Payment Gateway",
      description: "Leading payment gateway solution in Bangladesh, processing millions of transactions securely.",
      technologies: ["PHP", "Laravel", "MySQL", "REST API", "Payment Processing"],
      liveUrl: "https://www.sslcommerz.com",
      type: "Fintech Solution"
    },
    {
      title: "Cineplex BD Ticketing System",
      description: "Movie ticket booking platform with real-time seat selection and payment processing capabilities.",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Payment Gateway"],
      liveUrl: "https://ticket.cineplexbd.com",
      type: "Ticketing Platform"
    }
  ];

  const certifications = [
    {
      title: "MongoDB Certified Developer, Associate (C100DEV)",
      issuer: "Tecognize Training",
      year: "2021"
    },
    {
      title: "Google Mobile Sites Certification",
      issuer: "Google USA",
      year: "2017-2018",
      description: "Mobile Web Development"
    },
    {
      title: "BSc in Computing And Information Systems",
      issuer: "London Metropolitan University",
      year: "2005-2009",
      description: "First Class, Major in Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects & Accomplishments</h2>
            <p className="text-xl text-muted-foreground">
              Showcase of professional work and achievements
            </p>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Major Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover-scale group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full" asChild>
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
            <h3 className="text-2xl font-semibold mb-8 text-center">Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
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
