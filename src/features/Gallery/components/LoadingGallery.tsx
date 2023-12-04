import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './styles';

const LoadingGallery = () => {
  return (
    <View style={styles.loadingGalleryContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoadingGallery;
