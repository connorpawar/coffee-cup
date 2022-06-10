import { Colors } from "@Colors";

export const Tail = () => {
	return (
	  <mesh position={[-35, 25, 0]} castShadow receiveShadow>
		<boxGeometry attach="geometry" args={[15, 20, 5, 1, 1, 1]}></boxGeometry>
		<meshPhongMaterial attach="material" color={Colors.blue} flatShading />
	  </mesh>
	);
  };