import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Rotate the sphere
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#0891b2" // Cyan-600ish
        attach="material"
        distort={0.4} // Amount of distortion
        speed={1.5} // Speed of animation
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <AnimatedSphere />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </Canvas>
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-950/90 pointer-events-none" />
    </div>
  );
};

export default ThreeBackground;