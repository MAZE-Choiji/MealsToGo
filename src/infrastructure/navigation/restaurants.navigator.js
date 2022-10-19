import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import  { RestaurantsScreen }  from "../../features/restaurants/screens/restaurants.screen";

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
        component={ () => <Text>Restaurant Detail</Text> }
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};