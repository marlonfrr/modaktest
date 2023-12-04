import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Artwork} from '../../../store/slices/types';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import {AppNavigationProp} from '../../../navigation/NavigatorParamsList';
import {useLocalization} from '../../../localization/useLocalization';
import styles from './styles';
import {removeHtmlTags} from '../../../utils/removeHtmlTags';

interface Props {
  artwork: Artwork;
}

const ArtworkCard = ({artwork}: Props) => {
  const {t} = useLocalization();
  const colors = useTheme().colors;
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.card}]}
      onPress={() => {
        navigation.navigate(Routes.ArtworkDetail, {artwork});
      }}>
      <View>
        <View style={styles.thumbnailContainer}>
          {artwork.thumbnail && (
            <Image
              source={{
                uri: artwork.thumbnail.lqip,
              }}
              style={styles.thumbnail}
            />
          )}
        </View>
        <Text style={[styles.titleText, {color: colors.text}]}>
          {t['artworkCard.tapToReveal']}
        </Text>
      </View>
      <View style={styles.flex1}>
        <Text style={[styles.titleText, {color: colors.text}]}>
          {artwork.id}
        </Text>
        <Text style={[styles.titleText, {color: colors.text}]}>
          {artwork.title}
        </Text>
        <Text numberOfLines={3} style={[styles.flex1, {color: colors.text}]}>
          {artwork.description
            ? // Move this logic to model to store the description without html tags
              removeHtmlTags(artwork.description)
            : t['artworkCard.noDescription']}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtworkCard;
