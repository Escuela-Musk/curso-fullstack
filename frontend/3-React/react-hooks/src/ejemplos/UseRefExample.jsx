import React, { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

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
        <h2>useRef</h2>
        <input ref={inputRef} type="text" placeholder="Haz click en el botón" />
        <button onClick={focusInput}>Focus input</button>
        <button onClick={() => (window.location.href = "/")}>
          Volver a la tabla de contenido
        </button>
      </div>
    </div>
  );
}
