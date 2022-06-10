import { ReactThreeFiber } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

declare global {
	namespace JSX {
	  interface IntrinsicElements {
		orbitControls: ReactThreeFiber.Object3DNode<
		  OrbitControls,
		  typeof OrbitControls
		>;
	  }
	}
  }
export type MeshRef = Mesh<BufferGeometry, Material | Material[]>;

export interface SkyProps {
	position: Vector3;
	rotationSpeed: number;
  }
  
export interface CloudProps {
	position: Vector3;
	rotationZ?: number;
}

export interface PlaneProps {
	position: Vertex;
	scale: Vector3;
}

export interface SeaProps {
	position: Vector3;
	rotationSpeed: number;
}

export interface Vertex {
	x: number;
	y: number;
	z: number;
}

export type GLTFResult = GLTF & {
	nodes: {
	  Coffee_Cup: THREE.Mesh;
	};
	materials: {};
  };