import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

interface PromptPanelProps {
  onContinue: () => void;
}

export function PromptPanel({ onContinue }: PromptPanelProps) {
  return (
    <Card className="max-w-lg w-full shadow-soft border-2 border-primary/20 bg-card/95 backdrop-blur-sm animate-fade-in">
      <CardHeader className="text-center space-y-4 pb-4">
        <div className="flex justify-center">
          <Flower2 className="w-14 h-14 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <CardTitle className="text-2xl font-serif mb-2">
            Let's Build Your Bouquet
          </CardTitle>
          <CardDescription className="text-base">
            Each rose is a gift from my heart to yours
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-3 text-muted-foreground">
          <p className="leading-relaxed">
            In the next moment, you'll step into a special space where you can add roses to your bouquet, one by one.
          </p>
          <p className="leading-relaxed">
            Watch as each flower finds its place, creating something beautiful—just like how you've brought beauty into my life.
          </p>
        </div>
        <Button 
          onClick={onContinue}
          size="lg"
          className="w-full text-lg font-medium"
        >
          Create Your Bouquet
        </Button>
      </CardContent>
    </Card>
  );
}
