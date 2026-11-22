"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#10171b" : "#f3f2ec");
}

export function HeaderControls() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const destination = theme === "dark" ? "light" : "dark";
  const themeLabel = `Switch to ${destination} theme`;

  function toggleTheme() {
    const next = destination;
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem("portfolio-theme-preference", next); } catch { /* Storage is optional. */ }
  }

  return (
    <>
      <button aria-controls="main-navigation" aria-expanded={menuOpen} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">
        {menuOpen ? "Close" : "Menu"}
      </button>
      <nav aria-label="Main navigation" className={`header-nav${menuOpen ? " is-open" : ""}`} id="main-navigation">
        {navigation.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <button aria-label={themeLabel} className="theme-toggle" onClick={toggleTheme} title={themeLabel} type="button">
        <span aria-hidden="true" className="theme-icon">{destination === "light" ? "☀" : "☾"}</span>
        <span className="theme-label">{destination === "light" ? "Light" : "Dark"}</span>
      </button>
    </>
  );
}
