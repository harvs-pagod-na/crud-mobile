import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskForm = ({ addTask, darkMode }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text) return;
    const newTask = { id: Date.now().toString(), text, completed: false };
    addTask(newTask);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: darkMode ? "#374151" : "#fff", color: darkMode ? "#fff" : "#000" },
        ]}
        placeholder="Add new task"
        placeholderTextColor={darkMode ? "#9CA3AF" : "#6B7280"}
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleSubmit} color="#4F46E5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 8, marginRight: 10 },
});

export default TaskForm;
