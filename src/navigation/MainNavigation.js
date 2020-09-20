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

const Stack = createStackNavigator();

export default function MainNavigation() {
  const [userToken, setUserToken] = useState(null);
  const isLoading = false;

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
            {isLoading ? ( // checking user token
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : userToken === null ? ( // there is no user token, logged out user
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
    </Root>
  );
}
