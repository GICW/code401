# DEMOS - React Native Ecosystem

## Installation

### Requirements

- React version 16.8 or higher.

### Steps

1. Follow the instructions for initializing an application with [Expo](https://docs.expo.dev).
1. Install third party dependencies.
    - `cd` into recently initialized Expo Application root directory.
    - Run `expo install expo-contacts`.
    - Libraries
      - [Expo Contacts](https://docs.expo.dev/versions/latest/sdk/contacts/)
1. Replace the `App.js` file created for you by Expo CLI, with the `App.js` file provided in the demo folder.

This demo will result in a voting application that showcases a few core features that are similar to what students will be executing in their lab assignment.

## Device Demo - `demo/rna-demo`

This demo gets permission and reads the contact list from a phone

- Perform an install of expo-cli for the class `npm install -g expo-cli`
- Initialize an app `expo init demo-app`
- Start coding an app that fetches contacts from the phone and prints them on screen
  - This is done as a standard React App, using Hooks
  - Note that for the "phone" features (Permissions and Contacts) we tap into the expo libraries
  - React Native Apps use `css-in-js` objects for styling
  - Everything is a flex container to make it easy.
- Note that the cli creates a web dashboard for you and also allows for a QR code to launch the app on a device.
  - Demonstrate "shaking" the phone to get the dev menu
  - Demonstrate that you can use your browser's console to see console logs (Remote Debugging Feature) to assist in development
- Fun to get the whole class to download your app and run it on their phone - they should see their own contacts

### Emulators

While they work and can be relatively fast during development, Emulators are not actual devices. There's been memory and networking issues. So, it's good to demonstrate the "How" on these, but guide the students into using actual devices for live development.

#### iPhone

On a mac, you can emulate an iPhone natively by choosing that option in the Expo window when your app is running. This is not possible from a Windows Computer.

#### Android

On either Mac or PC, you can download and install an IDE called Android Studio which includes a number of emulators. You'll need to create what's called an "ADB" where you can choose the device hardware and version of the Android OS.

Once you've done that, you can then choose Android as an emulator target.
