import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import ArtworkCard from '../features/Gallery/components/ArtworkCard';
import {Artwork} from '../store/slices/types';
import FooterGallery from '../features/Gallery/components/FooterGallery';

interface Props {
  artworks: Artwork[];
  onEndReached?: () => void;
}

const GalleryList = ({artworks, onEndReached}: Props) => {
  const renderItem = useCallback(
    ({item}) => <ArtworkCard artwork={item} />,
    [],
  );
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <FlatList
      data={artworks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.01}
      onEndReached={onEndReached}
      ListFooterComponent={FooterGallery}
    />
  );
};

export default GalleryList;
