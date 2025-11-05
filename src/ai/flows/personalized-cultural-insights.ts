'use server';

/**
 * @fileOverview Personalized cultural insights AI agent.
 *
 * - getPersonalizedCulturalInsight - A function that retrieves a personalized cultural insight.
 * - PersonalizedCulturalInsightInput - The input type for the getPersonalizedCulturalInsight function.
 * - PersonalizedCulturalInsightOutput - The return type for the getPersonalizedCulturalInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCulturalInsightInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A string containing the history of the users interactions with the website, including pages visited, menu items viewed, and any other relevant actions.'
    ),
});
export type PersonalizedCulturalInsightInput = z.infer<typeof PersonalizedCulturalInsightInputSchema>;

const PersonalizedCulturalInsightOutputSchema = z.object({
  insight:
    z.string()
      .describe(
        'An AI-generated mini-story or snippet about Burmese cooking and traditions, personalized based on the user history.'
      ),
});
export type PersonalizedCulturalInsightOutput = z.infer<typeof PersonalizedCulturalInsightOutputSchema>;

export async function getPersonalizedCulturalInsight(
  input: PersonalizedCulturalInsightInput
): Promise<PersonalizedCulturalInsightOutput> {
  return personalizedCulturalInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCulturalInsightPrompt',
  input: {schema: PersonalizedCulturalInsightInputSchema},
  output: {schema: PersonalizedCulturalInsightOutputSchema},
  prompt: `You are a Burmese cultural expert. Generate a personalized mini-story or snippet about Burmese cooking and traditions based on the user's previous interactions.\n\nUser History: {{{userHistory}}}\n\nInsight:`,
});

const personalizedCulturalInsightFlow = ai.defineFlow(
  {
    name: 'personalizedCulturalInsightFlow',
    inputSchema: PersonalizedCulturalInsightInputSchema,
    outputSchema: PersonalizedCulturalInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
