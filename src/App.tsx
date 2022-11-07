import { useEffect, useState } from "react";
import Scene from "./components/Scene";

export default function App() {
  const [countdownDate] = useState(Date.now());
  const [state, setState] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      const currentTime = Date.now();
      const distanceToDate = currentTime - countdownDate;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24)).toString();
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      let seconds = Math.floor(
        (distanceToDate % (1000 * 60)) / 1000
      ).toString();

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div style={{ background: "indianred", width: "100vw", height: "100vh" }}>
      <h1
        style={{
          fontSize: "64px",
          fontFamily: "Amatic SC",
          marginTop: "0",
          textAlign: "center",
          background: "transparent",
          userSelect: "none",
        }}
      >
        TRASH - COFFEE
      </h1>
      <h2
        style={{
          fontSize: "24px",
          fontFamily: "Amatic SC",
          textAlign: "center",
          background: "transparent",
          userSelect: "none",
        }}
      >
        {`${state.days} days, ${state.hours} hours, ${state.minutes} minutes, ${state.seconds} seconds`}
      </h2>
      <Scene />
    </div>
  );
}
