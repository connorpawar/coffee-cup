import { Colors } from "@Colors";

export const Wing = () => {
	return (
	  <mesh castShadow receiveShadow>
		<boxGeometry attach="geometry" args={[40, 8, 150, 1, 1, 1]}></boxGeometry>
		<meshPhongMaterial attach="material" color={Colors.blue} flatShading />
	  </mesh>
	);
  };