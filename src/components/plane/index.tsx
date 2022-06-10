import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PlaneProps } from "@Types";
import { CockPit } from "./CockPit";
import { Engine } from "./Engine";
import { Tail } from "./Tail";
import { Wing } from "./Wing";
import { Propeller } from "./Propeller";

const normalize = (
  v: number,
  vmin: number,
  vmax: number,
  tmin: number,
  tmax: number
): number => {
  var nv = Math.max(Math.min(v, vmax), vmin);
  var dv = vmax - vmin;
  var pc = (nv - vmin) / dv;
  var dt = tmax - tmin;
  var tv = tmin + pc * dt;
  return tv;
};

const Plane = ({ position, scale }: PlaneProps) => {
  let plane = useRef<any>();
  let { x, z } = position;
  const [y, setY] = useState(0);

  useFrame(({ mouse }) => {
    const targetY = normalize(mouse.y, -0.75, 1.75, -50, 105);
    const newY = y + (targetY - y) * 0.1;
    setY(newY);
    plane.current.rotation.set(
      (y - targetY) * 0.0064,
      0,
      (targetY - y) * 0.0064
    );
  });

  return (
    <group ref={plane} position={[x, y, z]} scale={scale}>
      <CockPit />
      <Engine />
      <Tail />
      <Wing />
      <Propeller />
    </group>
  );
};

export default Plane;
