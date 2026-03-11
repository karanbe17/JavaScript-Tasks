import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

function ThemedBox() {
  const theme = useContext(ThemeContext);

  return(
    <div>
      <p> I am Child Component! </p>
      <p>Current theme: {theme}</p>
    </div>
  )
}

function ThemeViewer() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h2> Exercise 4 - useContext </h2>
      <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>
        Toggle Button
      </button>

      <ThemeContext.Provider value = {theme}>
        <ThemedBox />
      </ThemeContext.Provider>
    </div>
  )
}


export default ThemeViewer;


