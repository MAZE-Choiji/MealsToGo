import React from "react"
import { Text, View } from "react-native"
// import { createStackNavigator } from "@react-navigation/stack"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen } from "../../features/account/screens/account.screen"
import { RegisterScreen } from "../../features/account/screens/register.screen"
import { LoginScreen } from "../../features/account/screens/login.screen"
const Stack = createNativeStackNavigator()

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={ AccountScreen }
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={ LoginScreen }
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="Register"
      component={ RegisterScreen }
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)