import React, { useContext } from "react";
import styles from "./ThemeSelect.module.css";
import { ThemeContext } from "../store";

const THEME_OPTIONS = [
  {
    key: "light",
    value: "Light",
  },
  {
    key: "dim",
    value: "Dim",
  },
  {
    key: "dark",
    value: "Dark",
  },
];

export const ThemeSelect = () => {
  const { theme, onThemeChange } = useContext(ThemeContext);

  return (
    <div className={styles.themeSelectContainer}>
      {THEME_OPTIONS.map((themeOption) => (
        <div className={styles.themeSelectBox}>
          <input
            type="radio"
            name="theme"
            value={themeOption.key}
            id={themeOption.key}
            className={styles.themeSelectItem}
            checked={theme === themeOption.key}
            onChange={(e) => onThemeChange(themeOption.key)}
          />
          <label htmlFor={themeOption.key} className={styles.themeSelectLabel}>
            {themeOption.value}
          </label>
        </div>
      ))}
    </div>
  );
};
