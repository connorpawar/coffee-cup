
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (    
      <Canvas>
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[2]} />
        <mesh>
          <boxBufferGeometry />

          <meshStandardMaterial color={0x00ff00} />
        </mesh>
        <ambientLight args={[0xffffff]} intensity={0.1} />
        <directionalLight position={[1, 2, 5]} intensity={1} />
      </Canvas>    
  );
}