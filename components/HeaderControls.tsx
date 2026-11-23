"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";

type Theme = "dark" | "light";
const sectionIds = navigation.map(([, href]) => href.slice(1));

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#10171b" : "#f3f2ec");
}

export function HeaderControls() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeHref, setActiveHref] = useState<string>(navigation[0][1]);

  useEffect(() => {
    const initial = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const marker = headerHeight + Math.min(window.innerHeight * 0.2, 160);
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section || section.getBoundingClientRect().top > marker) break;
        currentId = id;
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveHref(`#${currentId}`);
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
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
        {navigation.map(([label, href]) => <a aria-current={activeHref === href ? "location" : undefined} className={activeHref === href ? "is-active" : undefined} href={href} key={href} onClick={() => { setActiveHref(href); setMenuOpen(false); }}>{label}</a>)}
      </nav>
      <button aria-label={themeLabel} className="theme-toggle" onClick={toggleTheme} title={themeLabel} type="button">
        <span aria-hidden="true" className="theme-icon">{destination === "light" ? "☀" : "☾"}</span>
        <span className="theme-label">{destination === "light" ? "Light" : "Dark"}</span>
      </button>
    </>
  );
}
