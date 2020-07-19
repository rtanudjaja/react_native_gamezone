import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header title="About GameZone" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
