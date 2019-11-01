import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode__toggle">
      <div
        onClick={toggleDarkMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
};

export default DarkModeToggler;
