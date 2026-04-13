// src/hooks/useAccentColor.js
import { useState, useEffect } from "react";

export const COLOR_THEMES = [
  { name: "Indigo",  hex: "#5f6fff", light: "#eef0ff" },
  { name: "Violet",  hex: "#7c3aed", light: "#f5f0ff" },
  { name: "Sky",     hex: "#0ea5e9", light: "#e8f6fe" },
  { name: "Teal",    hex: "#0d9488", light: "#e0fafa" },
  { name: "Emerald", hex: "#059669", light: "#e4fdf0" },
  { name: "Amber",   hex: "#d97706", light: "#fef9ed" },
  { name: "Coral",   hex: "#e05040", light: "#fdecea" },
  { name: "Pink",    hex: "#db2777", light: "#fce8f3" },
];

export const useAccentColor = () => {
  const [accent, setAccent] = useState(
    () => JSON.parse(localStorage.getItem("accent") || "null") || COLOR_THEMES[0]
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", accent.hex);
    document.documentElement.style.setProperty("--primary-light", accent.light);
    localStorage.setItem("accent", JSON.stringify(accent));
  }, [accent]);

  return { accent, setAccent };
};