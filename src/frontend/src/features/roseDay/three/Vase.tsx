import { useRef } from 'react';
import { Mesh } from 'three';

export function Vase() {
  const meshRef = useRef<Mesh>(null);

  return (
    <group position={[0, 0, 0]}>
      {/* Main vase body */}
      <mesh ref={meshRef} castShadow receiveShadow position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.35, 0.25, 0.6, 32]} />
        <meshStandardMaterial
          color="#e8d5c4"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Vase rim */}
      <mesh castShadow position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.38, 0.35, 0.05, 32]} />
        <meshStandardMaterial
          color="#d4c0ad"
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>

      {/* Vase base */}
      <mesh castShadow receiveShadow position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 0.04, 32]} />
        <meshStandardMaterial
          color="#d4c0ad"
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>
    </group>
  );
}
