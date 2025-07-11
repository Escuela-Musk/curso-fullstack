import { useEffect, useState } from "react";

export default function Clock() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      console.log("clock");

      setHora(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <p>
      <h2>{hora.toLocaleTimeString()}</h2>
    </p>
  );
}
