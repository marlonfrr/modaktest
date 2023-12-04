import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useLocalization} from '../../../localization/useLocalization';
import {useTheme} from '@react-navigation/native';

const ErrorGallery = () => {
  const {t} = useLocalization();
  const colors = useTheme().colors;
  return (
    <View style={styles.loadingGalleryContainer}>
      <Text style={{color: colors.text}}>{t['gallery.errorLoading']}</Text>
    </View>
  );
};

export default ErrorGallery;
