import { useRef, useState, useEffect } from 'react';
import { Group, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface RoseProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  delay: number;
}

export function Rose({ position, rotation, scale, delay }: RoseProps) {
  const groupRef = useRef<Group>(null);
  const [animProgress, setAnimProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  const spawnPosition = new Vector3(0, 2, 1.5);
  const targetPosition = new Vector3(...position);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Animate entrance
    if (hasStarted && animProgress < 1) {
      const newProgress = Math.min(animProgress + delta * 1.2, 1);
      setAnimProgress(newProgress);

      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - newProgress, 3);

      // Interpolate position
      const currentPos = new Vector3().lerpVectors(spawnPosition, targetPosition, eased);
      groupRef.current.position.copy(currentPos);

      // Interpolate scale
      groupRef.current.scale.setScalar(scale * eased);
    }

    // Subtle floating animation after entrance
    if (animProgress >= 1) {
      const time = state.clock.getElapsedTime();
      const baseY = targetPosition.y;
      groupRef.current.position.y = baseY + Math.sin(time * 2 + delay) * 0.01;
    }
  });

  return (
    <group ref={groupRef} rotation={rotation}>
      {/* Rose bloom/petals */}
      <group position={[0, 0.15, 0]}>
        {/* Center bud */}
        <mesh castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#8b1538" roughness={0.6} />
        </mesh>

        {/* Outer petals - arranged in a circle */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 0.12;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                -0.02,
                Math.sin(angle) * radius,
              ]}
              rotation={[Math.PI / 6, angle, 0]}
              castShadow
            >
              <sphereGeometry args={[0.09, 12, 12, 0, Math.PI]} />
              <meshStandardMaterial
                color="#c41e3a"
                roughness={0.5}
                metalness={0.1}
              />
            </mesh>
          );
        })}

        {/* Middle petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2 + Math.PI / 6;
          const radius = 0.08;
          return (
            <mesh
              key={`mid-${i}`}
              position={[
                Math.cos(angle) * radius,
                0.02,
                Math.sin(angle) * radius,
              ]}
              rotation={[Math.PI / 8, angle, 0]}
              castShadow
            >
              <sphereGeometry args={[0.07, 12, 12, 0, Math.PI]} />
              <meshStandardMaterial
                color="#a01729"
                roughness={0.5}
                metalness={0.1}
              />
            </mesh>
          );
        })}
      </group>

      {/* Stem */}
      <mesh position={[0, -0.15, 0]} castShadow>
        <cylinderGeometry args={[0.015, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#2d5016" roughness={0.7} />
      </mesh>

      {/* Leaves */}
      <mesh position={[0.05, -0.05, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.08, 0.03, 0.01]} />
        <meshStandardMaterial color="#3a6b1f" roughness={0.6} />
      </mesh>
      <mesh position={[-0.05, -0.1, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <boxGeometry args={[0.08, 0.03, 0.01]} />
        <meshStandardMaterial color="#3a6b1f" roughness={0.6} />
      </mesh>
    </group>
  );
}
