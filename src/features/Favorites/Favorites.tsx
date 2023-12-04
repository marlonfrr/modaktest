import React from 'react';
import {useAppSelector} from '../../store/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import GalleryList from '../../common/GalleryList';
import {Text, View} from 'react-native';
import styles from './styles';
import {useLocalization} from '../../localization/useLocalization';
import {useTheme} from '@react-navigation/native';
import Header from '../../common/Header';

const Favorites = () => {
  const favs = useAppSelector(state => state.favorites.favorites);
  const {t} = useLocalization();
  const colors = useTheme().colors;

  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: colors.themeColor}]}>
      <Header title={t['favorites.title']} />

      {favs.length === 0 ? (
        <View style={styles.noFavoritesContainer}>
          <Text>{t['favorites.noFavoritesYet']}</Text>
        </View>
      ) : (
        <GalleryList artworks={favs} />
      )}
    </SafeAreaView>
  );
};

export default Favorites;
