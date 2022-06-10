import { Colors } from "../../lib/colors";

export const Engine = () => {
	return (
	  <mesh position-x={40} castShadow receiveShadow>
		<boxGeometry attach="geometry" args={[20, 50, 50, 1, 1, 1]}></boxGeometry>
		<meshPhongMaterial attach="material" color={Colors.white} flatShading />
	  </mesh>
	);
  };