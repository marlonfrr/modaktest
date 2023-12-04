import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GalleryScreen from '../features/Gallery/GalleryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';
import ArtworkDetail from '../features/ArtworkDetail/ArtworkDetail';
import {NavigatorParamsList} from './NavigatorParamsList';
import Favorites from '../features/Favorites/Favorites';
import {useColorScheme} from 'react-native';
import {useLocalization} from '../localization/useLocalization';
import Theme from '../utils/theme';
import Artwork from '../assets/icons/Artwork.svg';
import FilledHeart from '../assets/icons/FilledHeart.svg';

const Stack = createNativeStackNavigator<NavigatorParamsList>();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.GalleryScreen}
        component={GalleryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ArtworkDetail}
        component={ArtworkDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Favorites}
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ArtworkDetail}
        component={ArtworkDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export const Navigator = () => {
  const {t} = useLocalization();
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? Theme.dark : Theme.light}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({_, color, size}) => {
            if (route.name === Routes.GalleryStack) {
              return <Artwork width={size} height={size} fill={color} />;
            } else if (route.name === Routes.FavoritesStack) {
              return <FilledHeart width={size} height={size} fill={color} />;
            }
          },
        })}>
        <Tab.Screen
          name={Routes.GalleryStack}
          component={HomeNavigator}
          options={{title: 'Artworks', headerShown: false}}
        />
        <Tab.Screen
          name={Routes.FavoritesStack}
          component={FavoritesNavigator}
          options={{title: t['tabs.favorites'], headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
