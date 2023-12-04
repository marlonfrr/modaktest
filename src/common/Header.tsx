import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const Header = ({children, title}: Props) => {
  const colors = useTheme().colors;
  return (
    <View style={[styles.headerContainer, {backgroundColor: colors.card}]}>
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      {children}
    </View>
  );
};

export default Header;
