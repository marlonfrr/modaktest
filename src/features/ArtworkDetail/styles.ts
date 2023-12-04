import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollcontainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  titleText: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 8,
    right: 4,
  },
});
