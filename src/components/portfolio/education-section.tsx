import resumeData from '@/lib/resume-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/portfolio/container';
import { GraduationCap, CalendarDays, Info } from 'lucide-react';

export default function EducationSection() {
  const { education } = resumeData;

  return (
    <SectionContainer id="education" className="bg-muted/50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-7 h-7 text-accent" />
                <CardTitle className="text-xl font-semibold text-primary">{edu.institution}</CardTitle>
              </div>
              <CardDescription className="text-md text-foreground/90">{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              {edu.graduationYear && (
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-2 text-accent" />
                  <span>{edu.graduationYear}</span>
                </div>
              )}
              {edu.cgpa && (
                <div className="flex items-center">
                   <Info className="w-4 h-4 mr-2 text-accent" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              )}
               {edu.details && (
                <div className="flex items-center">
                   <Info className="w-4 h-4 mr-2 text-accent" />
                  <span>{edu.details}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
