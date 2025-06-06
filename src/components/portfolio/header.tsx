
import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <CodeXml className="w-8 h-8" />
          <span className="text-2xl font-headline font-semibold">
            Saiteja Kottapally
          </span>
        </Link>
        <nav className="space-x-4 sm:space-x-6">
          {['skills', 'experience', 'education', 'projects', 'resume-tailor', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-medium text-foreground/80 hover:text-accent transition-colors capitalize"
            >
              {item.replace('-', ' ')}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
