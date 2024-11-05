import { GoMoon, GoSun } from "react-icons/go";

const DarkMode = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const isDarkModeActive = () => {
    return document.documentElement.classList.contains("dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="flex justify-center h-full items-center mr-3"
      >
        {isDarkModeActive() ? (
          <GoMoon className="text-3xl transition-all" />
        ) : (
          <GoSun className="text-3xl transition-all" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
