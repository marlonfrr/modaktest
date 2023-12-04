import {useContext} from 'react';
import {LocalizationContext} from './Localization';

export const useLocalization = () => {
  const {appLanguage, translations, setAppLanguage} =
    useContext(LocalizationContext);
  return {
    t: translations,
    language: appLanguage,
    setAppLanguage,
  };
};
