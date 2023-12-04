import React from 'react';
import ChevronLeft from '../assets/icons/ChevronLeft.svg';
import {useNavigation} from '@react-navigation/native';
import Measures from '../utils/measures';
import styles from './styles';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <ChevronLeft
      onPress={() => {
        navigation.goBack();
      }}
      width={Measures.icon.xlarge}
      height={Measures.icon.xlarge}
      style={styles.backButton}
    />
  );
};

export default BackButton;
