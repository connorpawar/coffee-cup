import Scene from "./components/Scene";

export default function App() {
  return (
    <div style={{ background: "indianred", width: "100vw", height: "100vh" }}>
      <h1
        style={{
          fontSize: "64px",
          fontFamily: "Amatic SC",
          marginTop: "0",
          textAlign: "center",
		  background: "transparent",
        }}
      >
        TRASH - COFFEE
      </h1>
	  <Scene />
    </div>
  );
}
