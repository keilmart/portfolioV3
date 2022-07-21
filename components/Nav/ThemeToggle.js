import { DarkMoon, LightSun } from "./NavIcons/Index";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      type="button"
      role="checkbox"
      onClick={toggleTheme}
      className="relative inline-flex w-12 transition-colors duration-500 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer dark:bg-gray-700 shrink-0 h-7 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span
        className={`${
          theme == "dark" ? "toggle-active" : ""
        } relative inline-block w-6 h-6 transition duration-200 ease-in-out bg-white rounded-full shadow pointer-events-none dark:bg-darkMode ring-0`}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 transition-opacity -rotate-[30deg] svg-icon">
          {theme == "dark" ? (
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
