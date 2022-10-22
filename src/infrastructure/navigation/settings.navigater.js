import React from "react";



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";


const SettingsStack = createNativeStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      // headerMode="screen"
      // screenOptions={{
      //   CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={ SettingsScreen }
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="Favourites"
        component={ FavouritesScreen }
      />
    </SettingsStack.Navigator>
  );
};