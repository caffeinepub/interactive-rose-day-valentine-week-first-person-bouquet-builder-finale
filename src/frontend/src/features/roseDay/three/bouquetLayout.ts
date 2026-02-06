import { VASE_OPENING_RADIUS, LAYER_HEIGHT_SPACING, MAX_TILT } from './constants';

interface BouquetSlot {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

/**
 * Calculate the position and rotation for a rose in the bouquet
 * Uses a spiral/layered arrangement to create a natural bouquet look
 */
export function calculateBouquetSlot(index: number): BouquetSlot {
  // Determine which layer (ring) this rose belongs to
  const rosesPerLayer = 6;
  const layer = Math.floor(index / rosesPerLayer);
  const positionInLayer = index % rosesPerLayer;

  // Calculate angle around the circle for this position
  const angleOffset = layer * 0.3; // Offset each layer slightly for spiral effect
  const angle = (positionInLayer / rosesPerLayer) * Math.PI * 2 + angleOffset;

  // Calculate radius - inner layers are tighter, outer layers spread out
  const baseRadius = VASE_OPENING_RADIUS * 0.3;
  const radiusIncrement = 0.08;
  const radius = baseRadius + layer * radiusIncrement;

  // Calculate height - roses stack upward in layers
  const baseHeight = 0.65; // Start just above vase rim
  const height = baseHeight + layer * LAYER_HEIGHT_SPACING;

  // Position
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = height;

  // Rotation - roses tilt outward slightly and face different directions
  const tiltX = (Math.random() - 0.5) * MAX_TILT;
  const tiltZ = (Math.random() - 0.5) * MAX_TILT;
  const rotationY = angle + (Math.random() - 0.5) * 0.5;

  // Scale - slight variation for natural look
  const scale = 0.9 + Math.random() * 0.2;

  return {
    position: [x, y, z],
    rotation: [tiltX, rotationY, tiltZ],
    scale,
  };
}
