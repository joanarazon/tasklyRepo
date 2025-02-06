import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Provides navigation context for the app
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Enables stack-based navigation
import Tasks from "./src/components/Pages/Tasks"; // Main screen where users manage tasks
import CompletedTasks from "./src/components/Pages/CompletedTasks"; // Screen to view completed tasks

// Create a stack navigator to manage screen transitions
const Stack = createNativeStackNavigator();

/**
 * App component serves as the root component.
 * It sets up navigation between the Tasks and CompletedTasks screens.
 */
export default function App() {
  return (
    <NavigationContainer>
      {/* Manages navigation state and linking */}
      <Stack.Navigator initialRouteName="Tasks">
        {/* Defines navigation stack and sets "Tasks" as the initial screen */}
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: false }} // Hide header for a clean UI
        />
        <Stack.Screen
          name="CompletedTasks"
          component={CompletedTasks}
          options={{ headerShown: false }} // Hide header for a clean UI
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
