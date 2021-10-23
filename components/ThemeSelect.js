import React, { useState } from "react";
import styles from "./ThemeSelect.module.css";

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
  const [selected, setSelected] = useState(THEME_OPTIONS[0].key);

  return (
    <div className={styles.themeSelectContainer}>
      {THEME_OPTIONS.map((theme) => (
        <div className={styles.themeSelectBox}>
          <input
            type="radio"
            name="theme"
            value={theme.key}
            className={styles.themeSelectItem}
            checked={selected === theme.key}
            onChange={(e) => setSelected(theme.key)}
          />
          <label htmlFor={theme.key} className={styles.themeSelectLabel}>
            {theme.value}
          </label>
        </div>
      ))}
    </div>
  );
};
