import { useRef } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Vector3 } from "three";
import Plane from "./plane";
import { Sea, Sky } from "./terrain";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<any>();
  useFrame((state) => {
    controls.current.update();
  });
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      minDistance={250}
      maxDistance={250}
    />
  );
};

const rotationSpeed = 0.01;
const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 190] }}>
      <CameraControls />
      <ambientLight color={0xdc8874} intensity={0.7} />
      <hemisphereLight groundColor={0x000000} intensity={0.42} />
      <directionalLight
        castShadow
        color="white"
        intensity={0.67}
        position={[90, 300, -50]}
        shadow-camera-near={1}
        shadow-camera-far={1000}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
      />
      <pointLight intensity={0.3} position={[140, -25, 0]} />
      <fog attach="fog" args={[0xf7d9aa, 20, 550]} />
      <Sea position={new Vector3(0, -300, 0)} rotationSpeed={rotationSpeed} />
      <Plane
        scale={new Vector3(0.25, 0.25, 0.25)}
        position={{ x: -5, y: 0, z: 0 }}
      />
      <Sky
        position={new Vector3(-5, -250, -100)}
        rotationSpeed={rotationSpeed}
      />
    </Canvas>
  );
};

export default Scene;
