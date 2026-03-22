"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function SpaceShuttle() {
  const groupRef = useRef<THREE.Group>(null);

  // Make the entire group follow the mouse slightly for a cool parallax effect
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Target rotation based on pointer position (-1 to 1)
    const targetX = (state.pointer.y * Math.PI) / 6;
    const targetY = (state.pointer.x * Math.PI) / 6;
    
    // Smooth interpolation towards the target
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.8} 
      floatingRange={[-0.4, 0.4]}
    >
      {/* Base tilt to make it look like it's flying slightly upwards and right */}
      <group rotation={[Math.PI / 6, -Math.PI / 8, 0]}>
        <group ref={groupRef} scale={1.2}>
          
          {/* Main Fuselage */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 3, 32]} />
            <meshStandardMaterial color="#cdd6f4" roughness={0.2} metalness={0.5} />
          </mesh>
          
          {/* Nose Cone */}
          <mesh position={[0, 2.25, 0]}>
            <coneGeometry args={[0.5, 1.5, 32]} />
            <meshStandardMaterial color="#1e1e2e" roughness={0.4} metalness={0.8} />
          </mesh>

          {/* Engine Exhaust Base */}
          <mesh position={[0, -1.65, 0]}>
            <cylinderGeometry args={[0.4, 0.6, 0.3, 32]} />
            <meshStandardMaterial color="#45475a" roughness={0.8} />
          </mesh>
          
          {/* Glowing Engine Thrust */}
          <mesh position={[0, -2.1, 0]}>
            <coneGeometry args={[0.4, 1.5, 16]} />
            <meshBasicMaterial color="#89dceb" transparent opacity={0.6} />
          </mesh>

          {/* Delta Wings */}
          <mesh position={[0, -0.8, 0]}>
            <boxGeometry args={[3, 0.1, 1.5]} />
            {/* Using a Flamingo pink accent for the wings based on Catppuccin */}
            <meshStandardMaterial color="#f2cdcd" roughness={0.3} metalness={0.2} />
          </mesh>

          {/* Tail Fin */}
          <mesh position={[0, -0.5, 0.5]}>
            <boxGeometry args={[0.1, 1.2, 1]} />
            <meshStandardMaterial color="#1e1e2e" roughness={0.4} />
          </mesh>

        </group>
      </group>
    </Float>
  );
}
