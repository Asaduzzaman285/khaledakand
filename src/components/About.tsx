import { Card, CardContent } from "@/components/ui/card";
import { Code, Building, Dumbbell, ChefHat } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Leadership",
      description: "15+ years leading software development teams and projects",
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "ERP & Automation",
      description: "Specialized in Decision Automation, RPA, and ERP solutions",
      color: "from-slate-700 to-blue-800"
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Fitness Enthusiast",
      description: "Certified fitness trainer and bodybuilding competitor",
      color: "from-blue-900 to-slate-800"
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Culinary Artist",
      description: "Passionate cook who loves experimenting with new recipes",
      color: "from-slate-800 to-blue-700"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Deputy General Manager at Wintel Limited
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Professional Journey</h3>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                With a rich history of over 15 years in IT and software, I bring a wealth of expertise as a seasoned software analyst. 
                My journey is marked by successful ventures, demonstrating a history of significant contributions to various projects.
              </p>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                I specialize in ERP, Decision Automation, and RPA, reflecting my in-depth understanding of streamlining processes 
                and leveraging cutting-edge technologies for business growth. Currently serving as Deputy General Manager at Wintel Limited, 
                I lead strategic IT initiatives and manage diverse teams of technical professionals.
              </p>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                My technical foundation spans PHP, MySQL, HTML, CSS, jQuery, Laravel, ReactJS, CI/CD Pipeline, MongoDB, 
                and Adobe Creative Suite. I am passionate about continuing to contribute to innovative and impactful projects 
                in the ever-evolving landscape of technology.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg mb-6 colorful-shadow">
                <h4 className="text-xl font-semibold mb-3 text-blue-800">Beyond Technology</h4>
                <p className="text-muted-foreground">
                  When I'm not immersed in code and systems, I'm equally passionate about fitness and culinary arts. 
                  I hold certifications in Fitness Training and Nutrition, compete in bodybuilding and powerlifting competitions, 
                  and love experimenting with new recipes in the kitchen. I believe in maintaining a balanced lifestyle that 
                  fuels both professional excellence and personal fulfillment.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardContent className="p-6 text-center bg-white">
                  <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${item.color} w-12 h-12 rounded-full items-center mx-auto`}>
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
