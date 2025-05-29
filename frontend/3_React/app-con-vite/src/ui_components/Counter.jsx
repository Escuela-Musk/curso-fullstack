import { useEffect, useState } from "react";

export default function Counter({ initNum = 0 }) {
  const [num, setNum] = useState(initNum);

  useEffect(() => {
    console.log("Counter montado");
    return () => {
      console.log("Counter Desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("Componente actualizado", num);
    return () => {
      console.log("Counter num Desmontado", num);
    };
  }, [num]);

  useEffect(() => {
    console.log("Counter renderizado");
  });

  return (
    <>
      <button onClick={() => setNum((prev) => prev + 1)}>count is {num}</button>
    </>
  );
}
