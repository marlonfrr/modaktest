import {StyleSheet} from 'react-native';
import {ds} from '../../../utils/ds';
import Measures from '../../../utils/measures';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: ds.h / 6,
  },
  flex1: {flex: 1},
  thumbnailContainer: {
    width: 80,
    height: 80,
    marginRight: Measures.spacing[12],
  },
  thumbnail: {
    flex: 1,
    borderRadius: 40,
  },
  titleText: {fontWeight: 'bold', color: 'white'},
  loadingGalleryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButtonContainer: {
    padding: 8,
    borderRadius: 4,
  },
  languageButtonSelected: {
    backgroundColor: 'lightgrey',
  },
  pickLanguageRow: {flexDirection: 'row', alignItems: 'center'},
  pickLanguageText: {fontWeight: 'bold'},
  languageButtonText: {fontWeight: 'bold'},
  loadingMoreContainer: {paddingVertical: Measures.spacing[8]},
  listEndErrorText: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
