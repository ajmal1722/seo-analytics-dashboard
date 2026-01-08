export type Theme = "light" | "dark";

export function getTheme(): Theme {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

export function setTheme(theme: Theme) {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
}

export function toggleTheme() {
    setTheme(getTheme() === "dark" ? "light" : "dark");
}
