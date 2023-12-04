import React, {useEffect} from 'react';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {Navigator} from './navigation/Navigator';
import {LocalizationProvider} from './localization/Localization';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export default function App(): JSX.Element {
  async function requestIOSUserPermission() {
    // iOS permissions request
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    if (Platform.OS === 'ios') {
      requestIOSUserPermission();
    } else {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <LocalizationProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </LocalizationProvider>
  );
}
