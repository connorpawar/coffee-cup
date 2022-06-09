import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Colors } from "./Colors";
import { Vertex } from "./Sea";
import { BufferGeometry, Vector3 } from "three";

const normalize = (
	v: number,
	vmin: number,
	vmax: number,
	tmin: number,
	tmax: number): number => {
  var nv = Math.max(Math.min(v, vmax), vmin);
  var dv = vmax - vmin;
  var pc = (nv - vmin) / dv;
  var dt = tmax - tmin;
  var tv = tmin + pc * dt;
  return tv;
}

interface PlaneProps {
	position: Vertex;
	scale: Vector3;
}

function Plane({ position, scale }: PlaneProps) {
  let plane = useRef<any>();
  let { x, z } = position;
  const [y, setY] = useState(0);

  useFrame(({ mouse }) => {
    const targetY = normalize(mouse.y, -.75, 1.75, -50, 105);
    const newY = y + (targetY - y) * 0.1;
    setY(newY);
    plane.current.rotation.set((y - targetY) * 0.0064, 0, (targetY - y) * 0.0064);
  });
  return (
    <group ref={plane} position={[x, y, z]} scale={scale} >
      <CockPit />
      <Engine />
      <Tail />
      <Wing />
      <Propeller />
    </group>
  );
}

export function CockPit() {
  let r = useRef<any>();
  useEffect(() => {
		  const vertex4 = new Vector3();
		  const vertex5 = new Vector3();
		  const vertex6 = new Vector3();
		  const vertex7 = new Vector3();

		  const position = (r.current.geometry as BufferGeometry).getAttribute( 'position' );
			  
		  vertex4.fromBufferAttribute( position, 4 );
		  vertex5.fromBufferAttribute( position, 5 );
		  vertex6.fromBufferAttribute( position, 6 );
		  vertex7.fromBufferAttribute( position, 7 );
	  
		  position.setXYZ( 4, vertex4.x, vertex4.y - 10, vertex4.z + 20 );
		  position.setXYZ( 5, vertex5.x, vertex5.y - 10, vertex5.z - 10 );
		  position.setXYZ( 6, vertex6.x, vertex6.y + 30, vertex6.z + 20 );
		  position.setXYZ( 7, vertex6.x, vertex6.y + 30, vertex6.z - 20 );
	  
		  r.current.geometry.attributes.position = position;
  }, []);

  return (
    <mesh castShadow receiveShadow ref={r}>
      <boxGeometry attach="geometry" args={[60, 50, 50, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={Colors.blue} flatShading />
    </mesh>
  );
}

function Engine() {
  return (
    <mesh position-x={40} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[20, 50, 50, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={Colors.white} flatShading />
    </mesh>
  );
}

function Tail() {
  return (
    <mesh position={[-35, 25, 0]} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[15, 20, 5, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={Colors.blue} flatShading />
    </mesh>
  );
}

function Wing() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[40, 8, 150, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={Colors.blue} flatShading />
    </mesh>
  );
}

function Propeller() {
  return (
    <mesh position-x={50} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[20, 10, 10, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial attach="material" color={Colors.brown} flatShading />
      <Blades />
    </mesh>
  );
}

function Blades() {
  let r = useRef<any>();
  useFrame(() => {
    r.current.rotation.x += 0.8;
  });

  return (
    <mesh position-x={6} castShadow receiveShadow ref={r}>
      <boxGeometry attach="geometry" args={[1, 100, 13, 1, 1, 1]}></boxGeometry>
      <meshPhongMaterial
        attach="material"
        color={Colors.brownDark}
        flatShading
      />
    </mesh>
  );
}
export default Plane;
