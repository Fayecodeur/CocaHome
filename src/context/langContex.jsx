import { useState, createContext } from "react";

export const Context = createContext();

const languages = ["FR", "EN", "ES"];

let browserLanguage = navigator.language.slice(0, 2).toUpperCase();
if (!languages.includes(browserLanguage)) {
  browserLanguage = "EN";
}

const ContextProvider = (props) => {
  const [lang, setLang] = useState(browserLanguage);

  const toggleLang = (changeLang) => {
    setLang(changeLang);
  };

  return (
    <Context.Provider value={{ lang, toggleLang }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
