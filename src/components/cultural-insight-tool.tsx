
"use client";

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { getPersonalizedCulturalInsight, PersonalizedCulturalInsightOutput } from '@/ai/flows/personalized-cultural-insights';
import { getNavigationHistory } from '@/hooks/use-navigation-history';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function CulturalInsightTool() {
  const [insight, setInsight] = useState<PersonalizedCulturalInsightOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetInsight = async () => {
    setIsLoading(true);
    setError(null);
    setInsight(null);

    try {
      const userHistory = getNavigationHistory();
      const result = await getPersonalizedCulturalInsight({ userHistory });
      setInsight(result);
    } catch (e) {
      console.error(e);
      setError("We couldn't generate an insight at this moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-cream/50 border-bamboo/50 shadow-md">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-secondary flex items-center gap-3">
          <Wand2 className="text-primary h-8 w-8" />
          Your Personalized Cultural Bite
        </CardTitle>
        <CardDescription>
          Based on your journey through our site, here’s a little story or fact about Burmese culture we think you’ll enjoy.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGetInsight} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Discover Something New'}
        </Button>

        <div className="mt-6">
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
          {insight && (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              {insight.insight}
            </blockquote>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
