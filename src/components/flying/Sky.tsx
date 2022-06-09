import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Colors } from "./Colors";
import { Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const n = 20;
var stepAngle = (Math.PI * 2) / n;

interface SkyProps {
	position: Vector3;
	rotationSpeed: number;
}

interface CloudProps {
	position: Vector3;
	rotationZ?: number;
}

export default function Sky({ position, rotationSpeed }: SkyProps) {
  const r = useRef<any>();
  useFrame(() => {
    r.current.rotation.z += rotationSpeed;
  });
  return (
    <group position={position} ref={r}>
      {new Array(n).fill(0).map((_, i) => {
        let angle = stepAngle * i;
        // distance from center
        let h = 300 + Math.random() * 80;
        let position = new Vector3(
          Math.cos(angle) * h,
          Math.sin(angle) * h,
          Math.random() * 100
		);
        return <Cloud key={i} position={position} />;
      })}
    </group>
  );
}

type GLTFResult = GLTF & {
	nodes: {
	  Coffee_Cup: THREE.Mesh;
	};
	materials: {};
  };

function Cloud({ position, rotationZ }: CloudProps) {
  let nBlocs = 2 + Math.floor(Math.random() * 3);
  const { nodes } = useGLTF("./cup.gltf") as unknown as GLTFResult;
  return (
    <group position={position} rotation-z={rotationZ}>
      {new Array(nBlocs).fill(0).map((_, i) => {
        let pos = new Vector3(i * 15, Math.random() * 20, Math.random() * 20);
        let rotationX = Math.random() * Math.PI * 2;
        let rotationY = Math.random() * Math.PI * 2;
        let s = 200 + Math.random() * 0.7;
        return (
          <mesh
            receiveShadow
            position={pos}
			geometry={nodes.Coffee_Cup.geometry}
            rotation-x={rotationX}
            rotation-y={rotationY}
            scale={[s, s, s]}
            key={i}
          >
            <meshPhongMaterial
              attach="material"
              color={Colors.cloudWhite}
              flatShading
            />
          </mesh>
        );
      })}
    </group>
  );
}
