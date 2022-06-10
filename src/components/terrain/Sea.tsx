import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Vector3 } from "three";
import { SeaProps } from "@Types";
import { Colors } from "@Colors";

const Sea = ({ position, rotationSpeed }: SeaProps) => {
  let r = useRef<any>();
  
  useEffect(() => {
    const vertex = new Vector3();
    const position = (r.current.geometry as BufferGeometry).getAttribute(
      "position"
    );
		
    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);

      vertex.y +=
        Math.cos(Math.random() * Math.PI * 2) * (2 + Math.random() * 20);
      vertex.x +=
        Math.cos(Math.random() * Math.PI * 2) * (2 + Math.random() * 20);

      position.setXYZ(i, vertex.x, vertex.y, vertex.z);
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
        <sphereGeometry attach="geometry" args={[240, 40, 10]} />
        <meshPhongMaterial
          attach="material"
          color={Colors.brown}
          transparent
          flatShading
        />
      </mesh>
    </group>
  );
}

export default Sea;
