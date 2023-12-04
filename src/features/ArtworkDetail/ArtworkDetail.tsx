import {Alert, Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getFullImageUrl} from '../../utils/images';
import FilledHeart from '../../assets/icons/FilledHeart.svg';
import EmptyHeart from '../../assets/icons/EmptyHeart.svg';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {addFavorite, removeFavorite} from '../../store/slices/favoritesSlice';
import styles from './styles';
import Measures from '../../utils/measures';
import {useLocalization} from '../../localization/useLocalization';
import {removeHtmlTags} from '../../utils/removeHtmlTags';
import BackButton from '../../common/BackButton';

const ArtworkDetail = ({_, route}) => {
  const dispatch = useAppDispatch();
  const {artwork} = route.params;
  const colors = useTheme().colors;
  const isCurrentFavorite = useAppSelector(
    state => state.favorites.favorites,
  ).some(favorite => favorite.id === artwork.id);
  const {t} = useLocalization();

  const opacity = useSharedValue(0);

  const animationConfig = {
    dampingRatio: 0.5,
    stiffness: 80,
    duration: 2000,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value, animationConfig),
    };
  });

  React.useEffect(() => {
    opacity.value = 1;
  }, []);

  return (
    <SafeAreaView
      edges={['right', 'left']}
      style={[styles.container, {backgroundColor: colors.themeColor}]}>
      <View>
        <Image
          source={{
            uri: getFullImageUrl(route.params?.artwork.image_id),
          }}
          style={styles.image}
        />
        {isCurrentFavorite ? (
          <FilledHeart
            onPress={() => {
              dispatch(removeFavorite(artwork));
              Alert.alert(t['artworkDetail.removedFromFavorites']);
            }}
            style={styles.favoriteIcon}
            fill={'#FF0000'}
            width={Measures.icon.xlarge}
            height={Measures.icon.xlarge}
          />
        ) : (
          <EmptyHeart
            onPress={() => {
              dispatch(addFavorite(artwork));
              Alert.alert(t['artworkDetail.addedToFavorites']);
            }}
            style={styles.favoriteIcon}
            width={Measures.icon.xlarge}
            height={Measures.icon.xlarge}
          />
        )}
      </View>

      <ScrollView alwaysBounceVertical={false}>
        <Animated.View style={[styles.scrollcontainer, animatedStyle]}>
          <Text style={[styles.titleText, {color: colors.text}]}>
            {artwork.title}
          </Text>
          <Text style={{color: colors.text}}>
            {removeHtmlTags(artwork.description)}
          </Text>
          <Text style={{color: colors.text}}>{artwork.artist_display}</Text>
        </Animated.View>
      </ScrollView>

      <BackButton />
    </SafeAreaView>
  );
};

export default ArtworkDetail;
