import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  { RestaurantsScreen }  from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator >
      <RestaurantStack.Screen
        name="Restaurant"
        component={ RestaurantsScreen }
        options={{ headerShown: false }}
      />
       <RestaurantStack.Screen
        name="RestaurantDetail"
        component={ RestaurantDetailScreen }
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};