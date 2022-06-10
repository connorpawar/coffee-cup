import { useEffect, useRef } from "react";
import { BufferGeometry, Vector3 } from "three";
import { Colors } from "@Colors";
import { MeshRef } from "@Types";

export const CockPit = () => {
	let r = useRef<MeshRef>({} as MeshRef);
  
	useEffect(() => {
	  const vertex4 = new Vector3();
	  const vertex5 = new Vector3();
	  const vertex6 = new Vector3();
	  const vertex7 = new Vector3();
  
	  const position = (r.current?.geometry as BufferGeometry).getAttribute(
		"position"
	  );
  
	  vertex4.fromBufferAttribute(position, 4);
	  vertex5.fromBufferAttribute(position, 5);
	  vertex6.fromBufferAttribute(position, 6);
	  vertex7.fromBufferAttribute(position, 7);
  
	  position.setXYZ(4, vertex4.x, vertex4.y - 10, vertex4.z + 20);
	  position.setXYZ(5, vertex5.x, vertex5.y - 10, vertex5.z - 10);
	  position.setXYZ(6, vertex6.x, vertex6.y + 30, vertex6.z + 20);
	  position.setXYZ(7, vertex6.x, vertex6.y + 30, vertex6.z - 20);
  
	  if (r.current?.geometry) {
		r.current.geometry.attributes.position = position;
	  }
	}, []);
  
	return (
	  <mesh castShadow receiveShadow ref={r}>
		<boxGeometry attach="geometry" args={[60, 50, 50, 1, 1, 1]}></boxGeometry>
		<meshPhongMaterial attach="material" color={Colors.blue} flatShading />
	  </mesh>
	);
  };