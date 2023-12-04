import {Dimensions, Platform} from 'react-native';

const h: number = Dimensions.get('window').height;
const w: number = Dimensions.get('window').width;
const hp = (percent: number): number =>
  (Dimensions.get('window').height / 100) * percent;
const wp = (percent: number): number =>
  (Dimensions.get('window').width / 100) * percent;
const isIOS: boolean = Platform.OS === 'ios';
const isAndroid: boolean = Platform.OS === 'android';

export const ds = {
  h,
  w,
  hp,
  wp,
  isIOS,
  isAndroid,
};
