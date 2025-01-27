import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tasks from "./src/components/Tasks";
import CompletedTasks from "./src/components/CompletedTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
