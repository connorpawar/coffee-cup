import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshRef } from "@Types";
import { Colors } from "@Colors";

export const Blades = () => {
	let r = useRef<MeshRef>({} as MeshRef);
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
  };