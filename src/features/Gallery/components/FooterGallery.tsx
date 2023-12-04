import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {useLocalization} from '../../../localization/useLocalization';
import {useTheme} from '@react-navigation/native';
import {useAppSelector} from '../../../store/hooks';
import styles from './styles';

const FooterGallery = () => {
  const {t} = useLocalization();
  const colors = useTheme().colors;
  const listEndError = useAppSelector(state => state.gallery.listEndError);
  const loadingMore = useAppSelector(state => state.gallery.loadingMore);

  return (
    <View>
      {loadingMore ? (
        <View style={styles.loadingMoreContainer}>
          <ActivityIndicator size="small" />
        </View>
      ) : (
        listEndError && (
          <Text style={[styles.listEndErrorText, {color: colors.text}]}>
            {t['gallery.errorLoadingMore']}
          </Text>
        )
      )}
    </View>
  );
};

export default FooterGallery;
