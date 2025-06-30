
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
      ],
      gradient: "from-blue-800 to-blue-900"
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
      ],
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Adobe Photoshop", level: "Excellent" },
        { name: "Adobe Illustrator", level: "Excellent" },
        { name: "Web Design", level: "Excellent" },
        { name: "Graphic Design", level: "Very Good" }
      ],
      gradient: "from-blue-900 to-slate-800"
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
      ],
      gradient: "from-slate-800 to-blue-700"
    }
  ];

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Excellent":
      case "Expert":
        return "bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0";
      case "Very Good":
        return "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0";
      case "Good":
        return "bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0";
      case "Basic":
        return "bg-gradient-to-r from-slate-500 to-slate-600 text-white border-0";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              15+ years of technical excellence across diverse domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${category.gradient}`}></div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-center text-xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center gap-1">
                        <Badge 
                          variant="outline" 
                          className={`${getSkillColor(skill.level)} hover:scale-105 transition-all duration-200 text-center shadow-md`}
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-medium">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto colorful-shadow border-0 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-700 to-slate-700"></div>
              <CardHeader className="bg-white">
                <CardTitle className="bg-gradient-to-r from-blue-700 to-slate-700 bg-clip-text text-transparent">Languages</CardTitle>
              </CardHeader>
              <CardContent className="bg-white">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0 shadow-md">
                    English - Native
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-800 to-blue-900 text-white border-0 shadow-md">
                    Bangla - Native
                  </Badge>
                  <Badge className="bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0 shadow-md">
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
