import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const TaskItem = ({ task, deleteTask, toggleComplete, setEditTask, darkMode }) => {
  return (
    <View style={[styles.task, { backgroundColor: darkMode ? "#374151" : "#fff" }]}>
      {/* Task text */}
      <TouchableOpacity onPress={() => toggleComplete(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.text, task.completed && styles.completed, { color: darkMode ? "#fff" : "#000" }]}>
          {task.text}
        </Text>
      </TouchableOpacity>

      {/* Edit button */}
      <TouchableOpacity onPress={() => setEditTask(task)}>
        <Text style={styles.edit}>✏️</Text>
      </TouchableOpacity>

      {/* Mark Completed button (only if not completed) */}
      {!task.completed && (
        <TouchableOpacity onPress={() => toggleComplete(task.id)}>
          <Text style={styles.complete}>✅</Text>
        </TouchableOpacity>
      )}

      {/* Delete button */}
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  text: { fontSize: 16 },
  completed: { textDecorationLine: "line-through", color: "#9CA3AF" },
  edit: { fontSize: 18, marginLeft: 10 },
  complete: { fontSize: 18, marginLeft: 10 }, // ✅ Mark Completed button
  delete: { fontSize: 18, marginLeft: 10 },
});

export default TaskItem;
