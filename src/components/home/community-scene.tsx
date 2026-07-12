"use client";

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group } from "three";

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="scene-fallback"><span>低多边形社区沙盘</span></div> : this.props.children; }
}

function Building({ position, height, color }: { position: [number, number, number]; height: number; color: string }) {
  const floors = Math.max(2, Math.round(height));
  return <group position={position}>
    <RoundedBox args={[1.25, height, 1.1]} radius={.12} smoothness={2} position={[0, height / 2, 0]}><meshStandardMaterial color={color} roughness={.85} /></RoundedBox>
    {Array.from({ length: floors }).flatMap((_, row) => [-.32, .32].map((x) => <mesh key={`${row}-${x}`} position={[x, .65 + row * .7, .56]}><boxGeometry args={[.27, .3, .035]} /><meshStandardMaterial color="#b7e1ef" emissive="#78b8ce" emissiveIntensity={.08} /></mesh>))}
    <mesh position={[0, .4, .58]}><boxGeometry args={[.28, .8, .06]} /><meshStandardMaterial color="#397a68" /></mesh>
    <mesh position={[0, height + .08, 0]}><boxGeometry args={[1.38, .16, 1.22]} /><meshStandardMaterial color="#e98262" /></mesh>
  </group>;
}

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return <group position={position} scale={scale}><mesh position={[0,.35,0]}><cylinderGeometry args={[.08,.11,.7,8]} /><meshStandardMaterial color="#9c6b45" /></mesh><mesh position={[0,.92,0]}><dodecahedronGeometry args={[.46,0]} /><meshStandardMaterial color="#55a575" /></mesh></group>;
}

function Lamp({ position }: { position: [number, number, number] }) { return <group position={position}><mesh position={[0,.5,0]}><cylinderGeometry args={[.035,.05,1,8]} /><meshStandardMaterial color="#35534f" /></mesh><mesh position={[0,1.02,0]}><sphereGeometry args={[.12,12,8]} /><meshStandardMaterial color="#ffd779" emissive="#f6c85f" emissiveIntensity={.55} /></mesh></group>; }

function MiniCommunity({ reduced, visible, pointer }: { reduced: boolean; visible: boolean; pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => { if (!ref.current || !visible) return; if (!reduced) ref.current.rotation.y += delta * .055; ref.current.rotation.x += ((pointer.current.y * .045) - ref.current.rotation.x) * .025; ref.current.rotation.z += ((-pointer.current.x * .035) - ref.current.rotation.z) * .025; });
  return <Float speed={reduced ? 0 : .55} rotationIntensity={reduced ? 0 : .06} floatIntensity={reduced ? 0 : .16}>
    <group ref={ref} rotation={[-.05, -.5, 0]} position={[0,-1.35,0]}>
      <RoundedBox args={[8,.35,6]} radius={.28} smoothness={3}><meshStandardMaterial color="#a9d5a5" roughness={.95} /></RoundedBox>
      <mesh position={[0,.2,0]}><boxGeometry args={[1.25,.06,5.8]} /><meshStandardMaterial color="#728b87" /></mesh>
      <mesh position={[2.55,.21,.8]}><boxGeometry args={[2.2,.07,1.2]} /><meshStandardMaterial color="#819592" /></mesh>
      {[-.4,.4].map(x => <mesh key={x} position={[x,.245,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[.05,5.2]} /><meshBasicMaterial color="#f7e4a5" /></mesh>)}
      <Building position={[-2.6,.2,-1.3]} height={3.25} color="#f2c99f" /><Building position={[-1.05,.2,-1.65]} height={2.45} color="#f4dfb6" /><Building position={[1.3,.2,-1.55]} height={3.6} color="#eeb798" /><Building position={[2.75,.2,-1.2]} height={2.65} color="#f4d8a9" />
      {([[-3,.2,1.45],[-2,.2,1.65],[1.25,.2,1.7],[3.25,.2,1.65],[-3.35,.2,.2]] as [number,number,number][]).map((p,i) => <Tree key={i} position={p} scale={i%2 ? .8 : 1} />)}
      {([-1.45,1.45] as number[]).flatMap(x => [-1.5,0,1.5].map(z => <Lamp key={`${x}-${z}`} position={[x,.23,z]} />))}
      <RoundedBox args={[1.05,.8,.5]} radius={.08} smoothness={2} position={[-2.5,.65,2]}><meshStandardMaterial color="#f3a565" /></RoundedBox>
      <group position={[2.15,.27,1.5]}>{[-.45,0,.45].map(x => <group key={x} position={[x,0,0]}><mesh position={[0,.4,0]}><boxGeometry args={[.18,.75,.18]} /><meshStandardMaterial color="#55aee0" /></mesh><mesh position={[.11,.55,0]}><boxGeometry args={[.13,.06,.05]} /><meshStandardMaterial color="#20313c" /></mesh></group>)}</group>
      {[-.72,.72].map(x => <mesh key={x} position={[2.55,.27,.65+x*.7]}><boxGeometry args={[.72,.06,1.05]} /><meshStandardMaterial color="#e8eee5" /></mesh>)}
    </group>
  </Float>;
}

export function CommunityScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => { const media = matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReduced(media.matches); update(); media.addEventListener("change", update); const onVisibility = () => setVisible(!document.hidden); document.addEventListener("visibilitychange", onVisibility); return () => { media.removeEventListener("change", update); document.removeEventListener("visibilitychange", onVisibility); }; }, []);
  return <div className="community-scene" onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); pointer.current = { x: ((e.clientX-r.left)/r.width-.5)*2, y: ((e.clientY-r.top)/r.height-.5)*2 }; }}>
    <div className="scene-caption"><span className="live-dot" />今日社区运行平稳<small>满意度 86 · 待处理 3</small></div>
    <SceneBoundary><Suspense fallback={<div className="scene-fallback"><span>正在搭建社区沙盘…</span></div>}><Canvas aria-hidden="true" className="scene-canvas" orthographic camera={{ position: [8,7,8], zoom: 72 }} dpr={[1,1.35]} performance={{ min: .5 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={1.8} /><hemisphereLight args={["#dff5ff","#8fbf9d",1.8]} /><directionalLight position={[5,9,6]} intensity={2.4} castShadow={false} />
      <MiniCommunity reduced={reduced} visible={visible} pointer={pointer} />
    </Canvas></Suspense></SceneBoundary>
  </div>;
}
