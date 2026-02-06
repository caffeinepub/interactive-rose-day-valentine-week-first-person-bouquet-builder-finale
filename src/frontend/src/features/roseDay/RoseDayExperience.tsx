import { useState } from 'react';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { LandingPanel } from './scenes/LandingPanel';
import { PromptPanel } from './scenes/PromptPanel';
import { BuildOverlay } from './scenes/BuildOverlay';
import { FinalePanel } from './scenes/FinalePanel';
import { BouquetScene } from './three/BouquetScene';

type ExperienceState = 'landing' | 'prompt' | 'building' | 'finale';

const TARGET_ROSES = 12;

export function RoseDayExperience() {
  const [state, setState] = useState<ExperienceState>('landing');
  const [roseCount, setRoseCount] = useState(0);

  const handleStart = () => {
    setState('prompt');
  };

  const handleBeginBuilding = () => {
    setState('building');
  };

  const handleAddRose = () => {
    const newCount = roseCount + 1;
    setRoseCount(newCount);
    
    if (newCount >= TARGET_ROSES) {
      setTimeout(() => {
        setState('finale');
      }, 1500);
    }
  };

  const handleRestart = () => {
    setRoseCount(0);
    setState('landing');
  };

  return (
    <SiteFrame>
      {/* 3D Scene - always rendered but visible during building and finale */}
      {(state === 'building' || state === 'finale') && (
        <div className="absolute inset-0 z-0">
          <BouquetScene roseCount={roseCount} />
        </div>
      )}

      {/* UI Overlays */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {state === 'landing' && <LandingPanel onStart={handleStart} />}
        {state === 'prompt' && <PromptPanel onContinue={handleBeginBuilding} />}
        {state === 'building' && (
          <BuildOverlay
            roseCount={roseCount}
            targetRoses={TARGET_ROSES}
            onAddRose={handleAddRose}
          />
        )}
        {state === 'finale' && (
          <FinalePanel roseCount={roseCount} onRestart={handleRestart} />
        )}
      </div>
    </SiteFrame>
  );
}
