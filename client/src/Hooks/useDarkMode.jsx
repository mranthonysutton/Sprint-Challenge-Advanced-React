import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // Set the key to "dark_mode" so that it makes more sense in the DOM
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
