import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Login from './screens/login'
import Home from './screens/home'
import SignUp from './screens/signup'
import Motivation from './screens/mainpage'
export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Home: {screen: Home},
  Login:{screen: Login},
  Motivation:{screen:Motivation},
  SignUp:{screen:SignUp}
})

const AppContainer =  createAppContainer(switchNavigator);
