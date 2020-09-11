import { useLocalStorage } from "./MyCompo";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage();

  useEffect(() => {
    values
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [values]);
  return [values, setValues];
};
