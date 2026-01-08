import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
      }}
    >
      <h1>Context demo</h1>
      <button onClick={toggleTheme}>
        Preklopi na {theme === "light" ? "dark" : "light"}
      </button>
    </header>
  );
}
