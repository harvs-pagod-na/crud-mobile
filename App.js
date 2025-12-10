import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "./src/components/Header";
import TaskForm from "./src/components/TaskForm";
import TaskList from "./src/components/TaskList";
import FilterBar from "./src/components/FilterBar";
import EditModal from "./src/components/EditModal";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); // All, Completed, Pending
  const [darkMode, setDarkMode] = useState(false);
  const [editTask, setEditTask] = useState(null);

  // Load tasks and theme from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      const storedTasks = await AsyncStorage.getItem("tasks");
      const storedTheme = await AsyncStorage.getItem("darkMode");
      if (storedTasks) setTasks(JSON.parse(storedTasks));
      if (storedTheme) setDarkMode(JSON.parse(storedTheme));
    };
    loadData();
  }, []);

  // Save tasks and theme
  useEffect(() => {
    AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    AsyncStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [tasks, darkMode]);

  // CRUD operations
  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  const updateTask = (id, text) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text } : t)));

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
  });

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1F2937" : "#F3F4F6" },
      ]}
    >
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TaskForm addTask={addTask} darkMode={darkMode} />
      <FilterBar filter={filter} setFilter={setFilter} darkMode={darkMode} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setEditTask={setEditTask}
        darkMode={darkMode}
      />
      <EditModal
        editTask={editTask}
        setEditTask={setEditTask}
        updateTask={updateTask}
        darkMode={darkMode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
});
