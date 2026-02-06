import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

interface LandingPanelProps {
  onStart: () => void;
}

export function LandingPanel({ onStart }: LandingPanelProps) {
  return (
    <Card className="max-w-lg w-full shadow-soft border-2 border-primary/20 bg-card/95 backdrop-blur-sm animate-fade-in">
      <CardHeader className="text-center space-y-4 pb-4">
        <div className="flex justify-center">
          <div className="relative">
            <Heart className="w-16 h-16 text-primary fill-primary animate-float" />
            <Sparkles className="w-6 h-6 text-accent absolute -top-1 -right-1" />
          </div>
        </div>
        <div>
          <CardTitle className="text-3xl font-serif mb-2">
            Happy Rose Day
          </CardTitle>
          <CardDescription className="text-base">
            A special moment, just for you
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-3 text-muted-foreground">
          <p className="leading-relaxed">
            Today marks the beginning of Valentine's Week, and I wanted to create something special for you.
          </p>
          <p className="leading-relaxed">
            Every rose in this bouquet represents a moment, a memory, and a reason why you mean so much to me.
          </p>
        </div>
        <Button 
          onClick={onStart}
          size="lg"
          className="w-full text-lg font-medium shadow-glow"
        >
          Begin Your Journey
        </Button>
      </CardContent>
    </Card>
  );
}
