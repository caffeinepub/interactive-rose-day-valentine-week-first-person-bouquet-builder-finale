import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plus, Flower2 } from 'lucide-react';

interface BuildOverlayProps {
  roseCount: number;
  targetRoses: number;
  onAddRose: () => void;
}

export function BuildOverlay({ roseCount, targetRoses, onAddRose }: BuildOverlayProps) {
  const progress = (roseCount / targetRoses) * 100;
  const isComplete = roseCount >= targetRoses;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 animate-fade-in">
      <Card className="shadow-soft border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flower2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Your Bouquet</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              {roseCount} / {targetRoses} roses
            </Badge>
          </div>

          <Progress value={progress} className="h-2" />

          <div className="text-center text-sm text-muted-foreground">
            {roseCount === 0 && "Add your first rose to begin"}
            {roseCount > 0 && roseCount < targetRoses && "Keep adding roses to complete your bouquet"}
            {isComplete && "Your bouquet is complete!"}
          </div>

          <Button
            onClick={onAddRose}
            disabled={isComplete}
            size="lg"
            className="w-full text-base font-medium shadow-glow"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add a Rose
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
