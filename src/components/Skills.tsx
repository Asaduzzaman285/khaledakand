
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: "Excellent" },
        { name: "HTML5 & CSS3", level: "Excellent" },
        { name: "ReactJS", level: "Good" },
        { name: "Python", level: "Basic" },
        { name: "MySQL", level: "Very Good" },
        { name: "MongoDB", level: "Good" }
      ]
    },
    {
      title: "Technical Expertise",
      skills: [
        { name: "ERP Development", level: "Excellent" },
        { name: "Decision Automation", level: "Excellent" },
        { name: "RPA", level: "Excellent" },
        { name: "Rest API", level: "Excellent" },
        { name: "Web Development", level: "Excellent" },
        { name: "Bootstrap", level: "Very Good" }
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Adobe Photoshop", level: "Excellent" },
        { name: "Adobe Illustrator", level: "Excellent" },
        { name: "Web Design", level: "Excellent" },
        { name: "Graphic Design", level: "Very Good" }
      ]
    },
    {
      title: "Industry Specialization",
      skills: [
        { name: "Banking & MFI", level: "Expert" },
        { name: "RMG Industry", level: "Expert" },
        { name: "Interlining", level: "Expert" },
        { name: "Payment Gateway", level: "Expert" },
        { name: "Telecommunications", level: "Excellent" },
        { name: "Fintech", level: "Expert" }
      ]
    }
  ];

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Excellent":
      case "Expert":
        return "bg-green-100 text-green-800 border-green-300";
      case "Very Good":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Good":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Basic":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              15+ years of technical excellence across diverse domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center gap-1">
                        <Badge 
                          variant="outline" 
                          className={`${getSkillColor(skill.level)} hover:bg-primary hover:text-primary-foreground transition-colors text-center`}
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    English - Native
                  </Badge>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    Bangla - Native
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    Hindi - Novice
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
