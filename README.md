# Modak test

This test implements a simple app that fetches information from an API and displays it in a list. Every item in the list can be clicked to display more information about it. Finally, the app provides a way to save the information locally to be able to access it offline. The app was developed thinking first in interesting features and best practices, the UI was not a priority 😅.

### Here some of the information on the implemented features

- ⁠State management: redux, redux-toolkit

- ⁠Environment variables: react-native-config

- ⁠Localization: react-native-localization

- ⁠Dark theme: injected using navigator
- Simple animation: react-native-reanimated
- ⁠Notifications: firebase cloud messaging, basic set up using Alerts for foreground notifications and setBackgroundMessageHandler for background notifications (Android working so far since I couldn't get the APN key for iOS from my personal Apple Connect account)

### Steps for running:

- ⁠Environment:node 18.17.0, react native 0.72.7

- ⁠Create .env file in root directory and set the variables provided in the email
- ⁠Run yarn start in one terminal
- ⁠Run yarn ios --simulator="iPhone 15 Pro" in another terminal
- ⁠Run yarn android in another terminal
