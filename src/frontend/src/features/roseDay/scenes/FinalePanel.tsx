import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';

interface FinalePanelProps {
  roseCount: number;
  onRestart: () => void;
}

export function FinalePanel({ roseCount, onRestart }: FinalePanelProps) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 animate-fade-in">
      <Card className="shadow-soft border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-4">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-16 h-16 text-primary fill-primary animate-float" />
              <Sparkles className="w-6 h-6 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl font-serif mb-2">
              Your Bouquet is Complete
            </CardTitle>
            <CardDescription className="text-base">
              <Badge variant="secondary" className="text-sm">
                {roseCount} beautiful roses
              </Badge>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-3 text-muted-foreground">
            <p className="leading-relaxed text-base">
              Just like these roses have come together to create something beautiful, you've brought so much beauty and joy into my life.
            </p>
            <p className="leading-relaxed text-base">
              This bouquet is for you—a symbol of my love, appreciation, and all the wonderful moments we share.
            </p>
            <p className="leading-relaxed text-lg font-medium text-primary mt-4">
              Happy Rose Day, my love. ❤️
            </p>
          </div>
          <Button 
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="w-full text-base"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Start Over
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
