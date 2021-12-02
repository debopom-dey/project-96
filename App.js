import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Help from "./screens/Help";
import TabNavigator from "./navigations/TabNavigator" 
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
 

 

export default function App() {
  return (
    <NavigationContainer>
    <TabNavigator />
    </NavigationContainer>
  )
}