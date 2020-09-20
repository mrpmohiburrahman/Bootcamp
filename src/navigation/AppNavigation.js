import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/app/Home/Home";
import Bookmark from "../screens/app/Bookmark/Bookmark";
import Profile from "../screens/app/Profile/Profile";
import Create from "../screens/app/Create/Create";
import { Images } from "../theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? Images.homeActive : Images.homeInactive;
          } else if (route.name === "Bookmark") {
            iconName = focused ? Images.heartActive : Images.heartInactive;
          } else if (route.name === "Profile") {
            iconName = focused ? Images.profileActive : Images.profileInactive;
          } else if (route.name === "Create") {
            iconName = Images.add;
          }

          return (
            <Image
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
              source={iconName}
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  );
}
