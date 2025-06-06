import resumeData from '@/lib/resume-data';
import { Github, Linkedin, Mail, Globe, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = resumeData;

  const socialLinks = [
    { href: `mailto:${contact.email}`, icon: Mail, label: 'Email' },
    { href: `tel:${contact.phone}`, icon: Phone, label: 'Phone' },
    { href: `https://www.${contact.linkedin}`, icon: Linkedin, label: 'LinkedIn', target: '_blank' },
    { href: `https://www.${contact.github}`, icon: Github, label: 'GitHub', target: '_blank' },
    { href: contact.website.startsWith('http') ? contact.website : `https://${contact.website}`, icon: Globe, label: 'Website', target: '_blank' },
  ];

  return (
    <footer className="py-8 bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.target || '_self'}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Saiteja Kottapally. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
