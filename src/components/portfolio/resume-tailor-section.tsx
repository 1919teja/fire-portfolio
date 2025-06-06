'use client';

import type { ChangeEvent, FormEvent} from 'react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateTailoredSummary, type TailoredSummaryInput } from '@/ai/flows/resume-tailor';
import resumeData from '@/lib/resume-data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/portfolio/container';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  jobDescription: z.string().min(50, { message: "Job description must be at least 50 characters long." }),
  resumeContent: z.string(),
});

type ResumeTailorFormValues = z.infer<typeof formSchema>;

export default function ResumeTailorSection() {
  const [tailoredSummary, setTailoredSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<ResumeTailorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
      resumeContent: resumeData.fullResumeText,
    },
  });

  const onSubmit: SubmitHandler<ResumeTailorFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setTailoredSummary(null);

    try {
      const input: TailoredSummaryInput = {
        jobDescription: data.jobDescription,
        resumeContent: data.resumeContent,
      };
      const result = await generateTailoredSummary(input);
      setTailoredSummary(result.tailoredSummary);
      toast({
        title: "Summary Generated!",
        description: "Your tailored resume summary is ready.",
        variant: "default",
      });
    } catch (e) {
      console.error("Error generating summary:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(`Failed to generate summary: ${errorMessage}`);
      toast({
        title: "Error",
        description: `Failed to generate summary: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer id="resume-tailor">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Resume Tailor AI</h2>
      <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
        Paste a job description below and let AI craft a personalized summary highlighting your relevant experience from my resume.
      </p>
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Generate Tailored Summary
          </CardTitle>
          <CardDescription>
            Provide the job description to get a custom summary. My resume content is pre-filled.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="jobDescription" className="text-md font-semibold">Job Description</FormLabel>
                    <FormControl>
                      <Textarea
                        id="jobDescription"
                        placeholder="Paste the job description here..."
                        rows={8}
                        className="rounded-md focus:ring-accent focus:border-accent"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resumeContent"
                render={({ field }) => (
                  <FormItem className="hidden"> {/* Hidden as it's pre-filled */}
                    <FormLabel htmlFor="resumeContent">Resume Content (Pre-filled)</FormLabel>
                     <FormControl>
                      <Textarea id="resumeContent" {...field} readOnly disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4">
              <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Tailor My Summary"
                )}
              </Button>
              {error && (
                <div className="text-destructive text-sm p-3 bg-destructive/10 rounded-md flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {error}
                </div>
              )}
            </CardFooter>
          </form>
        </Form>
        {tailoredSummary && (
          <div className="p-6 border-t border-border mt-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Generated Summary:</h3>
            <Card className="bg-primary/5 p-4 rounded-md">
              <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{tailoredSummary}</p>
            </Card>
          </div>
        )}
      </Card>
    </SectionContainer>
  );
}
