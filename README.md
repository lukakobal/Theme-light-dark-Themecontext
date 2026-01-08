# ⚛️ React Context API – Theme Switcher

A simple React application demonstrating how to use the **Context API** to share global state (light / dark theme) across multiple components without prop drilling.

---

## 🎯 Project Goal
- Understand **why and when to use Context API**
- Share state between components without passing props
- Update global state from one component and reflect changes everywhere

---

## 🧠 Key Concepts
- `createContext()` – create a context
- `Context.Provider` – provide shared data
- `useContext()` – consume context values
- Global state management (theme)

---

## 🧩 Project Structure
src/
├── App.js
├── ThemeContext.js
├── ThemeProvider.js
├── Header.js
├── Body.js
├── styles.css
└── index.js

yaml
Kopiraj kodo

---

## 🔁 How It Works
- `ThemeProvider` holds the `theme` state
- The Provider wraps the entire app
- `Header` and `Body` read `theme` via `useContext`
- Clicking the button updates state and re-renders all consumers

---

## ✅ Why Use Context
✔ avoids prop drilling  
✔ cleaner component structure  
✔ suitable for global data (theme, user, language)

❌ not intended for all state


https://codesandbox.io/p/sandbox/5czfdx?file=%2Fsrc%2FThemeProvider.js%3A1%2C1-17%2C1
