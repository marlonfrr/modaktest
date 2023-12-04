import React, {createContext, useEffect, useState} from 'react';
import LocalizedStrings from 'react-native-localization';

import es from './es.json';
import en from './en.json';
const DEFAULT_LANGUAGE = 'es';
const languages = {es, en};
const translations = new LocalizedStrings(languages);

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: (language: string) => {},
  appLanguage: DEFAULT_LANGUAGE,
});
export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = language => {
    translations.setLanguage(language);
    setAppLanguage(language);
  };

  useEffect(() => {
    const initializeAppLanguage = async () => {
      setLanguage(DEFAULT_LANGUAGE);
    };
    initializeAppLanguage();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
