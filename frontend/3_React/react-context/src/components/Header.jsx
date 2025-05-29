import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export function Header({ title }) {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
  };

  return (
    <header style={style}>
      <h1>{title}</h1>
    </header>
  );
}
