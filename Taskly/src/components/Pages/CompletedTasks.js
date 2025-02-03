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
  const { completedTasks: initialCompletedTasks = [], onDelete } =
    route.params || {};
  const { isDarkMode } = useTheme();

  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  const handleDelete = (id) => {
    if (typeof onDelete === "function") {
      onDelete(id);
    }
    setCompletedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

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
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {item.title}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.trashIconContainer}
        onPress={() => handleDelete(item.id)}
      >
        <Image
          source={require("../../assets/trash.png")}
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
      {completedTasks.length === 0 ? (
        <Text
          style={[styles.noTasksText, { color: isDarkMode ? "#AAA" : "#888" }]}
        >
          No completed tasks yet!
        </Text>
      ) : (
        <FlatList
          data={completedTasks}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : `task-${index}`
          }
          renderItem={renderCompletedTask}
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
