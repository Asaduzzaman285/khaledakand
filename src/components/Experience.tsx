import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Deputy General Manager",
      company: "Wintel Limited",
      location: "Dhaka",
      period: "March 2024 - Current",
      responsibilities: [
        "Strategic Planning: Develop and execute comprehensive strategies for IT and Technical Operations aligned with organizational goals",
        "Leadership and Team Management: Lead, inspire, and manage diverse teams of IT professionals",
        "Operational Oversight: Oversee day-to-day technical operations, ensuring reliability and security of IT systems",
        "Resource Allocation: Efficiently allocate resources, including budgets and personnel, to optimize IT operations",
        "Cybersecurity and Risk Management: Develop and implement cybersecurity measures",
        "Vendor Management: Evaluate, select, and manage external vendors and technology partners"
      ],
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "Software Analyst",
      company: "SSL Wireless (Software Shop Ltd)",
      location: "Dhaka",
      period: "February 2014 - February 2024",
      responsibilities: [
        "Team Lead on ERP Development for RMG & Interlining industry",
        "Technical Project Manager for Fintech solutions",
        "Implementation of RPA on ERP & Accounting Solutions",
        "Decision Automation for Interlining & RMG Industry",
        "Supervised team of 12 technologists on BDT 10 million software development project",
        "Collaborated with cross-functional development team members to analyze potential system solutions",
        "Built outstanding and dynamic team of software engineers and developers"
      ],
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "Sr. Software Engineer",
      company: "Bangla Trac Miaki VAS",
      location: "Dhaka",
      period: "July 2012 - January 2014",
      responsibilities: [
        "Collaborated with cross-functional development team members to analyze potential system solutions",
        "Gathered and defined customer requirements to develop clear specifications",
        "Worked with project managers, developers, quality assurance and customers to resolve technical issues"
      ],
      gradient: "from-blue-900 to-slate-800"
    },
    {
      title: "Software Engineer",
      company: "Choukosh",
      location: "Dhaka",
      period: "January 2011 - June 2012",
      responsibilities: [
        "Coordinated with hardware and system engineering leads to gather and develop system requirements",
        "Designed and developed forward-thinking systems that meet user needs and improve productivity",
        "Collaborated with cross-functional development team members to analyze potential system solutions"
      ],
      gradient: "from-slate-800 to-blue-700"
    },
    {
      title: "Lecturer",
      company: "Daffodil Institute of IT",
      location: "Dhaka",
      period: "February 2011 - March 2011",
      responsibilities: [
        "Wrote and modernized PHP course materials, including syllabi, writing assignments and exams",
        "Collaborated with Lecturers to create dynamic, ongoing curriculum development program",
        "Tracked student assignments, attendance and test scores in online database"
      ],
      gradient: "from-blue-700 to-slate-700"
    },
    {
      title: "Web Developer & Designer",
      company: "OSource Bangladesh Ltd",
      location: "Dhaka",
      period: "January 2010 - October 2010",
      responsibilities: [
        "Created eye catching and functional digital design concepts across various platforms",
        "Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari",
        "Designed, implemented and monitored web pages and sites for continuous improvement",
        "Determined coding requirements for site creation, including e-commerce capability"
      ],
      gradient: "from-slate-600 to-blue-700"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
            <p className="text-xl text-muted-foreground">
              15+ years of professional growth and technical leadership
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-scale colorful-shadow border-0 overflow-hidden">
                <div className={`h-3 bg-gradient-to-r ${exp.gradient}`}></div>
                <CardHeader className="bg-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className={`text-xl bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="bg-white">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mt-1.5 text-xs font-bold`}>●</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
