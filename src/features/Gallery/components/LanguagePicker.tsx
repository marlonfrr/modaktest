import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useLocalization} from '../../../localization/useLocalization';
import {useTheme} from '@react-navigation/native';

interface Props {
  languages: string[];
}

const LanguagePicker = ({languages}: Props) => {
  const {t, setAppLanguage, language} = useLocalization();
  const colors = useTheme().colors;
  return (
    <View style={styles.pickLanguageRow}>
      <Text style={[styles.pickLanguageText, {color: colors.text}]}>
        {t['gallery.languagePicker.pickLanguage']}:{/* {language}: */}
      </Text>
      {languages.map(lang => {
        return (
          <TouchableOpacity
            key={lang}
            onPress={() => {
              setAppLanguage(lang);
            }}
            style={[
              styles.languageButtonContainer,
              language === lang && styles.languageButtonSelected,
            ]}>
            <Text style={[styles.languageButtonText, {color: colors.text}]}>
              {lang.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguagePicker;
