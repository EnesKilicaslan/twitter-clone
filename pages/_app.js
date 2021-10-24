// pages/_app.js
import React, { useState, useLayoutEffect } from "react";
import "../styles/main.css";

import { ThemeContext } from "../store";
import { useEffect } from "react";
import { async } from "q";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();

  const onThemeChange = (theme) => {
    setTheme(theme);
  };

  useLayoutEffect(() => {
    const initTheme = localStorage.getItem("THEME") ?? "light";
    setTheme(initTheme);
  }, []);

  // save the last updated theme in localStorage
  useEffect(() => {
    if (!theme) {
      return;
    }

    const $root = document.querySelector("html");
    $root.className = theme;

    if (window) {
      localStorage.setItem("THEME", theme);
    }
  }, [theme]);

  return (
    <>
      {theme && (
        <ThemeContext.Provider value={{ theme, onThemeChange }}>
          <Component {...pageProps} />;
        </ThemeContext.Provider>
      )}
    </>
  );
}
