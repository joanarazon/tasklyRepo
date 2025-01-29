import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tasks from "./src/components/Pages/Tasks";
import CompletedTasks from "./src/components/Pages/CompletedTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: false }} // Hide header for Tasks screen
        />
        <Stack.Screen
          name="CompletedTasks"
          component={CompletedTasks}
          options={{ headerShown: false }} // Hide header for CompletedTasks screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
