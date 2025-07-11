import React, { useCallback, useRef, useState } from "react";

function Child({ onAdd }) {
  // Contador de renders usando useRef para no reiniciarse
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="border border-gray-300 p-4 mt-4 rounded shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-2">Componente hijo</h3>
      <p className="mb-2 text-sm text-gray-500">
        Renders: {renderCount.current}
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={onAdd}
      >
        Añadir +1
      </button>
    </div>
  );
}

const MemoizedChild = React.memo(Child);

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">useCallback</h2>
        <h1 className="text-3xl font-bold mb-6">Contador: {count}</h1>
        <input
          type="text"
          placeholder="Escribe algo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-4 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <MemoizedChild onAdd={handleAdd} />
        <button
          className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition w-full"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Volver a la tabla de contenido
        </button>
      </div>
    </div>
  );
}
