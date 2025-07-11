import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [lifecycle, setLifecycle] = useState([""]);

  // Efecto que se ejecuta solo al montar y desmontar
  useEffect(() => {
    console.log("[MOUNT] El componente se ha montado");
    setLifecycle((prev) => [...prev, "Componente montado"]);
    return () => {
      console.log("[UNMOUNT] El componente se va a desmontar");
      // No se puede mostrar en pantalla tras el desmontaje, solo log
    };
  }, []);

  // Efecto que se ejecuta en cada actualización de count
  useEffect(() => {
    setMessage(`El contador está en ${count}`);
    if (count > 0) {
      setLifecycle((prev) => [...prev, `Actualización: count = ${count}`]);
      console.log(`[UPDATE] El contador cambió a ${count}`);
    }
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">useEffect y ciclo de vida</h2>
        <p className="mb-4">{message}</p>
        <div className="flex gap-4 mb-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => setCount(count + 1)}
          >
            Incrementar
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
            onClick={() => (window.location.href = "/")}
          >
            Volver a la tabla de contenido
          </button>
        </div>
        <h4 className="text-lg font-semibold mb-2">Eventos del ciclo de vida:</h4>
        <ul className="list-disc list-inside mb-4">
          {lifecycle.filter(Boolean).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">
          Abre la consola para ver los logs de montaje, actualización y desmontaje.
        </p>
      </div>
    </div>
  );
}
