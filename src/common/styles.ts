import {StyleSheet} from 'react-native';
import Measures from '../utils/measures';

export default StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: Measures.spacing[40],
    left: Measures.spacing[20],
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Measures.spacing[20],
    paddingVertical: Measures.spacing[16],
    backgroundColor: '#fff',
    height: Measures.spacing[64],
  },
  title: {fontSize: 16, fontWeight: 'bold'},
});
