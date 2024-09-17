import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login/login";
import { AddPetScreen } from "../screens/addPet/addPet";
import RegisterScreen from "../screens/register/register";
import React from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AddPet: undefined;
};

export function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      {/* <Stack.Screen name="AddPet" component={AddPetScreen} /> */}
    </Stack.Navigator>
  );
}
