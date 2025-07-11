import "./App.css";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeContext";
import { ThemeToggler } from "./components/ThemeToggler";

function App() {
  return (
    <ThemeProvider>
      <Header title="My App" />
      <ThemeToggler />
    </ThemeProvider>
  );
}

export default App;
