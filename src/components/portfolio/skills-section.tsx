import resumeData from '@/lib/resume-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/portfolio/container';
import { CheckCircle2, Code2, Server, Database, Cloud, Settings, BarChart2, GitFork, Shield, Network, Zap, Users, Layers, Package, Terminal, Construction, GanttChartSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Helper to get an icon for a skill category or specific skill
const getIconForSkill = (skillName: string): LucideIcon => {
  const lowerSkillName = skillName.toLowerCase();
  if (lowerSkillName.includes('aws') || lowerSkillName.includes('azure') || lowerSkillName.includes('cloud')) return Cloud;
  if (lowerSkillName.includes('docker') || lowerSkillName.includes('kubernetes') || lowerSkillName.includes('container')) return Package;
  if (lowerSkillName.includes('terraform') || lowerSkillName.includes('ansible') || lowerSkillName.includes('iac')) return Layers;
  if (lowerSkillName.includes('jenkins') || lowerSkillName.includes('gitlab ci') || lowerSkillName.includes('azure devops') || lowerSkillName.includes('ci/cd')) return Settings;
  if (lowerSkillName.includes('prometheus') || lowerSkillName.includes('grafana') || lowerSkillName.includes('elk') || lowerSkillName.includes('monitoring') || lowerSkillName.includes('logging') || lowerSkillName.includes('apm') || lowerSkillName.includes('observability')) return BarChart2;
  if (lowerSkillName.includes('git')) return GitFork;
  if (lowerSkillName.includes('python') || lowerSkillName.includes('javascript') || lowerSkillName.includes('scripting')) return Code2;
  if (lowerSkillName.includes('bash') || lowerSkillName.includes('shell')) return Terminal;
  if (lowerSkillName.includes('database') || lowerSkillName.includes('mysql') || lowerSkillName.includes('mongodb') || lowerSkillName.includes('redis')) return Database;
  if (lowerSkillName.includes('network') || lowerSkillName.includes('dns') || lowerSkillName.includes('tcp/ip')) return Network;
  if (lowerSkillName.includes('security') || lowerSkillName.includes('waf')) return Shield;
  if (lowerSkillName.includes('devops')) return GanttChartSquare;
  if (lowerSkillName.includes('collaboration') || lowerSkillName.includes('jira') || lowerSkillName.includes('slack')) return Users;
  if (lowerSkillName.includes('microservices') || lowerSkillName.includes('gitops') || lowerSkillName.includes('helm') || lowerSkillName.includes('fluxcd')) return Zap;
  if (lowerSkillName.includes('qa') || lowerSkillName.includes('automation') || lowerSkillName.includes('postman')) return CheckCircle2;
  if (lowerSkillName.includes('os') || lowerSkillName.includes('linux') || lowerSkillName.includes('windows')) return Server;
  if (lowerSkillName.includes('adobe') || lowerSkillName.includes('magento')) return Construction;


  return Zap; // Default icon
};


export default function SkillsSection() {
  const { technicalCompetencies } = resumeData;

  return (
    <SectionContainer id="skills" className="bg-muted/50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {technicalCompetencies.map((category) => {
          const Icon = getIconForSkill(category.name);
          return (
            <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Icon className="w-7 h-7 text-accent" />
                  <CardTitle className="text-xl font-semibold text-primary">{category.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
