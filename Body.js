import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Body() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#ddd",
        padding: "2rem",
      }}
    >
      <p>Tudi ta del se spremeni ob preklopu teme.</p>
    </main>
  );
}
