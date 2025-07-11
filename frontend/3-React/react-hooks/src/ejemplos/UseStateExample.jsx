import React from "react";

export default function UseStateExample() {
  const [count, setCount] = React.useState(0);
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
        <h2>useState</h2>
        <button onClick={() => (window.location.href = "/")}>
          Volver a la tabla de contenido
        </button>
        <p>Valor: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    </div>
  );
}
