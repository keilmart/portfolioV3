import { useState, useEffect } from "react";

import { DarkMoon, LightSun } from "./NavIcons/Index";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      type="button"
      role="switch"
      onClick={toggleTheme}
      aria-checked={theme === "dark" ? true : false}
      className="relative inline-flex w-12 transition-colors duration-500 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer dark:bg-[#313131] shrink-0 h-7 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span className="sr-only">
        Toggle {theme === "dark" ? "light" : "dark"} mode
      </span>
      <span
        className={`${
          theme === "dark" ? "toggle-light" : ""
        } relative inline-block w-6 h-6 transition duration-200 ease-in-out bg-white rounded-full shadow pointer-events-none dark:bg-syncWave ring-0`}
      >
        <span
          aria-hidden={true}
          className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity -rotate-[40deg]"
        >
          {theme === "dark" ? (
            <DarkMoon xmlns="http://www.w3.org/2000/svg" />
          ) : (
            <LightSun xmlns="http://www.w3.org/2000/svg" />
          )}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
