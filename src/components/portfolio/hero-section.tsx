
import resumeData from '@/lib/resume-data';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/portfolio/container';
import { Github, Linkedin, Mail, Phone, Globe, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const { name, title, summary, contact } = resumeData;

  const contactLinks = [
    { href: `mailto:${contact.email}`, icon: Mail, label: 'Email' },
    { href: `tel:${contact.phone}`, icon: Phone, label: 'Phone' },
    { href: `https://${contact.linkedin}`, icon: Linkedin, label: 'LinkedIn', target: '_blank' },
    { href: `https://${contact.github}`, icon: Github, label: 'GitHub', target: '_blank' },
    { href: contact.website.startsWith('http') ? contact.website : `https://${contact.website}`, icon: Globe, label: 'Website', target: '_blank' },
  ];

  return (
    <SectionContainer id="hero" className="bg-gradient-to-br from-primary/5 via-background to-background pt-20 md:pt-28 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="/profile-pic.jpg"
            alt={name}
            width={160}
            height={160}
            className="rounded-full shadow-xl border-4 border-accent object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl font-headline text-accent mb-6">
          {title}
        </p>
        <p className="text-md sm:text-lg text-foreground/80 mb-8 leading-relaxed">
          {summary}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contactLinks.map((link) => (
            <Button key={link.label} variant="outline" size="lg" asChild className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <Link href={link.href} target={link.target || '_self'} rel={link.target === '_blank' ? "noopener noreferrer" : undefined} className="flex items-center gap-2">
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
        {/* <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button> */}
      </div>
    </SectionContainer>
  );
}
