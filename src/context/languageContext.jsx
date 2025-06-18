import React, { createContext, useState } from "react";

const STORAGE_KEY = "userLang";

const getInitialLang = () =>
  localStorage.getItem(STORAGE_KEY) || (navigator.language.includes('pt') ? 'pt' : 'en');

export const LanguageContext = createContext({
  language: "en",
  setLanguageContext: () => { },
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLang);

  const setLanguageContext = (lang) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguageContext }}>
      {children}
    </LanguageContext.Provider>
  );
};
