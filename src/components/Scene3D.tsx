import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function DataCube() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[2.5, 1, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#00e5ff"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function DataSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2.5, -0.5, -1]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#7c4dff"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    meshRef.current.rotation.z += 0.004;
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 2, -3]}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00e5ff" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function DistortedSphere() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>
      <mesh position={[3, -1.5, -4]} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7c4dff"
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00e5ff" size={0.02} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00e5ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#7c4dff" />
        <Particles />
        <DataCube />
        <DataSphere />
        <FloatingRing />
        <DistortedSphere />
      </Canvas>
    </div>
  );
}
