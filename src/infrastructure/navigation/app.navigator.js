import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";




import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigater";
import { colors } from "../theme/colors";
import { CartContextProvider } from "../../services/cart/cart.context";
import { CheckoutNavigator } from "./checkout.navigator";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Checkout: "md-cart",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
  <LocationContextProvider>
    <RestaurantsContextProvider>
      <CartContextProvider>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: colors.brand.primary,
          inactiveTintColor: colors.brand.muted,
        }}
      >
        <Tab.Screen name="Restaurants" component={ RestaurantsNavigator } options={{headerShown:false}}/>
        <Tab.Screen name="Checkout" component={ CheckoutNavigator } />
        <Tab.Screen name="Map" component={ MapScreen } />
        <Tab.Screen name="Settings" component={ SettingsNavigator } options={{headerShown:false}}/>
      </Tab.Navigator>
      </CartContextProvider>
    </RestaurantsContextProvider>
  </LocationContextProvider>
</FavouritesContextProvider>
)