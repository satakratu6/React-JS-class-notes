import React, { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext();

const Activity2 = () => {
  return (
    <ThemeProvider>
      <Counter />
    </ThemeProvider>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          height: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(`Counter value: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "light" : "dark"} mode
      </button>
    </div>
  );
};

export default Activity2;
