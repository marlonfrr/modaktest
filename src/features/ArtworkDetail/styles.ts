import {StyleSheet} from 'react-native';
import Measures from '../../utils/measures';
import {ds} from '../../utils/ds';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollcontainer: {
    flex: 1,
    paddingHorizontal: Measures.spacing[12],
    paddingVertical: Measures.spacing[24],
  },
  titleText: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: ds.h / 2,
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: Measures.spacing[8],
    right: Measures.spacing[4],
  },
  subtitles: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: Measures.spacing[4],
    marginTop: Measures.spacing[8],
  },
});
