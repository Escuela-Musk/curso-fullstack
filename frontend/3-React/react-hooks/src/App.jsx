import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import UseStateExample from "./ejemplos/UseStateExample.jsx";
import UseEffectExample from "./ejemplos/UseEffectExample.jsx";
import UseRefExample from "./ejemplos/UseRefExample.jsx";
import UseMemoExample from "./ejemplos/UseMemoExample.jsx";
import UseCallbackExample from "./ejemplos/UseCallbackExample.jsx";
import UseReducerExample from "./ejemplos/UseReducerExample.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseStateExample />} />
        <Route path="/use-effect" element={<UseEffectExample />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        <Route path="/use-memo" element={<UseMemoExample />} />
        <Route path="/use-callback" element={<UseCallbackExample />} />
        <Route path="/use-reducer" element={<UseReducerExample />} />
      </Routes>
    </Router>
  );
}

export default App;
