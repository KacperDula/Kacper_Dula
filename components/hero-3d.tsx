"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, RoundedBox } from "@react-three/drei";
import { useEffect, useRef, type ReactNode } from "react";
import type { Group, Mesh } from "three";

const ACCENT = "#c5f06b";
const ACCENT_2 = "#9d9bff";
const SURFACE = "#17171c";

// Window-level pointer so the scene reacts even though the hero overlay is pointer-events-none.
const pointer = { x: 0, y: 0 };

function usePointer() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

function CodeLine({ y, width, speed, color }: { y: number; width: number; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const scale = 0.55 + 0.45 * Math.abs(Math.sin(clock.elapsedTime * speed));
    ref.current.scale.x = scale;
    ref.current.position.x = -0.7 + (width * scale) / 2;
  });
  return (
    <mesh ref={ref} position={[0, y, 0.031]}>
      <planeGeometry args={[width, 0.05]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

function Laptop() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* base */}
      <RoundedBox args={[2.2, 0.08, 1.5]} radius={0.03} position={[0, 0, 0.4]}>
        <meshStandardMaterial color="#4a4a58" metalness={0.5} roughness={0.35} />
      </RoundedBox>
      <mesh position={[0, 0.045, 0.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.8, 0.8]} />
        <meshStandardMaterial color={SURFACE} roughness={0.8} />
      </mesh>
      {/* screen, hinged at the back edge */}
      <group position={[0, 0.04, -0.33]} rotation={[-0.18, 0, 0]}>
        <RoundedBox args={[2.2, 1.4, 0.05]} radius={0.03} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#4a4a58" metalness={0.5} roughness={0.35} />
        </RoundedBox>
        <group position={[0, 0.7, 0]}>
          <mesh position={[0, 0, 0.028]}>
            <planeGeometry args={[2, 1.2]} />
            <meshBasicMaterial color="#101016" toneMapped={false} />
          </mesh>
          <CodeLine y={0.4} width={1.1} speed={0.9} color={ACCENT} />
          <CodeLine y={0.25} width={0.8} speed={1.3} color={ACCENT_2} />
          <CodeLine y={0.1} width={1.3} speed={0.7} color={ACCENT} />
          <CodeLine y={-0.05} width={0.6} speed={1.6} color="#e8e8ec" />
          <CodeLine y={-0.2} width={1.0} speed={1.1} color={ACCENT_2} />
          <CodeLine y={-0.35} width={0.9} speed={0.8} color={ACCENT} />
          <pointLight position={[0, 0, 0.6]} intensity={2} distance={3} color={ACCENT} />
        </group>
      </group>
    </group>
  );
}

function Orbiter() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.45;
  });
  return (
    <mesh ref={ref} position={[1.45, 1.1, -0.6]}>
      <icosahedronGeometry args={[0.42, 0]} />
      <meshBasicMaterial color={ACCENT_2} wireframe toneMapped={false} />
    </mesh>
  );
}

function Chip({ position, children }: { position: [number, number, number]; children: ReactNode }) {
  return (
    <Float speed={2} floatIntensity={0.6} rotationIntensity={0.2}>
      <Html position={position} transform distanceFactor={4} zIndexRange={[1, 0]}>
        <div className="whitespace-nowrap rounded-md border border-white/20 bg-surface/80 px-2 py-1 text-[11px] text-accent">
          {children}
        </div>
      </Html>
    </Float>
  );
}

function Scene() {
  const ref = useRef<Group>(null);
  usePointer();

  useFrame(() => {
    if (!ref.current) return;
    // Ease toward the cursor; base yaw keeps the laptop angled toward the hero copy.
    ref.current.rotation.y += (-0.35 + pointer.x * 0.35 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (0.12 + pointer.y * 0.15 - ref.current.rotation.x) * 0.05;
  });

  return (
    <group ref={ref}>
      <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.15}>
        <Laptop />
      </Float>
      <Orbiter />
      <Chip position={[0.1, 1.3, 0.2]}>const api = await fetch();</Chip>
      <Chip position={[-0.9, -1.25, 0.6]}>docker compose up</Chip>
    </group>
  );
}

export default function Hero3D({ fallback }: { fallback: ReactNode }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      fallback={fallback}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color={ACCENT_2} />
      <Scene />
    </Canvas>
  );
}
