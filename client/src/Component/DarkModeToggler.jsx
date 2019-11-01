import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-container">
      Dark Mode:
      <div className="dark-mode__toggle" data-testid="darkmode-toggle-tester">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </div>
  );
};

export default DarkModeToggler;
