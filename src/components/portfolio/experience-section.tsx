import resumeData from '@/lib/resume-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/portfolio/container';
import { Briefcase, CalendarDays, Dot } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = resumeData;

  return (
    <SectionContainer id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Work Experience</h2>
      <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative flex items-start space-x-3 md:justify-normal md:space-x-0 md:odd:flex-row-reverse"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-md shrink-0 md:order-1 md:mx-auto">
              <Briefcase className="w-5 h-5" />
            </div>
            <Card className="w-full shadow-lg rounded-xl md:max-w-md lg:max-w-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{job.role}</CardTitle>
                <CardDescription className="text-md text-accent">
                  {job.company}
                </CardDescription>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1.5" />
                  {job.duration}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex">
                      <Dot className="w-5 h-5 mr-1 text-accent shrink-0 mt-0.5" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
