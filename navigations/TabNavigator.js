import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Help from "../screens/Help";
//import firebase from "firebase";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => { 
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Help") {
              iconName = focused ? "call" : "call-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },

        })}

        tabBarOptions={{
          activeTintColor:"#ee8249",
        inactiveTintColor:"gray"}}
        
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Help" component={Help} />
      </Tab.Navigator>
    );
  }


const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
export default BottomTabNavigator;
