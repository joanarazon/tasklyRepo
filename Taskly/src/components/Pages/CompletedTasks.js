import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTheme } from "./ThemeContext";

function CompletedTasks({ route, navigation }) {
  // Extract completed tasks and onDelete function from route params
  const { completedTasks: initialCompletedTasks = [], onDelete } =
    route.params || {};

  // Get theme mode (dark or light) from ThemeContext
  const { isDarkMode } = useTheme();

  // State to manage the list of completed tasks
  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  // Function to handle deleting a task
  const handleDelete = (id) => {
    if (typeof onDelete === "function") {
      onDelete(id); // Call the passed onDelete function
    }
    // Remove the deleted task from the local state
    setCompletedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Function to render each completed task item
  const renderCompletedTask = ({ item, index }) => (
    <View
      style={[
        styles.roundedBox,
        { backgroundColor: isDarkMode ? "#444" : "#FFFFFF" },
      ]}
    >
      <View
        style={[
          styles.innerTextBox,
          { backgroundColor: isDarkMode ? "#555" : "#B3B7EE" },
        ]}
      >
        <Text
          style={[
            styles.taskTitleText,
            { color: isDarkMode ? "#DDD" : "#FFFFFF" },
          ]}
          numberOfLines={2} // Limit text to two lines
          adjustsFontSizeToFit // Adjust text size to fit within the box
        >
          {item.title}
        </Text>
      </View>

      {/* Button to delete task */}
      <TouchableOpacity
        style={styles.trashIconContainer}
        onPress={() => handleDelete(item.id)}
      >
        <Image
          source={require("../../assets/trash.png")} // Trash icon image
          style={styles.trashIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#222" : "#B3B7EE" },
      ]}
    >
      {/* Display message if there are no completed tasks */}
      {completedTasks.length === 0 ? (
        <Text
          style={[styles.noTasksText, { color: isDarkMode ? "#AAA" : "#888" }]}
        >
          No completed tasks yet!
        </Text>
      ) : (
        <FlatList
          data={completedTasks} // Provide completed tasks data
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : `task-${index}`
          }
          renderItem={renderCompletedTask} // Function to render each task
          contentContainerStyle={styles.completedTaskList}
        />
      )}
    </View>
  );
}

export default CompletedTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noTasksText: {
    fontSize: 18,
  },
  completedTaskList: {
    padding: 20,
  },
  roundedBox: {
    width: 320,
    height: 80,
    borderRadius: 15,
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 1,
  },
  innerTextBox: {
    width: 210,
    height: 50,
    right: 40,
    backgroundColor: "#B3B7EE",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
  taskTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
  },
  trashIconContainer: {
    position: "absolute",
    right: 51,
    top: 29,
  },
  trashIcon: {
    width: 25,
    height: 26,
  },
});
