import { GoMoon, GoSun } from "react-icons/go";
import { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="rounded-full border-[2px] border-black dark:border-white h-[2.5rem] w-[2.5rem] mr-4 overflow-hidden relative"
      >
        <div
          className={`flex w-[200%] justify-around absolute top-[50%] translate-y-[-50%] transition-transform duration-300 ${
            isDark ? "translate-x-[-50%]" : "translate-x-0"
          }`}
        >
          <GoSun className="text-2xl" />
          <GoMoon className="text-2xl" />
        </div>
      </button>
    </div>
  );
};

export default DarkMode;
