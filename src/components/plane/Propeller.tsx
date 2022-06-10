import { Colors } from "@Colors";
import { Blades } from "./Blades";

export const Propeller = () => {
	return (
	  <mesh position-x={50} castShadow receiveShadow>
		<boxGeometry attach="geometry" args={[20, 10, 10, 1, 1, 1]}></boxGeometry>
		<meshPhongMaterial attach="material" color={Colors.brown} flatShading />
		<Blades />
	  </mesh>
	);
  };