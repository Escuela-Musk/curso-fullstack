import React, { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>useMemo</h2>
        <p>Contador: {count}</p>
        <p>Doble: {double}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe algo..."
        />
        <button onClick={() => (window.location.href = "/")}>
          Volver a la tabla de contenido
        </button>
      </div>
    </div>
  );
}
