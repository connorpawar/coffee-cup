import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Float,
  OrbitControls,
  Plane,
  Stage,
} from "@react-three/drei";
import { CoffeeCup } from "./components/CoffeeCup";
import { Suspense, useRef } from "react";

export default function App() {
  const ref = useRef();
  return (
    <div style={{ background: "indianred", width: "100vw", height: "100vh" }}>
      <h1
        style={{
          fontSize: "64px",
          fontFamily: "Amatic SC",
          marginTop: "0",
          textAlign: "center",
        }}
      >
        TRASH - COFFEE
      </h1>
      <Canvas shadows dpr={[1, 2]}>
        <Billboard
          scale={0.2}
          follow
          lockX
          lockY
          lockZ
          position={[0, 0, 0]}
        ></Billboard>
        <Suspense fallback={null}>
          <Stage
            controls={ref as any}
            preset="rembrandt"
            intensity={1}
            environment="warehouse"
          >
            <CoffeeCup />
          </Stage>
        </Suspense>
        <rectAreaLight
          args={["white", 3]}
          width={5}
          height={5}
          position={[-3, 4, 1]}
          visible={false}
        />
        <OrbitControls autoRotate />
        <ambientLight args={[0xffffff]} intensity={0.1} />
        <directionalLight position={[1, 2, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
