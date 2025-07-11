import { useState } from "react";
import Corazones from "./Corazones";
import Grid from "./Grid";

function App() {
  const [corazones, setCorazones] = useState(3);
  const [puntos, setPuntos] = useState(0);

  const incrementarPuntos = () => setPuntos((prev) => prev + 1);
  const perderVida = () => setCorazones((prev) => prev - 1);

  const reiniciar = () => {
    setCorazones(3);
    setPuntos(0);
  };

  return (
    <>
      <header className="border-8 border-green-500 rounded-4xl text-white p-4 text-center mb-16">
        <h1 className="text-2xl font-bold">Topos Game</h1>
        <br />
        <br />
        <p className="text-2xl">Puntos: {puntos}</p>
        <Corazones maxCorazones={3} numCorazones={corazones} />
        {corazones}
      </header>
      <div className="w-dvw">
        {corazones === 0 && (
          <div className="flex flex-col items-center">
            <div className="text-center text-2xl font-bold text-red-500">
              Has perdido.
            </div>
            <button
              className="border-8 border-green-500 bg-green-300 text-slate-800 font-bold rounded-2xl text-2xl w-fit mt-4 px-6 py-2"
              onClick={reiniciar}
            >
              Reiniciar
            </button>
          </div>
        )}
        {corazones > 0 && (
          <Grid
            onSuccessfulWhack={incrementarPuntos}
            onFailure={perderVida}
            cols={5}
            rows={5}
          />
        )}
      </div>
    </>
  );
}

export default App;
