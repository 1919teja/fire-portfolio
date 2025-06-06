
import resumeData from '@/lib/resume-data';
import type { ProjectLink } from '@/lib/resume-data';
import { SectionContainer } from '@/components/portfolio/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Github, Youtube, Globe, Link2, FolderKanban } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<NonNullable<ProjectLink['iconName']>, LucideIcon> = {
  Github: Github,
  Youtube: Youtube,
  Globe: Globe,
  Link: Link2,
};

export default function ProjectsSection() {
  const { projects } = resumeData;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <SectionContainer id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center flex items-center justify-center gap-3">
        <FolderKanban className="w-8 h-8" />
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
              {project.subtitle && (
                <CardDescription className="text-sm text-accent">{project.subtitle}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            {project.links && project.links.length > 0 && (
              <CardFooter className="pt-4 flex flex-wrap gap-3">
                {project.links.map((linkInfo) => {
                  const IconComponent = linkInfo.iconName ? iconMap[linkInfo.iconName] : Link2;
                  return (
                    <Button key={linkInfo.url} variant="outline" size="sm" asChild className="transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
                      <Link href={linkInfo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {linkInfo.label}
                      </Link>
                    </Button>
                  );
                })}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
