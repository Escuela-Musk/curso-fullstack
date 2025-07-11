import { useState } from "react";
import "./App.css";
import Counter from "./ui_components/Counter";
import Clock from "./ui_components/Clock";

function App() {
  const [mostrarCounter, setMostrarCounter] = useState(true);
  return (
    <div className="card">
      {mostrarCounter && <Counter />}
      <p>
        <button onClick={() => setMostrarCounter(!mostrarCounter)}>
          {mostrarCounter ? "Ocultar" : "Mostrar"}
        </button>
      </p>
      <Clock />
    </div>
  );
}

export default App;
