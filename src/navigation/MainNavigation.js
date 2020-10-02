import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../theme/";
import SplashScreen from "../screens/SplashScreen";
// import AsyncStorage from "@react-native-community/async-storage";
import { Root } from "native-base";
import AuthNav from "./AuthNavigation";
import AppNav from "./AppNavigation";
import { Platform } from "react-native";
import FlashMessage from "react-native-flash-message";
import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

export default function MainNavigation() {
  // const [userToken, setUserToken] = useState(null);
  // const isLoading = false;
  // const {a} = useContext(AuthContext)

  const {state, authContext} = useContext(AuthContext)
  const {isLoading,userToken} = state
  return (
    <Root>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={Colors.primary}
            barStyle={
              Platform.OS === "android" ? "light-content" : "dark-content"
            }
          />

          <Stack.Navigator>
            { userToken === null ? ( // there is no user token, logged out user
              <Stack.Screen name="Auth" component={AuthNav} options={{ headerShown: false }} />
            ) : (
              // the user is already logged in
              <Stack.Screen
                name="App"
                component={AppNav}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Root>
  );
}
