import {NavigationProp} from '@react-navigation/native';
import {Artwork} from '../store/slices/types';

export type NavigatorParamsList = {
  Home: undefined;
  ArtworkDetail: {artwork: Artwork};
};

export type AppNavigationProp = NavigationProp<NavigatorParamsList>;
