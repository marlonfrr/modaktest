import {StyleSheet} from 'react-native';
import {ds} from '../../../utils/ds';
import Measures from '../../../utils/measures';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: Measures.spacing[12],
    marginHorizontal: Measures.spacing[16],
    marginVertical: Measures.spacing[8],
    borderRadius: Measures.spacing[12],
    flexDirection: 'row',
    alignItems: 'center',
    height: ds.h / 6,
  },
  flex1: {flex: 1},
  thumbnailContainerUpper: {alignItems: 'center', justifyContent: 'center'},
  thumbnailContainer: {
    width: Measures.spacing[100],
    height: Measures.spacing[100],
    marginRight: Measures.spacing[12],
  },
  thumbnail: {
    flex: 1,
    borderRadius: Measures.spacing[52],
  },
  revealText: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: Measures.spacing[24],
    left: Measures.spacing[36],
  },
  descriptionText: {
    fontWeight: 'bold',
    color: 'white',
  },
  loadingGalleryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButtonContainer: {
    padding: Measures.spacing[8],
    borderRadius: Measures.spacing[4],
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
    marginVertical: Measures.spacing[8],
  },
});
