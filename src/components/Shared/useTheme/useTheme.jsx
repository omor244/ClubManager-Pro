import { useEffect, useState } from "react";

export const useTheme = () => {
    // Initialize from localStorage or default to light
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};

export default useTheme