import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Colors } from "./Colors";
import { BufferGeometry, Vector3 } from "three";

interface EarthProps {
	position: Vector3;
	rotationSpeed: number;
}

export interface Vertex {
	x: number;
	y: number;
	z: number;
}

function Earth({ position, rotationSpeed }: EarthProps) {
  let r = useRef<any>();
  useEffect(() => {
	const vertex = new Vector3();
	const position = (r.current.geometry as BufferGeometry).getAttribute( 'position' );

	for ( let i = 0; i < position.count; i ++ ) {
		vertex.fromBufferAttribute( position, i );

		vertex.y += Math.cos(Math.random() * Math.PI * 2) * (2 + Math.random() * 20);
		vertex.x += Math.cos(Math.random() * Math.PI * 2) * (2 + Math.random() * 20);	
		
		position.setXYZ( i, vertex.x, vertex.y, vertex.z );
	}

	r.current.geometry.attributes.position = position;
  });
  useFrame(() => {
    r.current.rotation.y += rotationSpeed;
  });
  return (
    <group>
      <mesh
        ref={r}
        castShadow
        receiveShadow
        position={position}
        rotation-x="1.5"
      >
        {/* <cylinderGeometry attach="geometry" args={[200, 200, 500, 30, 10]} /> */}
        {/* <cylinderGeometry attach="geometry" args={[500, 500, 1000, 40, 10]} /> */}
        <sphereGeometry attach="geometry" args={[240, 40, 10]} />
        <meshPhongMaterial
          attach="material"
          color={Colors.blue}
          transparent
          flatShading
        />
      </mesh>
    </group>
  );
}

export default Earth;
