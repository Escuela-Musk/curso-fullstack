import { useTheme } from "./ThemeContext";

export function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "20px",
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}
