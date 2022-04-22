import React from "react";
import { useGLTF } from '@react-three/drei'
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Coffee_Cup: THREE.Mesh;
  };
  materials: {};
};

export const CoffeeCup = () => {
    const { nodes } = useGLTF("./cup.gltf") as unknown as GLTFResult;
    return (
      <group dispose={null}>
        <group name="Scene">
          <mesh
            name="Coffee_Cup"
            castShadow
            receiveShadow
            geometry={nodes.Coffee_Cup.geometry}
            material={nodes.Coffee_Cup.material}
            userData={{ name: "Coffee Cup" }}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("./cup.gltf");