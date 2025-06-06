import resumeData from '@/lib/resume-data';
import { SectionContainer } from '@/components/portfolio/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Globe, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  const { contact, name } = resumeData;

  const contactDetails = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}`, target: "_blank" },
    { icon: Github, label: "GitHub", value: contact.github, href: `https://${contact.github}`, target: "_blank" },
    { icon: Globe, label: "Website", value: contact.website, href: contact.website.startsWith('http') ? contact.website : `https://${contact.website}`, target: "_blank" },
  ];

  return (
    <SectionContainer id="contact" className="bg-muted/50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Get In Touch</h2>
      <Card className="max-w-2xl mx-auto shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground p-6">
          <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-6">
          <p className="text-center text-foreground/80 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            {contactDetails.map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <item.icon className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <p className="font-semibold text-primary">{item.label}</p>
                  <a 
                    href={item.href} 
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? "noopener noreferrer" : undefined}
                    className="text-foreground/80 hover:text-accent transition-colors break-all"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={`mailto:${contact.email}`}>Send me an Email</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
