import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../store/hooks';
import useGalleryData from './useGalleryData';
import {SafeAreaView} from 'react-native-safe-area-context';
import GalleryList from '../../common/GalleryList';
import {useAppDispatch} from '../../store/hooks';
import {getArtworksRequest} from '../../store/slices/gallerySlice';
import LoadingGallery from './components/LoadingGallery';
import styles from './styles';
import ErrorGallery from './components/ErrorGallery';
import LanguagePicker from './components/LanguagePicker';
import {useTheme} from '@react-navigation/native';
import {useLocalization} from '../../localization/useLocalization';
import Header from '../../common/Header';

const GalleryScreen = () => {
  const colors = useTheme().colors;
  const {getArtworks} = useGalleryData();
  const artworks = useAppSelector(state => state.gallery.artworks);
  const error = useAppSelector(state => state.gallery.error);
  const listEndError = useAppSelector(state => state.gallery.listEndError);
  const loading = useAppSelector(state => state.gallery.loading);
  const loadingMore = useAppSelector(state => state.gallery.loadingMore);
  const {t} = useLocalization();
  const [localPage, setLocalPage] = React.useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getArtworks(1);
  }, []);

  useEffect(() => {
    if (!loading && !loadingMore && localPage > 1) {
      dispatch(getArtworksRequest(localPage));
      getArtworks(localPage);
    }
  }, [localPage]);

  return (
    <SafeAreaView
      style={[styles.flex1, {backgroundColor: colors.themeColor}]}
      edges={['top', 'left', 'right']}>
      <Header
        title={t['gallery.title']}
        children={<LanguagePicker languages={['es', 'en']} />}
      />
      {loading ? (
        <LoadingGallery />
      ) : error && !listEndError ? (
        <ErrorGallery />
      ) : (
        <GalleryList
          artworks={artworks}
          onEndReached={() => {
            setLocalPage(localPage + 1);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default GalleryScreen;
