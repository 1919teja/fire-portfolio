'use server';

/**
 * @fileOverview Generates a tailored summary of the user's experience based on a job description.
 *
 * - generateTailoredSummary - A function that generates the tailored summary.
 * - TailoredSummaryInput - The input type for the generateTailoredSummary function.
 * - TailoredSummaryOutput - The return type for the generateTailoredSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailoredSummaryInputSchema = z.object({
  jobDescription: z.string().describe('The job description to tailor the summary to.'),
  resumeContent: z.string().describe('The resume content to use as the basis for the summary.'),
});
export type TailoredSummaryInput = z.infer<typeof TailoredSummaryInputSchema>;

const TailoredSummaryOutputSchema = z.object({
  tailoredSummary: z.string().describe('A tailored summary of the user\'s experience.'),
});
export type TailoredSummaryOutput = z.infer<typeof TailoredSummaryOutputSchema>;

export async function generateTailoredSummary(input: TailoredSummaryInput): Promise<TailoredSummaryOutput> {
  return tailoredSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailoredSummaryPrompt',
  input: {schema: TailoredSummaryInputSchema},
  output: {schema: TailoredSummaryOutputSchema},
  prompt: `You are an expert resume writer. You will generate a tailored summary of the user's experience based on the job description provided.

Job Description: {{{jobDescription}}}

Resume Content: {{{resumeContent}}}

Tailored Summary:`, // Provide clear instructions and context
});

const tailoredSummaryFlow = ai.defineFlow(
  {
    name: 'tailoredSummaryFlow',
    inputSchema: TailoredSummaryInputSchema,
    outputSchema: TailoredSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
