import { type ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface SiteFrameProps {
  children: ReactNode;
}

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with generated image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/rose-day-bg.dim_1920x1080.png)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-accent/10" />

      {/* Header */}
      <header className="relative z-20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/rose-mark.dim_512x512.png" 
            alt="Rose" 
            className="w-10 h-10 object-contain opacity-90"
          />
          <div>
            <h1 className="text-xl font-serif font-semibold text-foreground">
              Rose Day
            </h1>
            <p className="text-xs text-muted-foreground">February 7, 2026</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-4 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          © 2026. Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
