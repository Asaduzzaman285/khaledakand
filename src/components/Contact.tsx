
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "khaledcis007@gmail.com",
      href: "mailto:khaledcis007@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "01685713940",
      href: "tel:01685713940"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      content: "House # 1/J, North Adabor, Mohammadpur, Dhaka - 1207",
      href: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      content: "linkedin.com/in/khaledakand",
      href: "https://www.linkedin.com/in/khaledakand/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                With over 15 years of experience in IT and software development, I'm always 
                interested in discussing new opportunities, innovative projects, or potential 
                collaborations. Whether you need technical leadership, software development, 
                or consulting services, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{info.title}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h4 className="font-semibold mb-2">Current Position</h4>
                <p className="text-muted-foreground">
                  Deputy General Manager at Wintel Limited, leading strategic IT initiatives 
                  and managing technical operations.
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
