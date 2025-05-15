# Lecture Guide: React Native Ecosystem

## TOPIC 1: React Native

- **Why** (10 min)
  - Developing device specific apps is hard!
  - There are 2 competing platforms
    - iOS
    - Android
  - They have completely different SDKs and languages
    - Android: Java (a google variant)
    - iOS: Cocoa, Objective-C, and now Swift
  - Creating an app for both devices means maintaining 2 codebases
    - Not scalable
    - Not Easy
    - Not Cheap
- **What** (30 min)
  - Enter React Native and other similar frameworks
    - [Flutter](https://flutter.dev/)
    - [Xamarin](https://dotnet.microsoft.com/apps/xamarin)
  - Pros
    - Platform independent code (your code runs the same on all devices)
    - Easy to style
    - Comfort in using the languages and patterns you already know
    - Output is mostly device native components
    - Uses the device hardware and user settings
  - Cons
    - Limitations
      - Performance (they are native, but not machine language native like the core dev-kits)
      - Access
        - Some device specific things need to be coded in the native languages and "hooked into)
  - What is a "native" component
    - Consider this [`<input type="color">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
      - You code this in an HTML file. The browser sees it, interprets it, and then renders it they way that it sees fit.
        - Windows and Mac users see different color pickers
    - Devices work the same way. Users are very used to the way their phone buttons, select lists, dates, etc look and feel.
    - Native frameworks tap into that commonality so you don't have to.
    - Also, because things like buttons, fonts, choosers are part of the device itself, using them is extremely fast, and makes your application smaller because it can use what's already there.
- **How** (60-90 min)
  - Run an interactive demo that showcases the core concepts
    - Installing Expo
    - Creating a basic application scaffold
    - Writing, running, debugging the most basic of applications using Expo
    - Using the Expo documentation to tap into permissions for device features
    - Print a list of contacts
- **Experimentation and Discovery Ideas**
  - Open a discussion on what devices can do that your normal browser can't

## React Native Ecosystem

- What is native development?
- Why is it important to develop a native app vs a responsive react app?
- It's still just state and components
  - But no HTML or CSS
  - You can still "style" things, but within the rules

## Expo

- Expo Is the dev environment
- Snack is an online sandbox
- expo-cli is the local equivalent to create-react-app (you can eject)
- Running locally, you can use your own device or the official simulator
  - Only Apple users can test iPhones
  - Anyone can test android, but you need to start up the ADB from Android Studio

## Demo

A large part of this initial lecture is going to be demo based. Not necessarily code, but you'll need to open up XCode, Android Studio, Expo's website (snack) and download & install expo-cli

The students will easily grasp coding in React Native. What'll take them some time to get stable with is the development environments and workflows.
