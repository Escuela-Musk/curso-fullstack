import React, { useState, useCallback } from "react";

const Child = React.memo(({ onAdd }) => {
  console.log("👶 Renderizado <Child />");

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <h3>Componente hijo</h3>
      <button onClick={onAdd}>Añadir +1</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Child onAdd={handleAdd} />
    </div>
  );
}

export default App;
