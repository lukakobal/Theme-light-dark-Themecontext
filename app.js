import ThemeProvider from "./ThemeProvider";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
  );
}
