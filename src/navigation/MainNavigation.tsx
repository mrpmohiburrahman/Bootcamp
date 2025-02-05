import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../theme";
import SplashScreen from "../screens/SplashScreen";
import { Root } from "native-base";
import AuthNav from "./AuthNavigation";
import AppNav from "./AppNavigation";
import { Platform } from "react-native";
import FlashMessage from "react-native-flash-message";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function MainNavigation() {
  // const [userToken, setUserToken] = useState(null);
  // const isLoading = false;
  // const {a} = useContext(AuthContext)

  const { state, authContext } = useContext(AuthContext);
  const { isLoading, userToken } = state;

  useEffect(() => {
    bootstrap();
  }, []);
  const bootstrap = async () => {
    try {
      let token;
      token = await AsyncStorage.getItem("userToken");
      authContext.restoreToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Root>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={Colors.primary}
            style={Platform.OS === "android" ? "light" : "dark"}
          />

          <Stack.Navigator>
            <Stack.Screen
              name="App"
              component={AppNav}
              options={{ headerShown: false }}
            />
            {/* {isLoading ? (
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : userToken === null ? ( // there is no user token, logged out user
              <Stack.Screen
                name="Auth"
                component={AuthNav}
                options={{ headerShown: false }}
              />
            ) : (
              // the user is already logged in
              <Stack.Screen
                name="App"
                component={AppNav}
                options={{ headerShown: false }}
              />
            )} */}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Root>
  );
}
