// pages/_app.js
import { useState } from "react";
import "../styles/main.css";

import { ThemeContext } from "../store";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const onThemeChange = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    const $root = document.querySelector("html");
    $root.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onThemeChange }}>
      <Component {...pageProps} />;
    </ThemeContext.Provider>
  );
}
