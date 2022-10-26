import React from "react";



import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CheckoutStack = createNativeStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator>
    <CheckoutStack.Screen 
    name="Checkout" 
    component={ CheckoutScreen } 
    options={{ headerShown: false }} 
    />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={ CheckoutSuccessScreen }
      options={{ headerShown: false }}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={ CheckoutErrorScreen }
      options={{ headerShown: false }}
    />
  </CheckoutStack.Navigator>
);