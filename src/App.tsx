import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stage } from "@react-three/drei";
import { CoffeeCup } from "./components/CoffeeCup";
import { Suspense, useRef } from "react";

export default function App() {
  const ref = useRef();
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref as any}
          preset="rembrandt"
          intensity={1}
          environment="warehouse"
        >
          <Float
            speed={0.25} // Animation speed, defaults to 1
            rotationIntensity={0.25} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, defaults to 1
          >
            <CoffeeCup />
          </Float>
        </Stage>
      </Suspense>
      <rectAreaLight
        args={["white", 3]}
        width={5}
        height={5}
        position={[-3, 4, 1]}
        target={[0, 0, 0]}
        visible={false}
      />
      <OrbitControls autoRotate />
      <ambientLight args={[0xffffff]} intensity={0.1} />
      <directionalLight position={[1, 2, 5]} intensity={1} />
    </Canvas>
  );
}
