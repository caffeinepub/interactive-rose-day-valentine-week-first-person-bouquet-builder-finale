import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Vase } from './Vase';
import { Rose } from './Rose';
import { useMemo } from 'react';
import { calculateBouquetSlot } from './bouquetLayout';

interface BouquetSceneProps {
  roseCount: number;
}

export function BouquetScene({ roseCount }: BouquetSceneProps) {
  const roses = useMemo(() => {
    return Array.from({ length: roseCount }, (_, i) => ({
      id: i,
      ...calculateBouquetSlot(i),
    }));
  }, [roseCount]);

  return (
    <Canvas shadows>
      {/* Camera setup - first person perspective looking at the vase */}
      <PerspectiveCamera makeDefault position={[0, 1.2, 3]} fov={50} />
      
      {/* Controls for interactive viewing */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2}
        maxDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0.8, 0]}
      />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-3, 3, -2]} intensity={0.5} color="#ffd4d4" />
      <pointLight position={[3, 2, 2]} intensity={0.4} color="#ffe4e4" />

      {/* Scene objects */}
      <Vase />
      
      {roses.map((rose) => (
        <Rose
          key={rose.id}
          position={rose.position}
          rotation={rose.rotation}
          scale={rose.scale}
          delay={rose.id * 0.15}
        />
      ))}

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </Canvas>
  );
}
