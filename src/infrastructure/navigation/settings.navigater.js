import React from "react";


import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";


const SettingsStack = createNativeStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      options={{
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={ SettingsScreen }
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        options={{ headerShown: true }}
        name="Favourites"
        component={ FavouritesScreen }
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="Camera"
        component={ CameraScreen }
      />
    </SettingsStack.Navigator>
  );
};