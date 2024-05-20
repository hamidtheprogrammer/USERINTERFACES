import { createContext, useState } from "react";
import { heroBackground } from "../constants";

export const backgroundContext = createContext(null);

export default function ChangeBackground({ children }) {
  const [counter, setCounter] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(0.3);
  const [background, setBackground] = useState(heroBackground[counter]);

  const changeBg = (bg) => {
    setBgOpacity(bg);
  };

  setInterval(() => {
    setBackground(heroBackground[counter]);
    setCounter((prevCounter) => (prevCounter + 1) % heroBackground.length);
  }, 5000);

  return (
    <backgroundContext.Provider
      value={{ background, setBackground, bgOpacity, changeBg }}
    >
      {children}
    </backgroundContext.Provider>
  );
}
