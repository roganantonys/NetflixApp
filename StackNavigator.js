import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import PlansScreen from "./screens/PlansScreen.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import Homescreen from "./screens/Homescreen.js";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Plans" component={PlansScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen}/>
        <Stack.Screen name="Home" component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
